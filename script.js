// Top 10 Global Brands across 5 Categories (5 Series per Category = 25 Products)
const TOP_BRANDS = [
  "Apple",
  "Samsung",
  "Google",
  "OnePlus",
  "Sony",
  "Nike",
  "Adidas",
  "Philips",
  "IKEA",
  "LG"
];

const PRODUCTS = [
  // ================= MOBILES (5 Series) =================
  {
    id: 1,
    brand: "Apple",
    title: "Apple iPhone 16 Pro Series (256 GB)",
    category: "mobiles",
    price: 119900,
    mrp: 134900,
    rating: 4.8,
    reviews: "21,450",
    color: "#334155",
    icon: "phone",
    image: "images/phone-iphone.svg"
  },
  {
    id: 2,
    brand: "Samsung",
    title: "Samsung Galaxy S24 Ultra 5G Series",
    category: "mobiles",
    price: 94999,
    mrp: 129999,
    rating: 4.7,
    reviews: "18,240",
    color: "#2563eb",
    icon: "phone",
    image: "images/phone-nova.jpg"
  },
  {
    id: 3,
    brand: "Google",
    title: "Google Pixel 9 Pro 5G Series (256 GB)",
    category: "mobiles",
    price: 79999,
    mrp: 99999,
    rating: 4.6,
    reviews: "9,180",
    color: "#0f766e",
    icon: "phone",
    image: "images/phone-pixel.jpg"
  },
  {
    id: 4,
    brand: "OnePlus",
    title: "OnePlus 13 Flagship 5G Series (256 GB)",
    category: "mobiles",
    price: 64999,
    mrp: 74999,
    rating: 4.6,
    reviews: "14,620",
    color: "#047857",
    icon: "phone",
    image: "images/phone-oneplus.svg"
  },
  {
    id: 5,
    brand: "Samsung",
    title: "Samsung Galaxy Z Fold6 5G Series",
    category: "mobiles",
    price: 139999,
    mrp: 164999,
    rating: 4.5,
    reviews: "4,920",
    color: "#4f46e5",
    icon: "phone",
    image: "images/phone-fold.svg"
  },

  // ================= ELECTRONICS (5 Series) =================
  {
    id: 6,
    brand: "Apple",
    title: "Apple MacBook Air M3 Series (16GB RAM)",
    category: "electronics",
    price: 104990,
    mrp: 119900,
    rating: 4.8,
    reviews: "11,340",
    color: "#334155",
    icon: "laptop",
    image: "images/laptop-aero.jpg"
  },
  {
    id: 7,
    brand: "Sony",
    title: "Sony WH-1000XM5 Wireless ANC Series",
    category: "electronics",
    price: 24990,
    mrp: 34990,
    rating: 4.7,
    reviews: "22,810",
    color: "#7c3aed",
    icon: "headphones",
    image: "images/headphones-bass.jpg"
  },
  {
    id: 8,
    brand: "Samsung",
    title: "Samsung Galaxy Watch Ultra AMOLED Series",
    category: "electronics",
    price: 44999,
    mrp: 59999,
    rating: 4.5,
    reviews: "6,410",
    color: "#ea580c",
    icon: "watch",
    image: "images/watch-chrono.jpg"
  },
  {
    id: 9,
    brand: "Sony",
    title: "Sony WF-1000XM5 Pro Earbuds Series",
    category: "electronics",
    price: 17990,
    mrp: 24990,
    rating: 4.6,
    reviews: "13,200",
    color: "#0f172a",
    icon: "headphones",
    image: "images/earbuds-sonic.jpg"
  },
  {
    id: 10,
    brand: "LG",
    title: "LG UltraGear 32-inch QHD Monitor Series",
    category: "electronics",
    price: 29990,
    mrp: 42000,
    rating: 4.6,
    reviews: "5,340",
    color: "#1e293b",
    icon: "laptop",
    image: "images/monitor-odyssey.svg"
  },

  // ================= FASHION (5 Series) =================
  {
    id: 11,
    brand: "Nike",
    title: "Nike Air Max Pulse Running Series",
    category: "fashion",
    price: 7995,
    mrp: 13995,
    rating: 4.6,
    reviews: "9,540",
    color: "#dc2626",
    icon: "shoe",
    image: "images/shoe-stride.jpg"
  },
  {
    id: 12,
    brand: "Adidas",
    title: "Adidas Originals Heavy Cotton Tee Series",
    category: "fashion",
    price: 1499,
    mrp: 2999,
    rating: 4.4,
    reviews: "12,110",
    color: "#0284c7",
    icon: "shirt",
    image: "images/shirt-urban.jpg"
  },
  {
    id: 13,
    brand: "Nike",
    title: "Nike Tech Fleece Full-Zip Hoodie Series",
    category: "fashion",
    price: 4995,
    mrp: 8495,
    rating: 4.7,
    reviews: "7,820",
    color: "#334155",
    icon: "shirt",
    image: "images/fashion-hoodie.jpg"
  },
  {
    id: 14,
    brand: "Adidas",
    title: "Adidas Ultraboost Light Sneaker Series",
    category: "fashion",
    price: 9999,
    mrp: 17999,
    rating: 4.6,
    reviews: "11,050",
    color: "#2563eb",
    icon: "shoe",
    image: "images/fashion-adidas-shoe.svg"
  },
  {
    id: 15,
    brand: "Nike",
    title: "Nike Storm-FIT Denim Windrunner Series",
    category: "fashion",
    price: 5499,
    mrp: 8999,
    rating: 4.5,
    reviews: "4,310",
    color: "#1d4ed8",
    icon: "shirt",
    image: "images/fashion-jacket.svg"
  },

  // ================= HOME (5 Series) =================
  {
    id: 16,
    brand: "Philips",
    title: "Philips Hue Nordic Smart Desk Lamp Series",
    category: "home",
    price: 3499,
    mrp: 5499,
    rating: 4.6,
    reviews: "4,280",
    color: "#d97706",
    icon: "lamp",
    image: "images/lamp-nordic.jpg"
  },
  {
    id: 17,
    brand: "IKEA",
    title: "IKEA CloudRest Memory Cushion Series",
    category: "home",
    price: 1299,
    mrp: 2499,
    rating: 4.4,
    reviews: "6,850",
    color: "#4f46e5",
    icon: "sofa",
    image: "images/cushion-cloud.jpg"
  },
  {
    id: 18,
    brand: "IKEA",
    title: "IKEA Strandmon Nordic Lounge Chair Series",
    category: "home",
    price: 14990,
    mrp: 21990,
    rating: 4.7,
    reviews: "3,940",
    color: "#92400e",
    icon: "sofa",
    image: "images/home-chair.svg"
  },
  {
    id: 19,
    brand: "Philips",
    title: "Philips Hue Signe Gradient Floor Lamp",
    category: "home",
    price: 11499,
    mrp: 16999,
    rating: 4.5,
    reviews: "2,190",
    color: "#f59e0b",
    icon: "lamp",
    image: "images/home-floorlamp.svg"
  },
  {
    id: 20,
    brand: "IKEA",
    title: "IKEA Stockholm Walnut Coffee Table Series",
    category: "home",
    price: 8990,
    mrp: 13990,
    rating: 4.6,
    reviews: "3,120",
    color: "#78350f",
    icon: "sofa",
    image: "images/home-table.svg"
  },

  // ================= APPLIANCES (5 Series) =================
  {
    id: 21,
    brand: "LG",
    title: "LG C4 43-inch 4K OLED Smart TV Series",
    category: "appliances",
    price: 74990,
    mrp: 109990,
    rating: 4.8,
    reviews: "8,920",
    color: "#1e293b",
    icon: "tv",
    image: "images/tv-cineview.jpg"
  },
  {
    id: 22,
    brand: "Philips",
    title: "Philips 3000i Smart HEPA Air Purifier",
    category: "appliances",
    price: 16990,
    mrp: 24995,
    rating: 4.7,
    reviews: "5,490",
    color: "#64748b",
    icon: "tv",
    image: "images/purifier-air.jpg"
  },
  {
    id: 23,
    brand: "Samsung",
    title: "Samsung Bespoke Jet Cordless Vacuum Series",
    category: "appliances",
    price: 38990,
    mrp: 54990,
    rating: 4.6,
    reviews: "3,410",
    color: "#0284c7",
    icon: "tv",
    image: "images/appliance-vacuum.svg"
  },
  {
    id: 24,
    brand: "Samsung",
    title: "Samsung EcoBubble 9kg AI Smart Washer",
    category: "appliances",
    price: 36990,
    mrp: 49990,
    rating: 4.6,
    reviews: "7,140",
    color: "#334155",
    icon: "tv",
    image: "images/appliance-washer.svg"
  },
  {
    id: 25,
    brand: "LG",
    title: "LG InstaView 650L French Door Fridge",
    category: "appliances",
    price: 114990,
    mrp: 149990,
    rating: 4.7,
    reviews: "2,870",
    color: "#0f172a",
    icon: "tv",
    image: "images/appliance-fridge.svg"
  }
];

function getProductSvg(icon, color) {
  const icons = {
    phone: `<svg width="76" height="76" viewBox="0 0 64 64" fill="none">
      <rect x="18" y="6" width="28" height="52" rx="5" fill="${color}"/>
      <rect x="21" y="12" width="22" height="38" rx="2" fill="#e0f2fe"/>
      <circle cx="32" cy="53" r="2" fill="#fff"/>
    </svg>`,
    laptop: `<svg width="84" height="84" viewBox="0 0 64 64" fill="none">
      <rect x="10" y="14" width="44" height="28" rx="3" fill="${color}"/>
      <rect x="14" y="18" width="36" height="20" rx="1" fill="#dbeafe"/>
      <path d="M4 44h56l-4 6H8l-4-6z" fill="#64748b"/>
    </svg>`,
    headphones: `<svg width="78" height="78" viewBox="0 0 64 64" fill="none">
      <path d="M14 34v-4a18 18 0 0 1 36 0v4" stroke="${color}" stroke-width="5" stroke-linecap="round"/>
      <rect x="10" y="32" width="10" height="18" rx="4" fill="${color}"/>
      <rect x="44" y="32" width="10" height="18" rx="4" fill="${color}"/>
    </svg>`,
    watch: `<svg width="76" height="76" viewBox="0 0 64 64" fill="none">
      <rect x="24" y="6" width="16" height="12" rx="3" fill="#475569"/>
      <rect x="24" y="46" width="16" height="12" rx="3" fill="#475569"/>
      <rect x="16" y="16" width="32" height="32" rx="8" fill="${color}"/>
      <rect x="20" y="20" width="24" height="24" rx="5" fill="#0f172a"/>
      <path d="M32 26v7l5 3" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    shoe: `<svg width="84" height="84" viewBox="0 0 64 64" fill="none">
      <path d="M10 38c6 0 12-10 18-14l10 10c6 2 14 2 16 8H10v-4z" fill="${color}"/>
      <rect x="10" y="42" width="44" height="6" rx="2" fill="#e2e8f0"/>
    </svg>`,
    shirt: `<svg width="78" height="78" viewBox="0 0 64 64" fill="none">
      <path d="M20 12l6 4h12l6-4 10 8-6 10-4-3v25H20V27l-4 3-6-10 10-8z" fill="${color}"/>
    </svg>`,
    lamp: `<svg width="76" height="76" viewBox="0 0 64 64" fill="none">
      <path d="M20 14h24l6 18H14l6-18z" fill="${color}"/>
      <rect x="30" y="32" width="4" height="18" fill="#475569"/>
      <rect x="20" y="50" width="24" height="5" rx="2" fill="#334155"/>
    </svg>`,
    sofa: `<svg width="82" height="82" viewBox="0 0 64 64" fill="none">
      <rect x="10" y="22" width="44" height="16" rx="4" fill="${color}"/>
      <rect x="6" y="28" width="52" height="16" rx="4" fill="${color}" opacity="0.88"/>
      <rect x="14" y="44" width="4" height="6" fill="#475569"/>
      <rect x="46" y="44" width="4" height="6" fill="#475569"/>
    </svg>`,
    tv: `<svg width="84" height="84" viewBox="0 0 64 64" fill="none">
      <rect x="8" y="14" width="48" height="30" rx="3" fill="${color}"/>
      <rect x="12" y="18" width="40" height="22" rx="1" fill="#38bdf8" opacity="0.35"/>
      <path d="M24 50h16M32 44v6" stroke="#475569" stroke-width="3" stroke-linecap="round"/>
    </svg>`
  };
  return icons[icon] || icons.phone;
}

function handleProductImgError(imgEl) {
  const icon = imgEl.dataset.icon || "phone";
  const color = imgEl.dataset.color || "#2563eb";
  if (imgEl.parentElement) {
    imgEl.parentElement.innerHTML = getProductSvg(icon, color);
  }
}

function createThumbMarkup(product, className = "product-img") {
  return `<img
    src="${product.image}"
    alt="${product.title}"
    class="${className}"
    loading="lazy"
    data-icon="${product.icon}"
    data-color="${product.color}"
    onerror="handleProductImgError(this)"
  />`;
}

const state = {
  category: "all",
  brand: "all",
  search: "",
  sort: "featured",
  cart: [],
  slideIndex: 0,
  user: null,
  orders: [],
  shopProduct: null,
  shopQty: 1
};

// DOM Elements
const productGrid = document.getElementById("productGrid");
const brandList = document.getElementById("brandList");
const emptyState = document.getElementById("emptyState");
const resultSummary = document.getElementById("resultSummary");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const sortSelect = document.getElementById("sortSelect");
const categoryButtons = document.querySelectorAll(".category-item");
const cartBtn = document.getElementById("cartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartBackdrop = document.getElementById("cartBackdrop");
const cartItemsEl = document.getElementById("cartItems");
const cartFooter = document.getElementById("cartFooter");
const cartCountEl = document.getElementById("cartCount");
const drawerCountEl = document.getElementById("drawerCount");
const cartMrpEl = document.getElementById("cartMrp");
const cartSavingsEl = document.getElementById("cartSavings");
const cartTotalEl = document.getElementById("cartTotal");
const clearCartBtn = document.getElementById("clearCartBtn");
const demoOrderBtn = document.getElementById("demoOrderBtn");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const toastEl = document.getElementById("toast");

// Purchased Items Section Elements
const ordersNavBtn = document.getElementById("ordersNavBtn");
const ordersBadgeCount = document.getElementById("ordersBadgeCount");
const purchasedSection = document.getElementById("purchasedSection");
const purchasedSummary = document.getElementById("purchasedSummary");
const purchasedGrid = document.getElementById("purchasedGrid");
const purchasedEmpty = document.getElementById("purchasedEmpty");
const clearOrdersBtn = document.getElementById("clearOrdersBtn");

// Theme & FX Elements
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeLabel = document.getElementById("themeLabel");
const cursorGlow = document.getElementById("cursorGlow");

// Auth & Profile Elements
const signInNavBtn = document.getElementById("signInNavBtn");
const profileMenuWrap = document.getElementById("profileMenuWrap");
const profileMenuBtn = document.getElementById("profileMenuBtn");
const profileAvatar = document.getElementById("profileAvatar");
const profileShortName = document.getElementById("profileShortName");
const profileDropdown = document.getElementById("profileDropdown");
const dropdownUserName = document.getElementById("dropdownUserName");
const dropdownUserEmail = document.getElementById("dropdownUserEmail");
const openProfileBtn = document.getElementById("openProfileBtn");
const dropdownLogoutBtn = document.getElementById("dropdownLogoutBtn");

const authModal = document.getElementById("authModal");
const authBackdrop = document.getElementById("authBackdrop");
const closeAuthBtn = document.getElementById("closeAuthBtn");
const authForm = document.getElementById("authForm");
const authName = document.getElementById("authName");
const authEmail = document.getElementById("authEmail");
const authPhone = document.getElementById("authPhone");
const authAddress = document.getElementById("authAddress");
const quickDemoSignInBtn = document.getElementById("quickDemoSignInBtn");

const profileModal = document.getElementById("profileModal");
const profileBackdrop = document.getElementById("profileBackdrop");
const closeProfileBtn = document.getElementById("closeProfileBtn");
const profileForm = document.getElementById("profileForm");
const profileNameInput = document.getElementById("profileNameInput");
const profileEmailInput = document.getElementById("profileEmailInput");
const profilePhoneInput = document.getElementById("profilePhoneInput");
const profileAddressInput = document.getElementById("profileAddressInput");
const profileCartCount = document.getElementById("profileCartCount");
const profileOrderCount = document.getElementById("profileOrderCount");
const profileOrdersList = document.getElementById("profileOrdersList");
const profileLogoutBtn = document.getElementById("profileLogoutBtn");

// Shop Now Modal Elements
const shopModal = document.getElementById("shopModal");
const shopBackdrop = document.getElementById("shopBackdrop");
const closeShopBtn = document.getElementById("closeShopBtn");
const shopThumb = document.getElementById("shopThumb");
const shopBrand = document.getElementById("shopBrand");
const shopProductTitle = document.getElementById("shopProductTitle");
const shopRating = document.getElementById("shopRating");
const shopCategory = document.getElementById("shopCategory");
const shopPrice = document.getElementById("shopPrice");
const shopMrp = document.getElementById("shopMrp");
const shopDiscount = document.getElementById("shopDiscount");
const shopQtyDec = document.getElementById("shopQtyDec");
const shopQtyVal = document.getElementById("shopQtyVal");
const shopQtyInc = document.getElementById("shopQtyInc");
const shopDeliveryName = document.getElementById("shopDeliveryName");
const shopDeliveryAddress = document.getElementById("shopDeliveryAddress");
const shopTotalSavings = document.getElementById("shopTotalSavings");
const shopTotalAmount = document.getElementById("shopTotalAmount");
const shopAddToCartBtn = document.getElementById("shopAddToCartBtn");
const shopConfirmOrderBtn = document.getElementById("shopConfirmOrderBtn");

// Carousel Elements
const hero = document.querySelector(".hero");
const heroTrack = document.getElementById("heroTrack");
const heroDots = document.getElementById("heroDots");
const slidesCount = document.querySelectorAll(".hero-slide").length;

let toastTimer = null;
let renderTransitionTimer = null;
let cartCloseTimer = null;
let autoSlideTimer = null;

/* =========================================================
   Dark / Light Theme Toggle
   ========================================================= */
function applyTheme(theme, announce = false) {
  document.documentElement.setAttribute("data-theme", theme);
  const isDark = theme === "dark";
  themeToggleBtn.setAttribute("aria-pressed", String(isDark));
  themeToggleBtn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  if (themeLabel) {
    themeLabel.textContent = isDark ? "Light" : "Dark";
  }
  try {
    localStorage.setItem("shopkart-theme", theme);
  } catch (e) {}

  if (announce) {
    showToast(isDark ? "Dark mode enabled" : "Light mode enabled");
  }
}

function initTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  applyTheme(current, false);

  themeToggleBtn.addEventListener("click", () => {
    const nextTheme =
      document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(nextTheme, true);
  });
}

/* =========================================================
   Cursor Blur Light + Button Hover Glow (Enter/Leave) + Click Lag Animation
   ========================================================= */
function initInteractiveEffects() {
  const supportsHover =
    window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (supportsHover && cursorGlow) {
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let hasMoved = false;

    const tick = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      cursorGlow.style.left = `${currentX}px`;
      cursorGlow.style.top = `${currentY}px`;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    document.addEventListener("pointermove", (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!hasMoved) {
        currentX = targetX;
        currentY = targetY;
        hasMoved = true;
      }
      cursorGlow.classList.add("visible");
    });

    document.addEventListener("mouseleave", () => {
      cursorGlow.classList.remove("visible");
    });

    document.addEventListener("pointerdown", () => {
      cursorGlow.classList.add("clicking");
    });

    document.addEventListener("pointerup", () => {
      cursorGlow.classList.remove("clicking");
    });
  }

  let activeBtn = null;

  document.addEventListener("pointerover", (e) => {
    const btn = e.target.closest("button");
    if (!btn || btn === activeBtn) return;
    if (activeBtn) triggerButtonLeave(activeBtn);
    activeBtn = btn;
    btn.classList.remove("is-leaving");
    btn.classList.add("is-hovered");
  });

  document.addEventListener("pointermove", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty("--gx", `${e.clientX - rect.left}px`);
    btn.style.setProperty("--gy", `${e.clientY - rect.top}px`);
  });

  document.addEventListener("pointerout", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    if (e.relatedTarget && btn.contains(e.relatedTarget)) return;
    if (btn === activeBtn) activeBtn = null;
    triggerButtonLeave(btn);
  });

  function triggerButtonLeave(btn) {
    btn.classList.remove("is-hovered");
    btn.classList.add("is-leaving");
    setTimeout(() => {
      btn.classList.remove("is-leaving");
    }, 380);
  }

  document.addEventListener("pointerdown", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    btn.classList.add("is-pressing");
  });

  document.addEventListener("pointerup", () => {
    document.querySelectorAll("button.is-pressing").forEach((b) => {
      b.classList.remove("is-pressing");
    });
  });

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    btn.classList.remove("is-pressing", "is-clicked");
    void btn.offsetWidth;
    btn.classList.add("is-clicked");
    setTimeout(() => btn.classList.remove("is-clicked"), 490);

    spawnRipple(btn, e);
  });
}

function spawnRipple(btn, event) {
  let host = btn.querySelector(":scope > .ripple-host");
  if (!host) {
    host = document.createElement("span");
    host.className = "ripple-host";
    host.setAttribute("aria-hidden", "true");
    btn.appendChild(host);
  }

  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 1.1;
  const x = event.clientX ? event.clientX - rect.left : rect.width / 2;
  const y = event.clientY ? event.clientY - rect.top : rect.height / 2;

  const ripple = document.createElement("span");
  ripple.className = "btn-ripple";
  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  host.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
}

/* =========================================================
   Modal Helpers (Smooth Enter & Leave)
   ========================================================= */
function openModal(modal, backdrop) {
  clearTimeout(modal._closeTimer);
  backdrop.hidden = false;
  modal.hidden = false;
  requestAnimationFrame(() => {
    backdrop.classList.add("open");
    modal.classList.add("open");
  });
}

function closeModal(modal, backdrop) {
  backdrop.classList.remove("open");
  modal.classList.remove("open");
  clearTimeout(modal._closeTimer);
  modal._closeTimer = setTimeout(() => {
    backdrop.hidden = true;
    modal.hidden = true;
  }, 290);
}

/* =========================================================
   Account: Sign In, Manage Profile, Log Out
   ========================================================= */
function loadAccountState() {
  try {
    const savedUser = localStorage.getItem("shopkart-user");
    const savedOrders = localStorage.getItem("shopkart-orders");
    if (savedUser) state.user = JSON.parse(savedUser);
    if (savedOrders) state.orders = JSON.parse(savedOrders) || [];
  } catch (e) {
    state.user = null;
    state.orders = [];
  }
}

function saveAccountState() {
  try {
    if (state.user) {
      localStorage.setItem("shopkart-user", JSON.stringify(state.user));
    } else {
      localStorage.removeItem("shopkart-user");
    }
    localStorage.setItem("shopkart-orders", JSON.stringify(state.orders));
  } catch (e) {}
}

function renderAuthUI() {
  const isSignedIn = Boolean(state.user);
  signInNavBtn.hidden = isSignedIn;
  profileMenuWrap.hidden = !isSignedIn;

  if (isSignedIn) {
    const name = state.user.name || "Demo User";
    const firstName = name.trim().split(/\s+/)[0] || "User";
    const initials = name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join("");
    profileAvatar.textContent = initials || "U";
    profileShortName.textContent = firstName;
    dropdownUserName.textContent = name;
    dropdownUserEmail.textContent = state.user.email || "";
  } else {
    profileDropdown.hidden = true;
    profileMenuBtn.setAttribute("aria-expanded", "false");
  }
}

function signInUser(profile) {
  state.user = {
    name: profile.name.trim(),
    email: profile.email.trim(),
    phone: (profile.phone || "").trim(),
    address: (profile.address || "").trim()
  };
  saveAccountState();
  renderAuthUI();
  closeModal(authModal, authBackdrop);
  showToast(`Welcome, ${state.user.name}!`);
}

function logOutUser() {
  state.user = null;
  saveAccountState();
  renderAuthUI();
  if (!profileModal.hidden) {
    closeModal(profileModal, profileBackdrop);
  }
  showToast("Logged out successfully");
}

function openManageProfileModal() {
  if (!state.user) {
    openModal(authModal, authBackdrop);
    return;
  }
  profileDropdown.hidden = true;
  profileMenuBtn.setAttribute("aria-expanded", "false");

  profileNameInput.value = state.user.name || "";
  profileEmailInput.value = state.user.email || "";
  profilePhoneInput.value = state.user.phone || "";
  profileAddressInput.value = state.user.address || "";

  const totalCartItems = state.cart.reduce((sum, entry) => sum + entry.qty, 0);
  profileCartCount.textContent = String(totalCartItems);
  profileOrderCount.textContent = String(state.orders.length);

  if (state.orders.length === 0) {
    profileOrdersList.innerHTML = `<div class="orders-empty">No demo orders placed yet. Try "Shop Now" on any product!</div>`;
  } else {
    profileOrdersList.innerHTML = state.orders
      .slice(0, 6)
      .map(
        (ord) => `
        <div class="order-row">
          <div>
            <strong>${ord.title}</strong>
            <div><span>Qty: ${ord.qty} • ${ord.date}</span></div>
          </div>
          <strong>${formatINR(ord.total)}</strong>
        </div>`
      )
      .join("");
  }

  openModal(profileModal, profileBackdrop);
}

function recordDemoOrder(product, qty, total, recipient = "", address = "") {
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  state.orders.unshift({
    productId: product.id,
    brand: product.brand,
    category: product.category,
    title: product.title,
    image: product.image,
    icon: product.icon,
    color: product.color,
    qty,
    total,
    recipient: recipient || (state.user ? state.user.name : "Guest"),
    address: address || (state.user ? state.user.address : "Standard Demo Delivery"),
    date: dateStr
  });
  state.orders = state.orders.slice(0, 30);
  saveAccountState();
  renderPurchasedSection();
}

function renderPurchasedSection() {
  const count = state.orders.length;
  ordersBadgeCount.textContent = String(count);
  clearOrdersBtn.hidden = count === 0;

  purchasedGrid.innerHTML = "";
  if (count === 0) {
    purchasedEmpty.hidden = false;
    purchasedSummary.textContent = "Items you purchase via Shop Now or Cart Checkout appear here";
    return;
  }

  purchasedEmpty.hidden = true;
  const totalSpent = state.orders.reduce((sum, ord) => sum + (ord.total || 0), 0);
  purchasedSummary.textContent = `${count} purchased item${count > 1 ? "s" : ""} • Total value ${formatINR(totalSpent)}`;

  state.orders.forEach((ord, idx) => {
    const fallbackProduct = PRODUCTS.find((p) => p.id === ord.productId) || {
      id: ord.productId,
      brand: ord.brand || "ShopKart",
      category: ord.category || "deals",
      title: ord.title,
      image: ord.image || "images/phone-nova.jpg",
      icon: ord.icon || "phone",
      color: ord.color || "#2563eb"
    };

    const card = document.createElement("article");
    card.className = "purchased-card";
    card.style.setProperty("--stagger", String(idx));
    card.innerHTML = `
      <div class="purchased-top">
        <div class="purchased-thumb">${createThumbMarkup(fallbackProduct)}</div>
        <div class="purchased-info">
          <span class="purchased-badge">Purchased ✓</span>
          <h3 class="purchased-title">${ord.title}</h3>
          <div class="purchased-meta">${fallbackProduct.brand} • Qty: ${ord.qty} • ${ord.date}</div>
          <div class="purchased-price">${formatINR(ord.total)}</div>
        </div>
      </div>
      <div class="purchased-delivery">
        Deliver to: <strong>${ord.recipient || "Guest"}</strong>${ord.address ? ` — ${ord.address}` : ""}
      </div>
      <div class="purchased-actions">
        <button type="button" class="btn-outline buy-again-btn" data-id="${fallbackProduct.id}">Add Again</button>
        <button type="button" class="btn-primary shop-again-btn" data-id="${fallbackProduct.id}">Shop Again</button>
      </div>
    `;
    purchasedGrid.appendChild(card);
  });
}

/* =========================================================
   Shop Now / Quick Order Modal
   ========================================================= */
function openShopModal(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  state.shopProduct = product;
  state.shopQty = 1;

  shopThumb.innerHTML = createThumbMarkup(product);
  shopBrand.textContent = product.brand;
  shopProductTitle.textContent = product.title;
  shopRating.textContent = `${product.rating} ★`;
  shopCategory.textContent = product.category.toUpperCase();
  shopPrice.textContent = formatINR(product.price);
  shopMrp.textContent = formatINR(product.mrp);
  shopDiscount.textContent = `${getDiscountPercent(product.price, product.mrp)}% off`;

  shopDeliveryName.value = state.user ? state.user.name : "";
  shopDeliveryAddress.value = state.user ? state.user.address : "";

  updateShopSummary();
  openModal(shopModal, shopBackdrop);
}

function updateShopSummary() {
  if (!state.shopProduct) return;
  const qty = state.shopQty;
  const p = state.shopProduct;
  shopQtyVal.textContent = String(qty);
  shopTotalAmount.textContent = formatINR(p.price * qty);
  shopTotalSavings.textContent = formatINR((p.mrp - p.price) * qty);
}

/* =========================================================
   Catalog Rendering & Filtering
   ========================================================= */
function formatINR(amount) {
  return "₹" + amount.toLocaleString("en-IN");
}

function getDiscountPercent(price, mrp) {
  return Math.round(((mrp - price) / mrp) * 100);
}

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove("show");
  }, 2400);
}

function initBrandBar() {
  const brands = ["all", ...TOP_BRANDS];
  brandList.innerHTML = "";
  brands.forEach((brand) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "brand-chip" + (brand === state.brand ? " active" : "");
    btn.dataset.brand = brand;
    btn.textContent = brand === "all" ? "All Brands (10)" : brand;
    brandList.appendChild(btn);
  });
}

function setBrand(brand) {
  state.brand = brand;
  brandList.querySelectorAll(".brand-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.brand === brand);
  });
  renderProducts(true);
}

function getFilteredProducts() {
  const query = state.search.trim().toLowerCase();

  const filtered = PRODUCTS.filter((item) => {
    const matchesCategory = state.category === "all" || item.category === state.category;
    const matchesBrand = state.brand === "all" || item.brand === state.brand;
    const matchesSearch =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.brand.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);
    return matchesCategory && matchesBrand && matchesSearch;
  });

  if (state.sort === "price-asc") {
    return [...filtered].sort((a, b) => a.price - b.price);
  }
  if (state.sort === "price-desc") {
    return [...filtered].sort((a, b) => b.price - a.price);
  }
  if (state.sort === "rating-desc") {
    return [...filtered].sort((a, b) => b.rating - a.rating);
  }
  return filtered;
}

function buildAndMountProducts() {
  const items = getFilteredProducts();
  productGrid.innerHTML = "";

  if (items.length === 0) {
    emptyState.hidden = false;
    resultSummary.textContent = "0 products found";
    return;
  }

  emptyState.hidden = true;
  const categoryLabel = state.category === "all" ? "all deals" : state.category;
  const brandLabel = state.brand === "all" ? "top 10 brands" : state.brand;
  resultSummary.textContent = `Showing ${items.length} series in ${categoryLabel} • ${brandLabel}`;

  items.forEach((product, idx) => {
    const discount = getDiscountPercent(product.price, product.mrp);
    const card = document.createElement("article");
    card.className = "product-card";
    card.style.setProperty("--stagger", String(idx));
    card.innerHTML = `
      <div class="product-thumb">${createThumbMarkup(product)}</div>
      <div class="product-meta-top">
        <span class="product-brand-pill">${product.brand}</span>
        <span class="product-category-label">${product.category}</span>
      </div>
      <h3 class="product-title">${product.title}</h3>
      <div class="rating-row">
        <span class="rating-pill">${product.rating} ★</span>
        <span class="rating-count">(${product.reviews})</span>
      </div>
      <div class="price-block">
        <span class="price-current">${formatINR(product.price)}</span>
        <span class="price-mrp">${formatINR(product.mrp)}</span>
        <span class="price-off">${discount}% off</span>
      </div>
      <div class="card-actions">
        <button type="button" class="add-btn" data-id="${product.id}">Add to Cart</button>
        <button type="button" class="shop-btn" data-id="${product.id}">Shop Now</button>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

function renderProducts(animateExit = false) {
  clearTimeout(renderTransitionTimer);
  const existingCards = productGrid.querySelectorAll(".product-card");

  if (!animateExit || existingCards.length === 0) {
    buildAndMountProducts();
    return;
  }

  existingCards.forEach((card) => card.classList.add("is-leaving"));
  renderTransitionTimer = setTimeout(buildAndMountProducts, 150);
}

/* =========================================================
   Cart Rendering & Operations
   ========================================================= */
function renderCart() {
  const totalQty = state.cart.reduce((sum, entry) => sum + entry.qty, 0);
  cartCountEl.textContent = String(totalQty);
  drawerCountEl.textContent = String(totalQty);

  cartItemsEl.innerHTML = "";

  if (state.cart.length === 0) {
    cartFooter.hidden = true;
    cartItemsEl.innerHTML = `
      <div class="cart-empty">
        <p><strong>Your cart is empty</strong></p>
        <p>Add items from the catalog to test the cart UI.</p>
      </div>
    `;
    return;
  }

  cartFooter.hidden = false;
  let totalMrp = 0;
  let totalPrice = 0;

  state.cart.forEach((entry) => {
    const product = PRODUCTS.find((p) => p.id === entry.id);
    if (!product) return;

    totalMrp += product.mrp * entry.qty;
    totalPrice += product.price * entry.qty;

    const row = document.createElement("div");
    row.className = "cart-item";
    row.dataset.id = String(product.id);
    row.innerHTML = `
      <div class="cart-item-thumb">${createThumbMarkup(product, "cart-img")}</div>
      <div class="cart-item-info">
        <div class="cart-item-title">${product.title}</div>
        <div class="cart-item-price">${formatINR(product.price * entry.qty)}</div>
        <div class="qty-controls">
          <button type="button" class="qty-btn" data-action="dec" data-id="${product.id}" aria-label="Decrease quantity">-</button>
          <span>${entry.qty}</span>
          <button type="button" class="qty-btn" data-action="inc" data-id="${product.id}" aria-label="Increase quantity">+</button>
          <button type="button" class="remove-link" data-action="remove" data-id="${product.id}">Remove</button>
        </div>
      </div>
    `;
    cartItemsEl.appendChild(row);
  });

  cartMrpEl.textContent = formatINR(totalMrp);
  cartSavingsEl.textContent = "-" + formatINR(totalMrp - totalPrice);
  cartTotalEl.textContent = formatINR(totalPrice);
}

function addToCart(productId, triggerBtn = null, qtyToAdd = 1) {
  const existing = state.cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += qtyToAdd;
  } else {
    state.cart.push({ id: productId, qty: qtyToAdd });
  }
  const product = PRODUCTS.find((p) => p.id === productId);
  renderCart();

  cartCountEl.classList.add("bump");
  setTimeout(() => cartCountEl.classList.remove("bump"), 280);

  if (triggerBtn) {
    triggerBtn.textContent = "Added ✓";
    triggerBtn.classList.add("added-pulse");
    clearTimeout(triggerBtn._addedTimer);
    triggerBtn._addedTimer = setTimeout(() => {
      triggerBtn.textContent = "Add to Cart";
      triggerBtn.classList.remove("added-pulse");
    }, 750);
  }

  showToast(`Added "${product ? product.title : "item"}" to cart`);
}

function openCart() {
  clearTimeout(cartCloseTimer);
  cartBackdrop.hidden = false;
  requestAnimationFrame(() => {
    cartBackdrop.classList.add("open");
    cartDrawer.classList.add("open");
  });
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartBackdrop.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  clearTimeout(cartCloseTimer);
  cartCloseTimer = setTimeout(() => {
    cartBackdrop.hidden = true;
  }, 300);
}

function setCategory(category) {
  state.category = category;
  categoryButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.category === category);
  });
  renderProducts(true);
}

/* =========================================================
   Hero Carousel Setup
   ========================================================= */
function updateSlide(index) {
  state.slideIndex = (index + slidesCount) % slidesCount;
  heroTrack.style.transform = `translateX(-${state.slideIndex * 100}%)`;
  document.querySelectorAll(".hero-dot").forEach((dot, idx) => {
    dot.classList.toggle("active", idx === state.slideIndex);
  });
}

function startAutoSlide() {
  clearInterval(autoSlideTimer);
  autoSlideTimer = setInterval(() => {
    updateSlide(state.slideIndex + 1);
  }, 5000);
}

function initCarousel() {
  for (let i = 0; i < slidesCount; i += 1) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "hero-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", `Go to banner ${i + 1}`);
    dot.addEventListener("click", () => {
      updateSlide(i);
      startAutoSlide();
    });
    heroDots.appendChild(dot);
  }

  document.getElementById("prevSlide").addEventListener("click", () => {
    updateSlide(state.slideIndex - 1);
    startAutoSlide();
  });
  document.getElementById("nextSlide").addEventListener("click", () => {
    updateSlide(state.slideIndex + 1);
    startAutoSlide();
  });

  if (hero) {
    hero.addEventListener("mouseenter", () => clearInterval(autoSlideTimer));
    hero.addEventListener("mouseleave", startAutoSlide);
  }

  startAutoSlide();
}

/* =========================================================
   Event Listeners
   ========================================================= */
categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => setCategory(btn.dataset.category));
});

brandList.addEventListener("click", (event) => {
  const chip = event.target.closest(".brand-chip");
  if (!chip) return;
  setBrand(chip.dataset.brand);
});

document.querySelectorAll(".hero-cta").forEach((btn) => {
  btn.addEventListener("click", () => {
    setCategory(btn.dataset.filter);
    document.querySelector(".catalog-card").scrollIntoView({ behavior: "smooth" });
  });
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  clearSearchBtn.hidden = state.search.length === 0;
  renderProducts(false);
});

clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  state.search = "";
  clearSearchBtn.hidden = true;
  renderProducts(true);
  searchInput.focus();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProducts(true);
});

resetFiltersBtn.addEventListener("click", () => {
  searchInput.value = "";
  state.search = "";
  clearSearchBtn.hidden = true;
  state.sort = "featured";
  sortSelect.value = "featured";
  state.brand = "all";
  brandList.querySelectorAll(".brand-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.brand === "all");
  });
  setCategory("all");
});

productGrid.addEventListener("click", (event) => {
  const addBtn = event.target.closest(".add-btn");
  if (addBtn) {
    addToCart(Number(addBtn.dataset.id), addBtn);
    return;
  }
  const shopBtn = event.target.closest(".shop-btn");
  if (shopBtn) {
    openShopModal(Number(shopBtn.dataset.id));
  }
});

// Cart Listeners
cartItemsEl.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-action]");
  if (!btn) return;

  const id = Number(btn.dataset.id);
  const action = btn.dataset.action;
  const entry = state.cart.find((item) => item.id === id);
  if (!entry) return;

  const removeWithAnimation = () => {
    const row = btn.closest(".cart-item");
    state.cart = state.cart.filter((item) => item.id !== id);
    if (row) {
      row.classList.add("is-removing");
      setTimeout(renderCart, 220);
    } else {
      renderCart();
    }
  };

  if (action === "inc") {
    entry.qty += 1;
    renderCart();
  } else if (action === "dec") {
    entry.qty -= 1;
    if (entry.qty <= 0) {
      removeWithAnimation();
    } else {
      renderCart();
    }
  } else if (action === "remove") {
    removeWithAnimation();
  }
});

cartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
cartBackdrop.addEventListener("click", closeCart);

clearCartBtn.addEventListener("click", () => {
  state.cart = [];
  renderCart();
  showToast("Cart cleared");
});

demoOrderBtn.addEventListener("click", () => {
  if (state.cart.length === 0) return;

  const recipient = state.user ? state.user.name : "Guest";
  const address = state.user ? state.user.address : "Standard Demo Delivery";

  [...state.cart].reverse().forEach((entry) => {
    const product = PRODUCTS.find((p) => p.id === entry.id);
    if (product) {
      recordDemoOrder(product, entry.qty, product.price * entry.qty, recipient, address);
    }
  });

  state.cart = [];
  renderCart();
  closeCart();
  showToast("Order placed! Added to Purchased Items section.");
});

// Shop Now Modal Listeners
closeShopBtn.addEventListener("click", () => closeModal(shopModal, shopBackdrop));
shopBackdrop.addEventListener("click", () => closeModal(shopModal, shopBackdrop));

shopQtyDec.addEventListener("click", () => {
  if (state.shopQty > 1) {
    state.shopQty -= 1;
    updateShopSummary();
  }
});

shopQtyInc.addEventListener("click", () => {
  if (state.shopQty < 10) {
    state.shopQty += 1;
    updateShopSummary();
  }
});

shopAddToCartBtn.addEventListener("click", () => {
  if (!state.shopProduct) return;
  addToCart(state.shopProduct.id, null, state.shopQty);
  closeModal(shopModal, shopBackdrop);
});

shopConfirmOrderBtn.addEventListener("click", () => {
  if (!state.shopProduct) return;
  const p = state.shopProduct;
  const total = p.price * state.shopQty;
  const recipient = shopDeliveryName.value.trim() || (state.user ? state.user.name : "Guest");
  const address = shopDeliveryAddress.value.trim() || (state.user ? state.user.address : "Standard Demo Delivery");
  recordDemoOrder(p, state.shopQty, total, recipient, address);
  closeModal(shopModal, shopBackdrop);
  showToast(`Purchased ${p.title} (${formatINR(total)})!`);
});

// Purchased Section Listeners
ordersNavBtn.addEventListener("click", () => {
  purchasedSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

clearOrdersBtn.addEventListener("click", () => {
  state.orders = [];
  saveAccountState();
  renderPurchasedSection();
  showToast("Purchase history cleared");
});

purchasedGrid.addEventListener("click", (event) => {
  const buyAgainBtn = event.target.closest(".buy-again-btn");
  if (buyAgainBtn) {
    addToCart(Number(buyAgainBtn.dataset.id), null, 1);
    return;
  }
  const shopAgainBtn = event.target.closest(".shop-again-btn");
  if (shopAgainBtn) {
    openShopModal(Number(shopAgainBtn.dataset.id));
  }
});

// Auth & Profile Listeners
signInNavBtn.addEventListener("click", () => {
  openModal(authModal, authBackdrop);
});

closeAuthBtn.addEventListener("click", () => closeModal(authModal, authBackdrop));
authBackdrop.addEventListener("click", () => closeModal(authModal, authBackdrop));

quickDemoSignInBtn.addEventListener("click", () => {
  signInUser({
    name: "Aarav Sharma",
    email: "aarav.sharma@shopkart.demo",
    phone: "+91 98765 43210",
    address: "42 MG Road, Bengaluru 560001"
  });
});

authForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!authName.value.trim() || !authEmail.value.trim()) return;
  signInUser({
    name: authName.value,
    email: authEmail.value,
    phone: authPhone.value,
    address: authAddress.value
  });
  authForm.reset();
});

profileMenuBtn.addEventListener("click", () => {
  const willOpen = profileDropdown.hidden;
  profileDropdown.hidden = !willOpen;
  profileMenuBtn.setAttribute("aria-expanded", String(willOpen));
});

document.addEventListener("click", (event) => {
  if (!profileMenuWrap.hidden && !profileMenuWrap.contains(event.target)) {
    profileDropdown.hidden = true;
    profileMenuBtn.setAttribute("aria-expanded", "false");
  }
});

openProfileBtn.addEventListener("click", openManageProfileModal);
dropdownLogoutBtn.addEventListener("click", logOutUser);
profileLogoutBtn.addEventListener("click", logOutUser);

closeProfileBtn.addEventListener("click", () => closeModal(profileModal, profileBackdrop));
profileBackdrop.addEventListener("click", () => closeModal(profileModal, profileBackdrop));

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!state.user) return;
  state.user = {
    name: profileNameInput.value.trim() || state.user.name,
    email: profileEmailInput.value.trim() || state.user.email,
    phone: profilePhoneInput.value.trim(),
    address: profileAddressInput.value.trim()
  };
  saveAccountState();
  renderAuthUI();
  closeModal(profileModal, profileBackdrop);
  showToast("Profile updated successfully");
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (cartDrawer.classList.contains("open")) closeCart();
  if (!shopModal.hidden) closeModal(shopModal, shopBackdrop);
  if (!authModal.hidden) closeModal(authModal, authBackdrop);
  if (!profileModal.hidden) closeModal(profileModal, profileBackdrop);
  if (!profileDropdown.hidden) {
    profileDropdown.hidden = true;
    profileMenuBtn.setAttribute("aria-expanded", "false");
  }
});

// Initialize
loadAccountState();
initTheme();
initInteractiveEffects();
initCarousel();
initBrandBar();
renderAuthUI();
renderProducts(false);
renderCart();
renderPurchasedSection();
