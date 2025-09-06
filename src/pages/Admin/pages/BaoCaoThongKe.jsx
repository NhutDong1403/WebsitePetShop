import React, { useState } from "react";
import AdminHeader from "../../../components/AdminComponent/AdminHeader";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { FaUsers, FaMoneyBillWave } from "react-icons/fa";

// Dữ liệu thống kê người dùng
const usersData = [
  { status: "Hoạt động", count: 5 },
  { status: "Vô hiệu hóa", count: 2 },
];

// Dữ liệu thống kê doanh thu nhiều năm (ví dụ)
const revenueData = [
  { month: "Tháng 1", year: 2025, revenue: 5000000 },
  { month: "Tháng 2", year: 2025, revenue: 7000000 },
  { month: "Tháng 3", year: 2025, revenue: 6000000 },
  { month: "Tháng 4", year: 2025, revenue: 9000000 },
  { month: "Tháng 5", year: 2025, revenue: 8000000 },
  { month: "Tháng 6", year: 2025, revenue: 8500000 },
  { month: "Tháng 1", year: 2026, revenue: 6000000 },
  { month: "Tháng 2", year: 2026, revenue: 7500000 },
  { month: "Tháng 3", year: 2026, revenue: 6800000 },
];

export const BaoCaoThongKe = () => {
  const currentYear = new Date().getFullYear();
  const availableYears = [...new Set(revenueData.map((d) => d.year))];
  const [selectedYear, setSelectedYear] = useState(
    availableYears.includes(currentYear) ? currentYear : availableYears[0]
  );

  const filteredRevenue = revenueData.filter((d) => d.year === selectedYear);

  return (
    <div className="select-none">
      <AdminHeader />
      <div className="max-w-7xl mx-auto mt-5 px-6">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/Admin" },
            { name: "Báo cáo & Thống kê", to: "/Admin/bao-cao-thong-ke" },
          ]}
        />
      </div>

      <div className="p-6 bg-gray-50 min-h-screen space-y-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          📊 Báo cáo & Thống kê
        </h1>

        {/* Thống kê người dùng */}
        <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
          <div className="flex items-center mb-4">
            <FaUsers className="text-green-500 w-6 h-6 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">
              Thống kê người dùng
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 table-fixed text-gray-700">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold w-1/2">
                    Trạng thái
                  </th>
                  <th className="px-6 py-3 text-left font-semibold w-1/2">
                    Số lượng
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {usersData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-green-50 transition-colors">
                    <td className="px-6 py-4">{item.status}</td>
                    <td className="px-6 py-4">{item.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={usersData} margin={{ top: 20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="4 4" />
                <XAxis dataKey="status" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="count" fill="#4ade80" radius={[10, 10, 0, 0]}>
                  <LabelList dataKey="count" position="top" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Thống kê doanh thu */}
        <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
          <div className="flex items-center mb-4 justify-between">
            <div className="flex items-center">
              <FaMoneyBillWave className="text-blue-500 w-6 h-6 mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">
                Thống kê doanh thu
              </h2>
            </div>
            <div>
              <label className="mr-2 font-medium text-gray-700">Năm:</label>
              <select
                className="border rounded px-2 py-1"
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
              >
                {availableYears.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="overflow-x-auto mb-4">
            <table className="min-w-full divide-y divide-gray-200 text-gray-700">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">Tháng</th>
                  <th className="px-4 py-2 text-left font-semibold">
                    Doanh thu (VNĐ)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredRevenue.map((item, idx) => (
                  <tr key={idx} className="hover:bg-blue-50 transition-colors">
                    <td className="px-4 py-2">{item.month}</td>
                    <td className="px-4 py-2">
                      {item.revenue.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredRevenue} margin={{ top: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(v) => v / 1000000 + "M"} />
                <Tooltip formatter={(val) => val.toLocaleString() + " VNĐ"} />
                <Bar dataKey="revenue" fill="#60a5fa" radius={[6, 6, 0, 0]}>
                  <LabelList
                    dataKey="revenue"
                    position="top"
                    formatter={(val) => val.toLocaleString()}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaoCaoThongKe;
