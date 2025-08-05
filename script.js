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
  return localStorage.getItem('loggedIn') === 'true';
}

function requireLogin(e) {
  if (!isLoggedIn()) {
    e.preventDefault();
    alert("Vui lòng đăng nhập để sử dụng chức năng này.");
  }
}

function showLogin() {
  alert("Hiện trang đăng nhập.");
}

const products = [
  "Chuột Dareu EM908",
  "Chuột Dareu A918",
  "Bàn phím Dareu EK87",
  "Tai nghe Dareu EH925s",
  "Chuột không dây Dareu LM115G",
  "Chuột Dareu EM901",
  "Bàn phím cơ Dareu EK1280",
  "Tai nghe gaming Dareu A710"
  // Thêm các sản phẩm khác ở đây
];

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

