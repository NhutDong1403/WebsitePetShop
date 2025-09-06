import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("Hộp 1L");
  const price = 109000; // đơn giá cố định

  const images = ["/images/hat1.png", "/images/hat.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const formatCurrency = (num) =>
    num.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  const products = [
    {
      id: 1,
      image: "/images/hat1.png",
      name: "Thức ăn hạt cho chó",
      price: 109000,
      shipping: "Giao hàng nhanh",
      rating: 4.8,
      sold: 1200,
    },
    {
      image: "link_image",
      name: "Tên sản phẩm",
      price: 109000,
      shipping: "Giao hàng nhanh",
      rating: 4.8,
      sold: 1200,
    },
    {
      image: "link_image",
      name: "Tên sản phẩm",
      price: 109000,
      shipping: "Giao hàng nhanh",
      rating: 4.8,
      sold: 1200,
    },
    {
      image: "link_image",
      name: "Tên sản phẩm",
      price: 109000,
      shipping: "Giao hàng nhanh",
      rating: 4.8,
      sold: 1200,
    },
    {
      image: "link_image",
      name: "Tên sản phẩm",
      price: 109000,
      shipping: "Giao hàng nhanh",
      rating: 4.8,
      sold: 1200,
    },
  ];

  return (
    <div className="select-none">
      <Header />
      <main className="container font-mono mx-auto px-4 py-6 bg-white">
        <div className="md:flex gap-8">
          {/* LEFT: Image section với nút chuyển và 1 thumbnail duy nhất */}
          <div className="md:w-1/2 space-y-4 relative">
            {/* Ảnh lớn */}
            <div className="relative w-full h-[400px] bg-gray-50 rounded-xl shadow-lg overflow-hidden">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Ảnh ${i + 1}`}
                  className={`absolute inset-0 mx-auto my-auto max-h-full max-w-full object-contain transition-opacity duration-500 ease-in-out ${
                    currentIndex === i ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                />
              ))}

              {/* Nút trái */}
              <button
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? 1 : 0))}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow text-xl"
              >
                ←
              </button>

              {/* Nút phải */}
              <button
                onClick={() => setCurrentIndex((prev) => (prev === 1 ? 0 : 1))}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow text-xl"
              >
                →
              </button>
            </div>

            {/* Ảnh nhỏ duy nhất: ảnh còn lại */}
            <div className="flex gap-2 justify-start">
              <div
                onClick={() => setCurrentIndex(1 - currentIndex)}
                className="w-24 h-24 sm:w-32 sm:h-32 cursor-pointer rounded-md overflow-hidden border-2 border-gray-200 hover:border-red-500 transition duration-200"
              >
                <img
                  src={images[1 - currentIndex]} // ảnh còn lại
                  alt="Ảnh nhỏ"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Product detail section */}
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-2xl font-bold text-neutral">
              [Keos] Hạt cho chó con, vị gà trứng sữa (400gr - 20kg)
            </h1>
            <div className="flex items-center justify-start gap-2">
              <label className="label m-0">
                <span className="label-text text-base font-semibold">
                  Giá sản phẩm:
                </span>
              </label>
              <p className="text-red-600 text-2xl font-semibold">
                {formatCurrency(price)}
              </p>
            </div>

            <div className="flex flex-wrap items-center text-sm text-gray-600 gap-x-4 gap-y-1">
              <div className="flex items-center gap-1">
                <span className="font-medium text-gray-700">Mã SP:</span>
                <span>SP01</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-medium text-gray-700">Thương hiệu:</span>
                <span>Keo</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-medium text-gray-700">Tình trạng:</span>
                <span className="text-green-600 font-medium">Còn hàng</span>
              </div>
            </div>

            <div className="space-y-3">
              <label className="label">
                <span className="label-text text-base font-semibold">
                  Thông tin sản phẩm:
                </span>
              </label>
              <div className="text-sm text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl shadow-sm">
                <p>
                  <strong>Hạt cho chó con Keos</strong> là lựa chọn tuyệt vời
                  dành cho các bé cún trong giai đoạn phát triển đầu đời. Với
                  công thức chuyên biệt kết hợp giữa thịt gà, trứng và sữa, sản
                  phẩm cung cấp đầy đủ <strong>protein, canxi, DHA</strong> và
                  các
                  <strong> vitamin thiết yếu</strong> hỗ trợ phát triển toàn
                  diện.
                </p>
                <p>
                  Keos được sản xuất từ{" "}
                  <strong>nguyên liệu tự nhiên 100%</strong>, không chứa chất
                  bảo quản độc hại hay phẩm màu nhân tạo, đảm bảo an toàn tuyệt
                  đối cho hệ tiêu hóa non yếu của chó con.
                </p>
                <p>
                  Hạt có <strong>kích thước nhỏ, mềm vừa phải</strong>, rất phù
                  hợp với răng miệng của chó con từ 2 tháng tuổi trở lên. Ngoài
                  ra, còn bổ sung <strong>Omega-3 & Omega-6</strong> giúp lông
                  mượt, da khỏe và hạn chế rụng lông.
                </p>
                <p>
                  🌟 <strong>Ưu điểm nổi bật:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Phù hợp cho chó con từ 2–12 tháng tuổi</li>
                    <li>Hương vị: Gà – Trứng – Sữa</li>
                    <li>
                      Quy cách: Gói 400gr, 1.5kg, hoặc thùng 9kg (6 gói 1.5kg)
                    </li>
                    <li>Sản xuất tại Việt Nam theo công nghệ Úc</li>
                  </ul>
                </p>
                <p className="mt-2">
                  Với Keos, bạn hoàn toàn yên tâm về chất lượng dinh dưỡng cho
                  thú cưng, giúp các bé cún phát triển khỏe mạnh và toàn diện
                  ngay từ những bước đi đầu đời.
                </p>
              </div>
            </div>

            {/* Kích thước */}
            <div className="form-control">
              <label className="label py-2">
                <span className="label-text text-base font-semibold">
                  Trọng lượng:
                </span>
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  className={`btn w-full sm:w-auto hover hover:bg-pink-200 px-6 py-3 rounded-xl text-base ${
                    size === "400gr" ? "btn-error text-white" : "btn-outline"
                  }`}
                  onClick={() => setSize("400gr")}
                >
                  400gr
                </button>

                <button
                  className={`btn w-full sm:w-auto hover hover:bg-pink-200 px-6 py-3 rounded-xl text-base ${
                    size === "1.5kg" ? "btn-error text-white" : "btn-outline"
                  }`}
                  onClick={() => setSize("1.5kg")}
                >
                  1.5kg
                </button>

                <button
                  className={`btn w-full sm:w-auto hover hover:bg-pink-200 px-6 py-3 rounded-xl text-base flex flex-col items-center ${
                    size === "9kg" ? "btn-error text-white" : "btn-outline"
                  }`}
                  onClick={() => setSize("9kg")}
                >
                  <span className="text-xs">9kg (thùng 6 gói 1.5kg)</span>
                </button>
                <button
                  disabled // thêm dòng này
                  className={`btn w-full sm:w-auto px-6 py-3 rounded-xl text-base flex flex-col items-center 
                    ${size === "20kg" ? "btn-error text-white" : "btn-outline"} 
                    ${true ? "opacity-50 cursor-not-allowed" : ""}
                  `}
                  onClick={() => setSize("20kg")}
                >
                  <span className="text-xs">20kg</span>
                </button>
              </div>
            </div>

            {/* Số lượng */}
            <div className="flex items-center gap-4">
              <label className="label">
                <span className="label-text text-base font-semibold">
                  Số lượng:
                </span>
              </label>
              <button
                className="btn btn-error btn-sm text-white rounded-full"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                className="btn btn-error btn-sm text-white rounded-full"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            {/* Tổng tiền */}
            <div className="text-md font-medium text-gray-700">
              Tổng:{" "}
              <span className="text-lg text-red-600 font-semibold">
                {formatCurrency(price * quantity)}
              </span>
            </div>

            {/* Thêm vào giỏ */}
            <div className="flex items-center px-2 gap-2">
              <button className="btn btn-error text-white w-93 group overflow-hidden relative">
                <span className="flex items-center justify-center gap-2 transform transition-transform duration-300 group-hover:translate-x-2">
                  <img className="w-5 h-5" src="/images/Buy.gif" alt="buy" />
                  THÊM VÀO GIỎ
                </span>
              </button>
              <button className="btn btn-error text-white w-93 group overflow-hidden relative">
                <span className="flex items-center justify-center gap-2 transform transition-transform duration-300 group-hover:translate-x-2">
                  <img className="w-5 h-5" src="/images/Buy.gif" alt="buy" />
                  MUA NGAY
                </span>
              </button>
            </div>

            <div className="flex items-center gap-10 flex-wrap">
              <div className="flex items-center gap-1">
                <img
                  className="w-9 h-9"
                  src="/images/Chinhhang.gif"
                  alt="chinhhang"
                />
                <span>Cam kết 100% chính hãng</span>
              </div>
              <div className="flex items-center gap-1">
                <img
                  className="w-9 h-9"
                  src="/images/Giaohang.gif"
                  alt="giaohang"
                />
                <span>Giảm chi phí giao hàng</span>
              </div>
              <div className="flex items-center gap-1">
                <img className="w-9 h-9" src="/images/Hotro.gif" alt="hotro" />
                <span>Hỗ trợ 24/7</span>
              </div>
            </div>
          </div>
        </div>
        <span className="text-3xl text-pink-700 font-bold">
          Sản phẩm liên quan
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-2">
          {products.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
