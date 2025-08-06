const products = [ /* danh sách sản phẩm đầy đủ */ ];

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const product = products.find(p => p.id === id);

const container = document.getElementById("product-detail");

if (product) {
  container.innerHTML = `
    <h2>${product.name}</h2>
    <img src="${product.image}" width="300">
    <p>${product.description}</p>
    <p>Giá: ${product.price} VND</p>
    <button onclick="requireLoginForAction(() => addToCart('${product.id}'))">Thêm giỏ hàng</button>
    <button onclick="requireLoginForAction(() => alert('Mua hàng thành công!'))">Mua ngay</button>
  `;
} else {
  container.innerHTML = "<p>Không tìm thấy sản phẩm.</p>";
}
