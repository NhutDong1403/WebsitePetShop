import React, { useState, useEffect } from "react";
import AdminHeader from "../../../../../components/AdminComponent/AdminHeader";
import Breadcrumbs from "../../../../../components/Breadcrumbs";
import { getCategories, addCategory, deleteCategory } from "../../../../../services/categoryService";

export const DanhMucPhuKienBoSat = () => {
  const [tenDanhMuc, setTenDanhMuc] = useState("");
  const [danhSachDanhMuc, setDanhSachDanhMuc] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await getCategories("Accessory", "Reptile");
      setDanhSachDanhMuc(data);
    } catch (err) {
      console.error("Lỗi khi tải danh mục:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!tenDanhMuc.trim()) return;

    try {
      await addCategory({ name: tenDanhMuc, type: "Accessory", animalType: "Reptile" });
      setTenDanhMuc("");
      setMessage("Thêm danh mục thành công");
      fetchCategories();
    } catch (err) {
      console.error("Lỗi khi thêm danh mục:", err);
      setMessage("Thêm danh mục thất bại");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCategory(id);
      setMessage("Xóa danh mục thành công");
      fetchCategories();
    } catch (err) {
      console.error("Lỗi khi xóa danh mục:", err);
      setMessage("Xóa danh mục thất bại");
    }
  };

  return (
    <>
      <AdminHeader />
      <div className="max-w-7xl mx-auto mt-5 px-4 sm:px-6">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/Admin" },
            { name: "Quản lý danh mục sản phẩm", to: "/Admin" },
            { name: "Quản lý danh mục phụ kiện bò sát", to: "/Admin/danh-muc-bo-sat" },
          ]}
        />
      </div>

      <div className="max-w-xs sm:max-w-md md:max-w-4xl mx-auto mb-10 p-4 sm:p-6 border-2 border-black bg-lime-100 rounded-xl shadow-md mt-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-lime-800">
          Quản lý danh mục phụ kiện bò sát
        </h2>

        {message && (
          <p className="text-center font-semibold mb-4 text-red-600">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Nhập tên danh mục..."
            value={tenDanhMuc}
            onChange={(e) => setTenDanhMuc(e.target.value)}
            className="flex-1 px-4 py-2 border-2 border-black font-semibold rounded-lg focus:outline-none focus:ring-black"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 border-2 border-black font-semibold bg-lime-500 text-white rounded-lg hover:bg-lime-600 transition"
          >
            Thêm
          </button>
        </form>

        {danhSachDanhMuc.length === 0 ? (
          <p className="text-center text-black">Chưa có danh mục nào.</p>
        ) : (
          <ul className="space-y-3">
            {danhSachDanhMuc.map((dm) => (
              <li key={dm.categoryId} className="flex justify-between items-center px-4 py-2 bg-lime-200 border border-gray-200 rounded-lg shadow-sm">
                <span className="text-gray-700 flex-1 truncate">{dm.name}</span>
                <button
                  onClick={() => handleDelete(dm.categoryId)}
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

export default DanhMucPhuKienBoSat;
