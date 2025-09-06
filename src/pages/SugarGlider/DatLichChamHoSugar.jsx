import React, { useState } from "react";
import HeaderSugar from "../../components/SugarComponent/HeaderSugar";
import FooterSugar from "../../components/SugarComponent/FooterSugar";
import { Calendar, User, Phone, Mail, FileText, Package } from "lucide-react";
import Breadcrumbs from "../../components/Breadcrumbs";

export const DatLichChamHoSugar = () => {
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
      price: "100.000đ",
      desc: "Chăm sóc trong vòng 24h",
    },
    {
      id: 2,
      name: "Gói chăm hộ 3 ngày",
      price: "250.000đ",
      desc: "Chăm sóc liên tục 3 ngày",
    },
    {
      id: 3,
      name: "Gói chăm hộ 7 ngày",
      price: "500.000đ",
      desc: "Chăm sóc dài hạn 1 tuần",
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
    // Gọi API đặt lịch ở đây
  };

  return (
    <div className="select-none">
      <HeaderSugar />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ bò sát", to: "/san-pham-soc-bay" },
            { name: "Dịch vụ Spa", to: "/dich-vu-soc-bay" },
            { name: "Dịch vụ chăm hộ", to: "/cham-soc-soc-bay" },
            { name: "Đặt lịch chăm hộ", to: "#" },
          ]}
        />
      </div>

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-700">
          🐿️ Đặt Lịch Chăm Hộ Sóc Bay
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
                    ? "border-gray-600 bg-gray-50"
                    : "border-gray-300"
                }`}
            >
              <div className="flex justify-center items-center">
                <img
                  className="w-20 h-20 text-gray-600 rounded-full border-2"
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
          className="bg-white border-2 border-black rounded-2xl p-8 shadow-lg space-y-6"
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
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
                <Calendar className="w-4 h-4" /> Ngày bắt đầu gửi
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
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
              placeholder="VD: Bé nhà mình hơi nhát, cho ăn dế 2 lần/ngày..."
            />
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-gray-600 text-white font-semibold border-2 border-black rounded-xl hover:bg-gray-600/80 transition"
            >
              Xác nhận đặt lịch
            </button>
          </div>
        </form>
      </div>
      <FooterSugar />
    </div>
  );
};

export default DatLichChamHoSugar;
