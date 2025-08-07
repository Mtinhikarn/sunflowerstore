window.onload = function () {
  if (localStorage.getItem("isAdmin") !== "true") {
    alert("Bạn không có quyền truy cập trang này!");
    window.location.href = "index.html";
    return;
  }

  // Tính doanh thu
  const history = JSON.parse(localStorage.getItem("purchaseHistory")) || [];
  let totalRevenue = 0;
  history.forEach(order => {
    totalRevenue += order.total;
  });
  document.getElementById("revenue").textContent = `${totalRevenue.toLocaleString()} VND`;

  // Hiển thị hàng tồn kho
  const products = JSON.parse(localStorage.getItem("allProducts")) || [];
  const inventoryList = document.getElementById("inventory-list");
  products.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.name} - Còn lại: ${p.stock}`;
    inventoryList.appendChild(li);
  });

  // Hiển thị tài khoản người dùng
  const users = JSON.parse(localStorage.getItem("users")) || [];
  document.getElementById("account-count").textContent = `Tổng tài khoản: ${users.length}`;
  const userList = document.getElementById("user-list");
  users.forEach(u => {
    const li = document.createElement("li");
    li.textContent = `${u.username} - ${u.name} - ${u.email}`;
    userList.appendChild(li);
  });

  // Lịch sử mua hàng
  const historyList = document.getElementById("purchase-history");
  history.forEach(order => {
    const li = document.createElement("li");
    li.textContent = `Người mua: ${order.username}, Tổng tiền: ${order.total.toLocaleString()} VND`;
    historyList.appendChild(li);
  });
};

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}
