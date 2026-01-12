
let cart = [];
let products = [];
let currentFilter = 'all';

// ======================================
// PRODUCTS DATA (თქვენ ჩაამატეთ ფოტოების URL-ები)
// ======================================
const productsData = [
    // წვერის მოვლა (8 პროდუქტი)
    {
        id: 1,
        name: 'წვერის ზეთი Premium',
        description: 'ბუნებრივი ზეთი წვერის დატენიანებისა და ზრდისთვის. შეიცავს არგანის და ჟოჟობას ზეთს',
        price: 45.99,
        image: 'images/products/beard-oil.jpg',
        category: 'beard',
        categoryName: 'წვერის მოვლა'
    },
    {
        id: 2,
        name: 'წვერის ბალზამი',
        description: 'დამამშვიდებელი ბალზამი წვერის დასავარცხნად და ფორმის შესანარჩუნებლად',
        price: 38.50,
        image: 'images/products/beard-balm.jpg',
        category: 'beard',
        categoryName: 'წვერის მოვლა'
    },
    {
        id: 3,
        name: 'წვერის შამპუნი',
        description: 'სპეციალური შამპუნი წვერის ღრმა გასაწმენდად და დასაცხიმად',
        price: 32.00,
        image: 'images/products/beard-shampoo.jpg',
        category: 'beard',
        categoryName: 'წვერის მოვლა'
    },
    {
        id: 4,
        name: 'წვერის სავარცხელი',
        description: 'ხის ბუნებრივი სავარცხელი წვერის მოსავარცხნად და მასაჟისთვის',
        price: 25.99,
        image: 'images/products/beard-wash.jpg',
        category: 'beard',
        categoryName: 'წვერის მოვლა'
    },
    {
        id: 5,
        name: 'წვერის სავარცხელი სავარცხელი',
        description: 'პროფესიონალური ხის სავარცხელი იდეალური ფორმისთვის',
        price: 28.50,
        image: 'images/products/beard-comb.jpg',
        category: 'beard',
        categoryName: 'წვერის მოვლა'
    },
    {
        id: 6,
        name: 'წვერის ჯაგრისი',
        description: 'ბუნებრივი ღეტიანი ჯაგრისი წვერის გასავარცხნად და სტაილინგისთვის',
        price: 35.00,
        image: 'images/products/beard-brush.jpg',
        category: 'beard',
        categoryName: 'წვერის მოვლა'
    },
    {
        id: 7,
        name: 'წვერის ცვილი',
        description: 'ძლიერი ფიქსაციის ვაქსი წვერის სტაილინგისთვის',
        price: 29.99,
        image: 'images/products/beard-wax.jpg',
        category: 'beard',
        categoryName: 'წვერის მოვლა'
    },
    {
        id: 8,
        name: 'წვერის მოვლის ნაკრები',
        description: 'სრული ნაკრები წვერის პროფესიონალური მოვლისთვის',
        price: 89.99,
        image: 'images/products/beard-kit.jpg',
        category: 'beard',
        categoryName: 'წვერის მოვლა'
    },
    
    // თმის მოვლა (8 პროდუქტი)
    {
        id: 9,
        name: 'თმის ბალზამი',
        description: 'დამატენიანებელი ბალზამი რბილი და მოწესრიგებული თმისთვის',
        price: 42.00,
        image: 'images/products/hair-conditioner.jpg',
        category: 'hair',
        categoryName: 'თმის მოვლა'
    },
    {
        id: 10,
        name: 'ქერტილის საწინააღმდეგო შამპუნი',
        description: 'ეფექტური შამპუნი ქერტილთან და თავის ქერცლის გასაწმენდად',
        price: 38.50,
        image: 'images/products/anti-dandruff-shampoo.jpg',
        category: 'hair',
        categoryName: 'თმის მოვლა'
    },
    {
        id: 11,
        name: 'თმის ცვენის საწინააღმდეგო შამპუნი',
        description: 'აღადგენს თმის ფოლიკულებს და ხელს უშლის თმის ცვენას',
        price: 55.00,
        image: 'images/products/hair-loss-shampoo.jpg',
        category: 'hair',
        categoryName: 'თმის მოვლა'
    },
    {
        id: 12,
        name: 'თმის ნიღაბი',
        description: 'ინტენსიური დატენიანების ნიღაბი დაზიანებული თმისთვის',
        price: 45.99,
        image: 'images/products/hair-mask.jpg',
        category: 'hair',
        categoryName: 'თმის მოვლა'
    },
    {
        id: 13,
        name: 'თმის ზეთი',
        description: 'ბუნებრივი ზეთი თმის დატენიანებისა და ბრწყინვალებისთვის',
        price: 35.50,
        image: 'images/products/hair-oil.jpg',
        category: 'hair',
        categoryName: 'თმის მოვლა'
    },
    {
        id: 14,
        name: 'თმის შრატი',
        description: 'კონცენტრირებული შრატი თმის აღდგენისა და ზრდისთვის',
        price: 52.00,
        image: 'images/products/hair-serum.jpg',
        category: 'hair',
        categoryName: 'თმის მოვლა'
    },
    {
        id: 15,
        name: 'თმის მკურნალობა',
        description: 'პროფესიონალური მკურნალობა დაზიანებული თმისთვის',
        price: 65.00,
        image: 'images/products/hair-treatment.jpg',
        category: 'hair',
        categoryName: 'თმის მოვლა'
    },
    {
        id: 16,
        name: 'სკალპის მკურნალობა',
        description: 'სპეციალური ფორმულა თავის კანის გასაჯანსაღებლად',
        price: 48.99,
        image: 'images/products/scalp-treatment.jpg',
        category: 'hair',
        categoryName: 'თმის მოვლა'
    },
    
    // კანის მოვლა (8 პროდუქტი)
    {
        id: 17,
        name: 'სახის დამატენიანებელი',
        description: 'ღრმად ატენიანებს კანს და ინარჩუნებს სიახალეს 24 საათის განმავლობაში',
        price: 58.00,
        image: 'images/products/moisturizer.jpg',
        category: 'skin',
        categoryName: 'კანის მოვლა'
    },
    {
        id: 18,
        name: 'სახის კრემი',
        description: 'დღის კრემი კანის დაცვისა და დატენიანებისთვის',
        price: 62.50,
        image: 'images/products/face-cream.jpg',
        category: 'skin',
        categoryName: 'კანის მოვლა'
    },
    {
        id: 19,
        name: 'აკნეს საწინააღმდეგო გელი',
        description: 'ეფექტური გელი აკნესა და შავი წერტილების აღმოსაფხვრელად',
        price: 45.00,
        image: 'images/products/anti-acne-gel.jpg',
        category: 'skin',
        categoryName: 'კანის მოვლა'
    },
    {
        id: 20,
        name: 'სახის გამწმენდი',
        description: 'ნაზი გამწმენდი საშუალება ყოველდღიური გამოსაყენებლად',
        price: 35.99,
        image: 'images/products/face-wash.jpg',
        category: 'skin',
        categoryName: 'კანის მოვლა'
    },
    {
        id: 21,
        name: 'ტონიკი',
        description: 'გამაგრილობელი ტონიკი კანის pH-ის დასაბალანსებლად',
        price: 32.50,
        image: 'images/products/toner.jpg',
        category: 'skin',
        categoryName: 'კანის მოვლა'
    },
    {
        id: 22,
        name: 'სახის შრატი',
        description: 'ანტი-დაბერების შრატი კანის გასაახალგაზრდავებლად',
        price: 75.00,
        image: 'images/products/serum.jpg',
        category: 'skin',
        categoryName: 'კანის მოვლა'
    },
    {
        id: 23,
        name: 'სახის სკრაბი',
        description: 'ექსფოლიაციური სკრაბი მკვდარი უჯრედების მოსაშორებლად',
        price: 38.00,
        image: 'images/products/scrub.jpg',
        category: 'skin',
        categoryName: 'კანის მოვლა'
    },
    {
        id: 24,
        name: 'მზისგან დამცავი კრემი',
        description: 'SPF 50+ დაცვა UV სხივებისგან',
        price: 42.99,
        image: 'images/products/sunscreen.jpg',
        category: 'skin',
        categoryName: 'კანის მოვლა'
    }
];

// ======================================
// DOM ELEMENTS
// ======================================
const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const overlay = document.getElementById('overlay');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const scrollTopBtn = document.getElementById('scrollTop');
const header = document.getElementById('header');
const contactForm = document.getElementById('contactForm');
const togglePassword = document.getElementById('togglePassword');
const cookiesNotification = document.getElementById('cookiesNotification');
const acceptCookies = document.getElementById('acceptCookies');
const productsGrid = document.getElementById('productsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

// ======================================
// COOKIES HANDLING
// ======================================
function checkCookies() {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
        setTimeout(() => {
            cookiesNotification.classList.add('show');
        }, 1000);
    }
}

acceptCookies.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookiesNotification.classList.remove('show');
});

// ======================================
// BURGER MENU
// ======================================
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ======================================
// CART FUNCTIONALITY
// ======================================
function openCart() {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

cartBtn.addEventListener('click', openCart);
closeCart.addEventListener('click', closeCartSidebar);
overlay.addEventListener('click', () => {
    closeCartSidebar();
    burgerBtn.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
});

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add to cart
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    saveCart();
    updateCart();
    
    // Show notification
    showNotification('პროდუქტი დაემატა კალათაში!');
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCart();
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCart();
        }
    }
}

// Update cart UI
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>კალათა ცარიელია</p>
            </div>
        `;
        cartTotal.textContent = '₾0.00';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/80'">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₾${item.price.toFixed(2)}</div>
                    <div class="cart-item-actions">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="cart-item-quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Calculate total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `₾${total.toFixed(2)}`;
    }
}

// Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #2c5f2d;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Image fallback handler
function handleImageError(img, productName) {
    if (!img.hasAttribute('data-fallback-used')) {
        img.setAttribute('data-fallback-used', 'true');
        img.src = `https://via.placeholder.com/300x250/cccccc/666666?text=${encodeURIComponent(productName)}`;
    }
}

// ======================================
// LOAD AND DISPLAY PRODUCTS
// ======================================
function loadProducts() {
    products = productsData;
    displayProducts(products);
}

// Display products
function displayProducts(productsToShow) {
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = `
            <div class="loading">
                <i class="fas fa-exclamation-circle"></i>
                <p>პროდუქტები არ მოიძებნა</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = productsToShow.map((product, index) => `
        <div class="product-card ${product.category === 'beard' ? 'beard-product' : ''}" style="animation-delay: ${index * 0.1}s">
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="handleImageError(this, '${product.name}')">
            <div class="product-info">
                <div class="product-category">${product.categoryName}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">₾${product.price.toFixed(2)}</span>
                    <button class="btn-add-cart" onclick='addToCart(${JSON.stringify(product).replace(/'/g, "&apos;")})'>
                        <i class="fas fa-cart-plus"></i> დამატება
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter products
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        currentFilter = filter;
        
        if (filter === 'all') {
            displayProducts(products);
        } else {
            const filtered = products.filter(p => p.category === filter);
            displayProducts(filtered);
        }
        
        // Smooth scroll to products
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
});

// Category card filters
document.querySelectorAll('.btn-category').forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        
        // Update filter buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        const matchingBtn = Array.from(filterBtns).find(b => b.dataset.filter === filter);
        if (matchingBtn) {
            matchingBtn.classList.add('active');
        }
        
        // Filter and display
        const filtered = products.filter(p => p.category === filter);
        displayProducts(filtered);
        
        // Scroll to products
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
});

// ======================================
// FORM VALIDATION
// ======================================
const formInputs = {
    name: {
        pattern: /^[ა-ჰa-zA-Z\s]{2,50}$/,
        message: 'სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს'
    },
    email: {
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'გთხოვთ შეიყვანოთ სწორი ელ-ფოსტა'
    },
    phone: {
        pattern: /^5\d{8}$/,
        message: 'ტელეფონი უნდა იყოს 9 ციფრი და იწყებოდეს 5-ით'
    },
    password: {
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message: 'პაროლი უნდა შეიცავდეს მინ. 8 სიმბოლოს, დიდ და პატარა ასოებს, ციფრს და სპეც. სიმბოლოს'
    },
    message: {
        pattern: /^.{10,500}$/,
        message: 'შეტყობინება უნდა შეიცავდეს მინ. 10 სიმბოლოს'
    }
};

function validateField(input) {
    const fieldName = input.name;
    const value = input.value.trim();
    const formGroup = input.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    
    if (!value) {
        formGroup.classList.add('error');
        errorMessage.textContent = 'ეს ველი სავალდებულოა';
        return false;
    }
    
    if (formInputs[fieldName] && !formInputs[fieldName].pattern.test(value)) {
        formGroup.classList.add('error');
        errorMessage.textContent = formInputs[fieldName].message;
        return false;
    }
    
    formGroup.classList.remove('error');
    errorMessage.textContent = '';
    return true;
}

// Real-time validation
contactForm.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
        if (input.closest('.form-group').classList.contains('error')) {
            validateField(input);
        }
    });
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    contactForm.querySelectorAll('input, textarea').forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    if (isValid) {
        showNotification('შეტყობინება წარმატებით გაიგზავნა!');
        contactForm.reset();
        
        // Remove error classes
        contactForm.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
        });
    }
});

// Toggle password visibility
togglePassword.addEventListener('click', () => {
    const passwordInput = document.getElementById('password');
    const icon = togglePassword.querySelector('i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});

// ======================================
// HEADER SCROLL EFFECT
// ======================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
        scrollTopBtn.classList.add('show');
    } else {
        header.classList.remove('scrolled');
        scrollTopBtn.classList.remove('show');
    }
});

// ======================================
// SCROLL TO TOP
// ======================================
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ======================================
// SMOOTH SCROLL FOR NAV LINKS
// ======================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ======================================
// ACTIVE NAV LINK ON SCROLL
// ======================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// ======================================
// ANIMATION ON SCROLL
// ======================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.category-card, .benefit-card').forEach(el => {
    observer.observe(el);
});

// ======================================
// INITIALIZE
// ======================================
document.addEventListener('DOMContentLoaded', () => {
    checkCookies();
    loadCart();
    loadProducts();
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);