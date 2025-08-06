const products = [ /* danh sách sản phẩm với ID */ ];
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
        <div>
          <input type="checkbox" name="selectItem" value="${product.id}">
          ${product.name} - ${product.price} VND
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
