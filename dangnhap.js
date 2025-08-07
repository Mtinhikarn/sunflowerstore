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

  const isAdmin = username === "admin"; // ✅ Gán quyền admin nếu tên là 'admin'

  users.push({ username, password, name, phone, email, address, isAdmin });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Đăng ký thành công! Vui lòng đăng nhập.");
  window.location.href = "dangnhap.html";
}


function login(event) {
  event.preventDefault(); // Ngăn reload

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const matchedUser = users.find(user => user.username === username && user.password === password);

  const loginMessage = document.getElementById("login-message");

  if (matchedUser) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("loggedInUser", username);

    if (matchedUser.isAdmin) {
      localStorage.setItem("isAdmin", "true");
      window.location.href = "admin.html";
    } else {
      localStorage.removeItem("isAdmin");
      window.location.href = "index.html";
    }

    loginMessage.textContent = "Đăng nhập thành công!";
    loginMessage.style.color = "lightgreen";
  } else {
    loginMessage.textContent = "Tài khoản hoặc mật khẩu không đúng!";
    loginMessage.style.color = "red";
  }
}
