import React, { useState } from "react";
import HeaderSugar from "../../components/SugarComponent/HeaderSugar";
import FooterSugar from "../../components/SugarComponent/FooterSugar";
import { Dialog } from "@headlessui/react";
import { Link } from "react-router-dom";


export const CartPageSugar = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Thức ăn cho sóc bay",
      image: "/images/SugarGlider/food.png",
      price: 150000,
      quantity: 1,
      description: "Thức ăn bổ dưỡng dành riêng cho sóc bay.",
    },
    {
      id: 2,
      name: "Túi ngủ cho sóc",
      image: "/images/SugarGlider/tuingu.png",
      price: 250000,
      quantity: 2,
      description: "Tổ ngủ mềm mại giúp sóc bay ngủ ngon hơn.",
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
      <HeaderSugar />
      <div className="min-h-screen bg-gray-100 px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-black mb-6 text-center">
            🐿️ Giỏ Hàng Sóc Bay
          </h1>

          {cartItems.length === 0 ? (
            <div className="alert alert-info shadow bg-gray-200 border border-black text-black">
              <span>Giỏ hàng của bạn đang trống.</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Cột trái - sản phẩm */}
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-gray-300/30 shadow rounded-lg p-3">
                  <p className="text-base text-gray-700">
                    Bạn đang có{" "}
                    <span className="font-semibold">
                      {cartItems.length} sản phẩm
                    </span>{" "}
                    trong giỏ hàng
                  </p>
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
                        className="btn btn-sm bg-red-600 text-white border-2 border-black hover:bg-red-700"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                ))}

                {/* Xuất hóa đơn cho đơn hàng */}
                <div className="collapse bg-gray-100 border border-black rounded-lg">
                  {/* Hidden checkbox để điều khiển collapse */}
                  <input
                    type="checkbox"
                    id="invoice-toggle"
                    className="peer hidden"
                  />

                  {/* Nhãn hiển thị tiêu đề và tick */}
                  <label
                    htmlFor="invoice-toggle"
                    className="collapse-title flex items-center gap-2 font-semibold cursor-pointer"
                  >
                    Xuất hoá đơn cho đơn hàng
                  </label>

                  {/* Nội dung collapse sẽ hiển thị khi checkbox được check */}
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

                    <button className="btn bg-gray-700 hover:bg-gray-800 text-white mt-2">
                      Lưu thông tin
                    </button>
                  </div>
                </div>
              </div>

              {/* Cột phải - thông tin đơn hàng */}
              <div className="bg-gray-50  shadow-lg border-2 border-black rounded-xl p-5 space-y-3 h-fit sticky top-30 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Thông tin đơn hàng
                  </h3>
                </div>

                <hr className="border-t border-gray-300" />

                <div className="text-lg font-semibold">
                  Tổng tiền:{" "}
                  <span className="text-red-600 text-2xl">
                    {total.toLocaleString()}₫
                  </span>
                </div>

                <ul className="text-sm list-disc list-inside text-gray-700 space-y-1">
                  <li>🚚 Hỗ trợ phí vận chuyển</li>
                  <li>⚡ Giao hỏa tốc trong 4 giờ (TP.HCM)</li>
                  <li>📦 Kiểm tra hàng trước khi thanh toán</li>
                </ul>

                {/* Ghi chú đơn hàng */}
                <div>
                  <label
                    htmlFor="note"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    📝 Ghi chú đơn hàng:
                  </label>
                  <textarea
                    id="note"
                    rows={3}
                    className="w-full p-2 border-2 border-black rounded shadow-sm focus:ring focus:ring-blue-200"
                    placeholder="Ví dụ: Giao giờ hành chính, gọi trước khi giao..."
                  />
                </div>

                <Link to="/thanh-toan-soc-bay">
                  <button className="relative border-2 border-black overflow-hidden w-full py-3 px-4 bg-red-600 text-white font-bold group rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                    <span className="relative z-10">THANH TOÁN</span>
                    <span className="absolute inset-0 bg-red-800 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <FooterSugar />

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

export default CartPageSugar;
