import React, { useState, useEffect } from "react";
import AdminHeader from "../../../components/AdminComponent/AdminHeader";
import Breadcrumbs from "../../../components/Breadcrumbs";
import API from "../../../services/API"; // instance axios đã config baseURL & token

const QuanLyNguoiDung = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newUser, setNewUser] = useState({
    fullName: "",
    userName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "User",
    status: "Active",
  });

  // Lấy danh sách người dùng khi component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await API.get("/User");
      console.log("API data:", response.data);
      if (Array.isArray(response.data)) {
        // Map lại tên trường cho React
        const mappedUsers = response.data.map((u) => ({
          ...u,
          userName: u.userName || u.username || "",
          phone: u.phone || u.phoneNumber || "",
        }));
        setUsers(mappedUsers);
      } else {
        console.error("Dữ liệu API không phải mảng:", response.data);
        setUsers([]);
      }
    } catch (error) {
      console.error("Lỗi khi tải người dùng:", error);
      setUsers([]);
      alert("Không thể tải danh sách người dùng");
    }
  };

  // Filter người dùng theo search
  const filteredUsers = Array.isArray(users)
    ? users.filter(
        (user) =>
          user.fullName.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  // Thêm người dùng mới
  const handleAddUser = async (e) => {
    e.preventDefault();
    if (newUser.password !== newUser.confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }

    try {
      const payload = {
        fullName: newUser.fullName,
        userName: newUser.userName,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role,
        isActive: newUser.status === "Active",
        password: newUser.password,
      };

      const response = await API.post("/User", payload);
      setUsers([...users, response.data]);
      setShowForm(false);
      setNewUser({
        fullName: "",
        userName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        role: "User",
        status: "Active",
      });
    } catch (error) {
      console.error("Lỗi khi thêm người dùng:", error);
      alert("Không thể thêm người dùng mới");
    }
  };

  // Bật/tắt trạng thái người dùng
  const toggleStatus = async (user) => {
    try {
      const payload = { isActive: !user.isActive };
      const response = await API.put(`/User/${user.userId}`, payload);

      setUsers((prev) =>
        prev.map((u) =>
          u.userId === user.userId
            ? { ...u, isActive: response.data.isActive }
            : u
        )
      );
    } catch (error) {
      console.error("Lỗi khi thay đổi trạng thái:", error);
      alert("Không thể thay đổi trạng thái");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="select-none">
      <AdminHeader />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/Admin" },
            { name: "Quản lý người dùng", to: "/Admin/quan-ly-nguoi-dung" },
          ]}
        />
      </div>

      <div className="flex flex-col p-6 space-y-6 bg-gray-50 min-h-screen">
        {/* Tiêu đề & tìm kiếm */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-3xl font-bold text-gray-800">
            👥 Quản Lý Người Dùng
          </h1>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Tìm kiếm người dùng..."
              className="border-2 border-black w-[400px] rounded-lg p-2 focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="bg-gray-600 font-semibold text-white px-4 py-2 rounded-lg border-2 border-black hover:bg-gray-500 transition"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? "Đóng" : "Thêm người dùng"}
            </button>
          </div>
        </div>

        {/* Form thêm người dùng */}
        {showForm && (
          <form
            onSubmit={handleAddUser}
            className="bg-gray-100 border-3 border-black rounded-xl p-6 space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Họ tên..."
                value={newUser.fullName}
                onChange={handleChange}
                className="border-2 rounded-lg text-lg p-2 px-3"
                required
              />
              <input
                type="text"
                name="userName"
                placeholder="Tên đăng nhập..."
                value={newUser.userName}
                onChange={handleChange}
                className="border-2 rounded-lg text-lg p-2 px-3"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email..."
                value={newUser.email}
                onChange={handleChange}
                className="border-2 rounded-lg text-lg p-2 px-3"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Số điện thoại..."
                value={newUser.phone}
                onChange={handleChange}
                className="border-2 rounded-lg text-lg p-2 px-3"
              />
              <input
                type="password"
                name="password"
                placeholder="Mật khẩu..."
                value={newUser.password}
                onChange={handleChange}
                className="border-2 rounded-lg text-lg p-2 px-3"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Xác nhận mật khẩu..."
                value={newUser.confirmPassword}
                onChange={handleChange}
                className="border-2 rounded-lg text-lg p-2 px-3"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gray-600 text-white px-6 py-2 rounded-lg border-3 border-black font-semibold hover:bg-gray-500 transition"
            >
              Đăng ký
            </button>
          </form>
        )}

        {/* Bảng người dùng */}
        <div className="overflow-x-auto bg-white border-2 border-black rounded-xl shadow-md">
          <table className="min-w-full divide-y divide-gray-200 table-fixed">
            <thead className="border-black bg-gray-100 font-semibold">
              <tr>
                <th className="px-6 py-3 text-center text-sm">STT</th>
                <th className="px-6 py-3 text-left text-sm">Họ & Tên</th>
                <th className="px-6 py-3 text-left text-sm">Tên đăng nhập</th>
                <th className="px-6 py-3 text-left text-sm">Email</th>
                <th className="px-6 py-3 text-left text-sm">SĐT</th>
                <th className="px-6 py-3 text-center text-sm">Vai trò</th>
                <th className="px-6 py-3 text-center text-sm w-[120px]">
                  Trạng thái
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700 w-40">
                  Ngày tạo
                </th>
                <th className="px-6 py-3 text-center text-sm">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map((user, index) => (
                <tr key={user.userId} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-center">{index + 1}</td>
                  <td className="px-6 py-4">{user.fullName}</td>
                  <td className="px-6 py-4">{user.userName}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.phone}</td>
                  <td className="px-6 py-4 text-center">{user.role}</td>
                  <td className="px-6 py-4 text-center w-[200px]">
                    <span
                      className={`px-4 py-2 rounded-full text-white text-xs ${
                        user.isActive ? "bg-green-500" : "bg-orange-400"
                      }`}
                    >
                      {user.isActive ? "Hoạt động" : "Vô hiệu hóa"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">
                    {user.createdAt?.split("T")[0]}
                  </td>
                  <td className="px-6 py-4 flex items-center justify-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={user.isActive}
                        onChange={() => toggleStatus(user)}
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-all duration-300"></div>
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all duration-300"></div>
                    </label>
                  </td>
                </tr>
              ))}
              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="9" className="text-center py-4 text-gray-500">
                    Không tìm thấy người dùng
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuanLyNguoiDung;
