import React, { useState } from "react";
import {
  Mail,
  Phone,
  Calendar,
  UserCircle2,
  KeyRound,
  UserPen,
  ShieldUser,
  Lock,
  CircleX,
  Save,
} from "lucide-react";
import AdminHeader from "../../../components/AdminComponent/AdminHeader";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { Link } from "react-router-dom";

export const ChiTietTaiKhoan = () => {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const user = {
    id: 1,
    name: "Đỗ Nhựt Đông",
    user: "nhutdong1403",
    email: "nhutdong1403@gmail.com",
    role: "Admin",
    phone: "0987654321",
    createdAt: "2023-05-10",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }
    console.log("Đổi mật khẩu:", passwordData);
    // Gửi API đổi mật khẩu ở đây
    setShowChangePassword(false);
  };

  return (
    <div className="select-none">
      <AdminHeader />
      <div className="max-w-7xl mx-auto mt-5 px-6">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/Admin" },
            { name: "Chi tiết tài khoản", to: "/Admin/chi-tiet-tai-khoan" },
          ]}
        />
      </div>

      <div className="p-6">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 flex items-center gap-2">
          👤 Chi tiết tài khoản
        </h2>

        {/* Profile Card */}
        <div className="bg-base-100 border-2 border-black shadow-lg rounded-2xl p-6 mb-6 flex items-center gap-6">
          <img
            src="/images/banner1.jpg"
            alt="avatar"
            className="w-28 h-28 rounded-full border-2 border-black shadow"
          />
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{user.name}</h3>
            <p className="text-gray-600 flex items-center gap-2">
              <Mail className="w-4 h-4" /> {user.email}
            </p>
            <span className="inline-block mt-3 px-3 py-1 bg-green-200 border-3 border-black text-green-700 rounded-full text-sm font-bold">
              {user.role}
            </span>
          </div>
        </div>

        {/* Info Grid */}
        <div className="bg-base-100 border-2 border-black shadow-lg rounded-2xl p-6">
          <h3 className="text-3xl font-semibold flex items-center mb-6 text-gray-800">
            <ShieldUser className="w-8 h-8 mr-2 text-primary" /> Thông tin chi
            tiết
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 border border-black rounded-lg bg-gray-50 flex items-center gap-3">
              <UserCircle2 className="text-primary" />
              <div>
                <p className="font-semibold text-lg">Họ và tên</p>
                <p>{user.name}</p>
              </div>
            </div>
            <div className="p-4 border border-black rounded-lg bg-gray-50 flex items-center gap-3">
              <UserCircle2 className="text-primary" />
              <div>
                <p className="font-semibold text-lg">Tên đăng nhập</p>
                <p>{user.user}</p>
              </div>
            </div>
            <div className="p-4 border border-black rounded-lg bg-gray-50 flex items-center gap-3">
              <Mail className="text-primary" />
              <div>
                <p className="font-semibold text-lg">Email</p>
                <p>{user.email}</p>
              </div>
            </div>
            <div className="p-4 border border-black rounded-lg bg-gray-50 flex items-center gap-3">
              <Phone className="text-primary" />
              <div>
                <p className="font-semibold text-lg">Số điện thoại</p>
                <p>{user.phone}</p>
              </div>
            </div>
            <div className="p-4 border border-black rounded-lg bg-gray-50 flex items-center gap-3 sm:col-span-2">
              <Calendar className="text-primary" />
              <div>
                <p className="font-semibold text-lg">Ngày tạo</p>
                <p>{user.createdAt}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/Admin/chinh-sua-thong-tin">
              <button className="px-5 py-2 bg-primary text-white border-2 border-black font-semibold rounded-lg hover:bg-primary/80 transition flex items-center gap-2">
                <UserPen className="w-5 h-5" /> Chỉnh sửa
              </button>
            </Link>
            <button
              onClick={() => setShowChangePassword(!showChangePassword)}
              className="px-5 py-2 bg-amber-500 text-white border-2 border-black font-semibold rounded-lg hover:bg-amber-600 transition flex items-center gap-2"
            >
              <KeyRound className="w-5 h-5" /> Đổi mật khẩu
            </button>
          </div>

          {/* Change Password Form */}
          {showChangePassword && (
            <form
              onSubmit={handleSubmitPassword}
              className="mt-6 p-6 border-2 border-black rounded-xl bg-gray-50 shadow-lg space-y-4"
            >
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                <Lock className="w-6 h-6 text-red-500" /> Đổi mật khẩu
              </h3>

              <div>
                <label className="block font-semibold mb-1">Mật khẩu cũ</label>
                <input
                  type="password"
                  name="oldPassword"
                  value={passwordData.oldPassword}
                  onChange={handleChange}
                  className="w-full p-2 border-2 border-black rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Mật khẩu mới</label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handleChange}
                  className="w-full p-2 border-2 border-black rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Xác nhận mật khẩu
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-2 border-2 border-black rounded-lg"
                  required
                />
              </div>

              <div className="flex gap-4 mt-4">
                <button
                  type="submit"
                  className="px-5 py-2 bg-primary text-white border-2 border-black font-semibold rounded-lg hover:bg-primary/80 transition flex items-center gap-2"
                >
                  <Save className="w-5 h-5" /> Lưu mật khẩu
                </button>
                <button
                  type="button"
                  onClick={() => setShowChangePassword(false)}
                  className="px-5 py-2 bg-red-500 text-white border-2 border-black font-semibold rounded-lg hover:bg-red-600 transition flex items-center gap-2"
                >
                  <CircleX className="w-5 h-5" /> Hủy
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChiTietTaiKhoan;
