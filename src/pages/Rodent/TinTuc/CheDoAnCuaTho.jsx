import React from "react";
import { Link } from "react-router-dom";
import HeaderRodent from "../../../components/RodentComponent/Header.jsx";
import FooterRodent from "../../../components/RodentComponent/Footer.jsx";
import Breadcrumbs from "../../../components/Breadcrumbs.jsx";

export const CheDoAnCuaTho = () => {
  return (
    <div className="select-none">
      <HeaderRodent />
      <div className="max-w-6xl mx-auto mt-2 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-gam-nham" },
            { name: "Tin tức", to: "/san-pham-gam-nham" },
            { name: "Chế độ ăn uống hợp lý cho thỏ kiểng", to: "#" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-yellow-100 py-10 sm:py-12">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-yellow-200 text-yellow-800 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-3">
            🐰 Tin Tức Thú Cưng
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug mb-2">
            Chế độ ăn uống hợp lý cho thỏ kiểng
          </h1>
        </div>
      </section>

      {/* Main content */}
      <div className="container mx-auto px-4 py-10 sm:py-12 space-y-8 sm:space-y-10">
        <img
          src="/images/Rodent/GamNham/tintuctho.webp"
          alt="Chế độ ăn uống cho thỏ kiểng"
          className="w-full max-w-[800px] max-h-[300px] sm:max-h-[500px] mx-auto object-cover rounded-xl shadow-xl mb-6"
        />

        <div className="space-y-6">
          {[
            {
              icon: "🥬",
              title: "Rau tươi và lá xanh",
              content:
                "Thỏ kiểng cần ăn nhiều rau xanh như rau cải, xà lách, bắp cải, rau mồng tơi. Rau nên rửa sạch và cắt nhỏ để thỏ dễ ăn.",
            },
            {
              icon: "🥕",
              title: "Cà rốt và củ quả",
              content:
                "Cà rốt, củ cải, bí đỏ là những món thỏ yêu thích. Tuy nhiên nên cho ăn vừa phải, tránh quá ngọt làm ảnh hưởng đến sức khỏe răng và dạ dày.",
            },
            {
              icon: "🌾",
              title: "Thức ăn khô",
              content:
                "Thức ăn dạng viên, hạt ngũ cốc chuyên dụng giúp cung cấp đủ dinh dưỡng, vitamin và khoáng chất cho thỏ.",
            },
            {
              icon: "💧",
              title: "Nước sạch",
              content:
                "Luôn đảm bảo thỏ có nước sạch, thay nước ít nhất 1 lần/ngày để tránh vi khuẩn và giữ thỏ khỏe mạnh.",
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-6 rounded-xl border shadow-md hover:shadow-xl transition-shadow duration-300 bg-yellow-50"
            >
              <h2 className="flex items-center text-lg sm:text-2xl font-bold text-yellow-700 mb-3">
                <span className="mr-2 sm:mr-3">{section.icon}</span>
                {section.title}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">{section.content}</p>
            </div>
          ))}

          <p className="font-semibold text-gray-800 bg-yellow-100 border-l-4 border-yellow-400 p-3 sm:p-4 rounded-lg text-sm sm:text-base">
            💡 Chăm sóc chế độ ăn uống hợp lý giúp thỏ kiểng luôn khỏe mạnh,
            năng động và ít bệnh tật.
          </p>
        </div>

        <div className="text-center">
          <Link
            to="/san-pham-gam-nham"
            className="inline-block border border-black bg-gradient-to-r from-yellow-200 to-yellow-300 text-black py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition transform font-semibold text-sm sm:text-base"
          >
            Quay lại
          </Link>
        </div>
      </div>

      <FooterRodent />
    </div>
  );
};

export default CheDoAnCuaTho;
