import React from "react";
import { Link } from "react-router-dom";
import HeaderRodent from "../../../components/RodentComponent/Header.jsx";
import FooterRodent from "../../../components/RodentComponent/Footer.jsx";
import Breadcrumbs from "../../../components/Breadcrumbs.jsx";

export const GiongChuotLang = () => {
  return (
    <div className="select-none">
      <HeaderRodent />
      <div className="max-w-6xl mx-auto mt-2 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-gam-nham" },
            { name: "Tin tức", to: "/san-pham-gam-nham" },
            { name: "Những giống chuột lang phổ biến ở Việt Nam", to: "#" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-yellow-100 py-10 sm:py-12">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-yellow-200 text-yellow-800 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-3">
            🐹 Tin Tức Thú Cưng
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug mb-2">
            Những giống chuột lang phổ biến ở Việt Nam
          </h1>
        </div>
      </section>

      {/* Main content */}
      <div className="container mx-auto px-4 py-10 sm:py-12 space-y-8 sm:space-y-10">
        <img
          src="/images/Rodent/GamNham/tintucchuotlang.jpg"
          alt="Những giống chuột lang phổ biến ở Việt Nam"
          className="w-full max-w-[1000px] max-h-[300px] sm:max-h-[400px] mx-auto object-cover rounded-xl shadow-xl mb-6"
        />

        <div className="space-y-6">
          {[
            {
              icon: "🐹",
              title: "Chuột lang Mỹ (American Guinea Pig)",
              content:
                "Là giống phổ biến nhất ở Việt Nam, có lông ngắn, màu sắc đa dạng, tính tình hiền lành, dễ chăm sóc và thân thiện với trẻ em.",
            },
            {
              icon: "🐼",
              title: "Chuột lang Peru",
              content:
                "Có lông dài, mềm mượt, thích hợp nuôi làm cảnh. Cần được chải lông thường xuyên để tránh rối và lông rụng nhiều.",
            },
            {
              icon: "🦦",
              title: "Chuột lang Abyssinian",
              content:
                "Đặc trưng với bộ lông xoáy nhiều chỗ, năng động và tò mò. Thích hợp cho những người muốn quan sát sự hoạt bát của chuột lang.",
            },
            {
              icon: "🦁",
              title: "Chuột lang Teddy",
              content:
                "Có bộ lông ngắn, dày và xù, nhìn như gấu bông. Tính cách hiền lành, thích được vuốt ve, rất thân thiện.",
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
            💡 Những giống chuột lang này đều dễ nuôi, hiền lành và phù hợp làm
            thú cưng trong gia đình.
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

export default GiongChuotLang;
