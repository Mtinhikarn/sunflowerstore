function handleRegister(event) {
  event.preventDefault(); // Ngăn form reload trang

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;

  const newUser = {
    username,
    password,
    name,
    phone,
    email,
    address,
  };

  // Lấy danh sách người dùng cũ từ localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Kiểm tra trùng tài khoản
  const isDuplicate = users.some(user => user.username === username);
  if (isDuplicate) {
    alert("Tài khoản đã tồn tại. Vui lòng chọn tên khác.");
    return;
  }

  // Thêm người dùng mới và lưu lại
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Đăng ký thành công!");
  window.location.href = "dangnhap.html";
}
