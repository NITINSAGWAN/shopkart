// Practice product catalog with inline SVG illustrations (works offline)
const PRODUCTS = [
  {
    id: 1,
    title: "NovaPhone X12 5G (128 GB)",
    category: "mobiles",
    price: 18999,
    mrp: 24999,
    rating: 4.5,
    reviews: "12,480",
    color: "#2563eb",
    icon: "phone"
  },
  {
    id: 2,
    title: "PixelWave Lite 5G (256 GB)",
    category: "mobiles",
    price: 25499,
    mrp: 31999,
    rating: 4.6,
    reviews: "6,210",
    color: "#0f766e",
    icon: "phone"
  },
  {
    id: 3,
    title: "AeroBook 14 Slim Laptop (16GB RAM)",
    category: "electronics",
    price: 45990,
    mrp: 59990,
    rating: 4.4,
    reviews: "3,415",
    color: "#334155",
    icon: "laptop"
  },
  {
    id: 4,
    title: "BassPro Wireless ANC Headphones",
    category: "electronics",
    price: 2499,
    mrp: 4999,
    rating: 4.3,
    reviews: "18,900",
    color: "#7c3aed",
    icon: "headphones"
  },
  {
    id: 5,
    title: "ChronoFit AMOLED Smartwatch",
    category: "electronics",
    price: 1999,
    mrp: 3999,
    rating: 4.2,
    reviews: "9,120",
    color: "#ea580c",
    icon: "watch"
  },
  {
    id: 6,
    title: "StrideMax Running Sneakers",
    category: "fashion",
    price: 1299,
    mrp: 2799,
    rating: 4.4,
    reviews: "5,640",
    color: "#dc2626",
    icon: "shoe"
  },
  {
    id: 7,
    title: "UrbanWeave Cotton Oversized Tee",
    category: "fashion",
    price: 499,
    mrp: 999,
    rating: 4.1,
    reviews: "8,310",
    color: "#0284c7",
    icon: "shirt"
  },
  {
    id: 8,
    title: "NordicGlow Minimalist Desk Lamp",
    category: "home",
    price: 899,
    mrp: 1599,
    rating: 4.5,
    reviews: "2,180",
    color: "#d97706",
    icon: "lamp"
  },
  {
    id: 9,
    title: "CloudRest Memory Foam Cushion Set",
    category: "home",
    price: 749,
    mrp: 1499,
    rating: 4.3,
    reviews: "4,050",
    color: "#4f46e5",
    icon: "sofa"
  },
  {
    id: 10,
    title: "CineView 43-inch 4K Smart TV",
    category: "appliances",
    price: 22999,
    mrp: 34999,
    rating: 4.6,
    reviews: "7,820",
    color: "#1e293b",
    icon: "tv"
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

const state = {
  category: "all",
  search: "",
  sort: "featured",
  cart: [],
  slideIndex: 0
};

// DOM Elements
const productGrid = document.getElementById("productGrid");
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

const heroTrack = document.getElementById("heroTrack");
const heroDots = document.getElementById("heroDots");
const slidesCount = document.querySelectorAll(".hero-slide").length;

let toastTimer = null;

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
  }, 2200);
}

function getFilteredProducts() {
  const query = state.search.trim().toLowerCase();

  const filtered = PRODUCTS.filter((item) => {
    const matchesCategory = state.category === "all" || item.category === state.category;
    const matchesSearch =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
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

function renderProducts() {
  const items = getFilteredProducts();
  productGrid.innerHTML = "";

  if (items.length === 0) {
    emptyState.hidden = false;
    resultSummary.textContent = "0 products found";
    return;
  }

  emptyState.hidden = true;
  const categoryLabel = state.category === "all" ? "all categories" : state.category;
  resultSummary.textContent = `Showing ${items.length} product${items.length > 1 ? "s" : ""} in ${categoryLabel}`;

  items.forEach((product) => {
    const discount = getDiscountPercent(product.price, product.mrp);
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-thumb">${getProductSvg(product.icon, product.color)}</div>
      <span class="product-category-label">${product.category}</span>
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
      <button type="button" class="add-btn" data-id="${product.id}">Add to Cart</button>
    `;
    productGrid.appendChild(card);
  });
}

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
    row.innerHTML = `
      <div class="cart-item-thumb">${getProductSvg(product.icon, product.color)}</div>
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

function addToCart(productId) {
  const existing = state.cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ id: productId, qty: 1 });
  }
  const product = PRODUCTS.find((p) => p.id === productId);
  renderCart();
  showToast(`Added "${product ? product.title : "item"}" to cart`);
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  cartBackdrop.hidden = false;
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  cartBackdrop.hidden = true;
}

function setCategory(category) {
  state.category = category;
  categoryButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.category === category);
  });
  renderProducts();
}

// Hero Carousel Setup
function updateSlide(index) {
  state.slideIndex = (index + slidesCount) % slidesCount;
  heroTrack.style.transform = `translateX(-${state.slideIndex * 100}%)`;
  document.querySelectorAll(".hero-dot").forEach((dot, idx) => {
    dot.classList.toggle("active", idx === state.slideIndex);
  });
}

function initCarousel() {
  for (let i = 0; i < slidesCount; i += 1) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "hero-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", `Go to banner ${i + 1}`);
    dot.addEventListener("click", () => updateSlide(i));
    heroDots.appendChild(dot);
  }

  document.getElementById("prevSlide").addEventListener("click", () => {
    updateSlide(state.slideIndex - 1);
  });
  document.getElementById("nextSlide").addEventListener("click", () => {
    updateSlide(state.slideIndex + 1);
  });

  setInterval(() => {
    updateSlide(state.slideIndex + 1);
  }, 5000);
}

// Event Listeners
categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => setCategory(btn.dataset.category));
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
  renderProducts();
});

clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  state.search = "";
  clearSearchBtn.hidden = true;
  renderProducts();
  searchInput.focus();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProducts();
});

resetFiltersBtn.addEventListener("click", () => {
  searchInput.value = "";
  state.search = "";
  clearSearchBtn.hidden = true;
  state.sort = "featured";
  sortSelect.value = "featured";
  setCategory("all");
});

productGrid.addEventListener("click", (event) => {
  const btn = event.target.closest(".add-btn");
  if (!btn) return;
  addToCart(Number(btn.dataset.id));
});

cartItemsEl.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-action]");
  if (!btn) return;

  const id = Number(btn.dataset.id);
  const action = btn.dataset.action;
  const entry = state.cart.find((item) => item.id === id);
  if (!entry) return;

  if (action === "inc") {
    entry.qty += 1;
  } else if (action === "dec") {
    entry.qty -= 1;
    if (entry.qty <= 0) {
      state.cart = state.cart.filter((item) => item.id !== id);
    }
  } else if (action === "remove") {
    state.cart = state.cart.filter((item) => item.id !== id);
  }
  renderCart();
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
  state.cart = [];
  renderCart();
  closeCart();
  showToast("Demo order simulated! (Practice mode)");
});

// Initialize
initCarousel();
renderProducts();
renderCart();
