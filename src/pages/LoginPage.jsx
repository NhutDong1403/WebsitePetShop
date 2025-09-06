import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/API";
import { setAccessToken } from "../services/TokenService";
import { useUser } from "../contexts/UserContext";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameInvalid, setIsUsernameInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { login: loginContext } = useUser(); // context để cập nhật user

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;

    if (username.trim() === "") {
      setIsUsernameInvalid(true);
      valid = false;
    } else setIsUsernameInvalid(false);

    if (password.trim() === "") {
      setIsPasswordInvalid(true);
      valid = false;
    } else setIsPasswordInvalid(false);

    if (!valid) return;

    setIsLoading(true);

    try {
      const res = await API.post("/Auth/login", { username, password });

      const token = res.data.token;
      localStorage.setItem("accessToken", token);

      const decoded = JSON.parse(atob(token.split(".")[1]));
      const userData = {
        username: decoded.username,
        role: decoded.role,
        avatar: decoded.avatar || "/images/Profile.gif",
      };
      loginContext(userData);

      setIsLoading(false);
      if (userData.role === "Admin") navigate("/Admin");
      else navigate("/");
    } catch (err) {
      console.error("Login error:", err);

      if (err.response) {
        // ✅ Thêm check 403 cho tài khoản bị khóa
        if (err.response.status === 500) {
          setErrorMessage("❌ Tài khoản đã bị khóa");
        } else if (err.response.status === 401) {
          setErrorMessage("❌ Tên đăng nhập hoặc mật khẩu không đúng");
        } else {
          setErrorMessage("❌ Đã xảy ra lỗi, vui lòng thử lại");
        }
      } else {
        setErrorMessage("❌ Không thể kết nối tới server");
      }

      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen select-none flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/bglogin.png")' }}
    >
      <div className="card w-96 bg-pink-300 border-2 border-black shadow-xl">
        <div className="card-body">
          <div className="flex justify-center items-center my-4">
            <img
              src="/images/Logo.png"
              alt="Logo"
              className="w-30 h-30 rounded-full border-4 border-white transition-all duration-500 hover:rotate-6 hover:scale-105 hover:shadow-[0_0_20px_#fb7185] animate-bounce"
            />
          </div>
          <p className="flex justify-center mt-1 mb-1 font-bold text-4xl text-pink-600">
            Paw Shop
          </p>

          <form onSubmit={handleSubmit} noValidate>
            {/* Username */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text py-1 font-bold">Tên đăng nhập</span>
              </label>
              <input
                type="text"
                placeholder="Tên đăng nhập..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input input-bordered w-full"
              />
              {isUsernameInvalid && (
                <span className="text-red-500 text-sm mt-1">
                  Không được để trống tên đăng nhập ❗
                </span>
              )}
            </div>

            {/* Password */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text py-1 font-bold">Mật khẩu</span>
              </label>
              <input
                type="password"
                placeholder="Mật khẩu..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full"
              />
              {isPasswordInvalid && (
                <span className="text-red-500 text-sm mt-1">
                  Không được để trống mật khẩu ❗
                </span>
              )}
            </div>

            {/* Error message */}
            {errorMessage && (
              <div className="text-red-600 font-semibold text-center mb-2">
                {errorMessage}
              </div>
            )}

            {/* Submit Button */}
            <div className="form-control mt-4">
              <button
                type="submit"
                className="btn bg-gradient-to-r from-pink-400 to-pink-600 w-full text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-md hover:scale-105 transition duration-300"
                disabled={isLoading}
              >
                {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
              </button>
            </div>

            {/* Register Link */}
            <div className="py-2 text-center">
              <span>Chưa có tài khoản? </span>
              <a href="/dang-ky">
                <b className="hover:text-gray-600">Đăng ký ngay</b>
              </a>
            </div>

            {/* Back to Home */}
            <div className="flex justify-center items-center gap-2 font-semibold mt-2">
              <img className="w-5 h-5" src="/images/Back.gif" alt="back" />
              <span>
                Quay lại{" "}
                <a href="/">
                  <b className="hover:text-gray-600">trang chủ</b>
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
