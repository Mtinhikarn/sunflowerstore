const productsPerPage = 12;
const allProducts = document.querySelectorAll(".product-box");

function changePage(page) {
  const start = (page - 1) * productsPerPage;
  const end = page * productsPerPage;

  allProducts.forEach((item, index) => {
    item.style.display = (index >= start && index < end) ? "inline-block" : "none";
  });

  document.querySelectorAll(".pagination button").forEach(btn => btn.classList.remove("active"));
  document.querySelector(`.pagination button:nth-child(${page})`).classList.add("active");
}

window.addEventListener("DOMContentLoaded", () => changePage(1));

// === SLIDER ===
let currentSlide = 0;
const totalSlides = 6;
const slider = document.getElementById("slider");
const slideInterval = 4000;

function updateSlide() {
  slider.style.transform = "translateX(" + (-currentSlide * 100) + "%)";
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlide();
}

setInterval(nextSlide, slideInterval);
function isLoggedIn() {
  return !!localStorage.getItem("loggedInUser");
}

function isLoggedIn() {
  return localStorage.getItem("loggedIn") === "true";
}

function requireLoginForAction(actionFunc) {
  if (!isLoggedIn()) {
    const confirmLogin = confirm("Bạn cần đăng nhập để thực hiện thao tác này. Đăng nhập ngay?");
    if (confirmLogin) {
      window.location.href = "dangnhap.html";
    }
    return false;
  }
  actionFunc(); // thực hiện hành động nếu đã đăng nhập
}


function requireLogin(e) {
  if (!isLoggedIn()) {
    e.preventDefault();
    const confirmLogin = confirm("Bạn cần đăng nhập để sử dụng chức năng này.\nBạn có muốn đăng nhập ngay?");
    if (confirmLogin) {
      window.location.href = 'dangnhap.html';
    }
  }
}


function showLogin() {
  window.location.href = "dangnhap.html";
}


function filterSuggestions() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const suggestionsBox = document.getElementById("suggestions");
  suggestionsBox.innerHTML = "";

  if (!input.trim()) return;

  const matches = products.filter(p => p.toLowerCase().includes(input));
  matches.forEach(match => {
    const div = document.createElement("div");
    div.textContent = match;
    div.onclick = () => {
      document.getElementById("searchInput").value = match;
      suggestionsBox.innerHTML = "";
      // Có thể thêm điều hướng đến sản phẩm ở đây nếu muốn
    };
    suggestionsBox.appendChild(div);
  });
}

// Mở form đăng nhập khi ấn nút
function showLogin() {
  document.getElementById('loginForm').style.display = 'block';
}

// Xử lý đăng nhập
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const errorDisplay = document.getElementById("loginError");

  // Lấy danh sách người dùng đã đăng ký từ localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Tìm người dùng khớp
  const matchedUser = users.find(user => user.email === email && user.password === password);

  if (matchedUser) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("currentUser",  JSON.stringify(matchedUser));
    errorDisplay.textContent = "Đăng nhập thành công!";
    errorDisplay.style.color = "green";
    setTimeout(() => {
      document.getElementById('loginForm').style.display = 'none';
      location.reload(); // hoặc chuyển trang nếu cần
    }, 1500);
  } else {
    errorDisplay.textContent = "Tài khoản hoặc mật khẩu không đúng!";
    errorDisplay.style.color = "red";
  }
}



function filterSuggestions() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const suggestionsBox = document.getElementById("suggestions");
  suggestionsBox.innerHTML = "";

  const matches = products.filter(p => p.name.toLowerCase().includes(input));
  matches.forEach(match => {
    const div = document.createElement("div");
    div.textContent = match.name;
    div.onclick = () => {
      window.location.href = `sanpham.html?id=${match.id}`;  // Chuyển trang
    };
    suggestionsBox.appendChild(div);
  });
}
function addToCart(id) {
  const user = localStorage.getItem("loggedInUser");
  if (!user) {
    alert("Vui lòng đăng nhập để thêm vào giỏ hàng.");
    window.location.href = "dangnhap.html";
    return;
  }
  const cartKey = `cart_${user}`;
  const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
  cart.push(id);
  localStorage.setItem(cartKey, JSON.stringify(cart));
  alert("✅ Đã thêm vào giỏ hàng!");
}

function buyNow(id) {
  const user = localStorage.getItem("loggedInUser");
  if (!user) {
    alert("Vui lòng đăng nhập để mua sản phẩm.");
    window.location.href = "dangnhap.html";
    return;
  }
  const cartKey = `cart_${user}`;
  localStorage.setItem(cartKey, JSON.stringify([id])); // chỉ mua 1 sản phẩm
  window.location.href = "giohang.html";
}

const backToTopButton = document.querySelector('.back-to-top');
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};
backToTopButton.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

  window.onload = function () {
  const loggedIn = localStorage.getItem("loggedIn");
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const loginLink = document.getElementById("login-link");
  const logoutBtn = document.getElementById("logout-btn");
  const userInfo = document.getElementById("user-info");

  if (loggedIn === "true" && user) {
    loginLink.style.display = "none";
    logoutBtn.style.display = "inline";
    userInfo.textContent = "👤 " + user.username;
  } else {
    loginLink.style.display = "inline";
    logoutBtn.style.display = "none";
    userInfo.textContent = "";
  }
};


  function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("loggedInUser");
    window.location.reload(); // Reload lại để cập nhật giao diện
  }
function quayLaiTrangChu() {
  window.location.href = "index.html";
}

function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}

