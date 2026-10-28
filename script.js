/* =========================================================
   STORE DETAILS: edit these and the whole site updates.
   whatsapp: country code + number, digits only (e.g. "919876543210").
   address: leave empty to hide the Address line.
   ========================================================= */
const STORE = {
  name: "Buymo",
  whatsapp: "916382707034",
  phone: "+91 63827 07034",
  address: "",
  hours: "Mon–Sat · 10:00 AM – 9:00 PM",
};

/* Offer banners at the top of the page. `cat` is the category the button opens. */
const OFFERS = [
  { badge: "Festive season", title: "Christmas Collection is in", text: "LED trees, snowmen and fibre-optic décor. Book your cartons early for the season.", img: "images/xmas-snowman.jpg", cat: "christmas" },
  { badge: "New arrival", title: "Smart LED Flasks", text: "Touch the lid to see the temperature. Plus rope, floral and printed steel bottles.", img: "images/flask-smart-black.jpg", cat: "bottles" },
  { badge: "Just landed", title: "Lamps & Outdoor Lights", text: "Solar garden posts, 30W wall lights, lanterns and table lamps.", img: "images/light-solar-garden-pole.jpg", cat: "lights" },
  { badge: "Bestseller", title: "Character Keychains", text: "Anime, superhero, panda and unicorn designs in 50 pcs packs.", img: "images/keychain-anime.jpg", cat: "keychains" },
];

const CATEGORIES = [
  { id: "christmas", label: "Christmas",        cover: "images/xmas-snowman.jpg" },
  { id: "lights",    label: "Lamps & Décor",    cover: "images/light-solar-garden-pole.jpg" },
  { id: "bottles",   label: "Bottles & Flasks", cover: "images/bottle-printed-mini.jpg" },
  { id: "keychains", label: "Keychains",        cover: "images/keychain-anime.jpg" },
  { id: "toys",      label: "Toys",             cover: "images/toy-kitty-figure.jpg" },
  { id: "hair",      label: "Hair & Jewellery", cover: "images/hair-peacock.jpg" },
  { id: "kitchen",   label: "Kitchen",          cover: "images/kitchen-knife-set.jpg" },
  { id: "car",       label: "Car Accessories",  cover: "images/car-fragrance.jpg" },
];

/* imgs: first photo is the main one. new: shows in New arrivals. */
const PRODUCTS = [
  { id: "kc-unicorn",  cat: "keychains", name: "Rainbow Unicorn Keychain",  imgs: ["images/keychain-unicorn.jpg"],     pack: "50 pcs pack", tag: "Bestseller", desc: "Rubber unicorn charm with printed silicone strap. Purple, white, blue and pink." },
  { id: "kc-anime",    cat: "keychains", name: "Anime Slayer Keychain",      imgs: ["images/keychain-anime.jpg"],       pack: "50 pcs pack", tag: "Bestseller", desc: "Detailed anime character figures with flame-print silicone straps." },
  { id: "kc-spidey",   cat: "keychains", name: "Spider-Man Keychain",        imgs: ["images/keychain-spiderman.jpg"],   pack: "50 pcs pack", tag: "Bestseller", desc: "Four poses including the headphone and hoodie styles, red strap." },
  { id: "kc-panda",    cat: "keychains", name: "Panda Baby Keychain",        imgs: ["images/keychain-panda.jpg"],       pack: "50 pcs pack", desc: "Waving panda in a vest with matching strap. Red, blue and black." },
  { id: "kc-batman",   cat: "keychains", name: "Batman Keychain",            imgs: ["images/keychain-batman.jpg"],      pack: "50 pcs pack", desc: "Caped hero figure in blue, silver and black with a printed strap." },
  { id: "kc-glossy",   cat: "keychains", name: "Glossy Bear & Cat Keychain", imgs: ["images/keychain-glossy-pets.jpg"], pack: "Bulk pack",   desc: "Pearlescent chunky bear and cat charms on gold rings." },

  { id: "toy-kitty",   cat: "toys", name: "Kitty Love Figure (JLR-21)",      imgs: ["images/toy-kitty-figure.jpg", "images/toy-kitty-bulk.jpg"], pack: "Bulk carton", desc: "Pink-bow kitty holding a LOVE heart. Individually packed with strap, sold by the carton." },
  { id: "toy-bunny",   cat: "toys", name: "Sleepy Bunny Squishy",            imgs: ["images/toy-bunny.jpg"],            pack: "Bulk carton", desc: "Soft-touch white bunny with flower detail. Individually packed." },
  { id: "toy-unicorn", cat: "toys", name: "Unicorn Night Light",             imgs: ["images/toy-unicorn-lamp.jpg"],     pack: "Bulk carton", desc: "Pink-and-white unicorn that lights up. Individually packed." },

  { id: "hair-claw",   cat: "hair", name: "Assorted Claw Clip Tray",         imgs: ["images/hair-claw-basket.jpg", "images/hair-claw-zanzee.jpg", "images/hair-claw-mix.jpg"], pack: "48 pcs tray", desc: "Daisy, square, heart and classic claw clips in matte, clear and frosted finishes. Comes in a reusable basket." },
  { id: "hair-peacock",cat: "hair", name: "Peacock Heart Clips",             imgs: ["images/hair-peacock.jpg"],         pack: "24 pcs box",  desc: "Gold-tone heart clips with painted peacock and swan art." },
  { id: "hair-pearl",  cat: "hair", name: "Pearl Flower Mini Clips",         imgs: ["images/hair-pearl.jpg"],           pack: "24 pcs box",  desc: "Black mini claws with pearl cluster and rhinestone trim." },
  { id: "hair-anmor",  cat: "hair", name: "Anmor Square Clips",              imgs: ["images/hair-anmor.jpg"],           pack: "24 pcs box",  desc: "Jelly-rim square clips in black and bright colours." },
  { id: "ear-cards",   cat: "hair", name: "Fashion Earring Cards",           imgs: ["images/earrings-display.jpg"],     pack: "12 pcs card", desc: "Studs, swirls, pearl bows and ballerina drops on hanging cards." },

  { id: "bot-smart",   cat: "bottles", name: "Smart LED Flask 500 ml",       imgs: ["images/flask-smart-black.jpg", "images/flask-smart-white.jpg"], pack: "Bulk carton", new: true, desc: "Touch the lid to see drink temperature. 304 stainless steel, hot & cold, leak-proof. Black and white." },
  { id: "bot-rope",    cat: "bottles", name: "Rope Bottle 500 ml",           imgs: ["images/bottle-rope.jpg"],          pack: "50 pcs carton", tag: "5 colours", new: true, desc: "Double-wall stainless steel with rope handle. Blue, black, rose gold, silver and gold." },
  { id: "bot-floral",  cat: "bottles", name: "Plan Floral Mini Bottle 300 ml", imgs: ["images/bottle-plan-floral.jpg"], pack: "Bulk carton", new: true, desc: "Insulated mini bottle with steel cap and carry ring. Seven pastel and bold colours." },
  { id: "bot-printed", cat: "bottles", name: "Printed Mini Bottle",          imgs: ["images/bottle-printed-mini.jpg"],  pack: "Bulk carton", tag: "In stock", new: true, desc: "Insulated mini bottles in peacock, rose, butterfly and blue-porcelain prints." },

  { id: "kit-knife",   cat: "kitchen", name: "Knife & Chopping Board Set",   imgs: ["images/kitchen-knife-set.jpg"],    pack: "Per set",   desc: "Board, chef knife, two utility knives and kitchen scissors." },
  { id: "kit-grinder", cat: "kitchen", name: "Nima Electric Grinder NM-8300", imgs: ["images/kitchen-grinder.jpg"],     pack: "Per piece", desc: "300W, stainless steel bowl, metal blade. Coffee, spices, dry masala." },

  { id: "lt-garden",   cat: "lights", name: "Solar Garden Pole Light (MG)",  imgs: ["images/light-solar-garden-pole.jpg"], pack: "Per piece", tag: "Solar", new: true, desc: "Solar-charged lawn post with pleated pendant lamp and LED side strip. For gardens and pathways." },
  { id: "lt-crystal",  cat: "lights", name: "Crystal Wall Light (ZTD-30W)",  imgs: ["images/light-crystal-wall.jpg"],    pack: "Per piece", new: true, desc: "30W wall lamp with diamond-cut glass shade and warm glow. For gates, porches and compound walls." },
  { id: "lt-lantern",  cat: "lights", name: "Lantern Wall Light (MJ-30W)",   imgs: ["images/light-lantern-wall.jpg"],    pack: "Per piece", new: true, desc: "30W lantern-style wall lamp with filament-look bulb and black metal frame." },
  { id: "lt-hanging",  cat: "lights", name: "Hanging LED Lantern (YDD)",     imgs: ["images/light-hanging-lantern.jpg"], pack: "Per piece", tag: "3 modes", new: true, desc: "Pleated-shade lantern with hook. Full, half and flash modes for camping, balconies and décor." },
  { id: "lt-table",    cat: "lights", name: "Pleated Table Lamp (YD-CK01)",  imgs: ["images/light-pleated-table-lamp.jpg"], pack: "Per piece", new: true, desc: "Bedside lamp with pleated metal shade and soft warm light." },
  { id: "dec-lotus",   cat: "lights", name: "Crystal Lotus LED Candle",      imgs: ["images/decor-lotus-candle.jpg"],    pack: "6 pcs box",  desc: "Flameless LED tealight in an acrylic lotus. Smokeless and safe for pooja and décor." },
  { id: "dec-tealight",cat: "lights", name: "LED Tealight Set",              imgs: ["images/decor-tealight.jpg"],        pack: "24 pcs set", desc: "Crystal-cut flameless tealights for pooja, parties and décor." },

  { id: "xm-snowman",  cat: "christmas", name: "LED Snowman (MAA 290 Z)",    imgs: ["images/xmas-snowman.jpg"],          pack: "300 pcs carton", new: true, desc: "6\" glowing crystal snowman with knitted striped hat and scarf. Gift boxed." },
  { id: "xm-star",     cat: "christmas", name: "Crystal Star Tree Lamp (MAA 290 G)", imgs: ["images/xmas-crystal-star-tree.jpg"], pack: "240 pcs carton", new: true, desc: "6\" LED crystal tree with star topper and warm glow. Gift boxed." },
  { id: "xm-spiral",   cat: "christmas", name: "Spiral Crystal Tree (MAA 290 L)", imgs: ["images/xmas-spiral-tree.jpg"],     pack: "480 pcs carton", new: true, desc: "4\" ribbed crystal tree with warm LED and star. Compact gift-boxed piece." },
  { id: "xm-fibre",    cat: "christmas", name: "Fibre-Optic Tree (MAA 290 M)", imgs: ["images/xmas-fibre-optic-tree.jpg"],  pack: "500 pcs carton", new: true, desc: "5.5\" fibre-optic tree with star that glows in changing colours. Gift boxed." },
  { id: "xm-acrylic",  cat: "christmas", name: "Colour-Change Tree 6\" (MAA6340-11)", imgs: ["images/xmas-acrylic-tree.jpg"], pack: "240 pcs carton", new: true, desc: "Acrylic Christmas tree with colour-changing LED base. Gift boxed." },
  { id: "xm-acrylic-l",cat: "christmas", name: "Colour-Change Tree 7.5\" (MAA6340-12)", imgs: ["images/xmas-acrylic-tree-large.jpg"], pack: "144 pcs carton", new: true, desc: "Larger acrylic Christmas tree with colour-changing LED base. Gift boxed." },

  { id: "car-heli",    cat: "car", name: "Solar Helicopter Car Fragrance",   imgs: ["images/car-fragrance.jpg", "images/car-fragrance-2.jpg"], pack: "Per piece", desc: "Carlax solar-powered rotor spreads fragrance evenly. Cologne scent." },
];

/* =========================================================
   PRICES (DEMO): [bulk order price per piece, MRP per piece] in ₹.
   Replace these with your real prices. Offer cards work out
   "From ₹…" and "Up to …% off" from this table automatically.
   ========================================================= */
const PRICES = {
  "kc-unicorn":  [18, 39],   "kc-anime":   [22, 49],   "kc-spidey":   [20, 45],
  "kc-panda":    [17, 39],   "kc-batman":  [20, 45],   "kc-glossy":   [24, 55],
  "toy-kitty":   [49, 99],   "toy-bunny":  [39, 79],   "toy-unicorn": [119, 249],
  "hair-claw":   [12, 29],   "hair-peacock": [19, 45], "hair-pearl":  [17, 39],
  "hair-anmor":  [14, 35],   "ear-cards":  [19, 49],
  "bot-smart":   [199, 499], "bot-rope":   [149, 349], "bot-floral":  [129, 299],
  "bot-printed": [149, 349],
  "kit-knife":   [179, 399], "kit-grinder": [549, 1199],
  "lt-garden":   [899, 1899], "lt-crystal": [499, 1099], "lt-lantern": [449, 999],
  "lt-hanging":  [199, 449], "lt-table":   [349, 749], "dec-lotus":   [35, 79],
  "dec-tealight": [19, 45],
  "xm-snowman":  [99, 229],  "xm-star":    [89, 199],  "xm-spiral":   [59, 139],
  "xm-fibre":    [69, 159],  "xm-acrylic": [109, 249], "xm-acrylic-l": [139, 299],
  "car-heli":    [249, 549],
};
PRODUCTS.forEach(p => {
  const [price, mrp] = PRICES[p.id] || [];
  const per = "pc";
  Object.assign(p, { price, mrp, per, off: price && mrp > price ? Math.round((1 - price / mrp) * 100) : 0 });
});


/* ---------- setup ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const byId = Object.fromEntries(PRODUCTS.map(p => [p.id, p]));
const catById = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));
const root = document.documentElement;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
const isMobile = () => matchMedia("(max-width: 760px)").matches;
const ARROW = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;

/* ---------- prices ---------- */
const inr = n => "₹" + Math.round(n).toLocaleString("en-IN");
// pieces in one order unit, when the price is per piece but we sell by the carton
const unitsIn = p => p.per === "pc" ? +((p.pack.match(/(\d+)\s*pcs/) || [])[1] || 1) : 1;
const orderUnit = p => unitsIn(p) > 1 ? p.pack.split(" ").pop() : p.per;
const plural = (n, word) => `${n} ${word}${n === 1 ? "" : word.endsWith("x") ? "es" : "s"}`;
// ", 50 pcs pack" for messages; nothing for single pieces
const packNote = p => /^Per /.test(p.pack) ? "" : `, ${p.pack.charAt(0).toLowerCase()}${p.pack.slice(1)}`;
// order unit spelled out for messages ("piece" rather than "pc")
const unitWord = p => ({ pc: "piece" })[orderUnit(p)] || orderUnit(p) || "pack";
function priceHTML(p) {
  if (!p.price) return "";
  return `<b>${inr(p.price)}<small>/${p.per}</small></b>${p.off ? `<s>${inr(p.mrp)}</s><em>${p.off}% off</em>` : ""}`;
}

function waLink(text) {
  const base = STORE.whatsapp ? `https://wa.me/${STORE.whatsapp}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(text)}`;
}

let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1900);
}

function bump(el, cls = "bump") {
  el.classList.remove(cls);
  void el.offsetWidth;
  el.classList.add(cls);
}

/* ---------- light / dark theme ---------- */
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
// The new theme spreads out in a circle from the button.
themeBtn.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  if (reduceMotion) {
    root.classList.add("no-trans");
    applyTheme(next);
    requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove("no-trans")));
    return;
  }
  if (!document.startViewTransition) {
    // older browsers: flip instantly (the sun/moon icon still turns)
    root.classList.add("no-trans");
    applyTheme(next);
    requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove("no-trans")));
    return;
  }
  const r = themeBtn.getBoundingClientRect();
  const x = r.left + r.width / 2, y = r.top + r.height / 2;
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  // colours must flip instantly underneath the circle, so pause hover/colour transitions
  root.classList.add("no-trans");
  const vt = document.startViewTransition(() => applyTheme(next));
  vt.finished.finally(() => root.classList.remove("no-trans"));
  // if the browser can't run the transition right now, still switch the theme
  setTimeout(() => {
    if (root.dataset.theme !== next) applyTheme(next);
    setTimeout(() => root.classList.remove("no-trans"), 50);
  }, 300);
  vt.ready.then(() => {
    root.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration: 650, easing: "cubic-bezier(.4, 0, .2, 1)", pseudoElement: "::view-transition-new(root)" }
    );
  }).catch(() => {});
});
// follow the device if the visitor hasn't picked a theme themselves
matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", e => {
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch {}
  if (!saved) { root.dataset.theme = e.matches ? "dark" : "light"; syncThemeButton(); }
});
syncThemeButton();

/* ---------- store details ---------- */
$$("[data-store]").forEach(el => {
  const key = el.dataset.store;
  if (STORE[key]) el.textContent = key === "phone" && el.classList.contains("btn") ? "Call us" : STORE[key];
  if (key === "phone") el.href = `tel:${STORE.phone.replace(/[^\d+]/g, "")}`;
});
$$("[data-store-row]").forEach(el => { el.hidden = !STORE[el.dataset.storeRow]; });
$("#year").textContent = new Date().getFullYear();

/* ---------- global clicks ---------- */
document.addEventListener("click", e => {
  const wa = e.target.closest("[data-wa]");
  if (wa) {
    e.preventDefault();
    window.open(waLink(wa.dataset.wa), "_blank", "noopener");
    return;
  }
  const go = e.target.closest("[data-cat-go]");
  if (go) {
    e.preventDefault();
    setCategory(go.dataset.catGo, true);
    return;
  }
  const step = e.target.closest("[data-step]");
  if (step) {
    changeQty(step.dataset.id, +step.dataset.step);
    return;
  }
  const add = e.target.closest("[data-add]");
  if (add) {
    addToCart(add.dataset.add, 1, add);
    return;
  }
  const qv = e.target.closest("[data-qv]");
  if (qv) openQuickView(qv.dataset.qv, qv);
});

/* ---------- footer categories ---------- */
$("#footerCats").innerHTML = CATEGORIES.map(c => `<li><a href="#catalogue" data-cat-go="${c.id}">${esc(c.label)}</a></li>`).join("");

/* ---------- ticker: duplicate items so the loop is seamless ---------- */
const ticker = $("#ticker");
ticker.innerHTML += ticker.innerHTML.replace(/<span>/g, '<span aria-hidden="true">');
const announce = $("#announce");
announce.innerHTML += announce.innerHTML.replace(/<span>/g, '<span aria-hidden="true">');

/* ---------- rotating word in the headline ---------- */
const ROTATE_WORDS = ["sells out", "kids love", "makes gifts", "fills shelves", "earns more"];
const rotator = $("#rotator");
let rotIndex = 0;
function setRotatorWidth(word) {
  rotator.style.width = `${word.getBoundingClientRect().width}px`;
}
function rotateWord() {
  const old = $(".rot-word.is-in", rotator) || $(".rot-word", rotator);
  rotIndex = (rotIndex + 1) % ROTATE_WORDS.length;
  const next = document.createElement("span");
  next.className = "rot-word is-in";
  next.textContent = ROTATE_WORDS[rotIndex];
  old.classList.remove("is-in");
  old.classList.add("is-out");
  old.addEventListener("animationend", () => old.remove(), { once: true });
  setTimeout(() => old.remove(), 600);
  rotator.append(next);
  setRotatorWidth(next);
}
{
  rotator.style.display = "inline-block";
  setRotatorWidth($(".rot-word", rotator));
  document.fonts?.ready.then(() => setRotatorWidth($(".rot-word.is-in", rotator) || $(".rot-word", rotator)));
  setInterval(() => { if (!document.hidden && root.classList.contains("ready")) rotateWord(); }, 2600);
}

/* ---------- offer showcase: 3D coverflow ---------- */
const showcase = $("#showcase"), slidesEl = $("#slides"), scBar = $("#scBar");
function offerPrice(cat) {
  const list = PRODUCTS.filter(p => p.cat === cat && p.price);
  if (!list.length) return "";
  const low = Math.min(...list.map(p => p.price));
  const best = Math.max(...list.map(p => p.off));
  return `<div class="sc-price"><b>From ${inr(low)}<small>/pc</small></b>${best ? `<span>Up to ${best}% off</span>` : ""}</div>`;
}
slidesEl.innerHTML = OFFERS.map((o, i) => `
  <article class="sc-slide" data-i="${i}" aria-roledescription="slide" aria-label="${i + 1} of ${OFFERS.length}: ${esc(o.title)}">
    <img src="${o.img}" alt="" draggable="false">
    <div class="sc-copy">
      <span class="sc-badge">${esc(o.badge)}</span>
      <h2>${esc(o.title)}</h2>
      <p>${esc(o.text)}</p>
      ${offerPrice(o.cat)}
      <span class="sc-cta">Shop now ${ARROW}</span>
    </div>
    <span class="sc-dim"></span>
  </article>`).join("");
scBar.innerHTML = OFFERS.map(o => `<button aria-label="Show ${esc(o.title)}"><i></i></button>`).join("");
const scSlides = $$(".sc-slide", slidesEl), scBtns = $$("button", scBar);
const SC_MAX_VISIBLE = 2;
let scIndex = 0;

// Autoplay runs on a timer, not on the progress-bar animation, so it stays steady
// even when the visitor's device has animations switched off.
const SLIDE_MS = 5500;
let scTimer = null, scStart = 0, scLeft = SLIDE_MS, scPaused = false;
function schedule(ms) {
  clearTimeout(scTimer);
  scStart = performance.now();
  scLeft = ms;
  if (!scPaused) scTimer = setTimeout(() => showSlide(scIndex + 1), ms);
}
function pauseSlides() {
  if (scPaused) return;
  scPaused = true;
  clearTimeout(scTimer);
  scLeft = Math.max(0, scLeft - (performance.now() - scStart));
  showcase.classList.add("paused");
}
function resumeSlides() {
  if (!scPaused) return;
  scPaused = false;
  showcase.classList.remove("paused");
  schedule(scLeft);
}

// Each card sits at its distance from the front card, wrapping around both ends.
function showSlide(i) {
  const n = scSlides.length;
  scIndex = ((i % n) + n) % n;
  scSlides.forEach((s, k) => {
    let rel = k - scIndex;
    if (rel > n / 2) rel -= n;
    if (rel < -n / 2) rel += n;
    const ax = Math.abs(rel);
    s.style.setProperty("--rel", rel);
    s.style.setProperty("--ax", ax);
    s.style.zIndex = 10 - ax;
    s.classList.toggle("active", rel === 0);
    s.classList.toggle("far", ax > SC_MAX_VISIBLE);
    s.setAttribute("aria-hidden", rel !== 0);
  });
  // re-adding the class restarts the progress animation from zero
  scBtns.forEach(b => b.classList.remove("active"));
  void scBar.offsetWidth;
  scBtns[scIndex].classList.add("active");
  scBtns.forEach((b, k) => b.setAttribute("aria-current", k === scIndex));
  schedule(SLIDE_MS);
}

// Front card opens its range; a side card comes to the front instead.
slidesEl.addEventListener("click", e => {
  const card = e.target.closest(".sc-slide");
  if (!card) return;
  const i = +card.dataset.i;
  if (i === scIndex) setCategory(OFFERS[i].cat, true);
  else showSlide(i);
});
scBar.addEventListener("click", e => {
  const i = scBtns.indexOf(e.target.closest("button"));
  if (i >= 0) showSlide(i);
});
$("#scPrev").addEventListener("click", () => showSlide(scIndex - 1));
$("#scNext").addEventListener("click", () => showSlide(scIndex + 1));
showcase.addEventListener("mouseenter", pauseSlides);
showcase.addEventListener("mouseleave", resumeSlides);
showcase.addEventListener("focusin", pauseSlides);
showcase.addEventListener("focusout", resumeSlides);
document.addEventListener("visibilitychange", () => document.hidden ? pauseSlides() : resumeSlides());
showcase.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") { e.preventDefault(); showSlide(scIndex + 1); }
  if (e.key === "ArrowLeft") { e.preventDefault(); showSlide(scIndex - 1); }
});

// swipe left or right on phones
let swipe = null;
slidesEl.addEventListener("pointerdown", e => { swipe = { x: e.clientX, y: e.clientY }; });
slidesEl.addEventListener("pointerup", e => {
  if (!swipe) return;
  const dx = e.clientX - swipe.x, dy = e.clientY - swipe.y;
  swipe = null;
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
    showSlide(scIndex + (dx < 0 ? 1 : -1));
    slidesEl.addEventListener("click", ev => ev.stopPropagation(), { capture: true, once: true });
  }
});

showSlide(0);

/* ---------- product cards ---------- */
function cardHTML(p, i = 0) {
  const c = catById[p.cat];
  const tag = p.tag ? `<span class="tag">${esc(p.tag)}</span>` : p.new ? `<span class="tag tag-new">New</span>` : "";
  const more = p.imgs.length > 1 ? `<span class="more-imgs">+${p.imgs.length - 1} photo${p.imgs.length > 2 ? "s" : ""}</span>` : "";
  return `<article class="card" data-id="${p.id}" style="--i:${i}">
    <button class="card-media" data-qv="${p.id}" aria-label="View ${esc(p.name)}">${tag}<img src="${p.imgs[0]}" alt="${esc(p.name)}" loading="lazy">${more}</button>
    <div class="card-body">
      <span class="card-cat">${esc(c.label)}</span>
      <button class="card-name" data-qv="${p.id}"><span>${esc(p.name)}</span></button>
      <div class="price card-price">${priceHTML(p)}</div>
      <span class="card-pack">${/^Per /.test(p.pack) ? "Sold per piece" : esc(p.pack)}</span>
      <div class="card-act" data-act="${p.id}">
        <button class="add-btn" data-add="${p.id}" aria-label="Add ${esc(p.name)} to list">+ Add</button>
        <div class="stepper" role="group" aria-label="Quantity of ${esc(p.name)}">
          <button data-step="-1" data-id="${p.id}" aria-label="One less">−</button>
          <span aria-live="polite">1</span>
          <button data-step="1" data-id="${p.id}" aria-label="One more">+</button>
        </div>
      </div>
    </div>
  </article>`;
}

// soft glow that follows the cursor over a card
if (finePointer && !reduceMotion) {
  document.addEventListener("pointermove", e => {
    const card = e.target.closest?.(".card");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, { passive: true });
}

/* ---------- catalogue: filter, search, sort ---------- */
const state = { cat: "all", q: "", sort: "popular" };

function matches(p, q) {
  if (!q) return true;
  const hay = `${p.name} ${p.desc} ${catById[p.cat].label} ${p.pack}`.toLowerCase();
  return q.split(/\s+/).every(t => hay.includes(t));
}

const countIn = id => id === "all" ? PRODUCTS.length : PRODUCTS.filter(p => p.cat === id).length;
$("#chips").innerHTML = [{ id: "all", label: "All" }, ...CATEGORIES].map(c =>
  `<button class="chip" data-cat="${c.id}" aria-pressed="false">${esc(c.label)}<small>${countIn(c.id)}</small></button>`
).join("");
$("#chips").addEventListener("click", e => {
  const b = e.target.closest("[data-cat]");
  if (b) setCategory(b.dataset.cat);
});

function renderGrid() {
  let list = PRODUCTS.filter(p => (state.cat === "all" || p.cat === state.cat) && matches(p, state.q));
  if (state.sort === "new") list = [...list].sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
  if (state.sort === "deal") list = [...list].sort((a, b) => b.off - a.off);
  if (state.sort === "low") list = [...list].sort((a, b) => a.price - b.price);
  if (state.sort === "high") list = [...list].sort((a, b) => b.price - a.price);
  if (state.sort === "az") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
  if (state.sort === "za") list = [...list].sort((a, b) => b.name.localeCompare(a.name));

  $("#grid").innerHTML = list.map((p, i) => cardHTML(p, i)).join("");
  $("#empty").hidden = list.length > 0;
  $("#resultsTitle").textContent = state.cat === "all" ? "All products" : catById[state.cat].label;
  $("#resultCount").textContent = `${list.length} ${list.length === 1 ? "product" : "products"}`;
  $("#searchNote").hidden = !state.q;
  $("#searchTerm").textContent = `“${state.q}”`;
  $("#askMissing").dataset.wa = state.q
    ? `Hi ${STORE.name}! I couldn't find "${state.q}" on your website. Do you have it in stock?`
    : `Hi ${STORE.name}! I'm looking for a product that isn't on your website.`;

  $$(".chip").forEach(b => b.setAttribute("aria-pressed", b.dataset.cat === state.cat));
  syncAddButtons();
}

function scrollToCatalogue() {
  $("#catalogue").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
}

function setCategory(cat, scroll = false) {
  state.cat = cat;
  renderGrid();
  if (scroll) scrollToCatalogue();
  const chip = $(`.chip[data-cat="${cat}"]`);
  if (chip) chip.parentElement.scrollTo({ left: chip.offsetLeft - 40, behavior: "smooth" });
}

/* ---------- sort menu (styled list; the hidden <select> keeps the value) ---------- */
const sortSel = $("#sort"), sortBtn = $("#sortBtn"), sortMenu = $("#sortMenu"), sortText = $("#sortText");
const CHECK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>';
sortMenu.innerHTML = [...sortSel.options].map((o, i) =>
  `<li role="option" id="sort-${o.value}" data-value="${o.value}" aria-selected="${i === 0}"><span>${esc(o.text)}</span>${CHECK}</li>`
).join("");
const sortItems = $$("li", sortMenu);
let sortActive = 0;

function syncSort() {
  sortText.textContent = sortSel.selectedOptions[0].text;
  sortItems.forEach(li => li.setAttribute("aria-selected", li.dataset.value === sortSel.value));
}
function highlightSort(i) {
  sortActive = (i + sortItems.length) % sortItems.length;
  sortItems.forEach((li, k) => li.classList.toggle("hl", k === sortActive));
  sortMenu.setAttribute("aria-activedescendant", sortItems[sortActive].id);
}
function openSort() {
  sortMenu.hidden = false;
  sortBtn.setAttribute("aria-expanded", "true");
  highlightSort(sortItems.findIndex(li => li.dataset.value === sortSel.value));
  sortMenu.focus({ preventScroll: true });
}
function closeSort(focusBtn = true) {
  if (sortMenu.hidden) return;
  sortMenu.hidden = true;
  sortBtn.setAttribute("aria-expanded", "false");
  if (focusBtn) sortBtn.focus({ preventScroll: true });
}
function pickSort(value) {
  sortSel.value = value;
  sortSel.dispatchEvent(new Event("change"));
  closeSort();
}
sortSel.addEventListener("change", () => { state.sort = sortSel.value; syncSort(); renderGrid(); });
sortBtn.addEventListener("click", () => sortMenu.hidden ? openSort() : closeSort());
sortBtn.addEventListener("keydown", e => {
  if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); openSort(); }
});
sortMenu.addEventListener("click", e => {
  const li = e.target.closest("li");
  if (li) pickSort(li.dataset.value);
});
sortMenu.addEventListener("pointermove", e => {
  const li = e.target.closest("li");
  if (li) highlightSort(sortItems.indexOf(li));
});
sortMenu.addEventListener("keydown", e => {
  if (e.key === "ArrowDown") { e.preventDefault(); highlightSort(sortActive + 1); }
  else if (e.key === "ArrowUp") { e.preventDefault(); highlightSort(sortActive - 1); }
  else if (e.key === "Home") { e.preventDefault(); highlightSort(0); }
  else if (e.key === "End") { e.preventDefault(); highlightSort(-1); }
  else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pickSort(sortItems[sortActive].dataset.value); }
  else if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); closeSort(); }
  else if (e.key === "Tab") closeSort(false);
});
document.addEventListener("pointerdown", e => {
  if (!sortMenu.hidden && !e.target.closest("#sortWrap")) closeSort(false);
});
syncSort();
$("#resetFilters").addEventListener("click", () => {
  state.cat = "all"; state.q = ""; input.value = "";
  renderGrid();
});
$("#clearSearch").addEventListener("click", () => { state.q = ""; input.value = ""; renderGrid(); });

/* ---------- search with suggestions ---------- */
const input = $("#search"), sug = $("#suggest");
let sugItems = [], sugIdx = -1;

function highlight(text, q) {
  const i = text.toLowerCase().indexOf(q);
  if (!q || i < 0) return esc(text);
  return esc(text.slice(0, i)) + "<mark>" + esc(text.slice(i, i + q.length)) + "</mark>" + esc(text.slice(i + q.length));
}

function openSuggest() {
  const raw = input.value.trim(), q = raw.toLowerCase();
  if (!q) return closeSuggest();
  const cats = CATEGORIES.filter(c => c.label.toLowerCase().includes(q)).slice(0, 2)
    .map(c => ({ type: "cat", id: c.id, label: c.label, img: c.cover, sub: "Category" }));
  const nameHit = p => p.name.toLowerCase().includes(q) ? 0 : 1;
  const prods = PRODUCTS.filter(p => matches(p, q)).sort((a, b) => nameHit(a) - nameHit(b)).slice(0, 6)
    .map(p => ({ type: "prod", id: p.id, label: p.name, img: p.imgs[0], sub: `in ${catById[p.cat].label}` }));
  sugItems = [...cats, ...prods];
  sugIdx = -1;
  sug.innerHTML = sugItems.length
    ? sugItems.map((s, i) => `<li role="option" id="sug-${i}" data-i="${i}" aria-selected="false"><img src="${s.img}" alt=""><span><b>${highlight(s.label, q)}</b><small>${esc(s.sub)}</small></span></li>`).join("")
      + `<li class="sug-all" data-all>See all results for “${esc(raw)}”</li>`
    : `<li class="sug-empty">No matches for “${esc(raw)}”. Press Enter to search anyway, or ask us on WhatsApp.</li>`;
  sug.hidden = false;
  input.setAttribute("aria-expanded", "true");
}

function closeSuggest() {
  sug.hidden = true;
  sugIdx = -1;
  input.setAttribute("aria-expanded", "false");
  input.removeAttribute("aria-activedescendant");
}

function moveSuggest(dir) {
  if (sug.hidden || !sugItems.length) return;
  // -1 means "back in the search box"; wraps around at both ends
  const n = sugItems.length + 1;
  sugIdx = ((sugIdx + 1 + dir + n) % n) - 1;
  $$("li[data-i]", sug).forEach((li, i) => li.setAttribute("aria-selected", i === sugIdx));
  if (sugIdx >= 0) input.setAttribute("aria-activedescendant", `sug-${sugIdx}`);
  else input.removeAttribute("aria-activedescendant");
}

function pickSuggest(s) {
  closeSuggest();
  input.blur();
  if (s.type === "cat") {
    input.value = "";
    state.q = "";
    setCategory(s.id, true);
  } else {
    openQuickView(s.id, input);
  }
}

function runSearch() {
  state.q = input.value.trim().toLowerCase();
  state.cat = "all";
  closeSuggest();
  input.blur();
  renderGrid();
  scrollToCatalogue();
}

let sugTimer;
input.addEventListener("input", () => { clearTimeout(sugTimer); sugTimer = setTimeout(openSuggest, 120); });
input.addEventListener("focus", () => { if (input.value.trim()) openSuggest(); });
input.addEventListener("keydown", e => {
  if (e.key === "ArrowDown") { e.preventDefault(); moveSuggest(1); }
  if (e.key === "ArrowUp") { e.preventDefault(); moveSuggest(-1); }
  if (e.key === "Enter" && sugIdx >= 0) { e.preventDefault(); pickSuggest(sugItems[sugIdx]); }
});
input.addEventListener("search", () => { if (!input.value) { closeSuggest(); if (state.q) { state.q = ""; renderGrid(); } } });
$("#searchForm").addEventListener("submit", e => { e.preventDefault(); runSearch(); });
sug.addEventListener("pointerdown", e => e.preventDefault());
sug.addEventListener("click", e => {
  const li = e.target.closest("li");
  if (!li) return;
  if (li.dataset.all !== undefined) runSearch();
  else if (li.dataset.i !== undefined) pickSuggest(sugItems[+li.dataset.i]);
});
input.addEventListener("blur", () => setTimeout(closeSuggest, 100));
document.addEventListener("keydown", e => {
  if (e.key === "/" && !/input|textarea|select/i.test(document.activeElement.tagName)) {
    e.preventDefault();
    input.focus();
  }
});

/* ---------- enquiry list ---------- */
let cart = {};
try { cart = JSON.parse(localStorage.getItem("enquiry") || "{}"); } catch { cart = {}; }
for (const id in cart) if (!byId[id]) delete cart[id];

function saveCart() {
  try { localStorage.setItem("enquiry", JSON.stringify(cart)); } catch {}
  renderCart();
}

// The product photo is tossed into the enquiry button along a smooth arc.
// Three layers keep the path smooth: the outer one slides across at a steady pace,
// the middle one rises and falls like a thrown ball, the image shrinks and fades.
function flyToList(source) {
  const target = isMobile() ? $("#navCart") : $("#openDrawer");
  const badge = isMobile() ? $("#navCount") : $("#cartCount");
  const img = source?.closest(".card, .qv-panel")?.querySelector(".card-media img, #qvImg");
  if (reduceMotion || !img || !target) return bump(badge);
  const a = img.getBoundingClientRect(), b = target.getBoundingClientRect();
  const size = 60;
  const x0 = a.left + a.width / 2 - size / 2, y0 = a.top + a.height / 2 - size / 2;
  const dx = b.left + b.width / 2 - size / 2 - x0;
  const dy = b.top + b.height / 2 - size / 2 - y0;
  const peak = Math.min(0, dy) - Math.min(140, 60 + Math.abs(dx) * .15);

  const outer = document.createElement("div");
  outer.className = "fly";
  Object.assign(outer.style, { left: `${x0}px`, top: `${y0}px`, width: `${size}px`, height: `${size}px` });
  const mid = document.createElement("div");
  mid.style.cssText = "width:100%;height:100%;will-change:transform";
  const pic = document.createElement("img");
  pic.src = img.currentSrc || img.src;
  pic.alt = "";
  mid.append(pic);
  outer.append(mid);
  document.body.append(outer);

  const done = () => { outer.remove(); bump(badge); bump(target, "catch"); };
  requestAnimationFrame(() => {
    const ms = 780;
    outer.animate([{ transform: "translateX(0)" }, { transform: `translateX(${dx}px)` }],
      { duration: ms, easing: "cubic-bezier(.35, 0, .65, 1)", fill: "forwards" });
    mid.animate([
      { transform: "translateY(0)", easing: "cubic-bezier(.2, .7, .4, 1)" },
      { transform: `translateY(${peak}px)`, offset: .42, easing: "cubic-bezier(.6, 0, .8, .4)" },
      { transform: `translateY(${dy}px)` },
    ], { duration: ms, fill: "forwards" });
    pic.animate([
      { transform: "scale(.5)", opacity: 0 },
      { transform: "scale(1.05)", opacity: 1, offset: .14 },
      { transform: "scale(.85)", opacity: 1, offset: .6 },
      { transform: "scale(.28)", opacity: .85 },
    ], { duration: ms, easing: "ease-out", fill: "forwards" }).onfinish = done;
  });
  // browsers pause animations in background tabs; never leave the photo behind
  setTimeout(() => outer.isConnected && outer.remove(), 1400);
}

function addToCart(id, qty, source) {
  cart[id] = qty;
  saveCart();
  toast(`Added to list · ${byId[id].name}`);
  flyToList(source);
}

function syncAddButtons() {
  $$(".card-act").forEach(act => {
    const qty = cart[act.dataset.act] || 0;
    act.classList.toggle("in-cart", qty > 0);
    $(".stepper span", act).textContent = qty;
  });
}

// + / − on a product card or in the list; going below 1 removes the item
function changeQty(id, delta) {
  const qty = (cart[id] || 0) + delta;
  if (qty <= 0) removeFromCart(id);
  else { cart[id] = qty; saveCart(); }
}
function removeFromCart(id) {
  if (!cart[id]) return;
  delete cart[id];
  saveCart();
  toast(`Removed from list · ${byId[id].name}`);
}

function renderCart() {
  const ids = Object.keys(cart);
  const estimate = ids.reduce((s, id) => s + (byId[id].price || 0) * unitsIn(byId[id]) * cart[id], 0);
  $("#cartCount").textContent = ids.length;
  $("#navCount").textContent = ids.length;
  $("#navCount").hidden = ids.length === 0;
  $("#drawerCount").textContent = ids.length ? `(${ids.length})` : "";
  syncAddButtons();

  $("#drawerList").innerHTML = ids.map((id, i) => {
    const p = byId[id];
    return `<li style="--i:${i}">
      <img src="${p.imgs[0]}" alt="">
      <div><strong>${esc(p.name)}</strong><small>${p.price ? `${inr(p.price * unitsIn(p))} / ${orderUnit(p)} · ${esc(p.pack)}` : esc(p.pack)}</small></div>
      <div class="qty" aria-label="Quantity of ${esc(p.name)}">
        <button data-dec="${id}" aria-label="Fewer">−</button>
        <span>${cart[id]}</span>
        <button data-inc="${id}" aria-label="More">+</button>
      </div>
      <button class="remove-btn" data-remove="${id}" aria-label="Remove ${esc(p.name)} from list" title="Remove"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3"/></svg></button>
    </li>`;
  }).join("");
  $("#drawerEmpty").hidden = ids.length > 0;
  $("#drawerTotal").textContent = ids.length ? `Estimated total · ${plural(ids.length, "item")}` : "";
  $("#drawerEst").textContent = ids.length ? inr(estimate) : "";
  $("#drawerNote").hidden = ids.length === 0;
  $("#sendEnquiry").disabled = ids.length === 0;
}

$("#drawerList").addEventListener("click", e => {
  const inc = e.target.closest("[data-inc]");
  const dec = e.target.closest("[data-dec]");
  const remove = e.target.closest("[data-remove]");
  if (inc) changeQty(inc.dataset.inc, 1);
  if (dec) changeQty(dec.dataset.dec, -1);
  if (remove) {
    // slide the row out, then drop it
    const li = remove.closest("li");
    li.classList.add("removing");
    setTimeout(() => removeFromCart(remove.dataset.remove), reduceMotion ? 0 : 260);
  }
});

$("#sendEnquiry").addEventListener("click", () => {
  const lines = Object.entries(cart).map(([id, qty], i) => {
    const p = byId[id];
    return `${i + 1}. ${p.name}${packNote(p)} – Qty: ${plural(qty, unitWord(p))}`;
  });
  const msg = `Hi ${STORE.name}! I'd like to place a bulk order. Could you please share the prices and availability of these items?\n\n${lines.join("\n")}\n\nThank you!`;
  window.open(waLink(msg), "_blank", "noopener");
});
$("#clearList").addEventListener("click", () => { cart = {}; saveCart(); });
$("#drawerBrowse").addEventListener("click", () => { closeDrawer(); scrollToCatalogue(); });

const drawer = $("#drawer"), scrim = $("#scrim");
let lastFocus = null;
function openDrawer() {
  lastFocus = document.activeElement;
  renderCart();
  scrim.hidden = false;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("lock");
  $("#closeDrawer").focus();
}
function closeDrawer() {
  if (!drawer.classList.contains("open")) return;
  scrim.hidden = true;
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lock");
  lastFocus?.focus?.();
}
$("#openDrawer").addEventListener("click", openDrawer);
$("#navCart").addEventListener("click", openDrawer);
$("#closeDrawer").addEventListener("click", closeDrawer);
scrim.addEventListener("click", closeDrawer);

/* ---------- product view ---------- */
const qv = $("#qv");
let qvId = null, qvQty = 1, qvOpener = null;
function showImage(src) {
  const img = $("#qvImg");
  img.src = src;
  img.style.animation = "none";
  void img.offsetWidth;
  img.style.animation = "";
  $$("#qvThumbs button").forEach(b => b.setAttribute("aria-current", b.dataset.src === src));
}
function openQuickView(id, opener) {
  const p = byId[id];
  qvId = id; qvQty = cart[id] || 1; qvOpener = opener;
  $("#qvImg").alt = p.name;
  $("#qvThumbs").innerHTML = p.imgs.length > 1
    ? p.imgs.map((src, i) => `<button data-src="${src}" aria-label="Photo ${i + 1}"><img src="${src}" alt=""></button>`).join("")
    : "";
  showImage(p.imgs[0]);
  $("#qvCat").textContent = catById[p.cat].label;
  $("#qvTitle").textContent = p.name;
  $("#qvDesc").textContent = p.desc;
  $("#qvPrice").innerHTML = priceHTML(p);
  $("#qvPack").textContent = unitsIn(p) > 1 ? `${p.pack} · ${inr(p.price * unitsIn(p))} per ${orderUnit(p)}` : p.pack;
  $(".qv-qty > span").textContent = `Quantity (${plural(2, orderUnit(p) || "pack").slice(2)})`;
  $("#qvAsk").dataset.wa = `Hi ${STORE.name}! Could you please share the bulk order price and stock availability of ${p.name}${packNote(p)}?`;
  updateQvQty();
  qv.hidden = false;
  document.body.classList.add("lock");
  $("#qvClose").focus();
}
function closeQuickView() {
  if (qv.hidden) return;
  qv.hidden = true;
  if (!drawer.classList.contains("open")) document.body.classList.remove("lock");
  qvOpener?.focus?.();
}
function updateQvQty() {
  $("#qvQty").textContent = qvQty;
  const p = byId[qvId], what = plural(qvQty, orderUnit(p) || "pack");
  const total = p.price ? ` · ${inr(p.price * unitsIn(p) * qvQty)}` : "";
  $("#qvAdd").textContent = cart[qvId] ? `Update list (${what})${total}` : `Add ${what}${total}`;
}
$("#qvThumbs").addEventListener("click", e => {
  const b = e.target.closest("button");
  if (b) showImage(b.dataset.src);
});
$("#qvInc").addEventListener("click", () => { qvQty++; updateQvQty(); });
$("#qvDec").addEventListener("click", () => { qvQty = Math.max(1, qvQty - 1); updateQvQty(); });
$("#qvAdd").addEventListener("click", () => {
  const src = $("#qvImg");
  const rect = src.getBoundingClientRect();
  closeQuickView();
  // fly from where the photo was, since the panel is now closed
  const ghost = document.createElement("div");
  ghost.className = "card";
  ghost.innerHTML = `<span class="card-media"><img src="${src.src}"></span>`;
  Object.assign(ghost.style, { position: "fixed", left: `${rect.left}px`, top: `${rect.top}px`, width: `${rect.width}px`, height: `${rect.height}px`, opacity: 0, pointerEvents: "none" });
  document.body.append(ghost);
  addToCart(qvId, qvQty, ghost.firstElementChild);
  setTimeout(() => ghost.remove(), 50);
});
$("#qvClose").addEventListener("click", closeQuickView);
qv.addEventListener("click", e => { if (e.target === qv) closeQuickView(); });

document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  closeSuggest();
  closeQuickView();
  closeDrawer();
});

/* ---------- header & reveals ---------- */
const header = $("#header");
addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 8), { passive: true });

if ("IntersectionObserver" in window && !reduceMotion) {
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { threshold: 0.06 });
  $$(".reveal").forEach(el => io.observe(el));
} else {
  $$(".reveal").forEach(el => el.classList.add("in"));
}

/* ---------- initial render ---------- */
renderCart();
renderGrid();

/* ---------- intro: the bag opens the curtains, then the hero animates in ---------- */
const intro = $("#intro");
function finishIntro(fast) {
  if (!intro.isConnected) return;
  root.classList.add("ready");
  if (fast) {
    intro.classList.add("leaving");
    setTimeout(() => intro.remove(), 350);
  } else {
    intro.remove();
  }
}
if (root.classList.contains("no-intro")) {
  intro.remove();
  requestAnimationFrame(() => root.classList.add("ready"));
} else {
  try { sessionStorage.setItem("introSeen", "1"); } catch {}
  document.body.classList.add("lock");
  const introTimers = [
    setTimeout(() => root.classList.add("ready"), 2600),
    setTimeout(() => { document.body.classList.remove("lock"); finishIntro(false); }, 3350),
  ];
  // tap anywhere (or press a key) to skip
  const skip = () => {
    introTimers.forEach(clearTimeout);
    document.body.classList.remove("lock");
    finishIntro(true);
  };
  intro.addEventListener("click", skip);
  addEventListener("keydown", e => { if (intro.isConnected && (e.key === "Escape" || e.key === "Enter" || e.key === " ")) skip(); });
}
