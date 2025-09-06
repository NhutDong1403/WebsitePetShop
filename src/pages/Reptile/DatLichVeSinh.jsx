import React, { useState } from "react";
import HeaderReptile from "../../components/ReptileComponent/HeaderReptile";
import FooterReptile from "../../components/ReptileComponent/FooterReptile";
import { Calendar, User, Phone, Mail, FileText } from "lucide-react";
import Breadcrumbs from "../../components/Breadcrumbs";

export const DatLichVeSinh = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    note: "",
  });

  const services = [
    {
      id: 1,
      name: "Tắm & Làm Sạch Da",
      price: "50.000đ",
      desc: "Loại bỏ vi khuẩn, giữ da khỏe mạnh.",
      icon: (
        <img
          className="w-20 h-20 text-lime-600 rounded-full border-2 "
          src="/images/Admin/tam.gif"
          alt="tam"
        />
      ),
    },
    {
      id: 2,
      name: "Cắt Móng",
      price: "70.000đ",
      desc: "Cắt tỉa móng gọn gàng, hạn chế trầy xước.",
      icon: (
        <img
          className="w-20 h-20 text-lime-600 rounded-full border-2 "
          src="/images/Admin/cat.gif"
          alt="catmomg"
        />
      ),
    },
    {
      id: 3,
      name: "Kiểm Tra Da, Vảy & Mắt",
      price: "90.000đ",
      desc: "Phát hiện sớm các bệnh ngoài da và mắt.",
      icon: (
        <img
          className="w-20 h-20 text-lime-600 rounded-full border-2 "
          src="/images/Admin/kiemtra.gif"
          alt="kiemtra"
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
      alert("Vui lòng chọn dịch vụ!");
      return;
    }
    console.log("Đặt lịch:", { ...formData, selectedService });
    alert(`Đặt lịch thành công cho dịch vụ ${selectedService.name}!`);
  };

  return (
    <div className="select-none">
      <HeaderReptile />
      <div className="max-w-6xl mx-auto mt-2 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ bò sát", to: "/san-pham-bo-sat" },
            { name: "Dịch vụ Spa", to: "/dich-vu-bo-sat" },
            { name: "Vệ Sinh & Chăm Sóc Sức Khỏe", to: "/dich-vu-bo-sat" },
            { name: "Đặt lịch vệ sinh & chăm sóc sức khỏe", to: "#" },
          ]}
        />
      </div>

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-green-700">
          🦎 Đặt Lịch Vệ Sinh & Chăm Sóc Sức Khỏe
        </h2>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {services.map((svc) => (
            <div
              key={svc.id}
              onClick={() => setSelectedService(svc)}
              className={`cursor-pointer border-2 rounded-2xl p-6 shadow-lg text-center transition transform hover:scale-105
                ${
                  selectedService?.id === svc.id
                    ? "border-green-600 bg-green-50"
                    : "border-gray-300"
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
          className="bg-white border-2 border-black rounded-2xl p-8 shadow-lg space-y-6"
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-lime-800">
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
                className="w-full p-2 border-2 border-gray-400 rounded-lg"
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
                className="w-full p-2 border-2 border-gray-400 rounded-lg"
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
                className="w-full p-2 border-2 border-gray-400 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Ngày đặt
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border-2 border-gray-400 rounded-lg"
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
              className="w-full p-2 border-2 border-gray-400 rounded-lg"
              placeholder="VD: Bé nhà mình sợ nước, cần nhẹ nhàng khi tắm..."
            />
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-lime-600 text-white font-semibold border-2 border-black rounded-xl hover:bg-lime-600/80 transition"
            >
              Xác nhận đặt lịch
            </button>
          </div>
        </form>
      </div>
      <FooterReptile />
    </div>
  );
};

export default DatLichVeSinh;
