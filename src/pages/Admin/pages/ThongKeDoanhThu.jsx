import React, { useState, useEffect } from "react";
import AdminHeader from "../../../components/AdminComponent/AdminHeader";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Breadcrumbs from "../../../components/Breadcrumbs";


const mockOrders = [
  { id: 1, date: "2025-08-01", total: 500000 },
  { id: 2, date: "2025-08-02", total: 800000 },
  { id: 3, date: "2025-08-03", total: 1200000 },
  { id: 4, date: "2025-08-04", total: 400000 },
  { id: 5, date: "2025-08-05", total: 950000 },
];

export const ThongKeDoanhThu = () => {
  const [orders, setOrders] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Giả sử lấy từ API
    setOrders(mockOrders);

    // Chuyển dữ liệu sang chart
    const data = mockOrders.map((order) => ({
      date: order.date,
      revenue: order.total,
    }));
    setChartData(data);
  }, []);

  return (
    <div className="select-none">
      <AdminHeader />
       <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/Admin" },
            { name: "Thống kê doanh thu", to: "/Admin/thong-ke-doanh-thu" },
          ]}
        />{" "}
      </div>
      <div className="p-6">
        <h2 className="text-4xl font-bold mb-4">📊 Thống kê doanh thu</h2>

        {/* Biểu đồ doanh thu */}
        <div className="w-full h-96 mb-8 bg-white shadow rounded-2xl p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Bảng chi tiết đơn hàng */}
        <div className="bg-white shadow rounded-2xl p-4">
          <h3 className="text-4xl font-semibold mb-5">Danh sách đơn hàng</h3>
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 p-2">Mã đơn</th>
                <th className="border border-gray-200 p-2">Ngày</th>
                <th className="border border-gray-200 p-2">Tổng tiền</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="border border-gray-200 p-2">{order.id}</td>
                  <td className="border border-gray-200 p-2">{order.date}</td>
                  <td className="border border-gray-200 p-2">
                    {order.total.toLocaleString("vi-VN")} ₫
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ThongKeDoanhThu;
