/* =====================================================================
   VIVA DRIVING SCHOOL: EDIT YOUR WEBSITE CONTENT HERE
   Everything you need to change is inside CONFIG below. Keep the
   quotes ("...") and commas (,) exactly as they are, and only change
   the words and numbers between the quotes.
   All image files live in the same folder as index.html (no sub-folders).
   ===================================================================== */
const CONFIG = {

  /* ---- Business details and links ---------------------------------
     CHANGE PHONE / WHATSAPP / INSTAGRAM: edit the three lines below.
     phone and whatsapp: international format, digits only for whatsapp. */
  business: {
    name: "VIVA Driving School",
    phone: "+447908969686",          // used for the Call buttons
    phoneDisplay: "07908 969 686",   // shown on screen
    whatsapp: "447908969686",        // no + sign, no spaces
    instagram: "https://www.instagram.com/vivadrivingschoolgb/",
    defaultMessage: "Hi VIVA Driving School, I'd like to ask about driving lessons."
  },

  /* ---- Image paths (flat folder) ---------------------------------- */
  images: { hero: "hero.png", logo: "viva-logo.jpg" },

  /* ---- INSTRUCTORS --------------------------------------------------
     ADD ANOTHER INSTRUCTOR: copy one whole { ... }, block, paste it
     after the last one, then change the words. Save their photo in the
     same folder (e.g. sara.jpg) and set photo: "sara.jpg".
     Any field you leave out or set to "" is simply not shown.
     Only add qualifications that are verified. */
  instructors: [
    {
      name: "",                                  // add the instructor's name when you are ready
      photo: "instructor.jpg",
      bio: "Friendly, professional driving lessons in North and North-West London, tailored to help you build confidence and prepare for your driving test.",
      languages: [],                             // e.g. ["English", "Persian"]
      vehicle: "Red Vauxhall Corsa (GN14 VVA)",
      qualifications: [],                        // verified only, e.g. ["Approved Driving Instructor"]
      phone: "",                                 // leave "" to use the business phone
      whatsapp: "",                              // leave "" to use the business WhatsApp
      availability: ""                           // e.g. "Weekdays and weekends"
    }
  ],

  /* ---- LESSONS ------------------------------------------------------
     Add, remove or reword lessons. Only list services you really offer. */
  lessons: [
    { title: "Learn to drive", text: "Friendly, professional lessons tailored to you, so you build confidence behind the wheel." },
    { title: "Driving test preparation", text: "Lessons that help you prepare for your driving test." }
  ],

  /* ---- PRICES -------------------------------------------------------
     CHANGE A PRICE: edit the price text, e.g. price: "£40".
     Leave price: "" and the card shows "Ask for a price" instead.
     Add or delete { ... }, blocks to add or remove price cards. */
  prices: [
    { name: "Driving lesson", price: "", note: "Message or call for the current price." }
  ],

  /* ---- PASSED STUDENTS ----------------------------------------------
     ADD A PHOTO: save it in the same folder (e.g. student-5.jpg) and
     add a new line:  { photo: "student-5.jpg", alt: "Short description" },  */
  students: [
    { photo: "student-1.jpg", alt: "Student holding a practical driving test pass certificate in front of a red VIVA car" },
    { photo: "student-2.jpg", alt: "Student holding a practical driving test pass certificate beside a black car" },
    { photo: "student-3.jpg", alt: "Student giving a thumbs up with a driving test pass certificate in front of a red VIVA car" },
    { photo: "student-4.jpg", alt: "Student smiling with a driving test pass certificate beside a red VIVA car" }
  ],

  /* ---- AREAS COVERED: add or remove names in the list ------------- */
  areas: ["Barnet", "Hendon", "Mill Hill", "Colindale", "Edgware", "Stanmore", "Hampstead", "Wembley", "Neasden", "Harlesden", "Willesden", "Kilburn", "Bushey", "Pinner", "Golders Green", "Finchley", "Muswell Hill", "Cricklewood", "Potters Bar", "Borehamwood", "Wood Green", "Tottenham", "Watford", "Chingford", "Southall"],

  /* ---- DRIVING TEST CENTRES -----------------------------------------
     Add only verified centre names, e.g. ["Centre name one", "Centre name two"].
     While this list is empty the whole section stays hidden. */
  testCentres: [],

  /* ---- FAQs: edit the questions and answers ------------------------ */
  faqs: [
    { q: "How do I book a lesson?", a: "Call or send a WhatsApp message and we will reply to arrange your lesson. You can also use the enquiry form on this page." },
    { q: "Which areas do you cover?", a: "VIVA Driving School covers North and North-West London. See the Areas covered section for the full list." },
    { q: "How much does a lesson cost?", a: "See the Prices section, or message us for the current price." },
    { q: "Can I message instead of calling?", a: "Yes. Use the WhatsApp button and send us a message." }
  ]
};

/* ===================== Site code (no need to edit) ===================== */
(function () {
  "use strict";
  var B = CONFIG.business, NS = "http://www.w3.org/2000/svg";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduced = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  function el(tag, attrs) {
    var e = document.createElement(tag), k = attrs || {};
    Object.keys(k).forEach(function (n) {
      if (k[n] === null || k[n] === undefined || k[n] === false) return;
      if (n === "text") e.textContent = k[n]; else e.setAttribute(n, k[n]);
    });
    for (var i = 2; i < arguments.length; i++) { if (arguments[i]) e.append(arguments[i]); }
    return e;
  }
  function icon(id) {
    var s = document.createElementNS(NS, "svg"), u = document.createElementNS(NS, "use");
    s.setAttribute("class", "ic"); s.setAttribute("aria-hidden", "true"); s.setAttribute("focusable", "false");
    u.setAttribute("href", "#" + id); s.append(u); return s;
  }
  function wa(num, msg) { return "https://wa.me/" + String(num || B.whatsapp).replace(/\D/g, "") + (msg ? "?text=" + encodeURIComponent(msg) : ""); }
  function tel(num) { return "tel:" + (num || B.phone).replace(/[^\d+]/g, ""); }
  function reveal(node, type, i) { node.classList.add("reveal"); node.setAttribute("data-r", type); node.style.setProperty("--i", i || 0); return node; }
  function btn(cls, href, ico, label, ext) {
    return el("a", { "class": "btn " + cls, href: href, target: ext ? "_blank" : null, rel: ext ? "noopener" : null }, icon(ico), document.createTextNode(label));
  }

  /* contact links and text from CONFIG */
  $$("[data-link]").forEach(function (a) {
    var t = a.getAttribute("data-link");
    if (t === "tel") a.href = tel();
    if (t === "wa") a.href = wa(null, a.getAttribute("data-msg") || B.defaultMessage);
    if (t === "ig") a.href = B.instagram;
  });
  $$("[data-text=phone]").forEach(function (n) { n.textContent = B.phoneDisplay; });
  $("#yr").textContent = new Date().getFullYear();
  /* logo */
  $(".logo").style.backgroundImage = "url(" + CONFIG.images.logo + ")";
  $(".car").style.backgroundImage = "url(" + CONFIG.images.hero + ")";

  /* gentle dashed roads with a small red VIVA car.
     Road shape is set in index.html with data-road="straight | hills | curve".
     The first time a road scrolls into view the car drives in from the left facing
     forward, flashes its headlights once, turns into the road and carries on side-on. */
  (function () {
    var NS2 = "http://www.w3.org/2000/svg", items = [], running = false, last = 0, ENT = 3.4;
    function sm(a, b, x) { var t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * t * (t * (t * 6 - 15) + 10); }
    function shape(it) {
      var W = it.W, hero = it.hero, type = it.type, amp = 0, f = function () { return 0; };
      if (type === "hills") { amp = hero ? 10 : 7; var per = hero ? Math.max(2, W / 520) : 1.5; f = function (x) { return amp * (.5 - .5 * Math.cos(2 * Math.PI * per * Math.min(1, Math.max(0, x / W)))); }; }
      else if (type === "curve") { amp = hero ? 16 : 12; f = function (x) { return amp * sm(.1 * W, .9 * W, x); }; }
      it.amp = amp; it.f = f;
    }
    function build(it) {
      var W = Math.max(120, Math.round(it.node.clientWidth)); it.W = W;
      var mobile = window.innerWidth <= 560;
      it.h = it.hero ? (mobile ? 34 : 46) : (mobile ? 28 : 36);
      it.cw = it.h * 2.18; it.fw = it.h * 1.137;
      shape(it);
      it.yTop = Math.round(it.h * 1.16 + 6);
      var H = Math.ceil(it.yTop + it.amp + 8);
      it.node.style.height = H + "px"; it.node.style.setProperty("--h", it.h + "px");
      it.svg.setAttribute("width", W); it.svg.setAttribute("height", H); it.svg.setAttribute("viewBox", "0 0 " + W + " " + H);
      var d = "";
      for (var x = -60; x <= W + 60; x += 3) d += (d ? "L" : "M") + x + " " + (it.yTop + it.f(x)).toFixed(1);
      it.path.setAttribute("d", d);
      it.v = (W + it.cw) / it.dur; it.vin = it.v * .45; it.x0 = -it.fw * .55;
      it.x1 = it.x0 + it.vin * ENT + (it.v - it.vin) / 2 * ENT;
    }
    function fire(it, cls) { it.cart.classList.remove(cls); void it.cart.offsetWidth; it.cart.classList.add(cls); }
    function frame(it, snap) {
      var x, ws = 1, wf = 0, e = 1;
      if (it.state === 1) { var t = it.es; e = t / ENT; x = it.x0 + it.vin * t + (it.v - it.vin) / (2 * ENT) * t * t; var s = sm(.36, .7, e); wf = 1 - s; ws = s; }
      else x = -it.cw / 2 + it.t * (it.W + it.cw);
      var y = it.yTop + it.f(x), a = Math.atan2(it.f(x + 8) - it.f(x - 8), 16) * 180 / Math.PI;
      it.ang = snap ? a : it.ang + (a - it.ang) * .2;
      var rot = Math.max(-8, Math.min(8, it.ang)) * ws;
      it.cart.style.transform = "translate(" + (x - it.cw / 2).toFixed(1) + "px," + (y - it.h).toFixed(1) + "px) rotate(" + rot.toFixed(2) + "deg)";
      it.sv.style.opacity = ws.toFixed(3); it.fr.style.opacity = wf.toFixed(3);
      it.sv.style.transform = "scaleX(" + (.6 + .4 * ws).toFixed(3) + ")"; it.fr.style.transform = "scaleX(" + (1 - .4 * ws).toFixed(3) + ")";
      if (snap) return;
      if (it.state === 1) {
        if (e > .12 && !it.f1) { it.f1 = true; fire(it, "flash"); }
        if (e > .5 && !it.f2) { it.f2 = true; fire(it, "blink"); }
      } else if (it.lap % 3 === 2 && it.t > .4 && !it.f3) { it.f3 = true; fire(it, "blink"); }
    }
    function tick(ts) {
      var dt = Math.min(.05, (ts - last) / 1000); last = ts; var any = false;
      items.forEach(function (it) {
        if (!it.on) return; any = true;
        if (it.state === 0) { it.state = 1; it.es = 0; it.cart.style.visibility = "visible"; }
        if (it.state === 1) { it.es += dt; if (it.es >= ENT) { it.state = 2; it.t = (it.x1 + it.cw / 2) / (it.W + it.cw); } }
        else { it.t += dt / it.dur; if (it.t >= 1) { it.t -= 1; it.lap++; it.f3 = false; } }
        frame(it, false);
      });
      if (any) requestAnimationFrame(tick); else running = false;
    }
    function start() { if (!running) { running = true; last = performance.now(); requestAnimationFrame(tick); } }
    function img(cls, src) { return el("img", { "class": cls, src: src, alt: "", draggable: "false" }); }

    $$("[data-road]").forEach(function (node, i) {
      var it = { node: node, type: node.getAttribute("data-road"), hero: node.classList.contains("road"), t: 0, lap: 0, ang: 0, on: false, state: 0, es: 0 };
      it.dur = it.hero ? 22 : 15 + (i % 4) * 2;
      it.svg = document.createElementNS(NS2, "svg"); it.svg.setAttribute("class", "rsvg"); it.svg.setAttribute("aria-hidden", "true");
      it.path = document.createElementNS(NS2, "path"); it.svg.append(it.path);
      it.sv = el("div", { "class": "sv" }, img("side", "car-side.png"), el("span", { "class": "ind" }));
      it.fr = el("div", { "class": "fr" }, img("front", "car-front.png"), img("lit", "car-front-lights-on.png"));
      it.cart = el("div", { "class": "cart" }, it.sv, it.fr);
      it.cart.addEventListener("animationend", function (e) {
        if (e.animationName === "flash") it.cart.classList.remove("flash");
        if (e.animationName === "blink") it.cart.classList.remove("blink");
      });
      node.append(it.svg, it.cart);
      build(it); items.push(it);
      if (reduced) { it.state = 2; it.t = .14; it.cart.style.visibility = "visible"; frame(it, true); }
    });
    if (!reduced) {
      var ro = window.ResizeObserver ? new ResizeObserver(function (es) { es.forEach(function (e) { items.forEach(function (it) { if (it.node === e.target && Math.abs(it.W - e.target.clientWidth) > 2) { build(it); frame(it, true); } }); }); }) : null;
      var vis = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
        es.forEach(function (e) { items.forEach(function (it) { if (it.node === e.target) it.on = e.isIntersecting; }); }); start();
      }) : null;
      items.forEach(function (it) { if (ro) ro.observe(it.node); if (vis) vis.observe(it.node); else it.on = true; });
      if (!vis) start();
    }
  })();

  /* instructors */
  var list = CONFIG.instructors || [], pf = $("#profiles");
  if (list.length > 1) { $("#h-about").textContent = "Meet your instructors"; }
  if (list.length === 1) pf.classList.add("solo");
  list.forEach(function (p, i) {
    var name = p.name || "Your VIVA instructor";
    var ph = el("div", { "class": "ph" });
    var img = el("img", { src: p.photo, alt: p.name ? "Driving instructor " + p.name : "VIVA Driving School instructor", loading: "lazy" });
    img.onerror = function () { img.remove(); ph.append(el("span", { "class": "init", text: name.charAt(0).toUpperCase(), "aria-hidden": "true" })); };
    if (p.photo) ph.append(img);
    var dl = el("dl");
    function row(label, val) { if (val) dl.append(el("div", {}, el("dt", { text: label }), el("dd", { text: val }))); }
    row("Languages", (p.languages || []).join(", "));
    row("Vehicle", p.vehicle);
    row("Qualifications", (p.qualifications || []).join(", "));
    row("Availability", p.availability);
    var body = el("div", { "class": "pbody" }, el("h3", { text: name }), p.bio ? el("p", { text: p.bio }) : null, dl.children.length ? dl : null,
      el("div", { "class": "row" },
        btn("primary", wa(p.whatsapp, "Hi, I'd like to ask about driving lessons" + (p.name ? " with " + p.name : "") + "."), "i-wa", "WhatsApp", true),
        btn("ghost", tel(p.phone), "i-phone", "Call")));
    var card = el("article", { "class": "profile" }, ph, body);
    pf.append(reveal(card, list.length === 1 ? "scale" : (i % 2 ? "right" : "left"), i));
    ph.classList.add("maskph");
  });

  /* lessons */
  var lg = $("#lessonGrid");
  CONFIG.lessons.forEach(function (l, i) {
    lg.append(reveal(el("article", { "class": "card" }, el("h3", { text: l.title }), el("p", { text: l.text }),
      btn("ghost", wa(null, "Hi VIVA Driving School, I'd like to ask about: " + l.title), "i-wa", "Ask about this", true)), "up", i));
  });

  /* prices */
  var pg = $("#priceGrid");
  CONFIG.prices.forEach(function (p, i) {
    var card = el("article", { "class": "card" }, el("h3", { text: p.name }),
      p.price ? el("p", { "class": "amount", text: p.price }) : el("p", { "class": "tbc", text: "Ask for a price" }),
      p.note ? el("p", { "class": "price-note", text: p.note }) : null,
      btn("primary", wa(null, "Hi VIVA Driving School, could you tell me the price for: " + p.name + "?"), "i-wa", "Enquire", true));
    pg.append(reveal(card, "scale", i));
  });

  /* areas, test centres, area select */
  var al = $("#areaList"), sel = $("#areaSelect");
  CONFIG.areas.forEach(function (a, i) {
    al.append(reveal(el("li", { text: a }), i % 2 ? "right" : "left", Math.min(i % 8, 7)));
    sel.append(el("option", { value: a, text: a }));
  });
  sel.append(el("option", { value: "Other", text: "Other" }));
  if (CONFIG.testCentres && CONFIG.testCentres.length) {
    $("#test-centres").hidden = false;
    CONFIG.testCentres.forEach(function (t, i) { $("#tcList").append(reveal(el("li", { text: t }), "up", Math.min(i, 7))); });
  }

  /* FAQs (native details: keyboard accessible) */
  CONFIG.faqs.forEach(function (f, i) {
    $("#faqList").append(reveal(el("details", { name: "faq" }, el("summary", { text: f.q }), el("div", { text: f.a })), "left", Math.min(i, 5)));
  });

  /* passed students marquee */
  var track = $("#track"), set = CONFIG.students || [];
  function stu(s, clone) {
    var f = el("figure", { "class": "stu" }, el("img", { src: s.photo, alt: clone ? "" : (s.alt || "Student who passed their driving test"), loading: "lazy" }),
      el("span", { "class": "pass" }, icon("i-tick"), document.createTextNode("PASSED")));
    f.style.margin = "0 16px 0 0";
    if (clone) f.setAttribute("aria-hidden", "true");
    f.firstChild.onerror = function () { f.remove(); };
    return f;
  }
  if (set.length) {
    if (reduced) { set.forEach(function (s) { track.append(stu(s)); }); }
    else {
      var reps = Math.max(1, Math.ceil(Math.max(screen.width, window.innerWidth) / (set.length * 270)));
      for (var r = 0; r < reps; r++) set.forEach(function (s) { track.append(stu(s, r > 0)); });
      var n = track.children.length;
      for (var c = 0; c < n; c++) track.append(stu(set[c % set.length], true));
      track.style.setProperty("--dur", Math.max(24, n * 6) + "s");
    }
  } else { $("#passed").hidden = true; }
  $("#pause").addEventListener("click", function () {
    var on = $("#marquee").classList.toggle("paused");
    this.setAttribute("aria-pressed", on); this.textContent = on ? "Resume scrolling" : "Pause scrolling";
  });

  /* enquiry form -> WhatsApp */
  var form = $("#enquiry");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = form.name.value.trim();
    form.name.classList.toggle("invalid", !name);
    if (!name) { form.name.focus(); return; }
    var msg = "Hi VIVA Driving School, my name is " + name + "." + (form.area.value ? " I'm in " + form.area.value + "." : "") + (form.msg.value.trim() ? " " + form.msg.value.trim() : " I'd like to ask about driving lessons.");
    window.open(wa(null, msg), "_blank", "noopener");
  });

  /* header, mobile menu, active link */
  var header = $(".site-header"), root = document.documentElement, burger = $(".burger");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 30); }
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  function menu(open) {
    root.classList.toggle("nav-open", open); document.body.classList.toggle("lock", open);
    burger.setAttribute("aria-expanded", open); burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  burger.addEventListener("click", function () { menu(!root.classList.contains("nav-open")); });
  $(".scrim").addEventListener("click", function () { menu(false); });
  $$(".nav a").forEach(function (a) { a.addEventListener("click", function () { menu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && root.classList.contains("nav-open")) { menu(false); burger.focus(); } });
  window.addEventListener("resize", function () { if (window.innerWidth > 1279) menu(false); });

  if ("IntersectionObserver" in window) {
    var links = $$('.nav a[href^="#"]:not(.btn)');
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { var on = a.getAttribute("href") === "#" + en.target.id; a.classList.toggle("active", on); if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current"); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(function (s) { spy.observe(s); });

    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    $$(".reveal").forEach(function (n) { io.observe(n); });
  } else { $$(".reveal").forEach(function (n) { n.classList.add("in"); }); }
})();
