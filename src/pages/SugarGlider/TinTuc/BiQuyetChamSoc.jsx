import React from "react";
import { Link } from "react-router-dom";
import { FaAppleAlt, FaHome, FaHeart, FaStethoscope } from "react-icons/fa";
import Breadcrumbs from "../../../components/Breadcrumbs";
import HeaderSugar from "../../../components/SugarComponent/HeaderSugar";
import FooterSugar from "../../../components/SugarComponent/FooterSugar";

const BiQuyetChamSoc = () => {
  const tips = [
    {
      icon: <FaAppleAlt className="text-gray-500 text-3xl" />,
      title: "Chế Độ Dinh Dưỡng",
      desc: "Sóc Bay cần chế độ ăn đa dạng: trái cây tươi, rau xanh, nguồn protein như sâu khô hoặc trứng luộc, và thức ăn chuyên dụng cho sugar glider. Tránh cho ăn đồ ngọt, nhiều dầu mỡ hoặc thực phẩm chế biến.",
    },
    {
      icon: <FaHome className="text-gray-500 text-3xl" />,
      title: "Chuồng Nuôi & Không Gian Sống",
      desc: "Chuồng nuôi nên rộng rãi, cao, có nhiều cành cây giả hoặc đồ chơi để leo trèo. Nên đặt nơi yên tĩnh, tránh gió lùa và ánh nắng trực tiếp.",
    },
    {
      icon: <FaHeart className="text-gray-500 text-3xl" />,
      title: "Thời Gian Gắn Bó",
      desc: "Sóc Bay là loài sống theo bầy đàn, cần được chơi và tương tác hàng ngày. Dành ít nhất 30 phút mỗi ngày để tiếp xúc, âu yếm và luyện tập kỹ năng cho chúng.",
    },
    {
      icon: <FaStethoscope className="text-gray-500 text-3xl" />,
      title: "Chăm Sóc Sức Khỏe",
      desc: "Đưa sóc đi kiểm tra định kỳ tại bác sĩ thú y có kinh nghiệm về động vật ngoại lai. Theo dõi cân nặng, lông, và thói quen ăn uống để phát hiện sớm các vấn đề.",
    },
  ];

  return (
    <div className="select-none">
      <HeaderSugar />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-soc-bay" },
            { name: "Tin tức", to: "/san-pham-soc-bay" },
            { name: "Bí quyết chăm sóc sóc bay", to: "#" },
          ]}
        />
        <main className="max-w-6xl mx-auto px-4 py-8 sm:py-10">
          {/* Title */}
          <h1 className="text-2xl sm:text-4xl font-extrabold text-center text-gray-600 mb-3 sm:mb-4">
            Bí Quyết Chăm Sóc Sóc Bay
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base">
            Những bí quyết sau sẽ giúp bạn chăm sóc sóc bay khỏe mạnh, hạnh phúc
            và luôn gắn bó với bạn.
          </p>

          {/* Cover Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg mb-8 sm:mb-12">
            <img
              src="/images/SugarGlider/socbay/cover.jpg"
              alt="Sóc Bay dễ thương"
              className="w-full h-48 sm:h-[400px] object-cover"
            />
          </div>

          {/* Tips grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 sm:p-6 flex gap-3 sm:gap-4 items-start"
              >
                <div>{tip.icon}</div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-700 mb-1 sm:mb-2">
                    {tip.title}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <div className="text-center mt-6 sm:mt-10">
            <Link
              to="/san-pham-soc-bay"
              className="w-full sm:w-auto inline-block border border-black bg-gradient-to-r from-gray-200 to-gray-300 text-black py-3 px-6 sm:px-8 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition transform font-semibold text-sm sm:text-base"
            >
              Quay lại
            </Link>
          </div>
        </main>
      </div>
      <FooterSugar />
    </div>
  );
};

export default BiQuyetChamSoc;
