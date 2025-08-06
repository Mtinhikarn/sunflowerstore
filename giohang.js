const products = [
  {
    id: "sp1",
    name: "Chuột Dareu EM908",
    price: "350000",
    image: "assets/em908.jpg"
  },
  {
    id: "sp2",
    name: "Bàn phím Dareu EK87",
    price: "750000",
    image: "assets/ek87.jpg"
  }
  // Thêm các sản phẩm còn lại tương tự
];

const cart = JSON.parse(localStorage.getItem("cart")) || [];
const container = document.getElementById("cart-items");
let total = 0;

if (cart.length === 0) {
  container.innerHTML = "<p>Không có sản phẩm nào trong giỏ hàng.</p>";
} else {
  cart.forEach((id, index) => {
    const product = products.find(p => p.id === id);
    if (product) {
      total += parseFloat(product.price);
      container.innerHTML += `
        <div class="cart-item">
          <input type="checkbox" name="selectItem" value="${product.id}">
          <img src="${product.image}" width="80">
          <span>${product.name} - ${parseInt(product.price).toLocaleString()} VND</span>
          <button onclick="removeItem(${index})">Hủy</button>
        </div>
      `;
    }
  });
}

document.getElementById("total").textContent = `Tổng tiền: ${total.toLocaleString()} VND`;

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}

function buySelected() {
  const selected = [...document.getElementsByName("selectItem")].filter(c => c.checked);
  if (selected.length === 0) {
    alert("Vui lòng chọn sản phẩm muốn mua.");
    return;
  }
  alert("Cảm ơn bạn đã đặt hàng!");
  clearCart();
}
