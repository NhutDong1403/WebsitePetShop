import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

const PayPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "cod",
    shippingMethod: "hoaToc",
  });

  const [loading, setLoading] = useState(false);

  // Xử lý input thay đổi
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Xử lý bấm nút
  const handleClick = async () => {
    if (!formData.name || !formData.phone || !formData.address) {
      Swal.fire({
        icon: "error",
        title: "Thiếu thông tin",
        text: "Vui lòng điền đầy đủ thông tin giao hàng!",
        confirmButtonText: "Quay lại",
        confirmButtonColor: "#e11d48",
      });
      return;
    }

    setLoading(true);

    // ⏳ Giả lập call API (chờ 1.5s)
    setTimeout(() => {
      setLoading(false);

      Swal.fire({
        icon: "success",
        title: "Đặt hàng thành công",
        text: "Cảm ơn bạn đã mua hàng tại PawShop 💖 ",
        confirmButtonText: "Quay về trang chủ",
        confirmButtonColor: "#e11d48",
      }).then(() => {
        navigate("/"); // ✅ chuyển về Home sau khi bấm OK
      });
    }, 1500);
  };

  return (
    <div className="select-none">
      <Header />
      <div className="max-w-6xl mx-auto mt-2 px-3 sm:px-4 lg:px-8">
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          <Breadcrumbs
            links={[
              { name: "Trang chủ", to: "/" },
              { name: "Giỏ hàng", to: "/gio-hang" },
              { name: "Thanh toán đơn hàng", to: "#" },
            ]}
          />
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 flex items-start justify-center py-10 px-4">
        <div className="flex flex-col md:flex-row w-full max-w-6xl gap-6">
          {/* Left: Order summary (hiện trước ở mobile, trái ở desktop) */}
          <div className="flex-1 bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-2 border-black">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-pink-600">
              🛒 Đơn hàng
            </h2>

            {/* Products */}
            <div className="space-y-4">
              {/* Product */}
              <div className="flex gap-3 sm:gap-4 items-start p-3 border rounded-lg hover:shadow-md transition">
                <div className="relative">
                  <img
                    src="/images/hat1.png"
                    alt="product"
                    className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg"
                  />
                  <span className="absolute top-0 left-0 bg-pink-300 text-black text-[10px] sm:text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    1
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm font-medium">
                    Thức ăn hạt hữu cơ Natural Core Bene C3 Cho mèo lớn trưởng
                    thành [500g - 1.5kg - 5kg - 10kg]
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-500">
                    Gói 500g
                  </p>
                </div>
                <div className="text-xs sm:text-sm text-red-600 font-semibold flex-shrink-0">
                  75,000₫
                </div>
              </div>
            </div>

            {/* Mã giảm giá */}
            <div className="mt-5">
              <hr className="mb-4" />
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Mã giảm giá"
                  className="flex-1 h-12 md:h-[60px] border-2 border-black mr-0.5 rounded-l-lg p-2 
               text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-pink-400 focus:border-pink-400
               md:w-[385px]"
                />
                <button
                  className="h-12 md:h-[60px] bg-pink-300 font-semibold text-black border-2 border-black 
                     px-3 md:px-4 rounded-r-lg hover:bg-pink-400 transition 
                     text-sm md:text-base"
                >
                  Sử dụng
                </button>
              </div>
            </div>

            {/* Total */}
            <div className="mt-6 border-t pt-4 space-y-20">
              <div className="flex justify-between text-gray-700 text-sm sm:text-base">
                <span className="font-semibold">Tạm tính</span>
                <span>344,000₫</span>
              </div>
              <div className="flex justify-between text-gray-700 text-sm sm:text-base">
                <span className="font-semibold">Phí vận chuyển</span>
                <span>—</span>
              </div>
              <div className="flex justify-between text-base sm:text-lg">
                <span className="font-semibold">Tổng cộng</span>
                <span className="text-xl sm:text-2xl font-bold text-red-600">
                  344,000₫
                </span>
              </div>
            </div>
          </div>

          {/* Right: Form (hiện sau ở mobile, phải ở desktop) */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border-5 border-pink-600">
            <h2 className="flex justify-center text-3xl font-bold mb-6 text-pink-600">
              Thông tin giao hàng
            </h2>

            {/* Input fields */}
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Họ và tên"
                className="w-full border-2 border-black rounded-lg p-3 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 focus:outline-none"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border-2 border-black rounded-lg p-3 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 focus:outline-none"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Số điện thoại"
                className="w-full border-2 border-black rounded-lg p-3 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 focus:outline-none"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                name="address"
                placeholder="Địa chỉ giao hàng"
                className="w-full border-2 border-black rounded-lg p-3 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 focus:outline-none"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            {/* Vận chuyển */}
            <h3 className="text-2xl font-semibold mt-6 mb-3 text-pink-600">
              Phương thức vận chuyển
            </h3>
            <div className="space-y-2">
              <label className="flex items-center justify-between cursor-pointer border p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="shippingMethod"
                    value="hoaToc"
                    checked={formData.shippingMethod === "hoaToc"}
                    onChange={handleChange}
                    className="accent-pink-500 mr-2"
                  />
                  <img
                    className="w-15 h-15 rounded-lg"
                    src="/images/delivery.gif"
                    alt="fast"
                  />
                  Hỏa tốc HCM đơn dưới 399k
                </div>
                <div className="font-semibold">20,000₫</div>
              </label>
            </div>

            {/* Thanh toán */}
            <h3 className="text-2xl font-semibold mt-6 mb-3 text-pink-600">
              Phương thức thanh toán
            </h3>
            <div className="space-y-2">
              <label className="flex items-center justify-between cursor-pointer border p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={handleChange}
                    className="accent-pink-500"
                  />
                  <img
                    className="h-15 w-15 rounded-lg"
                    src="/images/box.gif"
                    alt="cod"
                  />
                  Thanh toán khi giao hàng (COD)
                </div>
              </label>

              <label className="flex items-center justify-between cursor-pointer border p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={formData.paymentMethod === "bank"}
                    onChange={handleChange}
                    className="accent-pink-500"
                  />
                  <img
                    className="w-15 h-15 rounded-lg"
                    src="/images/money.gif"
                    alt="card"
                  />
                  Chuyển khoản qua ngân hàng
                </div>
              </label>
            </div>

            {/* Button */}
            <button
              onClick={handleClick}
              disabled={loading}
              className="mt-8 w-full bg-pink-600 text-white p-4 rounded-xl 
                 hover:bg-pink-700 transition-transform transform 
                 hover:scale-105 font-semibold text-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Đang xử lý...
                </div>
              ) : (
                "Hoàn tất đơn hàng"
              )}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PayPage;
