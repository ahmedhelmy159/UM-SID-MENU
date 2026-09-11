/* ============================================================
   UM SID — Beverage Menu
   ============================================================ */

/* ---------- CONFIGURATION ---------------------------------- */
const WHATSAPP_NUMBER = "201011112222";   // international format, no + or spaces
const DISPLAY_PHONE   = "010 1111 2222";  // shown on the page only

/* ---------- CATEGORIES ------------------------------------- */
const CATEGORIES = [
  { id: "all",     ar: "الكل",             en: "All" },
  { id: "teapot",  ar: "براد الشاي",       en: "Tea Pot",     noteAr: "الأعشاب طبيعية ومغلية",      noteEn: "Natural herbs, freshly brewed" },
  { id: "herbs",   ar: "الأعشاب",          en: "Herbs" },
  { id: "coffee",  ar: "القهوة",           en: "Coffee" },
  { id: "dessert", ar: "الحلو",            en: "Dessert" },
  { id: "juices",  ar: "العصائر",          en: "Juices",      noteAr: "جميع العصائر موسمية وطازجة",  noteEn: "All juices are fresh and seasonal" },
  { id: "soft",    ar: "المياه والمشروبات", en: "Soft Drinks" }
];

/* ---------- MENU DATA (43 priced entries) ------------------
   price:     single fixed price
   prices:    unexplained multiple prices  -> "Choose Price" selector
   variants:  labelled options with prices -> option selector
   flavours:  labelled options w/o prices  -> flavour selector
   ---------------------------------------------------------- */
const MENU = [
  // Tea Pot
  { id: "teapot",         cat: "teapot", ar: "براد شاي",           en: "Tea Pot",           prices: [60, 90, 120] },
  { id: "herbal-teapot",  cat: "teapot", ar: "براد شاي بالأعشاب",  en: "Herbal Tea Pot",    prices: [75, 100, 135],
    flavours: { labelAr: "النكهة", labelEn: "Flavour", options: [
      { id: "lemon", ar: "ليمون", en: "Lemon" },
      { id: "mint",  ar: "نعناع", en: "Mint" },
      { id: "basil", ar: "ريحان", en: "Basil" },
      { id: "clove", ar: "قرنفل", en: "Clove" },
      { id: "sage",  ar: "مرامية", en: "Sage" }
    ] } },

  // Herbs
  { id: "green-mint",     cat: "herbs", ar: "نعناع أخضر",   en: "Green Mint",  price: 30 },
  { id: "anise",          cat: "herbs", ar: "ينسون",        en: "Anise",       price: 30 },
  { id: "hibiscus-hot",   cat: "herbs", ar: "كركديه",       en: "Hibiscus",    price: 30 },
  { id: "ginger",         cat: "herbs", ar: "زنجبيل",       en: "Ginger",      price: 45 },
  { id: "turmeric",       cat: "herbs", ar: "كركم",         en: "Turmeric",    price: 40 },
  { id: "basil",          cat: "herbs", ar: "ريحان",        en: "Basil",       price: 50 },
  { id: "hot-cider",      cat: "herbs", ar: "تفاح / قرفة",  en: "Hot Cider",   price: 50 },

  // Coffee
  { id: "turkish-coffee", cat: "coffee", ar: "قهوة تركي",        en: "Turkish Coffee",
    variants: [ { id: "single", ar: "سنجل", en: "Single", price: 45 }, { id: "double", ar: "دبل", en: "Double", price: 65 } ] },
  { id: "hazelnut-coffee",cat: "coffee", ar: "قهوة بندق",        en: "Hazelnut Coffee",   price: 60 },
  { id: "french-coffee",  cat: "coffee", ar: "قهوة فرنساوي",     en: "French Coffee",     price: 60 },
  { id: "espresso",       cat: "coffee", ar: "إسبريسو",          en: "Espresso",
    variants: [ { id: "single", ar: "سنجل", en: "Single", price: 50 }, { id: "double", ar: "دبل", en: "Double", price: 80 } ] },
  { id: "espresso-macchiato", cat: "coffee", ar: "إسبريسو مكياتو", en: "Espresso Macchiato",
    variants: [ { id: "single", ar: "سنجل", en: "Single", price: 60 }, { id: "double", ar: "دبل", en: "Double", price: 90 } ] },
  { id: "nescafe",        cat: "coffee", ar: "نسكافيه",          en: "Nescafé",
    variants: [ { id: "black", ar: "بلاك", en: "Black", price: 50 }, { id: "milk", ar: "باللبن", en: "With Milk", price: 70 } ] },
  { id: "cappuccino-packet", cat: "coffee", ar: "كابتشينو باكيت", en: "Cappuccino Packet", price: 50 },
  { id: "cappuccino",     cat: "coffee", ar: "كابتشينو",         en: "Cappuccino",        price: 80 },

  // Dessert
  { id: "fruit-salad",    cat: "dessert", ar: "سلطة فواكه",  en: "Fruit Salad",   price: 130 },
  { id: "rice-pudding",   cat: "dessert", ar: "أرز باللبن",  en: "Rice Pudding",  price: 50 },
  { id: "muhallabia",     cat: "dessert", ar: "مهلبية",      en: "Muhallabia",    price: 50 },
  { id: "um-ali",         cat: "dessert", ar: "أم علي",      en: "Um Ali",        price: 80 },
  { id: "sweet-potato",   cat: "dessert", ar: "بطاطا حلوة",  en: "Sweet Potato",  price: 50 },
  { id: "ice-cream",      cat: "dessert", ar: "آيس كريم",    en: "Ice Cream",     prices: [75, 150] },
  { id: "popcorn",        cat: "dessert", ar: "فشار",        en: "Popcorn",       prices: [30, 50] },
  { id: "cotton-candy",   cat: "dessert", ar: "غزل بنات",    en: "Cotton Candy",  price: 30 },

  // Juices
  { id: "mango",          cat: "juices", ar: "مانجو",           en: "Mango",           price: 100 },
  { id: "orange",         cat: "juices", ar: "برتقال",          en: "Orange",          price: 80 },
  { id: "watermelon",     cat: "juices", ar: "بطيخ",            en: "Watermelon",      price: 80 },
  { id: "cantaloupe",     cat: "juices", ar: "كنتالوب",         en: "Cantaloupe",      price: 90 },
  { id: "lemon-mint",     cat: "juices", ar: "ليمون نعناع",     en: "Lemon with Mint", price: 70 },
  { id: "hibiscus-juice", cat: "juices", ar: "كركديه",          en: "Hibiscus",        price: 40 },
  { id: "lemon",          cat: "juices", ar: "ليمون",           en: "Lemon",           price: 60 },
  { id: "kiwi",           cat: "juices", ar: "كيوي",            en: "Kiwi",            price: 110 },
  { id: "guava",          cat: "juices", ar: "جوافة",           en: "Guava",           price: 90 },
  { id: "banana",         cat: "juices", ar: "موز",             en: "Banana",          price: 90 },
  { id: "cocktail",       cat: "juices", ar: "كوكتيل",          en: "Cocktail",        price: 150 },
  { id: "strawberry",     cat: "juices", ar: "فراولة",          en: "Strawberry",      price: 80 },
  { id: "avocado",        cat: "juices", ar: "أفوكادو بالعسل",  en: "Avocado",         price: 110 },
  { id: "milkshake",      cat: "juices", ar: "ميلك شيك",        en: "Milkshake",
    variants: [ { id: "oreo", ar: "أوريو", en: "Oreo", price: 110 }, { id: "fruits", ar: "فواكه", en: "Fruits", price: 120 } ] },

  // Soft Drinks
  { id: "water",          cat: "soft", ar: "مياه",        en: "Water",      price: 15 },
  { id: "soda",           cat: "soft", ar: "مياه غازية",  en: "Soda",       price: 40 },
  { id: "schweppes",      cat: "soft", ar: "شويبس",       en: "Schweppes",  price: 45 },
  { id: "fayrouz",        cat: "soft", ar: "فيروز",       en: "Fayrouz",    price: 50 }
];

/* ---------- INTERFACE TEXT --------------------------------- */
const T = {
  ar: {
    menuTitle: "قائمة المشروبات",
    tableLabel: "رقم الطاولة",
    tableHint: "اكتب رقم الطاولة الموجود أمامك",
    tableRequired: "من فضلك أدخل رقم الطاولة قبل إرسال الطلب.",
    choosePrice: "اختر السعر",
    chooseOption: "الاختيار",
    optionRequired: "اختر أولًا",
    add: "إضافة",
    added: "تمت الإضافة",
    reviewOrder: "مراجعة الطلب",
    yourOrder: "طلبك",
    close: "إغلاق",
    emptyCart: "لم تتم إضافة أي مشروب بعد.",
    unitPrice: "سعر الوحدة",
    qty: "الكمية",
    increase: "زيادة الكمية",
    decrease: "تقليل الكمية",
    remove: "حذف",
    orderTotal: "إجمالي الطلب",
    sendWhatsApp: "إرسال الطلب عبر واتساب",
    confirmNote: "سيفتح واتساب برسالة الطلب جاهزة، اضغط إرسال لتأكيد الطلب.",
    cartEmptyError: "أضف مشروبًا واحدًا على الأقل."
  },
  en: {
    menuTitle: "Beverage Menu",
    tableLabel: "Table Number",
    tableHint: "Enter the number shown on your table",
    tableRequired: "Please enter your table number before sending the order.",
    choosePrice: "Choose Price",
    chooseOption: "Option",
    optionRequired: "Choose first",
    add: "Add",
    added: "Added",
    reviewOrder: "Review Order",
    yourOrder: "Your Order",
    close: "Close",
    emptyCart: "No drinks added yet.",
    unitPrice: "Unit Price",
    qty: "Qty",
    increase: "Increase quantity",
    decrease: "Decrease quantity",
    remove: "Remove",
    orderTotal: "Order Total",
    sendWhatsApp: "Send Order via WhatsApp",
    confirmNote: "WhatsApp will open with your order ready. Press send to confirm.",
    cartEmptyError: "Add at least one drink."
  }
};

/* ---------- STATE ------------------------------------------ */
let lang = "ar";
let activeCat = "all";
const cart = new Map();          // key -> { item, variant, flavour, price, qty }
const selections = new Map();    // itemId -> { variant, price, flavour }

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
const t = key => T[lang][key];
const name = (o, primary = lang) => primary === "ar" ? o.ar : o.en;
const alt  = (o) => lang === "ar" ? o.en : o.ar;
const altLang = () => lang === "ar" ? "en" : "ar";

/* ---------- RENDER: categories ----------------------------- */
function renderCatNav() {
  const nav = $("#catnav");
  nav.innerHTML = "";
  CATEGORIES.forEach(c => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "catnav__btn" + (c.id === activeCat ? " is-active" : "");
    b.dataset.cat = c.id;
    b.setAttribute("aria-pressed", c.id === activeCat ? "true" : "false");
    b.innerHTML = `${esc(name(c))}<small lang="${altLang()}">${esc(alt(c))}</small>`;
    b.addEventListener("click", () => setCategory(c.id));
    nav.appendChild(b);
  });
}

function setCategory(id) {
  activeCat = id;
  $$(".catnav__btn").forEach(b => {
    const on = b.dataset.cat === id;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
    if (on) b.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  });
  $$(".section").forEach(s => { s.hidden = !(id === "all" || s.dataset.cat === id); });
  if (id !== "all") {
    const sec = $(`.section[data-cat="${id}"]`);
    if (sec) sec.scrollIntoView({ block: "start", behavior: "smooth" });
  }
}

/* ---------- RENDER: menu ----------------------------------- */
function renderMenu() {
  const menu = $("#menu");
  menu.innerHTML = "";
  CATEGORIES.filter(c => c.id !== "all").forEach(c => {
    const sec = document.createElement("section");
    sec.className = "section";
    sec.dataset.cat = c.id;
    sec.id = "cat-" + c.id;
    sec.hidden = !(activeCat === "all" || activeCat === c.id);
    const note = c.noteAr ? `<p class="section__note">${esc(lang === "ar" ? c.noteAr : c.noteEn)}</p>` : "";
    sec.innerHTML = `<div class="section__head"><h2 class="section__title">${esc(name(c))}<small lang="${altLang()}">${esc(alt(c))}</small></h2></div>${note}`;
    MENU.filter(i => i.cat === c.id).forEach(i => sec.appendChild(renderProduct(i)));
    menu.appendChild(sec);
  });
}

function priceText(item) {
  if (item.price != null) return String(item.price);
  if (item.prices) return item.prices.join(" / ");
  if (item.variants) return item.variants.map(v => v.price).join(" / ");
  return "";
}

function renderProduct(item) {
  const el = document.createElement("article");
  el.className = "product";
  el.dataset.id = item.id;
  const sel = selections.get(item.id) || {};

  let opts = "";
  if (item.variants) {
    opts += optGroup(item.id, "variant", t("chooseOption"), item.variants.map(v => ({
      id: v.id, label: name(v), price: v.price, on: sel.variant === v.id
    })));
  }
  if (item.flavours) {
    const f = item.flavours;
    opts += optGroup(item.id, "flavour", lang === "ar" ? f.labelAr : f.labelEn, f.options.map(o => ({
      id: o.id, label: name(o), on: sel.flavour === o.id
    })));
  }
  if (item.prices) {
    opts += optGroup(item.id, "price", t("choosePrice"), item.prices.map(p => ({
      id: String(p), label: String(p), on: sel.price === p, numeric: true
    })));
  }

  el.innerHTML = `
    <div class="product__names">
      <h3 class="product__name">${esc(name(item))}</h3>
      <p class="product__alt" lang="${altLang()}">${esc(alt(item))}</p>
    </div>
    <div class="product__price num">${esc(priceText(item))}</div>
    ${opts ? `<div class="product__opts">${opts}</div>` : ""}
    <button type="button" class="product__add" data-add="${item.id}">${esc(t("add"))}</button>`;

  $$(".opt__btn", el).forEach(b => b.addEventListener("click", () => {
    const kind = b.dataset.kind;
    const s = selections.get(item.id) || {};
    s[kind] = kind === "price" ? Number(b.dataset.val) : b.dataset.val;
    selections.set(item.id, s);
    $$(`.opt__btn[data-kind="${kind}"]`, el).forEach(x => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
    const err = $(`.opt__error[data-kind="${kind}"]`, el);
    if (err) err.hidden = true;
  }));
  $(".product__add", el).addEventListener("click", () => addToCart(item, el));
  return el;
}

function optGroup(itemId, kind, label, choices) {
  return `<div class="opt" role="group" aria-label="${esc(label)}">
    <div class="opt__label">${esc(label)}</div>
    <div class="opt__choices">${choices.map(c => `
      <button type="button" class="opt__btn" data-kind="${kind}" data-val="${esc(c.id)}" aria-pressed="${c.on ? "true" : "false"}">
        <span class="${c.numeric ? "num" : ""}">${esc(c.label)}</span>${c.price != null ? `<span class="num">${c.price}</span>` : ""}
      </button>`).join("")}</div>
    <p class="opt__error" data-kind="${kind}" hidden>${esc(t("optionRequired"))}</p>
  </div>`;
}

/* ---------- CART ------------------------------------------- */
function addToCart(item, el) {
  const sel = selections.get(item.id) || {};
  let ok = true;
  const need = (kind, cond) => { if (cond) { const e = $(`.opt__error[data-kind="${kind}"]`, el); if (e) e.hidden = false; ok = false; } };
  need("variant", item.variants && !sel.variant);
  need("flavour", item.flavours && !sel.flavour);
  need("price",   item.prices && !sel.price);
  if (!ok) return;

  let variant = null, flavour = null, price = item.price;
  if (item.variants) { variant = item.variants.find(v => v.id === sel.variant); price = variant.price; }
  if (item.flavours) { flavour = item.flavours.options.find(o => o.id === sel.flavour); }
  if (item.prices)   { price = sel.price; }

  const key = [item.id, variant && variant.id, flavour && flavour.id, price].join("|");
  const line = cart.get(key);
  if (line) line.qty += 1;
  else cart.set(key, { key, item, variant, flavour, price, qty: 1 });

  const btn = $(".product__add", el);
  btn.textContent = t("added");
  btn.classList.add("is-added");
  clearTimeout(btn._timer);
  btn._timer = setTimeout(() => { btn.textContent = t("add"); btn.classList.remove("is-added"); }, 900);

  updateCartBar();
  if (!$("#drawer").hidden) renderDrawer();
}

function cartCount() { let n = 0; cart.forEach(l => n += l.qty); return n; }
function cartTotal() { let s = 0; cart.forEach(l => s += l.qty * l.price); return s; }

function updateCartBar() {
  const bar = $("#cartbar");
  const n = cartCount();
  bar.hidden = n === 0;
  $("#cartbar-count").textContent = n;
  $("#cartbar-total").textContent = cartTotal();
}

function changeQty(key, delta) {
  const l = cart.get(key);
  if (!l) return;
  l.qty += delta;
  if (l.qty <= 0) cart.delete(key);
  updateCartBar();
  renderDrawer();
  if (cart.size === 0) closeDrawer();
}

/* ---------- DRAWER ----------------------------------------- */
function openDrawer() {
  renderDrawer();
  $("#drawer").hidden = false;
  document.body.style.overflow = "hidden";
  $("#drawer-close").focus();
}
function closeDrawer() {
  $("#drawer").hidden = true;
  document.body.style.overflow = "";
  $("#drawer-error").hidden = true;
  $("#cartbar-open").focus();
}

function renderDrawer() {
  const body = $("#drawer-body");
  body.innerHTML = "";
  if (cart.size === 0) {
    body.innerHTML = `<p class="drawer__empty">${esc(t("emptyCart"))}</p>`;
  } else {
    cart.forEach(l => {
      const meta = [];
      if (l.variant) meta.push(name(l.variant));
      if (l.flavour) meta.push(name(l.flavour));
      const line = document.createElement("div");
      line.className = "line";
      line.innerHTML = `
        <div class="line__info">
          <p class="line__name">${esc(name(l.item))}</p>
          <p class="line__alt" lang="${altLang()}">${esc(alt(l.item))}</p>
          <p class="line__meta">${meta.length ? esc(meta.join(" · ")) + " — " : ""}${esc(t("unitPrice"))}: <span class="num">${l.price}</span></p>
        </div>
        <div class="line__total num">${l.price * l.qty}</div>
        <div class="line__ctrl">
          <div class="qty" role="group" aria-label="${esc(t("qty"))}">
            <button type="button" class="qty__btn" data-delta="-1" aria-label="${esc(t("decrease"))}">−</button>
            <span class="qty__val" aria-live="polite">${l.qty}</span>
            <button type="button" class="qty__btn" data-delta="1" aria-label="${esc(t("increase"))}">+</button>
          </div>
          <button type="button" class="line__remove">${esc(t("remove"))}</button>
        </div>`;
      $$(".qty__btn", line).forEach(b => b.addEventListener("click", () => changeQty(l.key, Number(b.dataset.delta))));
      $(".line__remove", line).addEventListener("click", () => changeQty(l.key, -l.qty));
      body.appendChild(line);
    });
  }
  $("#drawer-total").textContent = cartTotal();
  $("#drawer-table").textContent = getTable() || "—";
}

/* ---------- TABLE NUMBER ----------------------------------- */
function sanitizeTable(v) { return String(v || "").replace(/[^0-9]/g, "").slice(0, 4); }
function getTable() { return sanitizeTable($("#table-number").value); }

function showTableError(show) {
  const panel = $(".table-panel"), err = $("#table-error");
  panel.classList.toggle("is-invalid", show);
  err.hidden = !show;
  if (show) err.textContent = t("tableRequired");
}

/* ---------- WHATSAPP --------------------------------------- */
function buildMessage() {
  const table = getTable();
  const lines = ["طلب جديد - UM SID", "", `رقم الطاولة / Table Number: ${table}`, ""];
  let i = 0;
  cart.forEach(l => {
    i++;
    lines.push(`${i}) ${l.qty} × ${l.item.ar} / ${l.item.en}`);
    const opts = [];
    if (l.variant) opts.push(`${l.variant.ar} / ${l.variant.en}`);
    if (l.flavour) opts.push(`${l.flavour.ar} / ${l.flavour.en}`);
    if (opts.length) lines.push(`الاختيار / Option: ${opts.join(" - ")}`);
    lines.push(`سعر الوحدة / Unit Price: ${l.price}`);
    lines.push(`الإجمالي / Line Total: ${l.price * l.qty}`);
    lines.push("");
  });
  lines.push(`إجمالي الطلب / Order Total: ${cartTotal()}`, "", "يرجى تأكيد الطلب، شكرًا.", "Please confirm the order. Thank you.");
  return lines.join("\n");
}

function sendWhatsApp() {
  const err = $("#drawer-error");
  err.hidden = true;
  if (cart.size === 0) { err.textContent = t("cartEmptyError"); err.hidden = false; return; }
  if (!getTable()) {
    err.textContent = t("tableRequired"); err.hidden = false;
    showTableError(true);
    return;
  }
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`;
  window.open(url, "_blank", "noopener");
}

/* ---------- LANGUAGE --------------------------------------- */
function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
  $$(".lang__btn").forEach(b => {
    const on = b.dataset.lang === l;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });
  $$("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  $$("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
  if (!$("#table-error").hidden) $("#table-error").textContent = t("tableRequired");
  renderCatNav();
  renderMenu();
  if (!$("#drawer").hidden) renderDrawer();
}

/* ---------- UTIL ------------------------------------------- */
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ---------- INIT ------------------------------------------- */
function init() {
  // Prefill table from ?table=12
  const params = new URLSearchParams(location.search);
  const fromUrl = sanitizeTable(params.get("table"));
  if (fromUrl) $("#table-number").value = fromUrl;

  $("#table-number").addEventListener("input", e => {
    e.target.value = sanitizeTable(e.target.value);
    if (e.target.value) showTableError(false);
    $("#drawer-table").textContent = getTable() || "—";
  });

  $$(".lang__btn").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
  $("#cartbar-open").addEventListener("click", openDrawer);
  $("#drawer-close").addEventListener("click", closeDrawer);
  $("#drawer-backdrop").addEventListener("click", closeDrawer);
  $("#wa-send").addEventListener("click", sendWhatsApp);
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !$("#drawer").hidden) closeDrawer(); });

  setLang("ar");
  console.log(`UM SID menu loaded: ${MENU.length} items. Phone: ${DISPLAY_PHONE}`);
}

document.addEventListener("DOMContentLoaded", init);
