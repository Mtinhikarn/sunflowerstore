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
