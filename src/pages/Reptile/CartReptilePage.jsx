import React, { useState } from "react";
import HeaderReptile from "../../components/ReptileComponent/HeaderReptile";
import FooterReptile from "../../components/ReptileComponent/FooterReptile";
import { Dialog } from "@headlessui/react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";

export const CartReptilePage = () => {
  const initialCart = [
    {
      id: 1,
      name: "Đèn sưởi UVB cho bò sát",
      image: "/images/Reptile/denUVB.png",
      price: 250000,
      quantity: 1,
      description:
        "Đèn UVB giúp bổ sung vitamin D3 cho bò sát, tăng hấp thu canxi.",
    },
    {
      id: 2,
      name: "Lót chuồng cho bò sát",
      image: "/images/Reptile/lotchuong.png",
      price: 180000,
      quantity: 2,
      description:
        "Chất liệu an toàn, giữ vệ sinh và dễ thay thế cho chuồng bò sát.",
    },
    {
      id: 3,
      name: "Lót chuồng cho bò sát",
      image: "/images/Reptile/lotchuong.png",
      price: 180000,
      quantity: 2,
      description:
        "Chất liệu an toàn, giữ vệ sinh và dễ thay thế cho chuồng bò sát.",
    },
    {
      id: 4,
      name: "Lót chuồng cho bò sát",
      image: "/images/Reptile/lotchuong.png",
      price: 180000,
      quantity: 2,
      description:
        "Chất liệu an toàn, giữ vệ sinh và dễ thay thế cho chuồng bò sát.",
    },
  ];

  const [cartItems, setCartItems] = useState(initialCart);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="select-none">
      <HeaderReptile />
      <div className="max-w-6xl mx-auto mt-2 px-3 sm:px-4 lg:px-8">
        <div className="flex flex-wrap mt-5 gap-x-2 gap-y-1">
          <Breadcrumbs
            links={[
              { name: "Trang chủ", to: "/" },
              { name: "Giỏ hàng", to: "/gio-hang-bo-sat" },
            ]}
          />
        </div>
      </div>

      <div className="min-h-screen bg-lime-50 px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-lime-700 mb-6 text-center">
            🦎 Giỏ Hàng Bò Sát
          </h1>

          {cartItems.length === 0 ? (
            <div className="alert alert-info shadow-lg">
              <span>Giỏ hàng của bạn đang trống.</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Cột trái: Danh sách sản phẩm */}
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-lime-700/20 shadow-md rounded-2xl p-3">
                  <p className="text-l text-gray-600">
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
                    className="flex bg-gray-50 shadow-md rounded-lg border border-lime-200 p-4"
                  >
                    {/* Hình ảnh */}
                    <figure
                      className="cursor-pointer"
                      onClick={() => handleOpenModal(item)}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </figure>

                    {/* Nội dung */}
                    <div className="flex-1 px-4 flex flex-col justify-center">
                      <h2
                        className="text-xl text-black text-base font-semibold cursor-pointer"
                        onClick={() => handleOpenModal(item)}
                      >
                        {item.name}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>

                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-gray-600 text-sm">Số lượng:</span>
                        <div className="flex items-center border rounded-md">
                          <button
                            className="px-2 py-1 text-lg font-bold text-lime-600 hover:text-lime-800"
                            onClick={() => handleQuantityChange(item.id, -1)}
                          >
                            -
                          </button>
                          <span className="px-4">{item.quantity}</span>
                          <button
                            className="px-2 py-1 text-lg font-bold text-lime-600 hover:text-lime-800"
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

                    {/* Nút Xóa */}
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
                <div className="collapse bg-lime-600 text-white border border-black rounded-lg">
                  {/* Hidden checkbox để điều khiển collapse */}
                  <input
                    type="checkbox"
                    id="invoice-toggle"
                    className="peer hidden"
                  />

                  {/* Nhãn hiển thị tiêu đề và tick */}
                  <label
                    htmlFor="invoice-toggle"
                    className="collapse-title text-gray-100 flex items-center gap-2 font-semibold cursor-pointer"
                  >
                    Xuất hoá đơn cho đơn hàng
                  </label>

                  {/* Nội dung collapse sẽ hiển thị khi checkbox được check */}
                  <div className="collapse-content peer-checked:max-h-screen max-h-0 overflow-hidden transition-all duration-300 text-sm space-y-4 pt-2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <input
                        type="text"
                        placeholder="Tên công ty..."
                        className="input input-bordered border-2 border-black w-full text-black"
                      />
                      <input
                        type="text"
                        placeholder="Mã số thuế..."
                        className="input input-bordered border-2 border-black w-full text-black"
                      />
                      <input
                        type="email"
                        placeholder="Email..."
                        className="input input-bordered border-2 border-black w-full text-black"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Địa chỉ công ty..."
                      className="input input-bordered border-2 border-black w-full text-black"
                    />

                    <button className="btn btn-outline bg-lime-700 border-2 border-black text-white mt-2">
                      Lưu thông tin
                    </button>
                  </div>
                </div>
              </div>

              {/* Cột phải: Thông tin đơn hàng */}
              <div className="lg:col-span-1 self-start">
                <div className="sticky top-[100px] bg-white shadow-xl border-4 border-emerald-700 rounded-2xl p-6 space-y-5 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-emerald-700 mb-2 text-center">
                    Thông tin đơn hàng
                  </h3>
                  <hr className="border-t border-emerald-700" />

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
                      className="w-full p-3 border border-emerald-700 rounded-xl shadow-sm focus:ring focus:ring-red-200 focus:border-red-500 transition-all"
                      placeholder="Ví dụ: Giao giờ hành chính, gọi trước khi giao..."
                    />
                  </div>

                  <Link to="/thanh-toan-bo-sat">
                    <button className="w-full py-3 px-5 bg-green-600 border-4 border-emerald-700 text-white font-bold rounded-xl shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300">
                      THANH TOÁN
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <FooterReptile />

      {/* Modal chi tiết sản phẩm */}
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            {selectedItem && (
              <>
                <Dialog.Title className="flex justify-center text-2xl font-bold text-black mb-2">
                  {selectedItem.name}
                </Dialog.Title>
                <img src={selectedItem.image} alt={selectedItem.name} />
                <p className="text-gray-700 mb-4">{selectedItem.description}</p>
                <p className="text-lg font-semibold text-red-600">
                  Giá: {selectedItem.price.toLocaleString()}₫
                </p>
                <div className="mt-4 text-right">
                  <button
                    className="btn btn-sm bg-red-600 text-white border border-black hover:bg-red-700"
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

export default CartReptilePage;
