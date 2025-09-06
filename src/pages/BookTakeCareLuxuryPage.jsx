import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Calendar, User, Phone, Mail, FileText, Home } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";

export const BookTakeCareLuxuryPage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
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
      name: "Gói chăm hộ 1 ngày",
      price: "80.000đ / giờ",
      desc: "Chăm sóc bé trong khoảng thời gian ngắn, phù hợp khi bạn bận công việc.",
      icon: (
        <img
          className="w-20 h-20 rounded-full border-2"
          src="/images/Admin/hourcare.gif"
          alt="care-hour"
        />
      ),
    },
    {
      id: 2,
      name: "Gói chăm hộ 3 ngày",
      price: "300.000đ / đêm",
      desc: "Dịch vụ ngủ lại, chăm sóc và chơi cùng bé suốt đêm.",
      icon: (
        <img
          className="w-20 h-20 rounded-full border-2"
          src="/images/Admin/nightcare.gif"
          alt="care-night"
        />
      ),
    },
    {
      id: 3,
      name: "Gói chăm hộ 7 ngày",
      price: "1.200.000đ / tuần",
      desc: "Phù hợp cho chuyến đi xa, đảm bảo bé được chăm sóc đầy đủ và an toàn.",
      icon: (
        <img
          className="w-20 h-20 rounded-full border-2"
          src="/images/Admin/longcare.gif"
          alt="care-long"
        />
      ),
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedService) {
      alert("Vui lòng chọn gói dịch vụ!");
      return;
    }
    console.log("Đặt lịch chăm hộ:", { ...formData, selectedService });
    alert("Đặt lịch thành công!");
    // TODO: Gọi API đặt lịch ở đây
  };

  return (
    <div className="select-none">
      <Header />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/" },
            { name: "Dịch vụ chăm hộ", to: "/dich-vu-3" },
            { name: "Đặt lịch chăm hộ", to: "#" },
          ]}
        />
      </div>

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-pink-700">
          🐶 Dịch Vụ Chăm Hộ Cho Chó Mèo 🐱
        </h2>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg)}
              className={`cursor-pointer border-2 rounded-2xl p-6 shadow-lg text-center transition transform hover:scale-105
                ${
                  selectedPackage?.id === pkg.id
                    ? "border-pink-600 bg-pink-50"
                    : "border-gray-300"
                }`}
            >
              <div className="flex justify-center items-center">
                <img
                  className="w-20 h-20 text-pink-600 rounded-full border-2"
                  src="/images/Admin/petcare.gif"
                  alt="petcare"
                />
              </div>
              <h3 className="text-xl mt-2 font-bold">{pkg.name}</h3>
              <p className="text-gray-600 mt-2">{pkg.desc}</p>
              <p className="text-2xl font-semibold text-red-700 mt-3">
                {pkg.price}
              </p>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-pink-50 border-2 border-black rounded-2xl p-8 shadow-lg space-y-6"
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
                className="w-full p-2 border-2 border-black rounded-lg"
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

export default BookTakeCareLuxuryPage;
