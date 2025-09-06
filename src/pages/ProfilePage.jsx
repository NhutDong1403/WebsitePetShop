import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  User as UserIcon,
  Shield,
  Power,
  Activity,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import API from "../services/API";
import { useUser } from "../contexts/UserContext"; // import context

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { logout } = useUser(); // lấy logout từ context

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        // nếu không có token => chưa login
        navigate("/");
        return;
      }

      try {
        const response = await API.get("/Auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Profile API:", response.data);
        setUser(response.data);
      } catch (err) {
        console.error("Lỗi lấy profile:", err);
        if (err.response?.status === 401) {
          alert("Phiên đăng nhập hết hạn, vui lòng đăng nhập lại.");
          localStorage.removeItem("accessToken");
          navigate("/");
        }
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    logout();
    window.location.href = "/"; // reload lại app, đảm bảo về trang chủ
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-pink-100 flex flex-col items-center pt-24 px-4">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-lg border border-pink-200 rounded-3xl shadow-2xl p-8 mb-8 flex flex-col items-center">
          {/* Avatar */}
          <img
            src="/images/Profile.gif"
            alt="avatar"
            className="w-28 h-28 rounded-full border-4 border-pink-400 shadow-lg mb-4"
          />

          {/* Greeting */}
          <h1 className="text-3xl font-bold text-pink-600 mb-6">
            <span className="text-gray-700 font-semibold">Xin chào,</span>{" "}
            {user.username}
          </h1>

          {/* Info */}
          <div className="w-full space-y-3 text-gray-700">
            <p className="flex items-center text-lg">
              <UserIcon className="w-5 h-5 text-pink-500 mr-2" />
              <span className="font-semibold">
                {user.username || "Chưa cập nhật"}
              </span>
            </p>
            <p className="flex items-center text-lg">
              <Mail className="w-5 h-5 text-pink-500 mr-2" />
              <span className="font-semibold">
                {user.email || "Chưa cập nhật"}
              </span>
            </p>
            <p className="flex items-center text-lg">
              <Phone className="w-5 h-5 text-pink-500 mr-2" />
              <span className="font-semibold">
                {user.phoneNumber || "Chưa cập nhật"}
              </span>
            </p>
            <p className="flex items-center text-lg">
              <Shield className="w-5 h-5 text-pink-500 mr-2" />
              <span className="font-semibold">
                {user.role === "Admin" ? "Quản trị viên" : "Người dùng"}
              </span>
            </p>
            <p className="flex items-center text-lg">
              <Activity
                className={`w-5 h-5 mr-2 ${
                  user.status ? "text-green-500" : "text-red-500"
                }`}
              />
              <span
                className={`font-semibold ${
                  user.status ? "text-green-600" : "text-red-600"
                }`}
              >
                {user.status ? "Hoạt động" : "Vô hiệu hóa"}
              </span>
            </p>
          </div>

          {/* Logout button */}
          <button
            onClick={handleLogout}
            className="mt-6 flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition transform hover:scale-105"
          >
            <Power className="w-5 h-5" />
            Đăng xuất
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
