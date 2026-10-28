/* Login page (design only for now: sign-in is not connected yet). */
const WHATSAPP = "916382707034";
const $ = s => document.querySelector(s);
const root = document.documentElement;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- light / dark theme (same behaviour as the shop page) ---------- */
const themeBtn = $("#themeBtn");
function syncThemeButton() {
  const dark = root.dataset.theme === "dark";
  themeBtn.setAttribute("aria-pressed", dark);
  themeBtn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  $('meta[name="theme-color"]').content = dark ? "#121120" : "#faf8f5";
}
function applyTheme(theme) {
  root.dataset.theme = theme;
  try { localStorage.setItem("theme", theme); } catch {}
  syncThemeButton();
}
themeBtn.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.classList.add("no-trans");
  if (!document.startViewTransition || reduceMotion) {
    applyTheme(next);
    requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove("no-trans")));
    return;
  }
  const r = themeBtn.getBoundingClientRect();
  const x = r.left + r.width / 2, y = r.top + r.height / 2;
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  const vt = document.startViewTransition(() => applyTheme(next));
  vt.ready.then(() => root.animate(
    { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
    { duration: 650, easing: "cubic-bezier(.4, 0, .2, 1)", pseudoElement: "::view-transition-new(root)" }
  )).catch(() => {});
  vt.finished.finally(() => root.classList.remove("no-trans"));
  setTimeout(() => { if (root.dataset.theme !== next) applyTheme(next); root.classList.remove("no-trans"); }, 300);
});
syncThemeButton();

/* ---------- phone number ---------- */
const phone = $("#phone"), field = $("#phoneField"), help = $("#phoneHelp");
const digits = () => phone.value.replace(/\D/g, "");
// type freely; shown as "98765 43210"
phone.addEventListener("input", () => {
  const d = digits().slice(0, 10);
  phone.value = d.length > 5 ? `${d.slice(0, 5)} ${d.slice(5)}` : d;
  field.classList.remove("invalid");
  field.classList.toggle("valid", /^[6-9]\d{9}$/.test(d));
  help.textContent = "10-digit mobile number";
  help.classList.remove("error");
});

function shake(el) {
  el.classList.remove("shake");
  void el.offsetWidth;
  el.classList.add("shake");
}

$("#phoneForm").addEventListener("submit", e => {
  e.preventDefault();
  const d = digits();
  if (!/^[6-9]\d{9}$/.test(d)) {
    field.classList.add("invalid");
    help.textContent = d.length < 10 ? "Please enter all 10 digits of your mobile number." : "Indian mobile numbers start with 6, 7, 8 or 9.";
    help.classList.add("error");
    shake(field);
    phone.focus();
    return;
  }
  // Sign-in isn't connected yet: no code is sent. Explain and offer WhatsApp instead.
  $("#phoneForm").hidden = true;
  $(".auth-legal").hidden = true;
  $("#soonNote").hidden = false;
  $("#waNow").href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Buymo! I'd like to place a bulk order. Please let me know when customer accounts are ready.")}`;
  $("#waNow").focus();
});

requestAnimationFrame(() => root.classList.add("ready"));
