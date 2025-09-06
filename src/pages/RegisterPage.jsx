import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/API";

function RegisterPage() {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!fullname.trim()) newErrors.fullname = "Không được để trống họ tên ❗";
    if (!username.trim())
      newErrors.username = "Không được để trống tên đăng nhập ❗";

    if (!email.trim()) {
      newErrors.email = "Không được để trống Gmail ❗";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Gmail không hợp lệ ❗";
    }

    if (!phone.trim()) {
      newErrors.phone = "Không được để trống số điện thoại ❗";
    } else if (!/^0[0-9]{9}$/.test(phone)) {
      newErrors.phone = "Số điện thoại phải có 10 số và bắt đầu bằng 0 ❗";
    }

    if (!password) newErrors.password = "Không được để trống mật khẩu ❗";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp ❗";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        await API.post("/Auth/register", {
          fullName: fullname,
          username: username,
          email: email,
          PhoneNumber: phone,
          password: password,
        });

        alert("Đăng ký thành công ✅");
        navigate("/dang-nhap");
      } catch (err) {
        console.error("Register error:", err);
        if (err.response?.status === 409) {
          alert(err.response.data);
        } else {
          alert("Đăng ký thất bại ❌");
        }
      }
    }
  };

  return (
    <div
      className="min-h-scree select-none flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/bglogin.png")' }}
    >
      <div className="card w-96 bg-pink-300 border-2 border-black shadow-xl mt-5 mb-5">
        <div className="card-body p-4">
          <span className="py-5 flex justify-center text-2xl font-bold">
            Tạo tài khoản
          </span>
          <div className="flex justify-center items-center my-4">
            <img
              src="/images/Logo.png"
              alt="Logo"
              className="w-25 h-25 rounded-full border-4 border-white transition-all duration-500 hover:rotate-6 hover:scale-110 hover:shadow-[0_0_20px_#fb7185] animate-bounce"
            />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-y-1">
            {/* Họ tên */}
            <div className="form-control mb-1">
              <label className="label">
                <span className="label-text py-1 font-bold">Họ & Tên</span>
              </label>
              <input
                type="text"
                placeholder="Họ tên..."
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="input input-bordered border-2 border-black w-full"
              />
              {errors.fullname && (
                <span className="text-red-500 text-sm">{errors.fullname}</span>
              )}
            </div>

            {/* Tên đăng nhập */}
            <div className="form-control mb-1">
              <label className="label">
                <span className="label-text py-1 font-bold">Tên đăng nhập</span>
              </label>
              <input
                type="text"
                placeholder="Tên đăng nhập..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input input-bordered border-2 border-black w-full"
              />
              {errors.username && (
                <span className="text-red-500 text-sm">{errors.username}</span>
              )}
            </div>

            {/* Email */}
            <div className="form-control mb-1">
              <label className="label">
                <span className="label-text py-1 font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Gmail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered border-2 border-black w-full"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>

            {/* Số điện thoại */}
            <div className="form-control mb-1">
              <label className="label">
                <span className="label-text py-1 font-bold">Số điện thoại</span>
              </label>
              <input
                type="tel"
                placeholder="Nhập số điện thoại..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                pattern="^0[0-9]{9}$"
                className="input input-bordered border-2 border-black w-full"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone}</span>
              )}
            </div>

            {/* Mật khẩu */}
            <div className="form-control mb-1">
              <label className="label">
                <span className="label-text py-1 font-bold">Mật khẩu</span>
              </label>
              <input
                type="password"
                placeholder="Mật khẩu..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength="8"
                className="input input-bordered border-2 border-black w-full"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password}</span>
              )}
            </div>

            {/* Xác nhận mật khẩu */}
            <div className="form-control mb-1">
              <label className="label">
                <span className="label-text py-1 font-bold">
                  Xác nhận mật khẩu
                </span>
              </label>
              <input
                type="password"
                placeholder="Xác nhận mật khẩu..."
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                minLength="8"
                className="input input-bordered border-2 border-black w-full"
              />
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm">
                  {errors.confirmPassword}
                </span>
              )}
            </div>

            {/* Nút đăng ký */}
            <button
              type="submit"
              className="btn btn-outline w-full bg-pink-200 mt-3"
            >
              Đăng ký
            </button>

            {/* Điều hướng */}
            <div className="py-2 text-center text-sm">
              <span>Đã có tài khoản? </span>
              <Link
                to="/dang-nhap"
                className="text-black font-bold hover:text-gray-600"
              >
                Đăng nhập
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
