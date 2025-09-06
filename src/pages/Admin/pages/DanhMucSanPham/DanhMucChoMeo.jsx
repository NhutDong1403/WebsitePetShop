import React, { useState, useEffect } from "react";
import AdminHeader from "../../../../components/AdminComponent/AdminHeader";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import {
  getCategories,
  addCategory,
  deleteCategory,
} from "../../../../services/categoryService";

const DanhMucChoMeo = () => {
  const [tenDanhMuc, setTenDanhMuc] = useState("");
  const [animalType, setAnimalType] = useState("Cat"); // default Mèo
  const [danhSachDanhMuc, setDanhSachDanhMuc] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Lấy danh mục khi load trang
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await getCategories("Accessory", animalType);
      const mappedData = data.map((d) => ({
        ...d,
        name: d.name ?? "",
        type: d.type ?? "Accessory",
        animalType: d.animalType ?? "Cat",
      }));
      setDanhSachDanhMuc(mappedData);
    } catch (error) {
      console.error("Lỗi khi tải danh mục:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!tenDanhMuc.trim()) return;

    setIsLoading(true);
    try {
      await addCategory({
        name: tenDanhMuc,
        type: "Accessory",
        animalType: animalType,
      });
      setTenDanhMuc("");
      setAnimalType("Cat"); // reset về default
      fetchCategories();
    } catch (error) {
      console.error("Lỗi khi thêm danh mục:", error);
    }
    setIsLoading(false);
  };

  const handleDelete = async (id) => {
    try {
      await deleteCategory(id);
      fetchCategories();
    } catch (error) {
      console.error("Lỗi khi xóa danh mục:", error);
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
            { name: "Quản lý danh mục phụ kiện cho mèo", to: "/Admin/danh-muc-cho-meo" },
          ]}
        />
      </div>

      <div className="max-w-xs sm:max-w-md md:max-w-4xl mx-auto mb-10 p-4 sm:p-6 border-2 border-black bg-pink-100 rounded-xl shadow-md mt-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-pink-800">
          Quản lý danh mục phụ kiện cho mèo
        </h2>

        {/* Form thêm danh mục */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 mb-6 items-center"
        >
          <input
            type="text"
            placeholder="Nhập tên danh mục..."
            value={tenDanhMuc}
            onChange={(e) => setTenDanhMuc(e.target.value)}
            className="flex-1 px-4 py-2 border-2 border-black font-semibold rounded-lg focus:outline-none focus:ring-black"
          />
          <select
            value={animalType}
            onChange={(e) => setAnimalType(e.target.value)}
            className="px-4 py-2 border-2 border-black font-semibold rounded-lg focus:outline-none focus:ring-black"
          >
            <option value="Dog">Chó</option>
            <option value="Cat">Mèo</option>
            <option value="Reptile">Bò sát</option>
            <option value="Rodent">Gặm nhấm</option>
            <option value="Bird">Chim vẹt</option>
            <option value="Squirrel">Sóc bay</option>
          </select>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 border-2 border-black font-semibold bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
            disabled={isLoading}
          >
            {isLoading ? "Đang thêm..." : "Thêm"}
          </button>
        </form>

        {/* Danh sách danh mục */}
        {danhSachDanhMuc.length === 0 ? (
          <p className="text-center text-black">Chưa có danh mục nào.</p>
        ) : (
          <ul className="space-y-3">
            {danhSachDanhMuc.map((dm) => (
              <li
                key={dm.categoryId}
                className="flex items-center px-4 py-2 bg-pink-200 border border-gray-200 rounded-lg shadow-sm w-full"
              >
                <span className="text-gray-700 flex-1 truncate">{dm.name ?? ""}</span>
                <span className="text-black font-semibold mr-5">
                  Danh mục cho: {dm.animalType ?? "Không xác định"}
                </span>
                <button
                  onClick={() => handleDelete(dm.categoryId)}
                  className="ml-auto px-3 py-1 text-sm bg-red-500 border-2 border-black font-semibold text-white rounded-lg hover:bg-red-600 transition"
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

export default DanhMucChoMeo;
