import React from "react";
import HeaderSugar from "../../../components/SugarComponent/HeaderSugar";
import FooterSugar from "../../../components/SugarComponent/FooterSugar";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";

const CacDongSocBay = () => {
  const categories = [
    {
      name: "Sóc Bay (Normal)",
      img: "/images/SugarGlider/socbay/normal.jpg",
      desc: "Dòng sóc bay phổ biến nhất, dễ nuôi và thân thiện.",
      link: "/soc-bay-normal",
    },
    {
      name: "Sóc Bay (White Face)",
      img: "/images/SugarGlider/socbay/whiteface.jpg",
      desc: "Sở hữu khuôn mặt trắng đặc trưng, rất đáng yêu.",
      link: "/soc-bay-whiteface",
    },
    {
      name: "Sóc Bay (Platinum)",
      img: "/images/SugarGlider/socbay/platinum.jpg",
      desc: "Bộ lông bạc sang trọng, hiếm gặp và được ưa chuộng.",
      link: "/soc-bay-platinum",
    },
    {
      name: "Sóc Bay (Leucy)",
      img: "/images/SugarGlider/socbay/leucy.jpg",
      desc: "Lông trắng muốt, ánh mắt đen huyền bí, được nhiều người nuôi ưa chuộng.",
      link: "/soc-bay-leucy",
    },
    {
      name: "Sóc Bay (Creamino)",
      img: "/images/SugarGlider/socbay/creamino.jpg",
      desc: "Màu kem vàng nhạt dịu dàng và hiếm, được nhiều người nuôi ưa chuộng.",
      link: "/soc-bay-creamino",
    },
    {
      name: "Sóc Bay (Mosaic)",
      img: "/images/SugarGlider/socbay/mosaic.jpg",
      desc: "Họa tiết lông độc đáo, mỗi cá thể là duy nhất.",
      link: "/soc-bay-mosaic",
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
            { name: "Các dòng sóc bay", to: "#" },
          ]}
        />
        <div className="max-w-6xl mx-auto mt-2 px-4">
          <main className="max-w-7xl mx-auto px-4 py-10">
            {/* Tiêu đề */}
            <h1 className="text-4xl font-extrabold text-center text-gray-600 mb-4">
              Các Dòng Sóc Bay
            </h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Khám phá các dòng sóc bay phổ biến với màu sắc và tính cách khác
              nhau.
            </p>

            {/* Grid danh sách */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition group h-full flex flex-col"
                >
                  {/* Ảnh */}
                  <div className="overflow-hidden">
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Nội dung */}
                  <div className="p-3 sm:p-4 flex flex-col flex-grow">
                    <h2 className="text-base md:text-lg font-bold text-gray-700 mb-2">
                      {cat.name}
                    </h2>
                    <p className="text-sm text-gray-600 mb-4 flex-grow">
                      {cat.desc}
                    </p>

                    {/* Button luôn ở đáy card */}
                    <Link
                      to={cat.link}
                      className="mt-auto inline-block text-center bg-gray-500 text-white py-2 px-4 rounded-full text-sm font-semibold shadow hover:bg-gray-600 transition"
                    >
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/san-pham-soc-bay"
                className="w-full sm:w-auto inline-block border border-black bg-gradient-to-r from-gray-200 to-gray-300 text-black py-3 px-6 sm:px-8 mt-5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition transform font-semibold text-sm sm:text-base"
              >
                Quay lại
              </Link>
            </div>
          </main>
        </div>
      </div>
      <FooterSugar />
    </div>
  );
};

export default CacDongSocBay;
