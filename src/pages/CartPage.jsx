import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Dialog } from "@headlessui/react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Thức ăn cho chó",
      image: "/images/hat.png",
      price: 120000,
      quantity: 1,
      description: "Thức ăn bổ dưỡng dành riêng cho chó.",
    },
    {
      id: 2,
      name: "Chuồng chó chất lượng",
      image: "/images/chuongcho.png",
      price: 350000,
      quantity: 2,
      description: "Lồng tiện nghi, thoáng mát cho chó.",
    },
    {
      id: 3,
      name: "Đồ chơi cho chó",
      image: "/images/dochoi.png",
      price: 80000,
      quantity: 1,
      description: "Đồ chơi an toàn, giúp chó giải trí.",
    },
    {
      id: 4,
      name: "Thức ăn cho mèo",
      image: "/images/hat1.png",
      price: 150000,
      quantity: 1,
      description: "Thức ăn dinh dưỡng dành riêng cho mèo.",
    },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="select-none">
      <Header />
      <div className="max-w-6xl mx-auto mt-5 px-3 sm:px-4 lg:px-8">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/" },
            { name: "Giỏ hàng", to: "/gio-hang" },
          ]}
        />
      </div>

      <div className="min-h-screen bg-pink-50 px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6 text-center">
            🐶 Giỏ Hàng Chó Mèo 😸
          </h1>

          {cartItems.length === 0 ? (
            <div className="alert alert-info shadow bg-gray-200 border border-black text-black text-center">
              Giỏ hàng của bạn đang trống.
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Cột trái - sản phẩm */}
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-pink-300/30 shadow rounded-lg p-3">
                  Bạn đang có{" "}
                  <span className="font-semibold">{cartItems.length}</span> sản
                  phẩm trong giỏ hàng
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex bg-white shadow rounded-lg border border-gray-300 p-4"
                  >
                    <figure
                      className="cursor-pointer"
                      onClick={() => openModal(item)}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </figure>

                    <div className="flex-1 px-4 flex flex-col justify-center">
                      <h2
                        className="text-xl font-semibold text-black cursor-pointer"
                        onClick={() => openModal(item)}
                      >
                        {item.name}
                      </h2>
                      <p className="text-sm text-gray-500 mb-1">
                        {item.description}
                      </p>

                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Số lượng:</span>
                        <div className="flex items-center border rounded-md border-black">
                          <button
                            className="px-2 py-1 text-lg font-bold text-black hover:bg-gray-200"
                            onClick={() => handleQuantityChange(item.id, -1)}
                          >
                            -
                          </button>
                          <span className="px-4">{item.quantity}</span>
                          <button
                            className="px-2 py-1 text-lg font-bold text-black hover:bg-gray-200"
                            onClick={() => handleQuantityChange(item.id, 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <p className="mt-2 text-sm">
                        Giá:{" "}
                        <span className="text-red-600 font-semibold">
                          {(item.price * item.quantity).toLocaleString()}₫
                        </span>
                      </p>
                    </div>

                    <div className="flex items-start pt-10">
                      <button
                        className="btn btn-sm bg-red-600 text-white border border-black hover:bg-red-700"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                ))}

                {/* Xuất hóa đơn */}
                <div className="collapse bg-pink-100 border border-black rounded-lg">
                  <input
                    type="checkbox"
                    id="invoice-toggle"
                    className="peer hidden"
                  />
                  <label
                    htmlFor="invoice-toggle"
                    className="collapse-title flex items-center gap-2 font-semibold cursor-pointer"
                  >
                    Xuất hoá đơn cho đơn hàng
                  </label>
                  <div className="collapse-content peer-checked:max-h-screen max-h-0 overflow-hidden transition-all duration-300 text-sm space-y-4 pt-2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <input
                        type="text"
                        placeholder="Tên công ty..."
                        className="input input-bordered w-full"
                      />
                      <input
                        type="text"
                        placeholder="Mã số thuế..."
                        className="input input-bordered w-full"
                      />
                      <input
                        type="email"
                        placeholder="Email..."
                        className="input input-bordered w-full"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Địa chỉ công ty..."
                      className="input input-bordered w-full"
                    />
                    <button className="btn bg-pink-700 hover:bg-pink-800 text-white mt-2">
                      Lưu thông tin
                    </button>
                  </div>
                </div>
              </div>

              {/* Cột phải - sticky theo header */}
              <div className="lg:col-span-1 self-start">
                <div className="sticky top-[80px] bg-gradient-to-b from-pink-50 to-white shadow-xl border-2 border-pink-300 rounded-2xl p-6 space-y-5 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-pink-600 mb-2 text-center">
                    🛒 Thông tin đơn hàng
                  </h3>
                  <hr className="border-t border-pink-300" />

                  <div className="text-lg font-semibold flex justify-between items-center">
                    <span>Tổng tiền:</span>
                    <span className="text-red-600 text-2xl font-bold">
                      {total.toLocaleString()}₫
                    </span>
                  </div>

                  <ul className="text-sm list-disc list-inside text-gray-700 space-y-1">
                    <li>🚚 Hỗ trợ phí vận chuyển</li>
                    <li>⚡ Giao hỏa tốc trong 4 giờ (TP.HCM)</li>
                    <li>📦 Kiểm tra hàng trước khi thanh toán</li>
                  </ul>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      📝 Ghi chú đơn hàng:
                    </label>
                    <textarea
                      rows={4}
                      className="w-full p-3 border border-pink-300 rounded-xl shadow-sm focus:ring focus:ring-pink-200 focus:border-pink-400 transition-all"
                      placeholder="Ví dụ: Giao giờ hành chính, gọi trước khi giao..."
                    />
                  </div>

                  <Link to="/thanh-toan">
                    <button className="w-full py-3 px-5 bg-pink-500 border-2 border-pink-600 text-white font-bold rounded-xl shadow-lg hover:bg-pink-600 hover:shadow-xl transition-all duration-300">
                      THANH TOÁN
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />

      {/* Modal chi tiết sản phẩm */}
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg border border-black">
            {selectedItem && (
              <>
                <Dialog.Title className="text-2xl font-bold text-black text-center mb-4">
                  {selectedItem.name}
                </Dialog.Title>
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-60 object-contain rounded mb-4 border border-gray-300"
                />
                <p className="text-gray-700 mb-2">{selectedItem.description}</p>
                <p className="text-lg font-semibold text-red-600 mb-4">
                  Giá: {selectedItem.price.toLocaleString()}₫
                </p>
                <div className="flex justify-end">
                  <button
                    className="btn btn-sm bg-red-600 text-white hover:bg-red-700 border border-black"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Đóng
                  </button>
                </div>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default CartPage;
