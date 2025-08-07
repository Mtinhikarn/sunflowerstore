const products = [
  { id: "1", name: "Chuột Dareu EM908", price: 350000, image: "assets/em908.jpg" },
  { id: "2", name: "Bàn phím Dareu EK87", price: 700000, image: "assets/ek87.jpg" },
  // Thêm các sản phẩm khác
];

const cart = JSON.parse(localStorage.getItem("cart")) || [];
const container = document.getElementById("cart-items");
let total = 0;
let selectedItems = [];

function renderCart() {
  if (cart.length === 0) {
    container.innerHTML = "<p>Không có sản phẩm nào trong giỏ hàng.</p>";
    document.getElementById("payment-section").style.display = "none";
    return;
  }

  container.innerHTML = "";
  total = 0;

  cart.forEach((id, index) => {
    const product = products.find(p => p.id === id);
    if (product) {
      total += product.price;
      container.innerHTML += `
        <div class="cart-item">
          <input type="checkbox" value="${id}" onchange="updateSelected(this)">
          <img src="${product.image}" width="60" style="vertical-align: middle;">
          ${product.name} - ${product.price.toLocaleString()} VND
          <button onclick="removeItem(${index})">Hủy</button>
        </div>
      `;
    }
  });

  document.getElementById("total").textContent = `Tổng tiền: ${total.toLocaleString()} VND`;
}

function updateSelected(checkbox) {
  const id = checkbox.value;
  if (checkbox.checked) {
    selectedItems.push(id);
  } else {
    selectedItems = selectedItems.filter(itemId => itemId !== id);
  }
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function clearCart() {
  localStorage.removeItem("cart");
  selectedItems = [];
  renderCart();
}

function buySelected() {
  if (selectedItems.length === 0) {
    alert("Vui lòng chọn sản phẩm để mua.");
    return;
  }
  document.getElementById("payment-section").style.display = "block";
}

document.getElementById("payment-method").addEventListener("change", function () {
  document.getElementById("bank-info").style.display = this.value === "bank" ? "block" : "none";

  
});

function confirmPayment() {
  const method = document.getElementById("payment-method").value;

  if (!method) {
    alert("Vui lòng chọn phương thức thanh toán.");
    return;
  }

  // Xác định sản phẩm đã chọn để mua
  const purchasedProducts = selectedItems.map(id => {
    return products.find(p => p.id === id);
  });

  // Tính tổng tiền sản phẩm đã chọn
  const totalAmount = purchasedProducts.reduce((sum, item) => sum + item.price, 0);

  // Lấy lịch sử cũ
  const history = JSON.parse(localStorage.getItem("purchaseHistory")) || [];

  // Thêm đơn hàng mới
  history.push({
    username: localStorage.getItem("loggedInUser"),
    method: method,
    total: totalAmount,
    products: purchasedProducts,
    date: new Date().toLocaleString()
  });

  localStorage.setItem("purchaseHistory", JSON.stringify(history));

  // Cộng tổng doanh thu
  const currentRevenue = parseFloat(localStorage.getItem("totalRevenue")) || 0;
  localStorage.setItem("totalRevenue", currentRevenue + totalAmount);

  alert("Đặt hàng thành công!");

  clearCart(); // Xóa giỏ hàng
  selectedItems = []; // Reset danh sách đã chọn
  renderCart(); // Vẽ lại giao diện
}

renderCart();


function goBack() {
  window.location.href = "index.html";
}

// === Ẩn/hiện thông tin chuyển khoản khi chọn ===
const paymentSelect = document.getElementById("payment-method");
if (paymentSelect) {
  paymentSelect.addEventListener("change", function () {
    const bankInfo = document.getElementById("bank-info");
    if (this.value === "bank") {
      bankInfo.style.display = "block";
    } else {
      bankInfo.style.display = "none";
    }
  });
}

document.getElementById("payment-method").addEventListener("change", function () {
  if (this.value === "bank") {
    document.getElementById("bank-info").style.display = "block";
  } else {
    document.getElementById("bank-info").style.display = "none";
  }
});

function confirmPayment() {
  alert("Đặt hàng thành công!");
  clearCart();
}

function requireLogin(event) {
  if (!localStorage.getItem("loggedIn")) {
    event.preventDefault();
    alert("Bạn cần đăng nhập để thực hiện hành động này.");
    window.location.href = "dangnhap.html";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const paymentSelect = document.getElementById("payment-method");
  const bankInfo = document.getElementById("bank-info");

  if (paymentSelect && bankInfo) {
    paymentSelect.addEventListener("change", function () {
      if (this.value === "bank") {
        bankInfo.style.display = "block";
      } else {
        bankInfo.style.display = "none";
      }
    });
  }
});

const history = JSON.parse(localStorage.getItem("purchaseHistory")) || [];
history.forEach(order => {
  console.log(`Người mua: ${order.username}`);
  console.log(`Sản phẩm:`, order.products);
  console.log(`Tổng tiền: ${order.total}`);
  console.log(`Ngày mua: ${order.date}`);
});
