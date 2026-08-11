/**
 * Attil Mangalore - Non Veg Hotel
 * Interactive UI Logic, Hero Slider, Menu Engine & WhatsApp Checkout
 */

// ==========================================
// 1. Menu Database (Mangalore Authentic Items)
// ==========================================
const MENU_DATA = [
  {
    id: 1,
    name: 'Attil Special Chicken Dum Biryani',
    category: 'biryani',
    price: 220,
    tag: 'Non Veg • Bestseller • Basmati & Tender Chicken',
    desc: 'Fragrant basmati rice layered with juicy marinated chicken pieces, roasted onions, and secret coastal spices.'
  },
  {
    id: 2,
    name: 'Attil Mutton Biryani (Dum)',
    category: 'biryani',
    price: 320,
    tag: 'Non Veg • Chef Special • Tender Baby Mutton',
    desc: 'Slow-cooked succulent mutton chunks infused with rich saffron-spiced long-grain rice.'
  },
  {
    id: 3,
    name: 'Egg Biryani (2 Eggs)',
    category: 'biryani',
    price: 160,
    tag: 'Non Veg • Popular',
    desc: 'Fragrant biryani rice served with two seasoned boiled and spiced eggs and raita.'
  },
  {
    id: 4,
    name: 'Authentic Mangalorean Chicken Curry',
    category: 'chicken',
    price: 190,
    tag: 'Non Veg • Rich Spices • Medium Spicy',
    desc: 'Traditional coastal chicken gravy cooked with coconut milk, whole red chilies, and roasted coriander.'
  },
  {
    id: 5,
    name: 'Kundapura Chicken Ghee Roast',
    category: 'chicken',
    price: 260,
    tag: 'Non Veg • Specialty • Pure Cow Ghee',
    desc: 'Signature chicken roasted to perfection in pure aromatic cow ghee and fiery Byadgi masala paste.'
  },
  {
    id: 6,
    name: 'Attil Chicken Sukka (Kori Sukka)',
    category: 'chicken',
    price: 230,
    tag: 'Non Veg • Bunt Specialty',
    desc: 'Dry spiced chicken coated with freshly roasted grated coconut, garlic, and curry leaves.'
  },
  {
    id: 7,
    name: 'Mangalore Mutton Curry',
    category: 'mutton',
    price: 290,
    tag: 'Non Veg • Signature Gravy',
    desc: 'Tender bone-in mutton slow-simmered in rich rustic gravy with freshly ground spices.'
  },
  {
    id: 8,
    name: 'Mutton Sukka Masala',
    category: 'mutton',
    price: 320,
    tag: 'Non Veg • Chef Recommendation',
    desc: 'Dry roasted mutton pieces tossed with toasted coconut, black pepper, and curry leaves.'
  },
  {
    id: 9,
    name: 'Anjal (Kingfish) Tawa Fry',
    category: 'seafood',
    price: 280,
    tag: 'Non Veg • Coastal Fresh • Catch of the Day',
    desc: 'Fresh Kingfish slice coated with spicy Mangalorean red chili masala and pan-fried on tawa.'
  },
  {
    id: 10,
    name: 'Mangalorean Prawns Ghee Roast',
    category: 'seafood',
    price: 310,
    tag: 'Non Veg • Coastal Delicacy • Pure Ghee',
    desc: 'Fresh coastal prawns tossed in authentic Byadgi chili paste, garlic, and rich cow ghee.'
  },
  {
    id: 11,
    name: 'White Pomfret Rava Fry',
    category: 'seafood',
    price: 340,
    tag: 'Non Veg • Crispy Rava Crust',
    desc: 'Whole fresh White Pomfret marinated with coastal spices and crisp semolina rava crust.'
  },
  {
    id: 12,
    name: 'Coastal Crab Sukka / Masala',
    category: 'seafood',
    price: 290,
    tag: 'Non Veg • Fresh Sea Crab',
    desc: 'Sea crab cooked with roasted grated coconut, fennel seeds, black pepper, and curry leaves.'
  },
  {
    id: 13,
    name: 'Squid (Calamari) Pepper Fry',
    category: 'seafood',
    price: 240,
    tag: 'Non Veg • Crispy & Peppery',
    desc: 'Tender squid rings stir-fried with crushed black peppercorns, curry leaves, and green chilies.'
  },
  {
    id: 14,
    name: 'Crispy Chicken Kabab (Chicken 65)',
    category: 'starters',
    price: 180,
    tag: 'Non Veg • Crispy • 8 Pcs',
    desc: 'Boneless tender chicken cubes marinated in spicy batter and deep-fried to crispy perfection.'
  },
  {
    id: 15,
    name: 'Chicken Pepper Fry',
    category: 'starters',
    price: 210,
    tag: 'Non Veg • Crushed Black Pepper',
    desc: 'Wok-tossed chicken bites with crushed Malabar black peppercorns and green chilies.'
  },
  {
    id: 16,
    name: 'Attil Special Kori Rotti (Set)',
    category: 'breads',
    price: 210,
    tag: 'Non Veg Combo • Traditional',
    desc: 'Crisp sun-dried rice wafers served with generous bowl of steaming rich chicken curry.'
  },
  {
    id: 17,
    name: 'Soft Neer Dosa (Set of 4)',
    category: 'breads',
    price: 60,
    tag: 'Traditional Rice Crepes',
    desc: 'Paper-thin delicate Mangalorean water dosas, best paired with chicken or mutton curry.'
  },
  {
    id: 18,
    name: 'Kerala Parotta (Layered)',
    category: 'breads',
    price: 25,
    tag: 'Flaky & Soft',
    desc: 'Multi-layered flaky parotta prepared fresh on hot griddle.'
  }
];

// Order Cart State
let orderCart = [];

// ==========================================
// 2. Hero Carousel Logic
// ==========================================
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.hero-dot');
let heroSlideInterval = null;

function showSlide(index) {
  if (!slides.length) return;
  
  if (index >= slides.length) currentSlideIndex = 0;
  else if (index < 0) currentSlideIndex = slides.length - 1;
  else currentSlideIndex = index;

  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === currentSlideIndex);
  });

  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentSlideIndex);
    dot.setAttribute('aria-selected', idx === currentSlideIndex ? 'true' : 'false');
  });
}

function goToSlide(index) {
  showSlide(index);
  resetHeroTimer();
}

function nextHeroSlide() {
  showSlide(currentSlideIndex + 1);
}

function startHeroTimer() {
  if (heroSlideInterval) clearInterval(heroSlideInterval);
  heroSlideInterval = setInterval(nextHeroSlide, 7000);
}

function resetHeroTimer() {
  clearInterval(heroSlideInterval);
  startHeroTimer();
}

// ==========================================
// 3. Modals Management
// ==========================================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function closeModalOnOutsideClick(event, modalId) {
  if (event.target.id === modalId) {
    closeModal(modalId);
  }
}

// Open Specific Modals
function openMenuModal(e) {
  if (e) e.preventDefault();
  renderMenuGrid('all');
  openModal('menuModal');
}

function openOrderModal() {
  updateOrderSummaryInForm();
  openModal('orderModal');
}

function openSpecialtiesModal(e) {
  if (e) e.preventDefault();
  openModal('specialtiesModal');
}

function openGalleryModal(e) {
  if (e) e.preventDefault();
  openModal('galleryModal');
}

function openAboutModal() {
  openModal('aboutModal');
}

function openContactModal(e) {
  if (e) e.preventDefault();
  openModal('contactModal');
}

function scrollToSection(sectionId) {
  const sec = document.getElementById(sectionId);
  if (sec) {
    sec.scrollIntoView({ behavior: 'smooth' });
  }
}

// ESC Key listener to close active modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const activeModals = document.querySelectorAll('.modal-overlay.active');
    activeModals.forEach((m) => closeModal(m.id));
    
    const drawer = document.getElementById('mobileDrawer');
    if (drawer && drawer.classList.contains('active')) {
      toggleMobileMenu();
    }
  }
});

// ==========================================
// 4. Menu Rendering & Filtering
// ==========================================
function renderMenuGrid(category) {
  const container = document.getElementById('menuGridContainer');
  if (!container) return;

  const filtered = category === 'all' 
    ? MENU_DATA 
    : MENU_DATA.filter(item => item.category === category);

  container.innerHTML = filtered.map(item => `
    <div class="menu-card-item">
      <div>
        <div class="menu-card-top">
          <h4 class="menu-item-name">${item.name}</h4>
          <span class="menu-item-price">₹${item.price}</span>
        </div>
        <span class="menu-item-tag">${item.tag}</span>
        <p style="font-size: 11.5px; color: #6b7280; margin-bottom: 8px; line-height: 1.4;">${item.desc}</p>
      </div>
    </div>
  `).join('');
}

function filterMenuCategory(category, buttonEl) {
  const buttons = document.querySelectorAll('.menu-tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (buttonEl) buttonEl.classList.add('active');
  
  renderMenuGrid(category);
}

// ==========================================
// 5. Cart & Quick Order System
// ==========================================
function addItemToCart(itemId) {
  const item = MENU_DATA.find(i => i.id === itemId);
  if (!item) return;

  const existing = orderCart.find(i => i.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    orderCart.push({ ...item, qty: 1 });
  }

  updateCartBadge();
  showToast(`Added "${item.name}" to order!`);
}

function quickOrderItem(name, price) {
  const existing = orderCart.find(i => i.name.toLowerCase().includes(name.toLowerCase()));
  if (existing) {
    existing.qty += 1;
  } else {
    orderCart.push({ id: Date.now(), name: name, price: price, qty: 1 });
  }
  updateCartBadge();
  showToast(`Added "${name}" to your order! Click 'Order Now' to complete.`);
}

function updateCartBadge() {
  const totalCount = orderCart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cartCountBadge');
  if (badge) {
    badge.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'} in order list`;
  }
}

function updateOrderSummaryInForm() {
  const summaryBox = document.getElementById('orderItemsSummary');
  if (!summaryBox) return;

  if (orderCart.length > 0) {
    const summaryText = orderCart.map(item => `${item.qty}x ${item.name} (₹${item.price * item.qty})`).join(', ');
    summaryBox.value = summaryText;
  }
}

function toggleWhatsAppForm() {
  const form = document.getElementById('whatsappOrderForm');
  if (form) {
    form.scrollIntoView({ behavior: 'smooth' });
    const nameInput = document.getElementById('custName');
    if (nameInput) nameInput.focus();
  }
}

function submitWhatsAppOrder() {
  const name = document.getElementById('custName').value.trim();
  const address = document.getElementById('custAddress').value.trim();
  const items = document.getElementById('orderItemsSummary').value.trim();

  if (!items) {
    alert('Please enter or select at least one item to order.');
    return;
  }

  const restaurantPhone = '919845123456';
  
  let msg = `*NEW ORDER - ATTIL MANGALORE*\n`;
  msg += `--------------------------------\n`;
  if (name) msg += `*Customer:* ${name}\n`;
  if (address) msg += `*Delivery Location:* ${address}\n`;
  msg += `*Order Items:* \n${items}\n`;
  msg += `--------------------------------\n`;
  msg += `Please confirm the order preparation time and total amount. Thank you!`;

  const encodedMsg = encodeURIComponent(msg);
  const whatsappUrl = `https://wa.me/${restaurantPhone}?text=${encodedMsg}`;

  // Open WhatsApp in new tab
  window.open(whatsappUrl, '_blank');
  closeModal('orderModal');
  showToast('Opening WhatsApp to send order...');
}

// ==========================================
// 6. Toast Notification Helper
// ==========================================
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const msgEl = document.getElementById('toastMessage');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('active');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('active');
  }, 3200);
}

// ==========================================
// 7. Mobile Drawer Navigation
// ==========================================
function toggleMobileMenu() {
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  if (drawer && overlay) {
    drawer.classList.toggle('active');
    overlay.classList.toggle('active');
  }
}

// ==========================================
// 8. Lifecycle Initialization
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  startHeroTimer();
  renderMenuGrid('all');
});
