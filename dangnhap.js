function loginUser(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && username === user.username && password === user.password) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("loggedInUser", user.username);
    document.getElementById("login-message").textContent = "Đăng nhập thành công!";
    setTimeout(() => window.location.href = "index.html", 1500);
  } else {
    document.getElementById("login-message").textContent = "Tài khoản hoặc mật khẩu không chính xác!";
  }
}
