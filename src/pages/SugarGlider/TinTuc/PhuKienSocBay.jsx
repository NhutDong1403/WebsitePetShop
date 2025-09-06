import React from "react";
import { Link } from "react-router-dom";
import HeaderSugar from "../../../components/SugarComponent/HeaderSugar";
import FooterSugar from "../../../components/SugarComponent/FooterSugar";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const PhuKienSocBay = () => {
  const accessories = [
    {
      name: "Lồng nuôi rộng rãi",
      desc: "Lồng cao tối thiểu 1m, nhiều tầng leo trèo, cửa an toàn. Giúp sóc bay vận động và hạn chế stress.",
      img: "/images/SugarGlider/TinTuc/long-soc-bay.jpg",
    },
    {
      name: "Túi ngủ ấm áp",
      desc: "Làm từ vải nỉ hoặc cotton, tạo cảm giác an toàn và giữ ấm cho sóc khi ngủ ban ngày.",
      img: "/images/SugarGlider/TinTuc/tui-ngu.jpg",
    },
    {
      name: "Đĩa ăn & bình nước",
      desc: "Chất liệu an toàn, dễ vệ sinh, tránh cạnh sắc gây thương tích.",
      img: "/images/SugarGlider/TinTuc/binh-nuoc.jpg",
    },
    {
      name: "Đồ chơi leo trèo",
      desc: "Cầu thang dây, cành gỗ, ống treo... giúp sóc bay vận động và giải trí.",
      img: "/images/SugarGlider/TinTuc/do-choi-leo-treo.jpg",
    },
    {
      name: "Túi đeo vận chuyển",
      desc: "Cho phép bạn mang sóc đi ra ngoài an toàn và giảm lo lắng cho chúng.",
      img: "/images/SugarGlider/TinTuc/tui-deo.jpg",
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
            { name: "Phụ kiện cần thiết cho sóc bay", to: "#" },
          ]}
        />
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-700 mb-6">
              Phụ kiện cần thiết cho sóc bay
            </h1>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 text-sm sm:text-base">
              Chuẩn bị đầy đủ phụ kiện sẽ giúp sóc bay của bạn khỏe mạnh, vui vẻ
              và dễ thích nghi với môi trường sống.
            </p>

            {/* Grid phụ kiện */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {accessories.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-105"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-40 sm:h-64 object-cover"
                  />
                  <div className="p-5">
                    <h2 className="text-lg sm:text-xl font-semibold text-black">
                      {item.name}
                    </h2>
                    <p className="mt-2 text-gray-700 text-sm sm:text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nút quay lại */}
          <div className="text-center">
            <Link
              to="/san-pham-soc-bay"
              className="w-full sm:w-auto inline-block border border-black bg-gradient-to-r from-gray-200 to-gray-300 text-black py-3 px-6 sm:px-8 mt-5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition transform font-semibold text-sm sm:text-base"
            >
              Quay lại
            </Link>
          </div>
        </div>
      </div>
      <FooterSugar />
    </div>
  );
};

export default PhuKienSocBay;
