const products = [ /* danh sách sản phẩm đầy đủ */ ];

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const product = products.find(p => p.id === id);

const container = document.getElementById("product-detail");

products.forEach(product => {
  const productHTML = `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" width="200">
      <h3>${product.name}</h3>
      <p>Giá: ${product.price.toLocaleString()}đ</p>
      <a href="chitiet.html?id=${product.id}">
        <button>Xem chi tiết</button>
      </a>
    </div>
  `;
  container.innerHTML += productHTML;
});


function directToCheckout(id) {
  const currentUser = localStorage.getItem("loggedInUser");
  if (!currentUser) return;

  const cart = JSON.parse(localStorage.getItem("cart_" + currentUser)) || [];
  cart.push(id);
  localStorage.setItem("cart_" + currentUser, JSON.stringify(cart));
  window.location.href = "giohang.html";
}


function checkout() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (!loggedInUser) {
    alert("Bạn cần đăng nhập để thanh toán.");
    return;
  }

  const carts = JSON.parse(localStorage.getItem("userCarts")) || {};
  const userCart = carts[loggedInUser] || [];

  if (userCart.length === 0) {
    alert("Giỏ hàng trống.");
    return;
  }

  alert("Thanh toán thành công!");
  // Reset giỏ hàng người dùng
  carts[loggedInUser] = [];
  localStorage.setItem("userCarts", JSON.stringify(carts));
  window.location.reload();
}
