function isLoggedIn() {
  return localStorage.getItem("loggedIn") === "true";
}

function addToCart() {
  if (!isLoggedIn()) {
    if (confirm("Bạn cần đăng nhập để thêm vào giỏ hàng. Chuyển đến trang đăng nhập?")) {
      window.location.href = "dangnhap.html";
    }
    return;
  }
  alert("Đã thêm sản phẩm vào giỏ hàng!");
}

function buyNow() {
  if (!isLoggedIn()) {
    if (confirm("Bạn cần đăng nhập để mua sản phẩm. Chuyển đến trang đăng nhập?")) {
      window.location.href = "dangnhap.html";
    }
    return;
  }   
  alert("Cảm ơn bạn đã đặt hàng!");
}

function goBack() {
  window.location.href = "index.html";
}

const products = [
  { id: "1", name: "Chuột Dareu EM908", price: 399.000, image: "assets/em908.jpg", description: "Chuột Dareu EM908 được thiết kế công thái học với một ngoại hình vừa vặn bàn tay,tạo cảm giác không nhức mỏi, thoải mái khi sử dụng. Với Driver dễ sử dụng cùng với một loạt chương trình có thể điều chỉnh được. Tất cả đều dễ dàng sử dụng chỉ với 1 cú click chuột." },
  { id: "2", name: "Bàn phím Dareu EK75 PRO", price: 599.000, image: "assets/ek75pro.jpg", description: "Bàn Phím Cơ Bluetooth Dareu EK75 Pro được thương hiệu Dareu thiết kế chỉn chu, mang đến cho người dùng một mẫu bàn phím cơ cao cấp, trang bị đèn LED RGB với màu sắc phong phú, kích thước mỏng nhẹ, không chiếm quá nhiều diện tích trên bàn làm việc hay balo." },
  { id: "3", name: "Bàn phím Dareu EK75 PRO AL", price: 599.000, image: "assets/ek75proal.jpg", description: "Với tính năng này, người dùng có thể chọn lựa các loại switch phù hợp với sở thích hoặc mục đích sử dụng như switch clicky, linear hay tactile để tối ưu hóa cảm giác gõ hoặc trải nghiệm chơi game." },
  { id: "4", name: "Bàn phím Dareu EK98", price: 499.000, image: "assets/ek98.jpg", description: "Bàn phím cơ Dareu EK98 PRO có layout Fullsize (98 phím) đáp ứng tốt nhu cầu sử dụng của người làm các công việc văn phòng, cần nhập số liệu nhiều. EK98 PRO có 2 phiên bản màu là trắng và đen để người dùng có thể lựa chọn sử dụng tuỳ vào nhu cầu sử dụng." },
  { id: "5", name: "Bàn phím Dareu EM98X", price: 899.000, image: "assets/em98X.jpg", description: "Nếu bạn đang tìm kiếm một chiếc bàn phím gaming vừa mạnh mẽ trong hiệu năng, vừa chắc chắn trong trải nghiệm sử dụng lâu dài, thì bàn phím quang cơ Gaming Dareu EK98X PBT (Đen xám) chính là lựa chọn lý tưởng. Sở hữu switch Blue D siêu nhạy, thiết kế 98 phím tiết kiệm không gian, chất liệu PBT cao cấp và hệ thống đèn Multi LED nổi bật, Dareu EK98X là người bạn đồng hành đáng tin cậy cho mọi game thủ và người dùng yêu thích sự chính xác." },
  { id: "6", name: "Bàn phím Dareu EK104", price: 599.000, image: "assets/ek104.jpg", description: "DareU EK104 RGB Grey Black Dream Switch xuất hiện như một làn gió mới, mang đến trải nghiệm gõ phím vượt trội, thiết kế tinh tế và khả năng tùy biến ánh sáng RGB ấn tượng, đáp ứng mọi nhu cầu của người dùng, từ game thủ chuyên nghiệp đến người dùng văn phòng." },
  { id: "7", name: "Bàn phím Dareu EK807", price: 879.000, image: "assets/ek807.jpg", description: "Bàn Phím Không Dây DareU EK807G với kiểu dáng thân thiện cho bạn dễ dàng làm quen, kết cấu chắc chắn, khối lượng nhẹ giúp di chuyển dễ dàng và đặt vững vàng trên các bề mặt khác nhau. • Bàn phím không dây có mặt đáy bàn phím có độ bám tốt, chống trượt, hạn chế xê dịch trên bề mặt sử dụng khi dùng." },
  { id: "8", name: "Bàn phím Dareu EK810", price: 399.000, image: "assets/ek810.jpg", description: "Bàn phím cơ DAREU EK810 là một trong những mẫu bàn phím nổi bật của DAREU, được thiết kế dành cho cả game thủ và những người làm việc văn phòng, với những tính năng vượt trội như thiết kế hiện đại, cảm giác gõ mượt mà, và khả năng tùy chỉnh linh hoạt." },
  { id: "9", name: "Bàn phím Dareu EK861", price: 999.000, image: "assets/ek861.jpg", description: "Bàn phím cơ EK861 áp dụng cách sắp xếp 61 phím hoàn toàn mới. Thiết kế vị trí phím 61 gần như có chức năng của bàn phím chuẩn 108 phím, thiết kế khung hẹp làm cho bàn phím trở nên nhỏ gọn và chắc chắn hơn; cách sắp xếp phím 61 phím vẫn giữ nguyên các phím chức năng và phím điều hướng thường được sử dụng,phù hợp với mọi ngu cầu sử dụng cho dù là công việc văn phòng hay chơi game. Hỗ trợ cả kết nối có dây USB và kết nối không dây Bluetooth, đặc biệt với công nghệ Bluetooth 5.0 hỗ trợ kết nối cùng lúc 3 thiết bị ." },
  { id: "10", name: "Bàn phím Dareu EK135", price: 179.000, image: "assets/ek135.jpg", description: "Các phím của DareU LK135 cách nhau một khoảng vừa phải và chữ được in trắng nổi bật trên nền bàn phím đen hỗ trợ người dùng sử dụng tốt ngay cả trong môi trường ánh sáng yếu." },
  { id: "11", name: "Bàn phím Dareu 145", price: 199.000, image: "assets/ek145.jpg", description: "Bàn phím DareU EK145 mang lại cho người dùng trải nghiệm hoàn hảo nhất từ bộ đèn led rực rỡ,sản phẩm được trang bị hệ thống đèn led với 5 hiệu ứng khác nhau vô cùng bắt mắt và ấn tượng, sản phẩm phù hợp với các tựa game đòi hỏi nhiều thao tác và cổng kết nối chuẩn USB 2.0." },
  { id: "12", name: "Tai Nghe A710", price: 399.000, image: "assets/taingheA710.jpg", description: "Tai nghe DareU A710 sở hữu công nghệ âm thanh vòm 7.1 giả lập với driver 50mm, tích hợp đèn LED RGB, kích thước 202 x 216 x 90mm, khối lượng khoảng 345g. Sản phẩm có micro rời đa hướng, thời gian sử dụng 10 - 12 giờ, và hỗ trợ kết nối 5.8G, Type-C, jack 3.5mm." },

];

document.getElementById("search-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const keyword = document.getElementById("search-input").value.toLowerCase().trim();
    const found = products.find(p => p.name.toLowerCase().includes(keyword));
    
    if (found) {
      localStorage.setItem("selectedProduct", JSON.stringify(found));
      window.location.href = "sanpham.html";
    } else {
      alert("Không tìm thấy sản phẩm.");
    }
  });

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const product = products.find(p => p.id === id);

const container = document.getElementById("product-detail");

if (product) {
  container.innerHTML = `
    <h2>${product.name}</h2>
    <img src="${product.image}" width="300">
    <p>${product.description}</p>
    <p>Giá: ${product.price.toLocaleString()} VND</p>
    <button onclick="requireLogin(() => addToCart('${product.id}'))">Thêm vào giỏ hàng</button>
    <button onclick="requireLogin(() => buyNow('${product.id}'))">Mua ngay</button>
  `;
} else {
  container.innerHTML = "<p>Không tìm thấy sản phẩm.</p>";
}

function requireLogin(action) {
  if (!localStorage.getItem("loggedIn")) {
    alert("Bạn cần đăng nhập để thực hiện hành động này.");
    window.location.href = "dangnhap.html";
  } else {
    action();
  }
}

function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm vào giỏ hàng.");
}

function buyNow(id) {
  const cart = [id];
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "giohang.html";
}

function quayLaiTrangChu() {
  window.location.href = "index.html";
}


