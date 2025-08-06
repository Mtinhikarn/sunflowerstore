
function handleRegister(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const exists = users.some(u => u.username === username);
  if (exists) {
    alert("Tài khoản đã tồn tại!");
    return;
  }

  users.push({ username, password, name, phone, email, address });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Đăng ký thành công! Vui lòng đăng nhập.");
  window.location.href = "dangnhap.html";
}
