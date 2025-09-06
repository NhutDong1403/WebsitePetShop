import React, { useState } from "react";
import Select from "react-select";
import AdminHeader from "../../../components/AdminComponent/AdminHeader";
import Breadcrumbs from "../../../components/Breadcrumbs";

const initialOrders = [
  {
    id: "DH001",
    customerName: "Nguyễn Văn A",
    createdAt: "2025-08-15",
    status: "Chờ xác nhận",
    total: 1500000,
  },
  {
    id: "DH002",
    customerName: "Trần Thị B",
    createdAt: "2025-08-14",
    status: "Đang giao",
    total: 2300000,
  },
  {
    id: "DH003",
    customerName: "Lê Văn C",
    createdAt: "2025-08-13",
    status: "Hoàn thành",
    total: 2300000,
  },
  {
    id: "DH004",
    customerName: "Phạm Thị D",
    createdAt: "2025-08-12",
    status: "Đã hủy",
    total: 0,
  },
];

const statusOptions = [
  { value: "Chờ xác nhận", label: "Chờ xác nhận", color: "#facc15" },
  { value: "Đang giao", label: "Đang giao", color: "#3b82f6" },
  { value: "Hoàn thành", label: "Hoàn thành", color: "#22c55e" },
  { value: "Đã hủy", label: "Đã hủy", color: "#ef4444" },
];

const getStatusClass = (status) => {
  switch (status) {
    case "Chờ xác nhận":
      return "bg-yellow-100 text-yellow-700";
    case "Đang giao":
      return "bg-blue-100 text-blue-700";
    case "Hoàn thành":
      return "bg-green-100 text-green-700";
    case "Đã hủy":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? state.data.color : "white",
    color: "black",
    padding: "10px 12px", // 👈 padding option to hơn
    borderRadius: "6px",
    border: state.isFocused ? "3px solid black" : "3px solid transparent",
    transition: "all 0.2s ease",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    gap: "8px",
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#f3f4f6",
    border: "3px solid black",
    borderColor: state.isFocused ? "#888888FF" : "black",
    boxShadow: state.isFocused ? "0 0 0 5px rgba(37, 99, 235, 0.4)" : "none",
    borderRadius: "5px",
    width: "300px",
    fontWeight: "500",
    transition: "border 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#111827",
    fontWeight: 600,
  }),
  menu: (provided) => ({
    ...provided,
    border: "2px solid black", // 👈 viền khung dropdown
    borderRadius: "6px",
    marginTop: "4px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  }),
  menuList: (provided) => ({
    ...provided,
    padding: "6px", // 👈 padding cho bên trong list
  }),
  menuPortal: (base) => ({
    ...base,
    zIndex: 9999, // đảm bảo cao hơn các phần tử khác
  }),
};

export const DanhSachDonHang = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [editingId, setEditingId] = useState(null);

  const handleStatusChange = (id, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    setEditingId(null);
  };

  return (
    <div className="select-none">
      <AdminHeader />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/Admin" },
            { name: "Danh sách đơn hàng", to: "/Admin/danh-sach-don-hang" },
          ]}
        />{" "}
      </div>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-4xl font-semibold mb-6 text-gray-800">
          Danh sách đơn hàng
        </h2>
        <div className="overflow-x-auto border-2 border-black rounded-lg">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-3 px-4 text-left">Mã đơn</th>
                <th className="py-3 px-4 text-left">Khách hàng</th>
                <th className="py-3 px-4 text-left">Ngày đặt</th>
                <th className="py-3 px-4 text-left w-[200px]">Trạng thái</th>
                <th className="py-3 px-4 text-left">Tổng tiền</th>
                <th className="py-3 px-4 text-left">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <React.Fragment key={order.id}>
                  <tr className="border-b hover:bg-gray-50 transition duration-200">
                    <td className="py-3 px-4">{order.id}</td>
                    <td className="py-3 px-4">{order.customerName}</td>
                    <td className="py-3 px-4">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusClass(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      {order.total.toLocaleString()}₫
                    </td>
                    <td className="flex py-3 px-4 space-x-2">
                      <button className="border-2 border-black font-semibold bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600">
                        Xem
                      </button>
                      <p>|</p>
                      <button
                        className="border-2 border-black font-semibold bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        onClick={() => setEditingId(order.id)}
                      >
                        Cập nhật
                      </button>
                    </td>
                  </tr>

                  {editingId === order.id && (
                    <tr className="bg-gray-50">
                      <td colSpan={6} className="py-4 px-4">
                        <div className="flex items-center space-x-4">
                          <label className="text-sm font-medium text-gray-700">
                            Trạng thái mới:
                          </label>
                          <Select
                            options={statusOptions}
                            value={statusOptions.find(
                              (opt) => opt.value === order.status
                            )}
                            onChange={(selected) =>
                              setOrders((prev) =>
                                prev.map((o) =>
                                  o.id === order.id
                                    ? { ...o, status: selected.value }
                                    : o
                                )
                              )
                            }
                            styles={customStyles}
                            menuPortalTarget={document.body} // 👈 thêm dòng này
                          />

                          <button
                            className="border-2 border-black font-semibold bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                            onClick={() => setEditingId(null)}
                          >
                            Lưu
                          </button>
                          <button
                            className="border-2 border-black font-semibold bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                            onClick={() => setEditingId(null)}
                          >
                            Hủy
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DanhSachDonHang;
