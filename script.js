// --- Global Product Data ---
const products = [
    // --- SHIRTS (Formal & Casual) ---
    { id: 1, name: "Midnight Charcoal Formal Suit", price: "$450", img: "https://images.unsplash.com/photo-1594932224010-75f1001bc93c?auto=format&fit=crop&q=80&w=500" },
    { id: 2, name: "Classic White Oxford Shirt", price: "$85", img: "https://images.unsplash.com/photo-1620012253295-c05718565292?auto=format&fit=crop&q=80&w=500" },
    { id: 3, name: "Navy Blue Business Shirt", price: "$75", img: "https://images.unsplash.com/photo-1598411030224-b5a034685f09?auto=format&fit=crop&q=80&w=500" },
    { id: 4, name: "Checked Flannel Shirt", price: "$65", img: "https://images.unsplash.com/photo-1576180843465-74892c908239?auto=format&fit=crop&q=80&w=500" },
    { id: 5, name: "Slim Fit Linen Shirt", price: "$90", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=500" },
    { id: 6, name: "Denim Utility Shirt", price: "$85", img: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&q=80&w=500" },
    { id: 7, name: "Striped Cotton Casual", price: "$55", img: "https://images.unsplash.com/photo-1598411030224-b5a034685f09?auto=format&fit=crop&q=80&w=500" },
    { id: 8, name: "Mandarin Collar Shirt", price: "$70", img: "https://images.unsplash.com/photo-1626497748470-2830af95a440?auto=format&fit=crop&q=80&w=500" },
    { id: 9, name: "Rustic Wool Overshirt", price: "$120", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=500" },
    { id: 10, name: "Sky Blue Dress Shirt", price: "$80", img: "https://images.unsplash.com/photo-1616423641454-da5412959632?auto=format&fit=crop&q=80&w=500" },

    // --- T-SHIRTS & POLOS ---
    { id: 11, name: "Premium Black V-Neck", price: "$35", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=500" },
    { id: 12, name: "Classic Pique Polo Shirt", price: "$55", img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=500" },
    { id: 13, name: "Graphic Streetwear Tee", price: "$40", img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=500" },
    { id: 14, name: "Summer Pastel Polo", price: "$50", img: "https://images.unsplash.com/photo-1586363104864-50e2104976ba?auto=format&fit=crop&q=80&w=500" },
    { id: 15, name: "Rugby Striped Polo", price: "$65", img: "https://images.unsplash.com/photo-1598412215289-53b92dc56459?auto=format&fit=crop&q=80&w=500" },
    { id: 16, name: "Heather Grey Crewneck", price: "$30", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=500" },

    // --- PANTS & JEANS ---
    { id: 17, name: "Garage Selvedge Denim", price: "$150", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=500" },
    { id: 18, name: "Slim Fit Olive Chinos", price: "$95", img: "https://images.unsplash.com/photo-1473966968600-fa804b869636?auto=format&fit=crop&q=80&w=500" },
    { id: 19, name: "Classic Pleated Trousers", price: "$110", img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=500" },
    { id: 20, name: "Black Cargo Joggers", price: "$85", img: "https://images.unsplash.com/photo-1517441551065-4f3693a1d044?auto=format&fit=crop&q=80&w=500" },
    { id: 21, name: "Raw Indigo Slim Jeans", price: "$130", img: "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&q=80&w=500" },
    { id: 22, name: "Casual Khaki Shorts", price: "$45", img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=500" },
    { id: 23, name: "Tailored Navy Pants", price: "$120", img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?auto=format&fit=crop&q=80&w=500" },

    // --- INNERWEAR & BANIANS ---
    { id: 24, name: "Premium Cotton Banian (Vest)", price: "$12", img: "https://images.unsplash.com/photo-1582739266133-fb086d49925e?auto=format&fit=crop&q=80&w=500" },
    { id: 25, name: "Luxe Under-Shirt White", price: "$15", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=500" },
    { id: 26, name: "Black Compression Vest", price: "$25", img: "https://images.unsplash.com/photo-1517441551065-4f3693a1d044?auto=format&fit=crop&q=80&w=500" },
    { id: 27, name: "Comfort Stretch Briefs", price: "$20", img: "https://images.unsplash.com/photo-1632766346141-8668972ec9ec?auto=format&fit=crop&q=80&w=500" },
    { id: 28, name: "Bamboo Fiber Boxers", price: "$22", img: "https://images.unsplash.com/photo-1590528659929-2396b270058b?auto=format&fit=crop&q=80&w=500" },
    { id: 29, name: "Active Sport Trunks", price: "$28", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=500" },

    // --- HATS & CAPS ---
    { id: 30, name: "Vintage Fedora Hat", price: "$75", img: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&q=80&w=500" },
    { id: 31, name: "Wool Flat Cap", price: "$45", img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&q=80&w=500" },
    { id: 32, name: "Canvas Trucker Cap", price: "$30", img: "https://images.unsplash.com/photo-1588850567041-6925920ba060?auto=format&fit=crop&q=80&w=500" },
    { id: 33, name: "Street Beanie Black", price: "$25", img: "https://images.unsplash.com/photo-1576871337622-98d48d38537c?auto=format&fit=crop&q=80&w=500" },

    // --- BELTS & LEATHER ---
    { id: 34, name: "Full-Grain Leather Belt", price: "$65", img: "https://images.unsplash.com/photo-1624222247344-550fb8ecf7c4?auto=format&fit=crop&q=80&w=500" },
    { id: 35, name: "Distressed Suede Belt", price: "$55", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=500" },
    { id: 36, name: "Biker Leather Gloves", price: "$85", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=500" },
    { id: 37, name: "Formal Dress Gloves", price: "$45", img: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&q=80&w=500" },

    // --- ACCESSORIES (Socks, Kerchiefs, Towels) ---
    { id: 38, name: "Argyle Wool Socks", price: "$18", img: "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&q=80&w=500" },
    { id: 39, name: "Pocket Square Set (3)", price: "$35", img: "https://images.unsplash.com/photo-1598511025537-4d9241517409?auto=format&fit=crop&q=80&w=500" },
    { id: 40, name: "Cotton Hand Kerchiefs", price: "$10", img: "https://images.unsplash.com/photo-1621335829175-95f4373418b7?auto=format&fit=crop&q=80&w=500" },
    { id: 41, name: "Quick-Dry Gym Towel", price: "$20", img: "https://images.unsplash.com/photo-1616644200305-6f170425091a?auto=format&fit=crop&q=80&w=500" },
    { id: 42, name: "Luxury Bath Towel White", price: "$40", img: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=500" },

    // --- TRADITIONAL & REGIONAL ---
    { id: 43, name: "Premium White Mundu", price: "$45", img: "https://images.unsplash.com/photo-1610664921890-ebad0c086011?auto=format&fit=crop&q=80&w=500" },
    { id: 44, name: "Gold Border Wedding Dhoti", price: "$120", img: "https://images.unsplash.com/photo-1583321500900-82807e458f3c?auto=format&fit=crop&q=80&w=500" },
    { id: 45, name: "Handloom Cotton Veshti", price: "$35", img: "https://images.unsplash.com/photo-1610664921890-ebad0c086011?auto=format&fit=crop&q=80&w=500" },

    // --- OUTERWEAR & JACKETS ---
    { id: 46, name: "Vintage Cafe Racer Jacket", price: "$299", img: "https://images.unsplash.com/photo-1520975954732-35dd2229969e?auto=format&fit=crop&q=80&w=500" },
    { id: 47, name: "Heritage Trench Coat", price: "$350", img: "https://images.unsplash.com/photo-1544923246-77307dd654ca?auto=format&fit=crop&q=80&w=500" },
    { id: 48, name: "Heavyweight Parka", price: "$400", img: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80&w=500" },
    { id: 49, name: "Bomber Jacket Olive", price: "$110", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=500" },

    // --- MORE COLLECTIONS ---
    { id: 50, name: "Knitted Shawl Cardigan", price: "$140", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=500" },
    { id: 51, name: "Graphic Hoodie Black", price: "$75", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=500" },
    { id: 52, name: "Suede Chelsea Boots", price: "$180", img: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&q=80&w=500" },
    { id: 53, name: "Classic Aviator Shades", price: "$150", img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=500" },
    { id: 54, name: "Stainless Steel Chrono", price: "$250", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=500" },
    { id: 55, name: "Minimalist Leather Wallet", price: "$45", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=500" }
];

// --- System Constants & Storage ---
const ADMIN_ID = "admin";
const ADMIN_PASS = "1234";
let mockOtp = "";

let users = [];

async function fetchUsers() {
    try {
        const res = await fetch('/api/database');
        users = await res.json();
        return users;
    } catch (e) {
        console.error("Failed to fetch users:", e);
        return [];
    }
}

let dbProducts = [];

async function fetchProducts() {
    try {
        const res = await fetch('/api/database?type=products');
        dbProducts = await res.json();
        return dbProducts;
    } catch (e) {
        console.error("Failed to fetch products:", e);
        return [];
    }
}

// --- UI Common Logic ---
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        window.scrollY > 50 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled');
    }
});

async function updateUI() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const role = sessionStorage.getItem('userRole');

    const loginItem = document.getElementById('login-nav-item');
    const logoutItem = document.getElementById('logout-nav-item');
    const profileItem = document.getElementById('profile-nav-item');
    const adminItem = document.getElementById('admin-nav-item');

    if (loginItem) loginItem.classList.toggle('hidden', isLoggedIn);
    if (logoutItem) logoutItem.classList.toggle('hidden', !isLoggedIn);
    if (profileItem) profileItem.style.display = (isLoggedIn && role === 'user') ? 'block' : 'none';
    if (adminItem) adminItem.style.display = (isLoggedIn && role === 'admin') ? 'block' : 'none';

    // Update button text if on home or other pages
    const shopBtns = document.querySelectorAll('.btn');
    shopBtns.forEach(btn => {
        if (btn.innerText.toLowerCase().includes('shop') || btn.innerText.toLowerCase().includes('collection') || btn.innerText.toLowerCase().includes('garage')) {
            if (isLoggedIn) {
                if (btn.innerText === "Shop Now") btn.innerText = "Enter Shop";
                if (btn.innerText === "Explore Collection") btn.innerText = "View Garage";
            }
        }
    });

    // Populate profile if on profile page
    const pUser = document.getElementById('profile-username');
    const pMob = document.getElementById('profile-mobile');
    if (pUser && isLoggedIn) pUser.innerText = sessionStorage.getItem('username') || 'N/A';
    if (pMob && isLoggedIn) pMob.innerText = sessionStorage.getItem('userId') || 'N/A';
}

// --- Auth Functions ---
function logout() {
    sessionStorage.clear();
    alert('Logged Out!');
    window.location.href = 'index.html';
}

function openLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'block';
    } else {
        window.location.href = 'login.html';
    }
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) modal.style.display = 'none';
}

function switchModalTab(tab) {
    const tabL = document.getElementById('tab-login');
    const tabS = document.getElementById('tab-signup');
    const viewL = document.getElementById('login-view');
    const viewS = document.getElementById('signup-view');

    if (tabL) tabL.classList.toggle('active', tab === 'login');
    if (tabS) tabS.classList.toggle('active', tab === 'signup');
    if (viewL) viewL.classList.toggle('hidden', tab !== 'login');
    if (viewS) viewS.classList.toggle('hidden', tab !== 'signup');
}

function getOtp() {
    const mobileField = document.getElementById('signupMobile');
    if (!mobileField) return;
    const mobile = mobileField.value;
    if (mobile.length < 10) {
        alert("Please enter a valid mobile number.");
        return;
    }
    mockOtp = Math.floor(100000 + Math.random() * 900000).toString();
    alert(`YOUR VERIFICATION OTP IS: ${mockOtp}`);
}

async function handleAuth(type) {
    await fetchUsers(); // Ensure fresh data on every auth attempt

    if (type === 'login') {
        const id = document.getElementById('loginId').value;
        const pass = document.getElementById('loginPass').value;

        if (id === ADMIN_ID && pass === ADMIN_PASS) {
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('userRole', 'admin');
            sessionStorage.setItem('userId', 'admin');
            completeLogin('Admin');
            return;
        }

        const user = users.find(u => (u.mobile === id || u.username === id) && u.password === pass);
        if (user) {
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('userRole', user.role || 'user');
            sessionStorage.setItem('userId', user.mobile);
            sessionStorage.setItem('username', user.username);
            completeLogin(user.username || user.mobile);
        } else {
            alert('Invalid ID or Password!');
        }
    } else if (type === 'signup') {
        const username = document.getElementById('signupUsername').value.trim();
        const mobile = document.getElementById('signupMobile').value.trim();
        const otp = document.getElementById('signupOtp').value;
        const pass = document.getElementById('signupPass').value;

        const usernameRegex = /^[a-z0-9_]{4,16}$/;
        if (!usernameRegex.test(username)) {
            alert('Username must be 4-16 characters long (lowercase, numbers, underscores only).');
            return;
        }

        if (users.some(u => u.username === username)) {
            alert('Username is already taken!');
            return;
        }

        if (otp !== mockOtp || !otp) {
            alert('Invalid OTP!');
            return;
        }
        if (pass.length < 4) {
            alert('Password too short!');
            return;
        }
        if (users.some(u => u.mobile === mobile)) {
            alert('User with this mobile number already exists!');
            return;
        }

        const newUser = { username, mobile, password: pass, role: 'user' };

        const res = await fetch('/api/database', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'signup', payload: newUser })
        });

        if (res.ok) {
            alert('Sign Up Successful! Please Login.');
            switchModalTab('login');
        } else {
            alert('Database Error. Please try again later.');
        }
    }
}

function completeLogin(name) {
    updateUI();
    closeLoginModal();
    alert(`Welcome, ${name}!`);
    // Redirect to home or stay? Let's stay and refresh UI
    if (window.location.pathname.includes('login.html')) {
        window.location.href = 'index.html';
    } else {
        location.reload();
    }
}

// --- Shared Utility for rendering ---
async function renderProductGrid(targetId, limit = null) {
    const grid = document.getElementById(targetId);
    if (!grid) return;

    // Use DB products if available, otherwise fallback to hardcoded ones (for initial setup)
    let items = dbProducts.length > 0 ? dbProducts : products;
    if (limit) items = items.slice(0, limit);

    grid.innerHTML = items.map(p => `
        <div class="product-card" id="product-${p.id}">
            <div class="product-img">
                <img src="${p.img}" alt="${p.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3>${p.name}</h3>
                <p>${p.price}</p>
            </div>
        </div>
    `).join('');
}

// Initial Load
window.onload = async () => {
    await fetchUsers();
    await fetchProducts(); // Fetch DB products
    updateUI();

    if (document.getElementById('productGrid')) await renderProductGrid('productGrid');
    if (document.getElementById('featuredGrid')) await renderProductGrid('featuredGrid', 8);
    if (typeof initAdmin === 'function') initAdmin();
};

window.onclick = (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
}

async function saveEditedUser() {
    const originalMobile = document.getElementById('editOriginalMobile').value;
    const newUsername = document.getElementById('editUsername').value.trim();
    const newMobile = document.getElementById('editMobile').value.trim();
    const newRole = document.getElementById('editRole').value;
    const newPass = document.getElementById('editPass').value;

    const usernameRegex = /^[a-z0-9_]{4,16}$/;
    if (!usernameRegex.test(newUsername)) {
        alert('Invalid Username format (4-16 lowercase/numbers/_ only)!');
        return;
    }

    const payload = { originalMobile, username: newUsername, mobile: newMobile, role: newRole, password: newPass };

    try {
        const res = await fetch('/api/database', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'update', payload })
        });

        if (res.ok) {
            alert('Member details updated in cloud!');
            await fetchUsers();
            if (typeof renderUsers === 'function') renderUsers();
            closeEditUserModal();
        } else {
            alert('Cloud Database Sync Failed.');
        }
    } catch (e) {
        console.error(e);
        alert('Network Error.');
    }
}

async function deleteUser(mobile) {
    if (!confirm(`Permanently remove member ${mobile} from cloud?`)) return;

    try {
        const res = await fetch('/api/database', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'delete', payload: { mobile } })
        });

        if (res.ok) {
            alert('Member removed from cloud storage.');
            await fetchUsers();
            if (typeof renderUsers === 'function') renderUsers();
        }
    } catch (e) {
        alert('Network Error.');
    }
}

async function changePassword() {
    const role = sessionStorage.getItem('userRole');
    const id = sessionStorage.getItem('userId');
    const oldP = document.getElementById('oldPass').value;
    const newP = document.getElementById('newPass').value;

    if (role === 'admin') {
        alert("The main Admin password can only be changed via Vercel Environment Variables.");
        return;
    }

    await fetchUsers();
    const userIndex = users.findIndex(u => u.mobile === id && u.password === oldP);

    if (userIndex !== -1) {
        const userData = users[userIndex];
        const res = await fetch('/api/database', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'update',
                payload: { ...userData, originalMobile: id, password: newP }
            })
        });

        if (res.ok) {
            alert("Success! Your cloud profile has been updated.");
            document.getElementById('oldPass').value = "";
            document.getElementById('newPass').value = "";
        }
    } else {
        alert("Current password incorrect.");
    }
}

function closeEditUserModal() {
    const modal = document.getElementById('editUserModal');
    if (modal) modal.style.display = 'none';
}

// --- Product Admin Functions ---
async function dbAddProduct(payload) {
    try {
        const res = await fetch('/api/database', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'products', action: 'add', payload })
        });
        if (res.ok) {
            alert('Product added to cloud inventory!');
            await fetchProducts();
            if (typeof renderAdminProducts === 'function') renderAdminProducts();
            if (document.getElementById('productGrid')) renderProductGrid('productGrid');
        } else {
            alert('Failed to add product.');
        }
    } catch (e) {
        console.error(e);
        alert('Error connecting to database.');
    }
}

async function dbDeleteProduct(id) {
    if (!confirm('Permanently delete this product?')) return;
    try {
        const res = await fetch('/api/database', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'products', action: 'delete', payload: { id } })
        });
        if (res.ok) {
            alert('Product removed.');
            await fetchProducts();
            if (typeof renderAdminProducts === 'function') renderAdminProducts();
            if (document.getElementById('productGrid')) renderProductGrid('productGrid');
        }
    } catch (e) {
        console.error(e);
    }
}
