window.onload = function () {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (!loggedInUser) {
    alert("Bạn cần đăng nhập để xem giỏ hàng.");
    window.location.href = "dangnhap.html";
    return;
  }

  const carts = JSON.parse(localStorage.getItem("userCarts")) || {};
  const userCart = carts[loggedInUser] || [];

  let total = 0;
  let html = "";


  document.getElementById("cart-items").innerHTML = html;
  document.getElementById("total-price").textContent = "Tổng: " + total.toLocaleString() + " VND";
};
