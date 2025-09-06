import React, { useState } from "react";
import AdminHeader from "../../../components/AdminComponent/AdminHeader";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const DatLich = () => {
  const [activeTab, setActiveTab] = useState("Chó & Mèo");
  const [bookings, setBookings] = useState([
    {
      id: 1,
      name: "Nguyễn Văn A",
      pet: "chó Poddle",
      date: "9:00 21/8/2025",
      service: "Chó & Mèo - Vệ sinh & chăm sóc cơ bản",
      note: "Tắm, vệ sinh tai mắt, cắt móng và kiểm tra sức khỏe cơ bản",
      status: "Chờ xử lý",
      category: "Chó & Mèo",
    },
    {
      id: 2,
      name: "Trần Thị B",
      pet: "Rồng úc",
      date: "9:00 21/8/2025",
      service: "Bò sát - Vệ sinh & chăm sóc sức khỏe",
      note: "Làm sạch da, kiểm tra mắt, miệng, phản xạ và theo dõi sức khỏe",
      status: "Đã xác nhận",
      category: "Bò sát",
    },
    {
      id: 3,
      name: "Lê Văn C",
      pet: "Vẹt ngực hồng",
      date: "9:00 21/8/2025",
      service: "Chim vẹt - Dịch vụ chăm hộ",
      note: "Gửi bé từ 21/8/2025 đến 25/8/2025",
      status: "Đã hoàn thành",
      category: "Chim vẹt",
    },
    {
      id: 4,
      name: "Nguyễn Thị V",
      pet: "Platinum",
      date: "9:00 21/8/2025",
      service: "Sóc bay - Dịch vụ chăm hộ",
      note: "Gửi bé từ 21/8/2025 đến 25/8/2025",
      status: "Đã hoàn thành",
      category: "Sóc bay",
    },
    {
      id: 5,
      name: "Trần Văn G",
      pet: "Hamster bear",
      date: "9:00 21/8/2025",
      service: "Gặm nhấm - Dịch vụ chăm hộ",
      note: "Gửi bé từ 21/8/2025 đến 25/8/2025",
      status: "Đã hoàn thành",
      category: "Gặm nhấm",
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.id === id
          ? {
              ...b,
              status: newStatus,
            }
          : b
      )
    );
  };

  const categories = ["Chó & Mèo", "Bò sát", "Gặm nhấm", "Sóc bay", "Chim vẹt"];

  return (
    <div className="select-none">
      <AdminHeader />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/Admin" },
            { name: "Đặt lịch", to: "/Admin/dat-lich" },
          ]}
        />{" "}
      </div>
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-8xl mx-auto bg-white shadow-lg rounded-2xl p-6 border-5 border-gray-400">
          <h1 className="text-3xl font-bold text-black mb-6 text-center">
            Quản lý lịch đặt dịch vụ
          </h1>

          {/* Tabs */}
          <div className="flex justify-center space-x-4 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-lg border-2 font-semibold transition ${
                  activeTab === cat
                    ? "bg-gray-500 text-white border-black"
                    : "bg-gray-100 hover:bg-gray-200 border-2 border-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Bảng lịch */}
          <div className="overflow-x-auto">
            <table className="w-full table-fixed border-collapse">
              <thead className="bg-gray-200 text-gray-700 font-semibold">
                <tr>
                  <th className="p-3 border-2 w-30">Khách hàng</th>
                  <th className="p-3 border-2 w-30">Thú cưng</th>
                  <th className="p-3 border-2 w-30">Ngày</th>
                  <th className="p-3 border-2 w-65">Dịch vụ</th>
                  <th className="p-3 border-2 w-40">Ghi chú</th>
                  <th className="p-3 border-2 w-35">Trạng thái</th>
                  <th className="p-3 border-2 w-40">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {bookings
                  .filter((b) => b.category === activeTab)
                  .map((booking) => (
                    <tr
                      key={booking.id}
                      className="text-center hover:bg-gray-50"
                    >
                      <td className="p-3 border-2 truncate">{booking.name}</td>
                      <td className="p-3 border-2">{booking.pet}</td>
                      <td className="p-3 border-2">{booking.date}</td>
                      <td className="p-3 border-2 truncate">
                        {booking.service}
                      </td>
                      <td className="p-3 border-2 text-left">{booking.note}</td>
                      <td
                        className={`p-5 border-2 border-black font-semibold ${
                          booking.status === "Chờ xử lý"
                            ? "text-yellow-500 text-lg"
                            : booking.status === "Đã xác nhận"
                            ? "text-green-600 text-lg"
                            : booking.status === "Đã hoàn thành"
                            ? "text-blue-600 text-lg"
                            : "text-red-600 text-lg"
                        }`}
                      >
                        <div className="p-1 rounded-full">{booking.status}</div>
                      </td>
                      <td className="p-3 border-2 border-black space-x-2">
                        {booking.status === "Chờ xử lý" && (
                          <>
                            <button
                              onClick={() =>
                                updateStatus(booking.id, "Đã xác nhận")
                              }
                              className="px-3 py-1 border-3 border-gray-700 font-semibold bg-green-500 text-white rounded hover:bg-green-600"
                            >
                              Xác nhận
                            </button>
                            <button
                              onClick={() => updateStatus(booking.id, "Đã hủy")}
                              className="px-3 py-1 border-3 border-gray-700 font-semibold bg-red-500 text-white rounded hover:bg-red-600"
                            >
                              Hủy
                            </button>
                          </>
                        )}
                        {booking.status === "Đã xác nhận" && (
                          <button
                            onClick={() =>
                              updateStatus(booking.id, "Đã hoàn thành")
                            }
                            className="px-3 py-1 border-3 border-gray-700 font-semibold bg-blue-500 text-white rounded hover:bg-blue-600"
                          >
                            Đã hoàn thành
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatLich;
