import React from "react";
import HeaderSugar from "../../../components/SugarComponent/HeaderSugar";
import FooterSugar from "../../../components/SugarComponent/FooterSugar";
import { Link } from "react-router-dom";
import {
  FaPalette,
  FaSmile,
  FaHourglassHalf,
  FaGlobeAsia,
} from "react-icons/fa";
import Breadcrumbs from "../../../components/Breadcrumbs";

const SocBayMosaic = () => {
  const gallery = [
    "/images/SugarGlider/socbay/mosaic.jpg",
    "/images/SugarGlider/socbay/mosaic1.webp",
    "/images/SugarGlider/socbay/mosaic2.webp",
  ];

  const quickInfo = [
    {
      icon: <FaPalette className="text-gray-500 text-xl" />,
      label: "Màu lông",
      value: "Pha trộn nhiều màu: trắng, xám, đen (hoa văn độc đáo)",
    },
    {
      icon: <FaSmile className="text-gray-500 text-xl" />,
      label: "Tính cách",
      value: "Thông minh, năng động, thân thiện",
    },
    {
      icon: <FaHourglassHalf className="text-gray-500 text-xl" />,
      label: "Tuổi thọ",
      value: "10–15 năm",
    },
    {
      icon: <FaGlobeAsia className="text-gray-500 text-xl" />,
      label: "Nguồn gốc",
      value: "Úc, Indonesia",
    },
  ];

  return (
    <div className="select-none">
      <HeaderSugar />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-soc-bay" },
            { name: "Tin tức", to: "/san-pham-soc-bay" },
            { name: "Các dòng sóc bay", to: "/tin-tuc-soc-bay" },
            { name: "Sóc bay Mosaic", to: "/soc-bay-mosaic" },
          ]}
        />

        {/* Cover image */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg mb-12">
          <img
            src="/images/SugarGlider/socbay/mosaicc.webp"
            alt="Sóc Bay Mosaic"
            className="w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
              Sóc Bay (Mosaic)
            </h1>
          </div>
        </div>

        {/* Description */}
        <section className="mb-12 space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
          <p>
            <b>Sóc Bay Mosaic</b> nổi bật với bộ lông mang những hoa văn độc
            đáo, pha trộn giữa các màu trắng, xám và đen, không có cá thể nào
            giống hoàn toàn cá thể nào. Chính sự khác biệt này khiến chúng trở
            thành một trong những dòng sóc bay được săn đón nhất.
          </p>
          <p>
            Chúng có tính cách <b>thông minh, năng động và thân thiện</b>, dễ
            dàng làm quen với chủ nếu được chăm sóc và tương tác thường xuyên.
            Một số cá thể còn có thói quen tinh nghịch rất đáng yêu.
          </p>
          <p>
            Nhờ vẻ ngoài ấn tượng và tính cách cuốn hút, <b>Mosaic</b> không chỉ
            là thú cưng đặc biệt mà còn là “tác phẩm nghệ thuật sống” trong bộ
            sưu tập của những người yêu Sugar Glider.
          </p>
        </section>

        {/* Quick Info */}
        <div className="bg-white border border-black rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-600 mb-3 text-center">
            Thông Tin Nhanh Về Sóc Bay (Mosaic)
          </h2>
          <hr className="mb-5 w-50 border-[2px] border-gray-600 mx-auto" />
          <div className="grid sm:grid-cols-2 gap-6">
            {quickInfo.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center bg-gray-50 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 text-2xl mb-3">
                  {item.icon}
                </div>
                <div className="font-semibold text-lg">{item.label}</div>
                <div className="text-gray-600">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-600 mb-4 text-center">
            Hình Ảnh Sóc Bay Mosaic
          </h2>
          <hr className="mb-5 w-50 border-[2px] border-gray-600 mx-auto" />

          {/* scroll ngang trên mobile */}
          <div className="flex gap-4 overflow-x-auto sm:grid sm:grid-cols-3 sm:gap-4 scrollbar-hide px-2 -mx-2">
            {gallery.map((src, idx) => (
              <div
                key={idx}
                className="min-w-[220px] sm:min-w-0 flex-shrink-0 overflow-hidden rounded-lg shadow hover:shadow-lg transition"
              >
                <img
                  src={src}
                  alt={`Sóc Bay Mosaic ${idx + 1}`}
                  className="w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Back button */}
        <div className="text-center">
          <Link
            to="/tin-tuc-soc-bay"
            className="inline-block border border-black bg-gradient-to-r from-gray-400 to-gray-600 text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition transform font-semibold"
          >
            Quay lại
          </Link>
        </div>
      </main>
      <FooterSugar />
    </div>
  );
};

export default SocBayMosaic;
