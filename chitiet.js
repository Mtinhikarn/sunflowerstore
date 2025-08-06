function addToCart() {
  if (!isLoggedIn()) {
    if (confirm("Bạn cần đăng nhập để thêm vào giỏ hàng. Chuyển đến trang đăng nhập?")) {
      window.location.href = "dangnhap.html";
    }
    return;
  }
  alert("Đã thêm sản phẩm vào giỏ hàng!");
}

function buyNow() {
  if (!isLoggedIn()) {
    if (confirm("Bạn cần đăng nhập để mua sản phẩm. Chuyển đến trang đăng nhập?")) {
      window.location.href = "dangnhap.html";
    }
    return;
  }
  alert("Cảm ơn bạn đã đặt hàng!");
}

function goBack() {
  window.location.href = "index.html";
}

function isLoggedIn() {
  return localStorage.getItem("loggedIn") === "true";
}
