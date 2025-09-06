import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Calendar, User, Phone, Mail, FileText, Package } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";

export const BookTakeCarePage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    startDate: "",
    note: "",
  });

  const packages = [
    {
      id: 1,
      name: "Tắm & Vệ sinh",
      price: "150.000đ",
      desc: "Giữ cho bé luôn sạch sẽ, thơm mát bằng phương pháp dịu nhẹ",
      icon: (
        <img
          className="w-20 h-20 text-pink-600 rounded-full border-2 "
          src="/images/Admin/tam.gif"
          alt="tam"
        />
      ),
    },
    {
      id: 2,
      name: "Cắt móng & Chải lông",
      price: "400.000đ",
      desc: "Chăm sóc móng để tránh tổn thương khi chạy nhảy và chơi đùa",
      icon: (
        <img
          className="w-20 h-20 text-pink-600 rounded-full border-2 "
          src="/images/Admin/cat.gif"
          alt="tam"
        />
      ),
    },
    {
      id: 3,
      name: "Kiểm tra sức khỏe",
      price: "900.000đ",
      desc: "Giúp phát hiện sớm bệnh, ngừa rủi ro, giữ thú cưng luôn khỏe mạnh",
      icon: (
        <img
          className="w-20 h-20 text-pink-600 rounded-full border-2 "
          src="/images/Admin/kham.gif"
          alt="tam"
        />
      ),
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedPackage) {
      alert("Vui lòng chọn gói dịch vụ!");
      return;
    }
    console.log("Đặt lịch:", { ...formData, selectedPackage });
    alert("Đặt lịch thành công!");
    // TODO: Gọi API đặt lịch ở đây
  };

  return (
    <div className="select-none bg-pink-50">
      <Header />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/" },
            { name: "Dịch vụ Spa", to: "/dich-vu-1" },
            { name: "Vệ Sinh & Chăm Sóc Cơ Bản", to: "/dich-vu-1" },
            { name: "Đặt lịch vệ sinh & chăm sóc", to: "#" },
          ]}
        />
      </div>

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-pink-700">
          🐶 Đặt Lịch Vệ Sinh & Chăm Sóc Cơ Bản 🐱
        </h2>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {packages.map((svc) => (
            <div
              key={svc.id}
              onClick={() => setSelectedService(svc)}
              className={`cursor-pointer border-2 rounded-2xl p-6 shadow-lg text-center transition transform hover:scale-105
                ${
                  selectedService?.id === svc.id
                    ? "border-black border-3 bg-pink-200"
                    : "border-black bg-pink-100"
                }`}
            >
              <div className="flex justify-center items-center mb-3">
                {svc.icon}
              </div>
              <h3 className="text-xl mt-2 font-bold">{svc.name}</h3>
              <p className="text-gray-600 mt-2">{svc.desc}</p>
              <p className="text-2xl font-semibold text-red-700 mt-3">
                {svc.price}
              </p>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-pink-100 border-2 border-black rounded-2xl p-8 shadow-lg space-y-6"
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-pink-800">
            <Calendar className="w-6 h-6" /> Thông tin đặt lịch
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold mb-1 flex items-center gap-2">
                <User className="w-4 h-4" /> Họ và tên
              </label>
              <input
                type="text"
                name="name"
                placeholder="Họ và tên của bạn"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border-2 border-black rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 flex items-center gap-2">
                <Phone className="w-4 h-4" /> Số điện thoại
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Số điện thoại của bạn"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border-2 border-blackrounded-lg"
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email của bạn"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border-2 border-black rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Ngày bắt đầu gửi
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full p-2 border-2 border-black rounded-lg"
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Ghi chú thêm
            </label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              rows="3"
              className="w-full p-2 border-2 border-black rounded-lg"
              placeholder="VD: Bé nhà mình hơi nhát, chỉ ăn hạt..."
            />
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-pink-600 text-white font-semibold border-2 border-black rounded-xl hover:bg-pink-600/80 transition transform hover:scale-105"
            >
              Xác nhận đặt lịch
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default BookTakeCarePage;
