function registerUser(event) {
  event.preventDefault();

  const user = {
    fullname: document.getElementById("fullname").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value
  };

  localStorage.setItem("user", JSON.stringify(user));
  document.getElementById("register-message").textContent = "Đăng ký thành công! Hãy đăng nhập.";
}
