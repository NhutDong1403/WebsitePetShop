import React from "react";
import { Link } from "react-router-dom";
import HeaderRodent from "../../../components/RodentComponent/Header.jsx";
import FooterRodent from "../../../components/RodentComponent/Footer.jsx";
import Breadcrumbs from "../../../components/Breadcrumbs.jsx";

export const BiQuyetNuoiNhim = () => {
  return (
    <div className="select-none">
      <HeaderRodent />
      <div className="max-w-6xl mx-auto mt-2 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-gam-nham" },
            { name: "Tin tức", to: "/san-pham-gam-nham" },
            { name: "Bí quyết nuôi nhím kiểng thân thiện", to: "#" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-yellow-100 py-10 sm:py-12">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-yellow-200 text-yellow-800 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-3">
            🦔 Tin Tức Thú Cưng
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug mb-2">
            Bí quyết nuôi nhím kiểng thân thiện
          </h1>
        </div>
      </section>

      {/* Main content */}
      <div className="container mx-auto px-4 py-10 sm:py-12 space-y-8 sm:space-y-10">
        <img
          src="/images/Rodent/GamNham/biquyetnuoinhim.jpg"
          alt="Nuôi nhím kiểng"
          className="w-full max-w-[800px] max-h-[300px] sm:max-h-[500px] border mx-auto object-cover rounded-xl shadow-xl mb-6"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: "🏡",
              title: "Chuồng nuôi an toàn",
              content:
                "Nhím cần có chuồng rộng, thoáng khí và an toàn. Dùng lót chuồng mềm, sạch và thay định kỳ để nhím luôn sạch sẽ.",
            },
            {
              icon: "🥗",
              title: "Chế độ ăn uống hợp lý",
              content:
                "Thức ăn chính là côn trùng nhỏ, thức ăn dạng viên dành cho nhím, kết hợp rau củ tươi và trái cây ít ngọt. Tránh cho nhím ăn đồ quá béo hoặc quá ngọt.",
            },
            {
              icon: "🧹",
              title: "Vệ sinh và chăm sóc sức khỏe",
              content:
                "Kiểm tra lông, móng, răng nhím định kỳ. Vệ sinh chuồng ít nhất 2 lần/tuần để phòng bệnh và giữ nhím khỏe mạnh.",
            },
            {
              icon: "🤝",
              title: "Tương tác và làm quen",
              content:
                "Nhím là loài nhút nhát, nên làm quen từ từ, nhẹ nhàng cho nhím cảm giác an toàn. Thường xuyên chơi và nói chuyện để nhím thân thiện hơn.",
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="flex flex-col p-3 sm:p-4 rounded-xl border shadow-md hover:shadow-lg transition-shadow duration-300 bg-yellow-50"
            >
              <h2 className="flex items-center text-base sm:text-xl font-bold text-yellow-700 mb-1">
                <span className="mr-2">{section.icon}</span>
                {section.title}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-snug">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <p className="font-semibold text-gray-800 bg-yellow-100 border-l-4 border-yellow-400 p-3 sm:p-4 rounded-lg text-sm sm:text-base">
          💡 Với cách chăm sóc đúng, nhím kiểng sẽ luôn khỏe mạnh, vui vẻ và dễ
          thương.
        </p>

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

export default BiQuyetNuoiNhim;
