import React from "react";
import { Link } from "react-router-dom";
import HeaderRodent from "../../../components/RodentComponent/Header.jsx";
import FooterRodent from "../../../components/RodentComponent/Footer.jsx";
import Breadcrumbs from "../../../components/Breadcrumbs.jsx";

export const ChamSocHamster = () => {
  return (
    <div className="select-none">
      <HeaderRodent />
      <div className="max-w-6xl mx-auto mt-2 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-gam-nham" },
            { name: "Tin tức", to: "/san-pham-gam-nham" },
            { name: "Cách chăm sóc hamster khỏe mạnh và sạch sẽ", to: "#" },
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
            Cách chăm sóc hamster khỏe mạnh và sạch sẽ
          </h1>
        </div>
      </section>

      {/* Main content */}
      <div className="container mx-auto px-4 py-10 sm:py-12 space-y-8 sm:space-y-10">
        <img
          src="/images/Rodent/GamNham/tintuchamster.jpg"
          alt="Cách chăm sóc hamster"
          className="w-full max-w-[800px] max-h-[400px] sm:max-h-[600px] mx-auto object-cover rounded-xl shadow-xl mb-6"
        />

        <div className="space-y-6">
          {[
            {
              icon: "🏠",
              title: "Chuồng nuôi và môi trường sống",
              content:
                "Chuồng nuôi cần đảm bảo rộng rãi, thoáng khí nhưng vẫn an toàn để hamster không thoát ra ngoài. Bạn nên sử dụng lót chuồng bằng mùn gỗ không mùi hoặc giấy tái chế chuyên dụng để hút ẩm và khử mùi.",
            },
            {
              icon: "🥗",
              title: "Chế độ ăn uống",
              content:
                "Hamster cần thức ăn dạng viên chuyên dụng kết hợp với hạt ngũ cốc, rau củ tươi (như cà rốt, bắp cải, dưa chuột) và một ít trái cây ngọt. Tránh cho ăn đồ ăn mặn, ngọt hoặc có dầu mỡ.",
            },
            {
              icon: "🧹",
              title: "Vệ sinh và chăm sóc sức khỏe",
              content:
                "Dọn dẹp lồng và thay lót chuồng ít nhất 2 lần mỗi tuần. Thường xuyên kiểm tra xem hamster có dấu hiệu bị bệnh như lông xù, mắt ướt, biếng ăn hay không.",
            },
            {
              icon: "🎡",
              title: "Tạo hoạt động vui chơi",
              content:
                "Hamster rất năng động, vì vậy nên chuẩn bị bánh xe chạy, ống chui, cầu thang hoặc đồ chơi gặm để giúp chúng giải trí và giảm stress.",
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
            💡 Với sự quan tâm và chăm sóc đúng cách, hamster sẽ luôn khỏe mạnh,
            năng động và sống thọ hơn.
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

export default ChamSocHamster;
