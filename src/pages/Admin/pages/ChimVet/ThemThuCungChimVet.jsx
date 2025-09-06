import React, { useState } from "react";
import AdminHeader from "../../../../components/AdminComponent/AdminHeader";
import Breadcrumbs from "../../../../components/Breadcrumbs";

const initialState = {
  name: "",
  type: "",
  price: "",
  quantity: "",
  description: "",
  preview: "",
};

const ThemThuCungSocBay = () => {
  const [formData, setFormData] = useState(initialState);
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "preview" && files && files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setFormData({ ...formData, preview: ev.target.result });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, formData]);
    setFormData(initialState);
  };

  const groupedProducts = products.reduce((acc, p) => {
    if (!acc[p.type]) acc[p.type] = [];
    acc[p.type].push(p);
    return acc;
  }, {});
  const [openTypeDropdown, setOpenTypeDropdown] = useState(false);

  return (
    <div className="select-none">
      <AdminHeader />
      <div className="max-w-7xl mx-auto mt-5 px-6">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/Admin" },
             {
              name: "Quản lý sản phẩm",
              to: "/Admin",
            },
            {
              name: "Thêm thú cưng chim vet;",
              to: "/Admin/them-thu-cung-chim-vet",
            },
          ]}
        />
      </div>
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-sky-600">
          🦜 Thêm thú cưng chim vẹt
        </h2>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 border-4 border-sky-700 bg-sky-50 p-6 rounded-3xl shadow-lg"
        >
          {/* Tên thú cưng */}
          <div className="relative w-full">
            <input
              type="text"
              name="name"
              placeholder="Tên thú cưng chim vẹt"
              value={formData.name}
              onChange={handleChange}
              className="border-2 border-black text-lg rounded-xl px-12 py-3 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700 w-full transition"
              required
            />
            <span className="absolute left-4 top-3 text-gray-400 text-lg">
              🐾
            </span>
          </div>

          {/* Loại thú cưng - Custom Dropdown */}
          <div className="relative w-full">
            <button
              type="button"
              onClick={() => setOpenTypeDropdown(!openTypeDropdown)}
              className="w-full text-lg border-2 border-black rounded-xl px-4 py-2 pr-10 text-gray-700 shadow-sm 
      focus:ring-2 focus:ring-sky-700 focus:border-sky-700 outline-none transition flex justify-start items-center relative"
            >
              {formData.type || "Chọn loại thú cưng chim vẹt"}
              {/* Mũi tên nằm sát bên phải */}
              <span
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400  text-lg transition-transform ${
                  openTypeDropdown ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {openTypeDropdown && (
              <ul className="absolute  left-0 mt-1 w-full  bg-sky-50 border-4 border-sky-700 rounded-xl shadow-lg z-50 max-h-48 overflow-y-auto text-lg">
                {[
                  "Vẹt Xám Châu Phi",
                  "Vẹt Cockatiel",
                  "Vẹt LoveBird",
                  "Vẹt Macaw",
                  "Yến phụng",
                  "Vẹt ngực hồng",
                  "Vẹt Sun Conure",
                  "Vẹt Eclectus",
                ].map((type, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, type }));
                      setOpenTypeDropdown(false);
                    }}
                    className="px-3 py-1.5 hover:bg-sky-200 cursor-pointer rounded-lg transition"
                  >
                    {type}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Giá */}
          <div className="relative w-full">
            <input
              type="number"
              name="price"
              placeholder="Giá (VNĐ)"
              value={formData.price}
              onChange={handleChange}
              className="border-2 border-black text-lg rounded-xl px-12 py-3 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700 w-full transition"
              required
            />
            <span className="absolute left-4 top-3 text-gray-400 text-lg">
              💰
            </span>
          </div>

          {/* Số lượng */}
          <div className="relative w-full">
            <input
              type="number"
              name="quantity"
              placeholder="Số lượng"
              value={formData.quantity}
              onChange={handleChange}
              className="border-2 border-black text-lg rounded-xl px-12 py-3 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700 w-full transition"
              required
            />
            <span className="absolute left-4 top-3 text-gray-400 text-lg">
              📦
            </span>
          </div>

          {/* Mô tả */}
          <textarea
            name="description"
            placeholder="Mô tả thú cưng chim vẹt"
            value={formData.description}
            onChange={handleChange}
            className="border-2 border-black text-lg rounded-xl px-4 py-3 col-span-2 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700 w-full transition resize-none h-24"
          />

          {/* Ảnh thú cưng */}
          <div className="col-span-2">
            <label className="block font-semibold text-lg mb-2">Ảnh thú cưng chim vẹt</label>
            <div
              className="relative border-2 border-dashed border-sky-700 rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-black hover:bg-sky-100 transition"
              onClick={() => document.getElementById("fileUpload").click()}
            >
              <input
                id="fileUpload"
                type="file"
                name="preview"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
              {!formData.preview ? (
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 flex justify-center rounded-full bg-sky-200 text-sky-500 text-2xl">
                    📷
                  </div>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium text-sky-700">Chọn tệp</span>{" "}
                    hoặc kéo & thả ảnh vào đây
                  </p>
                  <p className="text-xs text-gray-400">
                    PNG, JPG, JPEG (tối đa 5MB)
                  </p>
                </div>
              ) : (
                <div className="relative w-full">
                  <img
                    src={formData.preview}
                    alt="Preview"
                    className="w-full h-52 object-cover rounded-xl shadow-md border"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, preview: "" })}
                    className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow hover:bg-red-600"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="col-span-2 border-3 border-black text-lg bg-sky-700 text-white rounded-2xl py-3 font-semibold hover:bg-sky-600 shadow-md transition flex justify-center items-center space-x-2"
          >
            <span>Thêm thú cưng chim vẹt</span>
          </button>
        </form>

        {/* DANH SÁCH */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-sky-700">
            Danh sách thú cưng chim vẹt
          </h3>
          {Object.keys(groupedProducts).length === 0 ? (
            <p className="text-gray-500 text-center text-lg">
              Chưa có thú cưng chim vẹt nào được thêm.
            </p>
          ) : (
            Object.keys(groupedProducts).map((cat, idx) => (
              <div key={idx} className="mb-12">
                <h4 className="text-2xl font-semibold mb-5 border-b pb-2 text-sky-600">
                  {cat}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {groupedProducts[cat].map((p, i) => (
                    <div
                      key={i}
                      className="relative border border-black rounded-3xl p-4 shadow-lg hover:shadow-2xl transition bg-white"
                    >
                      {p.preview && (
                        <img
                          src={p.preview}
                          alt={p.name}
                          className="w-full h-44 object-cover rounded-2xl mb-3"
                        />
                      )}
                      {Number(p.quantity) === 0 && (
                        <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                          Hết hàng
                        </span>
                      )}
                      <div className="font-bold text-gray-800 text-lg mb-1">
                        {p.name}
                      </div>
                      <div className="text-sm text-black font-semibold mb-1">
                        Giá: <span className="font-bold text-red-600">{p.price} VNĐ</span>
                      </div>
                      <div className="text-sm text-black font-semibold mb-2">
                        Số lượng:{" "}
                        <span className="font-normal">{p.quantity}</span>
                      </div>
                      {p.description && (
                        <div className="text-sm text-black font-semibold mb-2">
                          Mô tả:{" "}
                          <span className="font-normal">{p.description}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemThuCungSocBay;
