import React, { useState } from "react";
import {
  Mail,
  Phone,
  Calendar,
  User,
  UserCircle2,
  Upload,
  CircleX,
  Save,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "../../../components/AdminComponent/AdminHeader";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const ChinhSuaThongTin = () => {
  const [formData, setFormData] = useState({
    name: "Đỗ Nhựt Đông",
    user: "nhutdong1403",
    email: "nhutdong1403@gmail.com",
    phone: "0987654321",
    createdAt: "2023-05-10",
    avatar: "https://via.placeholder.com/120",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dữ liệu đã lưu:", formData);
  };

  return (
    <div className="select-none">
      <Header />
      <div className="max-w-7xl mx-auto mt-5 px-6">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/Admin" },
            { name: "Thông tin tài khoản", to: "/Admin" },
            { name: "Chi tiết tài khoản", to: "/Admin/chi-tiet-tai-khoan" },
            { name: "Chỉnh sửa thông tin", to: "/Admin/chinh-sua-thong-tin" },
          ]}
        />
      </div>
      <div className="max-w-3xl mx-auto p-10 mt-5 mb-5 rounded-2xl border-2 border-black shadow-2xl bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] transition">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-extrabold mb-8 text-gray-900 text-center tracking-wide"
        >
          ✨ Chỉnh sửa thông tin tài khoản ✨
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-white via-gray-50 to-gray-100 border-2 border-black shadow-xl rounded-2xl p-8 space-y-8"
        >
          {/* Avatar */}
          <div className="flex items-center gap-6">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={formData.avatar}
              alt="avatar"
              className="w-35 h-35 rounded-full border-2 border-black shadow-lg"
            />
            <label className="flex items-center gap-2 px-5 py-2 border-2 border-black rounded-xl cursor-pointer bg-gray-100 hover:bg-gray-200 hover:scale-105 transition shadow-md">
              <Upload className="w-5 h-5" />
              <span className="font-medium">Tải ảnh lên</span>
              <input type="file" className="hidden" />
            </label>
          </div>

          {/* Input group with icon inside */}
          {[
            { label: "Họ và tên", name: "name", icon: <UserCircle2 /> },
            { label: "Tên đăng nhập", name: "user", icon: <User /> },
            { label: "Email", name: "email", type: "email", icon: <Mail /> },
            { label: "Số điện thoại", name: "phone", icon: <Phone /> },
          ].map((field, idx) => (
            <div key={idx}>
              <label className="block font-semibold mb-1 flex items-center gap-2">
                {React.cloneElement(field.icon, {
                  className: "w-4 h-4 text-blue-600",
                })}
                {field.label}
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                  {React.cloneElement(field.icon, { className: "w-4 h-4" })}
                </span>
                <input
                  type={field.type || "text"}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full pl-10 p-2 border-2 border-black rounded-lg transition focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                />
              </div>
            </div>
          ))}

          {/* Ngày tạo (readonly) */}
          <div>
            <label className="block font-semibold mb-1 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" /> Ngày tạo
            </label>
            <input
              type="text"
              value={formData.createdAt}
              readOnly
              className="w-full p-2 border-2 border-black rounded-lg bg-gray-200 cursor-not-allowed"
            />
          </div>

          {/* Action buttons */}
          <div className="flex gap-4 justify-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-6 py-2 bg-primary text-white border-2 border-black font-semibold rounded-xl shadow hover:bg-primary/80 hover:shadow-lg transition flex items-center gap-2"
            >
              <Save className="w-5 h-5" /> Lưu thay đổi
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => window.history.back()}
              className="px-6 py-2 bg-red-500 text-white border-2 border-black font-semibold rounded-xl shadow hover:bg-red-600 hover:shadow-lg transition flex items-center gap-2"
            >
              <CircleX className="w-5 h-5" /> Hủy
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default ChinhSuaThongTin;
