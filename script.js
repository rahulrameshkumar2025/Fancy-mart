/* =========================================================
   STORE DETAILS: edit these and the whole site updates.
   whatsapp: country code + number, digits only (e.g. "919876543210").
   Leave it empty and WhatsApp will ask which chat to send to.
   ========================================================= */
const STORE = {
  name: "Buymo",
  whatsapp: "916382707034",
  phone: "+91 63827 07034",
  address: "Shop address goes here",
  hours: "Mon–Sat · 10:00 AM – 9:00 PM",
};

const CATEGORIES = [
  { id: "keychains", label: "Keychains",   color: "#ff4f9a", cover: "images/keychain-anime.jpg" },
  { id: "toys",      label: "Kawaii Toys", color: "#9b6bff", cover: "images/toy-kitty-figure.jpg" },
  { id: "hair",      label: "Hair Clips",  color: "#e0337f", cover: "images/hair-peacock.jpg" },
  { id: "earrings",  label: "Earrings",    color: "#b8860b", cover: "images/earrings-display.jpg" },
  { id: "decor",     label: "LED Décor",   color: "#1fa88e", cover: "images/decor-lotus-candle.jpg" },
  { id: "kitchen",   label: "Kitchen",     color: "#2f8fe0", cover: "images/kitchen-knife-set.jpg" },
  { id: "car",       label: "Car Care",    color: "#2a1838", cover: "images/car-fragrance.jpg" },
  { id: "bottles",   label: "Bottles & Flasks", color: "#1f6fb2", cover: "images/bottle-printed-mini.jpg" },
  { id: "christmas", label: "Christmas",   color: "#c0262d", cover: "images/xmas-snowman.jpg" },
  { id: "lights",    label: "Lamps & Lights", color: "#c77b12", cover: "images/light-solar-garden-pole.jpg" },
];

const PRODUCTS = [
  { id: "kc-unicorn",  cat: "keychains", name: "Rainbow Unicorn Keychain",   img: "images/keychain-unicorn.jpg",     pack: "50 pcs pack", tag: "Bestseller", desc: "Rubber unicorn charm with printed silicone strap. Purple, white, blue and pink." },
  { id: "kc-panda",    cat: "keychains", name: "Panda Baby Keychain",         img: "images/keychain-panda.jpg",       pack: "50 pcs pack", tag: "New",        desc: "Waving panda in a vest with matching strap. Red, blue and black." },
  { id: "kc-anime",    cat: "keychains", name: "Anime Slayer Keychain",       img: "images/keychain-anime.jpg",       pack: "50 pcs pack", tag: "Trending",   desc: "Detailed anime character figures with flame-print silicone straps." },
  { id: "kc-batman",   cat: "keychains", name: "Batman Keychain",             img: "images/keychain-batman.jpg",      pack: "50 pcs pack",                    desc: "Caped hero figure in blue, silver and black with a printed strap." },
  { id: "kc-spidey",   cat: "keychains", name: "Spider-Man Keychain",         img: "images/keychain-spiderman.jpg",   pack: "50 pcs pack", tag: "Hot",        desc: "Four poses including the headphone and hoodie styles, red strap." },
  { id: "kc-glossy",   cat: "keychains", name: "Glossy Bear & Cat Keychain",  img: "images/keychain-glossy-pets.jpg", pack: "Bulk pack",                      desc: "Pearlescent chunky bear and cat charms on gold rings." },

  { id: "toy-kitty",   cat: "toys", name: "Kitty Love Figure (JLR-21)",       img: "images/toy-kitty-figure.jpg",     pack: "Bulk carton", tag: "Cute pick",  desc: "Pink-bow kitty holding a LOVE heart. Great for gifting and return gifts." },
  { id: "toy-kitty-b", cat: "toys", name: "Kitty Toy, Carton Lot",            img: "images/toy-kitty-bulk.jpg",       pack: "Bulk carton",                    desc: "Individually packed kitty toys with strap, shipped by the carton." },
  { id: "toy-bunny",   cat: "toys", name: "Sleepy Bunny Squishy",             img: "images/toy-bunny.jpg",            pack: "Bulk carton",                    desc: "Soft-touch white bunny with flower detail. Individually packed." },
  { id: "toy-unicorn", cat: "toys", name: "Unicorn Night Light",              img: "images/toy-unicorn-lamp.jpg",     pack: "Bulk carton", tag: "Glows",      desc: "Pink-and-white unicorn that lights up. Individually packed." },

  { id: "hair-zanzee", cat: "hair", name: "Zanzee Claw Clip Basket",          img: "images/hair-claw-zanzee.jpg",     pack: "48 pcs tray", tag: "Value",      desc: "Assorted matte and clear claw clips in a gift basket." },
  { id: "hair-mix",    cat: "hair", name: "Assorted Claw Clips",              img: "images/hair-claw-mix.jpg",        pack: "48 pcs tray",                    desc: "Daisy, square, heart and classic shapes, mixed colours." },
  { id: "hair-basket", cat: "hair", name: "Crystal Claw Clip Tray",           img: "images/hair-claw-basket.jpg",     pack: "48 pcs tray",                    desc: "Translucent and frosted claw clips in a reusable white basket." },
  { id: "hair-anmor",  cat: "hair", name: "Anmor Square Clips",               img: "images/hair-anmor.jpg",           pack: "24 pcs box",                     desc: "Jelly-rim square clips in black and bright colours." },
  { id: "hair-pearl",  cat: "hair", name: "Pearl Flower Mini Clips",          img: "images/hair-pearl.jpg",           pack: "24 pcs box",  tag: "Elegant",    desc: "Black mini claws with pearl cluster and rhinestone trim." },
  { id: "hair-peacock",cat: "hair", name: "Peacock Heart Clips",              img: "images/hair-peacock.jpg",         pack: "24 pcs box",                     desc: "Gold-tone heart clips with painted peacock and swan art." },

  { id: "ear-cards",   cat: "earrings", name: "Fashion Earring Cards",         img: "images/earrings-display.jpg",     pack: "Per card dozen", tag: "Many designs", desc: "Studs, swirls, pearl bows and ballerina drops on hanging cards." },

  { id: "dec-lotus",   cat: "decor", name: "Crystal Lotus LED Candle",         img: "images/decor-lotus-candle.jpg",   pack: "6 pcs box",   tag: "Festive",    desc: "Flameless LED tealight in an acrylic lotus. Smokeless and safe." },
  { id: "dec-tealight",cat: "decor", name: "LED Tealight Set",                 img: "images/decor-tealight.jpg",       pack: "24 pcs set",                     desc: "Crystal-cut flameless tealights for pooja, parties and décor." },

  { id: "kit-knife",   cat: "kitchen", name: "Knife & Chopping Board Set",     img: "images/kitchen-knife-set.jpg",    pack: "Per set",                        desc: "Board, chef knife, two utility knives and kitchen scissors." },
  { id: "kit-grinder", cat: "kitchen", name: "Nima Electric Grinder NM-8300",  img: "images/kitchen-grinder.jpg",      pack: "Per piece",                      desc: "300W, stainless steel bowl, metal blade. Coffee, spices, dry masala." },

  { id: "car-heli",    cat: "car", name: "Solar Helicopter Car Fragrance",     img: "images/car-fragrance.jpg",        pack: "Per piece",   tag: "Spins in sun", desc: "Carlax solar-powered rotor spreads fragrance evenly. Cologne scent." },

  { id: "bot-smart-bk",cat: "bottles", name: "Smart LED Flask 500 ml, Black",  img: "images/flask-smart-black.jpg",    pack: "Bulk carton", tag: "Smart",      desc: "Touch the lid to see drink temperature. 304 stainless steel, hot & cold, leak-proof." },
  { id: "bot-smart-wh",cat: "bottles", name: "Smart LED Flask 500 ml, White",  img: "images/flask-smart-white.jpg",    pack: "Bulk carton",                    desc: "Touch the lid to see drink temperature. 304 stainless steel, hot & cold, leak-proof." },
  { id: "bot-rope",    cat: "bottles", name: "Rope Bottle 500 ml",              img: "images/bottle-rope.jpg",          pack: "50 pcs carton", tag: "5 colours", desc: "Double-wall stainless steel with rope handle. Blue, black, rose gold, silver and gold." },
  { id: "bot-floral",  cat: "bottles", name: "Plan Floral Mini Bottle 300 ml",  img: "images/bottle-plan-floral.jpg",   pack: "Bulk carton",                    desc: "Insulated mini bottle with steel cap and carry ring. Seven pastel and bold colours." },
  { id: "bot-printed", cat: "bottles", name: "Printed Mini Bottle",             img: "images/bottle-printed-mini.jpg",  pack: "Bulk carton", tag: "In stock",   desc: "Insulated mini bottles in peacock, rose, butterfly and blue-porcelain prints." },

  { id: "xm-snowman",  cat: "christmas", name: "LED Snowman (MAA 290 Z)",       img: "images/xmas-snowman.jpg",         pack: "300 pcs carton", tag: "Kids love", desc: "6\" glowing crystal snowman with knitted striped hat and scarf. Gift boxed." },
  { id: "xm-star",     cat: "christmas", name: "Crystal Star Tree Lamp (MAA 290 G)", img: "images/xmas-crystal-star-tree.jpg", pack: "240 pcs carton", tag: "Festive", desc: "6\" LED crystal tree with star topper and warm glow. Gift boxed." },
  { id: "xm-spiral",   cat: "christmas", name: "Spiral Crystal Tree (MAA 290 L)", img: "images/xmas-spiral-tree.jpg",     pack: "480 pcs carton",                 desc: "4\" ribbed crystal tree with warm LED and star. Compact gift-boxed piece." },
  { id: "xm-fibre",    cat: "christmas", name: "Fibre-Optic Tree (MAA 290 M)",  img: "images/xmas-fibre-optic-tree.jpg", pack: "500 pcs carton",                desc: "5.5\" fibre-optic tree with star that glows in changing colours. Gift boxed." },
  { id: "xm-acrylic",  cat: "christmas", name: "Colour-Change Tree 6\" (MAA6340-11)", img: "images/xmas-acrylic-tree.jpg", pack: "240 pcs carton",              desc: "Acrylic Christmas tree with colour-changing LED base. Gift boxed." },
  { id: "xm-acrylic-l",cat: "christmas", name: "Colour-Change Tree 7.5\" (MAA6340-12)", img: "images/xmas-acrylic-tree-large.jpg", pack: "144 pcs carton", tag: "Large", desc: "Larger acrylic Christmas tree with colour-changing LED base. Gift boxed." },

  { id: "lt-garden",   cat: "lights", name: "Solar Garden Pole Light (MG)",     img: "images/light-solar-garden-pole.jpg", pack: "Per piece", tag: "Solar",    desc: "Solar-charged lawn post with pleated pendant lamp and LED side strip. For gardens and pathways." },
  { id: "lt-crystal",  cat: "lights", name: "Crystal Wall Light (ZTD-30W)",     img: "images/light-crystal-wall.jpg",    pack: "Per piece",                    desc: "30W wall lamp with diamond-cut glass shade and warm glow. For gates, porches and compound walls." },
  { id: "lt-lantern",  cat: "lights", name: "Lantern Wall Light (MJ-30W)",      img: "images/light-lantern-wall.jpg",    pack: "Per piece",                    desc: "30W lantern-style wall lamp with filament-look bulb and black metal frame." },
  { id: "lt-hanging",  cat: "lights", name: "Hanging LED Lantern (YDD)",        img: "images/light-hanging-lantern.jpg", pack: "Per piece",   tag: "3 modes",  desc: "Pleated-shade lantern with hook. Full, half and flash modes for camping, balconies and décor." },
  { id: "lt-table",    cat: "lights", name: "Pleated Table Lamp (YD-CK01)",     img: "images/light-pleated-table-lamp.jpg", pack: "Per piece",                 desc: "Bedside lamp with pleated metal shade and soft warm light." },
];

const FEATURED = ["xm-snowman", "kc-unicorn", "bot-smart-bk", "lt-garden", "kc-anime", "toy-kitty", "xm-star", "hair-peacock", "kc-spidey", "dec-lotus", "bot-rope", "car-heli", "kc-panda"];

/* ---------- setup ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const byId = Object.fromEntries(PRODUCTS.map(p => [p.id, p]));
const catById = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));
const NAV_H = 70;

const hasGSAP = !!(window.gsap && window.ScrollTrigger);
// Reduced-motion devices still get entrance animations, but no smooth-scroll or scroll-linked parallax.
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const motion = hasGSAP;
const calm = reduceMotion;
const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;

if (hasGSAP) {
  gsap.registerPlugin(ScrollTrigger, ...(window.Flip ? [Flip] : []));
  document.documentElement.classList.add("gsap");
}

let lenis = null;
if (motion && !calm && window.Lenis) {
  lenis = new Lenis({ lerp: 0.1 });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

function scrollToEl(el) {
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -NAV_H - 10, duration: 1.4 });
  else el.scrollIntoView({ behavior: "smooth" });
}
function lockScroll(on) {
  if (lenis) on ? lenis.stop() : lenis.start();
  else document.body.style.overflow = on ? "hidden" : "";
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
  toastTimer = setTimeout(() => t.classList.remove("show"), 1800);
}

/* ---------- store details ---------- */
$$("[data-store]").forEach(el => {
  const key = el.dataset.store;
  if (STORE[key]) el.textContent = STORE[key];
  if (key === "phone") el.href = `tel:${STORE.phone.replace(/[^\d+]/g, "")}`;
});
document.title = `${STORE.name} · Wholesale Gifts & Accessories`;

document.addEventListener("click", e => {
  const wa = e.target.closest("[data-wa]");
  if (wa) {
    e.preventDefault();
    window.open(waLink(wa.dataset.wa), "_blank", "noopener");
    return;
  }
  const a = e.target.closest('a[href^="#"]');
  if (a && a.getAttribute("href").length > 1) {
    const target = $(a.getAttribute("href"));
    if (target) { e.preventDefault(); scrollToEl(target); }
  }
});

/* ---------- cart state ---------- */
let cart = {};
try { cart = JSON.parse(localStorage.getItem("enquiry") || "{}"); } catch { cart = {}; }
for (const id in cart) if (!byId[id]) delete cart[id];

/* ---------- render: featured ---------- */
$("#featuredTrack").innerHTML = FEATURED.map((id, i) => {
  const p = byId[id];
  return `<article class="f-card" data-id="${id}">
    <span class="f-num">${String(i + 1).padStart(2, "0")}</span>
    <button class="f-media" data-qv="${id}" aria-label="Quick view ${p.name}"><img src="${p.img}" alt="${p.name}" loading="lazy"></button>
    <div class="f-body">
      <div><h3>${p.name}</h3><small>${p.pack}</small></div>
      <button class="add-btn" data-add="${id}">+ Add</button>
    </div>
  </article>`;
}).join("");

/* ---------- render: categories ---------- */
$("#catGrid").innerHTML = CATEGORIES.map(c => {
  const count = PRODUCTS.filter(p => p.cat === c.id).length;
  return `<button class="cat" data-cat="${c.id}">
    <img src="${c.cover}" alt="" loading="lazy">
    <span class="cat-arrow" aria-hidden="true">→</span>
    <span class="cat-label"><strong>${c.label}</strong><small>${count} ${count === 1 ? "item" : "items"}</small></span>
  </button>`;
}).join("");
$("#catGrid").addEventListener("click", e => {
  const btn = e.target.closest(".cat");
  if (!btn) return;
  setFilter(btn.dataset.cat);
  scrollToEl($("#catalogue"));
});

/* ---------- render: catalogue ---------- */
$("#productGrid").innerHTML = PRODUCTS.map(p => {
  const c = catById[p.cat];
  return `<article class="card" data-id="${p.id}">
    <button class="card-media" data-qv="${p.id}" aria-label="Quick view ${p.name}">
      ${p.tag ? `<span class="tag">${p.tag}</span>` : ""}
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <span class="quick">Quick view</span>
    </button>
    <div class="card-body">
      <span class="card-cat" style="color:${c.color}">${c.label}</span>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="card-foot">
        <span class="pack">${p.pack}</span>
        <button class="add-btn" data-add="${p.id}">+ Add</button>
      </div>
    </div>
  </article>`;
}).join("");

$("#chips").innerHTML = `<span class="chip-pill" id="chipPill"></span>` + [{ id: "all", label: "All" }, ...CATEGORIES]
  .map(c => `<button class="chip" role="tab" data-cat="${c.id}" aria-selected="${c.id === "all"}">${c.label}</button>`)
  .join("");

let filter = "all";
let query = "";
let cardsRevealed = false;

function moveChipPill(animate = true) {
  const chip = $(`.chip[data-cat="${filter}"]`);
  const pill = $("#chipPill");
  const box = { x: chip.offsetLeft, y: chip.offsetTop, width: chip.offsetWidth, height: chip.offsetHeight };
  if (hasGSAP && animate) gsap.to(pill, { ...box, duration: 0.45, ease: "power3.out" });
  else Object.assign(pill.style, { left: 0, top: 0, width: box.width + "px", height: box.height + "px", transform: `translate(${box.x}px, ${box.y}px)` });
  const chips = $("#chips");
  if (chips.scrollWidth > chips.clientWidth) {
    chips.scrollTo({ left: chip.offsetLeft - chips.clientWidth / 2 + chip.offsetWidth / 2, behavior: "smooth" });
  }
}

function setFilter(cat) {
  filter = cat;
  $$(".chip").forEach(c => c.setAttribute("aria-selected", c.dataset.cat === cat));
  moveChipPill();
  applyFilter();
}

function applyFilter(animate = true) {
  const cards = $$("#productGrid .card");
  const useFlip = animate && motion && window.Flip;
  if (useFlip && !cardsRevealed) { gsap.set(cards, { opacity: 1, y: 0 }); cardsRevealed = true; }
  const state = useFlip ? Flip.getState(cards) : null;
  let shown = 0;
  cards.forEach(card => {
    const p = byId[card.dataset.id];
    const hay = `${p.name} ${p.desc} ${catById[p.cat].label}`.toLowerCase();
    const ok = (filter === "all" || p.cat === filter) && (!query || hay.includes(query));
    card.classList.toggle("is-hidden", !ok);
    if (ok) shown++;
  });
  $("#empty").hidden = shown > 0;
  $("#resultCount").textContent = `${shown} of ${PRODUCTS.length} items`;
  if (state) {
    Flip.from(state, {
      duration: 0.6, ease: "power3.inOut", absolute: true, scale: true,
      onEnter: els => gsap.fromTo(els, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, delay: 0.15, ease: "back.out(1.6)" }),
      onLeave: els => gsap.to(els, { opacity: 0, scale: 0.8, duration: 0.3 }),
      onComplete: () => ScrollTrigger.refresh(),
    });
  } else if (hasGSAP && animate) {
    ScrollTrigger.refresh();
  }
}

$("#chips").addEventListener("click", e => {
  const chip = e.target.closest(".chip");
  if (chip) setFilter(chip.dataset.cat);
});
let searchTimer;
$("#search").addEventListener("input", e => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => { query = e.target.value.trim().toLowerCase(); applyFilter(); }, 160);
});
$("#resetFilters").addEventListener("click", () => {
  query = "";
  $("#search").value = "";
  setFilter("all");
});
addEventListener("resize", () => moveChipPill(false));

/* ---------- add / quick view clicks ---------- */
document.addEventListener("click", e => {
  const add = e.target.closest("[data-add]");
  if (add) {
    const id = add.dataset.add;
    if (cart[id]) { openDrawer(); return; }
    const img = add.closest(".card, .f-card")?.querySelector("img");
    addToCart(id, 1, img);
    return;
  }
  const qv = e.target.closest("[data-qv]");
  if (qv) openQuickView(qv.dataset.qv, qv);
});

function addToCart(id, qty, img) {
  cart[id] = qty;
  saveCart();
  toast(`Added ${byId[id].name}`);
  if (img && motion) flyToCart(img);
  else bumpBadge();
}

function flyToCart(img) {
  const from = img.getBoundingClientRect();
  const to = $("#openDrawer").getBoundingClientRect();
  const size = Math.min(from.width, 140);
  const clone = img.cloneNode();
  clone.className = "fly";
  Object.assign(clone.style, { left: from.left + (from.width - size) / 2 + "px", top: from.top + (from.height - size) / 2 + "px", width: size + "px", height: size + "px" });
  document.body.appendChild(clone);
  const dx = to.left + to.width / 2 - (from.left + from.width / 2);
  const dy = to.top + to.height / 2 - (from.top + from.height / 2);
  gsap.to(clone, { x: dx, duration: 0.85, ease: "power1.inOut" });
  gsap.to(clone, { y: dy, duration: 0.85, ease: "back.in(1.4)" });
  gsap.to(clone, { scale: 0.12, rotation: 25, borderRadius: "50%", duration: 0.85, ease: "power2.in", onComplete: () => { clone.remove(); bumpBadge(); } });
}

function bumpBadge() {
  if (!motion) return;
  gsap.fromTo("#cartCount", { scale: 1.8 }, { scale: 1, duration: 0.8, ease: "elastic.out(1, .35)" });
  gsap.fromTo("#openDrawer", { rotation: -6 }, { rotation: 0, duration: 0.7, ease: "elastic.out(1, .3)" });
}

/* ---------- enquiry list ---------- */
function saveCart() {
  try { localStorage.setItem("enquiry", JSON.stringify(cart)); } catch {}
  renderCart();
}

let lastCount = -1;
function renderCart() {
  const ids = Object.keys(cart);
  const packs = ids.reduce((s, id) => s + cart[id], 0);
  $("#cartCount").textContent = ids.length;
  $("#pillCount").textContent = ids.length;

  const pill = $("#enquiryPill");
  if (ids.length && lastCount === 0 && motion) {
    pill.hidden = false;
    gsap.fromTo(pill, { y: 120, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "back.out(1.6)" });
  } else {
    pill.hidden = ids.length === 0;
  }
  lastCount = ids.length;

  $$("[data-add]").forEach(btn => {
    const inCart = !!cart[btn.dataset.add];
    btn.classList.toggle("added", inCart);
    btn.textContent = inCart ? "✓ Added" : "+ Add";
  });

  $("#drawerList").innerHTML = ids.map(id => {
    const p = byId[id];
    return `<li>
      <img src="${p.img}" alt="">
      <div><strong>${p.name}</strong><small>${p.pack}</small></div>
      <div class="qty" aria-label="Packs of ${p.name}">
        <button data-dec="${id}" aria-label="Fewer">−</button>
        <span>${cart[id]}</span>
        <button data-inc="${id}" aria-label="More">+</button>
      </div>
    </li>`;
  }).join("");
  $("#drawerEmpty").hidden = ids.length > 0;
  $("#drawerTotal").textContent = ids.length ? `${ids.length} ${ids.length === 1 ? "item" : "items"} · ${packs} ${packs === 1 ? "pack" : "packs"}` : "";
  $("#sendEnquiry").disabled = ids.length === 0;
}

$("#drawerList").addEventListener("click", e => {
  const inc = e.target.closest("[data-inc]");
  const dec = e.target.closest("[data-dec]");
  if (inc) cart[inc.dataset.inc]++;
  if (dec) {
    const id = dec.dataset.dec;
    if (--cart[id] <= 0) delete cart[id];
  }
  if (inc || dec) saveCart();
});

$("#sendEnquiry").addEventListener("click", () => {
  const lines = Object.entries(cart).map(([id, qty], i) => `${i + 1}. ${byId[id].name} (${byId[id].pack}) × ${qty}`);
  const msg = `Hi ${STORE.name}! I'd like wholesale prices & availability for:\n\n${lines.join("\n")}\n\nThank you!`;
  window.open(waLink(msg), "_blank", "noopener");
});
$("#clearList").addEventListener("click", () => { cart = {}; saveCart(); });
$("#drawerBrowse").addEventListener("click", () => { closeDrawer(); scrollToEl($("#catalogue")); });

const drawer = $("#drawer"), scrim = $("#scrim");
if (hasGSAP) gsap.set(drawer, { xPercent: 105 });
let lastFocus = null;
function openDrawer() {
  lastFocus = document.activeElement;
  scrim.hidden = false;
  drawer.setAttribute("aria-hidden", "false");
  lockScroll(true);
  if (motion) {
    gsap.fromTo(scrim, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    gsap.set(drawer, { visibility: "visible" });
    gsap.fromTo(drawer, { xPercent: 105 }, { xPercent: 0, duration: 0.55, ease: "expo.out" });
    gsap.from("#drawerList li", { x: 40, opacity: 0, stagger: 0.05, duration: 0.45, delay: 0.15, ease: "power3.out" });
  } else {
    drawer.style.visibility = "visible";
    drawer.style.transform = "none";
  }
  $("#closeDrawer").focus();
}
function closeDrawer() {
  if (scrim.hidden) return;
  drawer.setAttribute("aria-hidden", "true");
  lockScroll(false);
  const done = () => { scrim.hidden = true; drawer.style.visibility = "hidden"; };
  if (motion) {
    gsap.to(scrim, { opacity: 0, duration: 0.25 });
    gsap.to(drawer, { xPercent: 105, duration: 0.35, ease: "power3.in", onComplete: done });
  } else {
    drawer.style.transform = "";
    done();
  }
  lastFocus?.focus?.();
}
$("#openDrawer").addEventListener("click", openDrawer);
$("#enquiryPill").addEventListener("click", openDrawer);
$("#closeDrawer").addEventListener("click", closeDrawer);
scrim.addEventListener("click", closeDrawer);

/* ---------- quick view ---------- */
const qv = $("#qv");
let qvId = null, qvQty = 1, qvOpener = null;
function openQuickView(id, opener) {
  const p = byId[id], c = catById[p.cat];
  qvId = id; qvQty = cart[id] || 1; qvOpener = opener;
  $("#qvImg").src = p.img;
  $("#qvImg").alt = p.name;
  $("#qvCat").textContent = c.label;
  $("#qvCat").style.color = c.color;
  $("#qvTitle").textContent = p.name;
  $("#qvDesc").textContent = p.desc;
  $("#qvPack").textContent = p.pack;
  $("#qvAsk").dataset.wa = `Hi! Please share the wholesale price and stock for: ${p.name} (${p.pack}).`;
  updateQvQty();
  qv.hidden = false;
  lockScroll(true);
  if (motion) {
    gsap.fromTo(qv, { opacity: 0 }, { opacity: 1, duration: 0.25 });
    gsap.fromTo("#qvPanel", { y: 60, scale: 0.92, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.4)" });
    gsap.fromTo("#qvImg", { scale: 1.25 }, { scale: 1, duration: 1, ease: "expo.out" });
    gsap.from(".qv-info > *", { y: 20, opacity: 0, stagger: 0.05, duration: 0.45, delay: 0.15, ease: "power3.out" });
  }
  $("#qvClose").focus();
}
function closeQuickView() {
  if (qv.hidden) return;
  lockScroll(false);
  const done = () => { qv.hidden = true; };
  if (motion) {
    gsap.to("#qvPanel", { y: 30, scale: 0.96, opacity: 0, duration: 0.22, ease: "power2.in" });
    gsap.to(qv, { opacity: 0, duration: 0.25, onComplete: done });
  } else done();
  qvOpener?.focus?.();
}
function updateQvQty() {
  $("#qvQty").textContent = qvQty;
  $("#qvAdd").textContent = cart[qvId] ? `Update to ${qvQty} ${qvQty === 1 ? "pack" : "packs"}` : `Add ${qvQty} ${qvQty === 1 ? "pack" : "packs"} to enquiry`;
}
$("#qvInc").addEventListener("click", () => { qvQty++; updateQvQty(); });
$("#qvDec").addEventListener("click", () => { qvQty = Math.max(1, qvQty - 1); updateQvQty(); });
$("#qvAdd").addEventListener("click", () => {
  const img = $("#qvImg");
  addToCart(qvId, qvQty, img);
  closeQuickView();
});
$("#qvClose").addEventListener("click", closeQuickView);
qv.addEventListener("click", e => { if (e.target === qv) closeQuickView(); });

document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  closeQuickView();
  closeDrawer();
});

/* ---------- nav ---------- */
const nav = $("#nav"), menuBtn = $("#menuBtn"), navLinks = $("#navLinks");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 10), { passive: true });
menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
navLinks.addEventListener("click", e => {
  if (e.target.closest("a")) { navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
});

/* ---------- initial render ---------- */
renderCart();
applyFilter(false);
requestAnimationFrame(() => moveChipPill(false));

/* =========================================================
   MOTION
   ========================================================= */
function splitWords(el) {
  el.innerHTML = el.textContent.trim().split(/\s+/)
    .map(w => `<span class="line" style="display:inline-block"><span class="line-inner">${w}</span></span>`)
    .join(" ");
  return $$(".line-inner", el);
}

if (!motion) {
  $("#preloader").style.display = "none";
  if (!hasGSAP) {
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }), { threshold: 0.12 });
    $$(".reveal").forEach(el => io.observe(el));
    addEventListener("scroll", () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      $("#progress").style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    }, { passive: true });
  }
} else {
  /* intro */
  const intro = gsap.timeline();
  intro
    .to("#plBar", { width: "100%", duration: 0.9, ease: "power2.inOut" })
    .to(".pl-inner", { y: -24, opacity: 0, duration: 0.35, ease: "power2.in" })
    .to("#preloader", { yPercent: -100, duration: 0.85, ease: "expo.inOut" })
    .set("#preloader", { display: "none" })
    .from(".hero-title .line-inner", { yPercent: 115, rotate: 5, duration: 1.1, stagger: 0.12, ease: "expo.out" }, "-=0.4")
    .from(".hero-in", { y: 28, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out" }, "-=0.8")
    .from(".float-card", { scale: 0.4, opacity: 0, y: 100, rotation: i => [-25, 20, 15, -18][i], stagger: 0.1, duration: 1.2, ease: "back.out(1.5)" }, "-=1.1")
    .from("#sticker", { scale: 0, rotation: -200, duration: 0.9, ease: "back.out(2)" }, "-=0.6")
    .from(".sparkle", { scale: 0, stagger: 0.1, duration: 0.5, ease: "back.out(3)" }, "-=0.5")
    .call(setupHeroScroll);

  function setupHeroScroll() {
    gsap.to("#sticker", { rotation: 12, scale: 1.06, repeat: -1, yoyo: true, duration: 1.8, ease: "sine.inOut" });
    if (calm) return;
    gsap.to(".float-card", {
      y: (i, el) => -160 * parseFloat(el.dataset.depth),
      rotation: i => [-10, 8, 12, -14][i],
      ease: "none",
      scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
    });
    gsap.to("#heroCopy", { y: 120, opacity: 0.2, ease: "none", scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true } });
  }

  /* hero: pointer parallax on the floating cards */
  if (finePointer) {
    const inners = $$(".float-inner");
    $("#hero").addEventListener("pointermove", e => {
      const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
      inners.forEach((el, i) => {
        const d = (i + 1) * 9;
        el.style.translate = `${x * d}px ${y * d}px`;
      });
    });
    inners.forEach(el => { el.style.transition = "translate .9s cubic-bezier(.2,.8,.2,1)"; });
  }

  /* hero: rotating word */
  const words = ["sells out", "kids love", "makes gifts", "fills shelves"];
  let wi = 0;
  const word = $("#swapWord");
  setInterval(() => {
    if (document.hidden) return;
    gsap.timeline()
      .to(word, { yPercent: -110, opacity: 0, duration: 0.35, ease: "power2.in" })
      .call(() => { wi = (wi + 1) % words.length; word.textContent = words[wi]; })
      .fromTo(word, { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)", clearProps: "transform" });
  }, 2800);

  /* scroll progress */
  gsap.to("#progress", { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } });

  /* perks strip */
  gsap.from(".perks ul", { y: 40, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: ".perks", start: "top 92%" } });
  gsap.from(".perk", { y: 20, opacity: 0, stagger: 0.1, duration: 0.6, delay: 0.2, ease: "power3.out", scrollTrigger: { trigger: ".perks", start: "top 92%" } });
  ScrollTrigger.create({ trigger: ".perks", start: "top 92%", once: true, onEnter: () => $(".perks").classList.add("in") });

  /* generic reveals */
  $$(".reveal").forEach(el => {
    gsap.from(el, { y: 50, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
  });

  /* headings: word-by-word mask */
  $$(".section-head h2, .split-head, .visit-card h2").forEach(h => {
    const parts = splitWords(h);
    gsap.from(parts, { yPercent: 115, duration: 0.9, stagger: 0.06, ease: "expo.out", scrollTrigger: { trigger: h, start: "top 85%" } });
  });

  /* stats count up */
  $$("[data-count]").forEach(el => {
    gsap.from(el, { textContent: 0, duration: 1.8, ease: "power2.out", snap: { textContent: 1 }, scrollTrigger: { trigger: el, start: "top 90%" } });
  });

  /* bestsellers */
  gsap.from(".f-card", {
    y: 120, opacity: 0, rotation: i => (i % 2 ? 5 : -5), stagger: 0.08, duration: 1, ease: "power3.out",
    scrollTrigger: { trigger: "#featured", start: "top 75%" },
  });
  const mm = gsap.matchMedia();
  mm.add("(min-width: 901px)", () => {
    const track = $("#featuredTrack");
    const viewport = track.parentElement;
    const dist = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
    const tween = gsap.to(track, {
      x: () => -dist(),
      ease: "none",
      scrollTrigger: {
        trigger: "#featuredPin", start: `top ${NAV_H}`, end: () => `+=${dist()}`,
        pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1,
        onUpdate: self => gsap.set("#featuredBar", { scaleX: self.progress }),
      },
    });
    if (!calm) $$(".f-media img").forEach(img => {
      gsap.fromTo(img, { xPercent: -6 }, {
        xPercent: 6, ease: "none",
        scrollTrigger: { trigger: img.closest(".f-card"), containerAnimation: tween, start: "left right", end: "right left", scrub: true },
      });
    });
  });

  /* categories: clip-path wipe */
  gsap.from(".cat", {
    clipPath: "inset(100% 0% 0% 0% round 22px)", y: 60, stagger: 0.07, duration: 1.1, ease: "expo.out",
    scrollTrigger: { trigger: "#catGrid", start: "top 82%" },
  });
  if (!calm) $$(".cat img").forEach(img => {
    gsap.fromTo(img, { yPercent: -6, scale: 1.15 }, { yPercent: 6, ease: "none", scrollTrigger: { trigger: "#catGrid", start: "top bottom", end: "bottom top", scrub: true } });
  });

  /* catalogue cards: batched stagger */
  gsap.set("#productGrid .card", { opacity: 0, y: 60 });
  ScrollTrigger.batch("#productGrid .card", {
    start: "top 92%", once: true,
    onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.08, duration: 0.8, ease: "power3.out", overwrite: true }),
  });
  ScrollTrigger.create({
    trigger: "#toolbar", start: `top ${NAV_H + 9}`, endTrigger: "#catalogue", end: "bottom top",
    toggleClass: { targets: "#toolbar", className: "stuck" },
  });

  /* steps: line draws as you scroll */
  gsap.to("#stepsLine", { scaleX: 1, ease: "none", scrollTrigger: { trigger: ".steps-wrap", start: "top 75%", end: "bottom 65%", scrub: true } });
  gsap.from(".step", { y: 80, opacity: 0, stagger: 0.15, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: ".steps", start: "top 82%" } });
  gsap.from(".step-num", { scale: 0, rotation: -120, stagger: 0.15, duration: 0.8, delay: 0.2, ease: "back.out(2)", scrollTrigger: { trigger: ".steps", start: "top 82%" } });

  /* visit collage parallax */
  if (!calm) $$(".visit-collage img").forEach(img => {
    gsap.to(img, { y: parseFloat(img.dataset.speed), ease: "none", scrollTrigger: { trigger: ".visit-card", start: "top bottom", end: "bottom top", scrub: true } });
  });

  /* footer word */
  const big = $(".footer-big");
  big.innerHTML = [...big.textContent].map(ch => `<span style="display:inline-block">${ch === " " ? "&nbsp;" : ch}</span>`).join("");
  gsap.from(big.children, { yPercent: 100, opacity: 0, rotation: 10, stagger: 0.04, duration: 0.9, ease: "back.out(1.6)", scrollTrigger: { trigger: big, start: "top 95%" } });

  /* active nav link */
  $$(".nav-links a").forEach(a => {
    const sec = $(a.getAttribute("href"));
    if (!sec) return;
    ScrollTrigger.create({
      trigger: sec, start: "top center", end: "bottom center",
      onToggle: self => { if (self.isActive) { $$(".nav-links a").forEach(x => x.classList.toggle("active", x === a)); } },
    });
  });

  /* pointer-only niceties */
  if (finePointer) {
    $$(".magnetic").forEach(el => {
      el.addEventListener("pointermove", e => {
        const r = el.getBoundingClientRect();
        gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * 0.3, y: (e.clientY - r.top - r.height / 2) * 0.35, duration: 0.4, ease: "power3.out" });
      });
      el.addEventListener("pointerleave", () => gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, .35)" }));
    });

    $$("#productGrid .card").forEach(card => {
      card.addEventListener("pointermove", e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(card, { rotationY: x * 10, rotationX: -y * 10, y: -6, transformPerspective: 900, duration: 0.4, ease: "power2.out" });
      });
      card.addEventListener("pointerleave", () => gsap.to(card, { rotationY: 0, rotationX: 0, y: 0, duration: 0.7, ease: "elastic.out(1, .5)" }));
    });

    const cursor = $("#cursor"), label = $("#cursorLabel");
    document.documentElement.classList.add("has-cursor");
    const cx = gsap.quickTo(cursor, "x", { duration: 0.35, ease: "power3.out" });
    const cy = gsap.quickTo(cursor, "y", { duration: 0.35, ease: "power3.out" });
    addEventListener("pointermove", e => { cx(e.clientX); cy(e.clientY); });
    document.addEventListener("pointerover", e => {
      const t = e.target;
      const labelled = t.closest("[data-cursor], .card-media, .f-media, .cat");
      const link = t.closest("a, button, input");
      let text = "";
      if (labelled) text = labelled.dataset.cursor || (labelled.classList.contains("cat") ? "Open" : "View");
      label.textContent = text;
      cursor.classList.toggle("is-hover", !!text);
      cursor.classList.toggle("is-link", !text && !!link);
    });
    document.addEventListener("pointerleave", () => gsap.to(cursor, { opacity: 0 }));
    document.addEventListener("pointerenter", () => gsap.to(cursor, { opacity: 1 }));
  }

  addEventListener("load", () => ScrollTrigger.refresh());
}
