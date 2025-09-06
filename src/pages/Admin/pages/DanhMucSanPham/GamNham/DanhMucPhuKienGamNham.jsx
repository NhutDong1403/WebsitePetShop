import React, { useState } from "react";
import AdminHeader from "../../../../../components/AdminComponent/AdminHeader";
import Breadcrumbs from "../../../../../components/Breadcrumbs";

export const DanhMucPhuKienGamNham = () => {
  const [tenDanhMuc, setTenDanhMuc] = useState("");
  const [danhSachDanhMuc, setDanhSachDanhMuc] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tenDanhMuc.trim()) return;
    setDanhSachDanhMuc([...danhSachDanhMuc, tenDanhMuc]);
    setTenDanhMuc("");
  };

  return (
    <>
      <AdminHeader />

      <div className="max-w-7xl mx-auto mt-5 px-4 sm:px-6">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/Admin" },
            { name: "Quản lý danh mục sản phẩm", to: "/Admin" },
            { name: "Quản lý danh mục phụ kiện gặm nhấm", to: "/Admin/danh-muc-phu-kien-gam-nham" },
          ]}
        />
      </div>

      <div className="max-w-xs sm:max-w-md md:max-w-4xl mx-auto mb-10 p-4 sm:p-6 border-2 border-black bg-yellow-100 rounded-xl shadow-md mt-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-yellow-800">
          Quản lý danh mục phụ kiện gặm nhấm
        </h2>

        {/* Form thêm danh mục */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 mb-6"
        >
          <input
            type="text"
            placeholder="Nhập tên danh mục..."
            value={tenDanhMuc}
            onChange={(e) => setTenDanhMuc(e.target.value)}
            className="flex-1 px-4 py-2 border-2 border-black font-semibold rounded-lg focus:outline-none focus:ring-black"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 border-2 border-black font-semibold bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
          >
            Thêm
          </button>
        </form>

        {/* Danh sách danh mục */}
        {danhSachDanhMuc.length === 0 ? (
          <p className="text-center text-black">Chưa có danh mục nào.</p>
        ) : (
          <ul className="space-y-3">
            {danhSachDanhMuc.map((dm, index) => (
              <li
                key={index}
                className="flex justify-between items-center px-4 py-2 bg-yellow-200 border border-gray-200 rounded-lg shadow-sm"
              >
                <span className="text-gray-700 flex-1 truncate">{dm}</span>
                <button
                  onClick={() =>
                    setDanhSachDanhMuc(
                      danhSachDanhMuc.filter((_, i) => i !== index)
                    )
                  }
                  className="ml-4 px-3 py-1 text-sm bg-red-500 border-2 border-black font-semibold text-white rounded-lg hover:bg-red-600 transition"
                >
                  Xóa
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default DanhMucPhuKienGamNham;
