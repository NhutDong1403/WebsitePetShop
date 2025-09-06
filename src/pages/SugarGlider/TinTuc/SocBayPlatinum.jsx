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

const SocBayPlatinum = () => {
  const gallery = [
    "/images/SugarGlider/socbay/platinum.jpg",
    "/images/SugarGlider/socbay/platinum2.jpg",
    "/images/SugarGlider/socbay/platinum3.jpg",
  ];

  const quickInfo = [
    {
      icon: <FaPalette className="text-gray-500 text-xl" />,
      label: "Màu lông",
      value: "Màu bạch kim sáng, bụng trắng",
    },
    {
      icon: <FaSmile className="text-gray-500 text-xl" />,
      label: "Tính cách",
      value: "Hiền lành, thân thiện, quấn chủ",
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
      <main className="max-w-6xl mx-auto px-4 py-8 sm:py-10">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-soc-bay" },
            { name: "Tin tức", to: "/san-pham-soc-bay" },
            { name: "Các dòng sóc bay", to: "/tin-tuc-soc-bay" },
            { name: "Sóc bay Platinum", to: "/soc-bay-platinum" },
          ]}
        />

        {/* Ảnh cover với overlay */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg mb-10 sm:mb-12">
          <img
            src="/images/SugarGlider/socbay/platinum.jpg"
            alt="Sóc Bay Platinum"
            className="w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
              Sóc Bay (Platinum)
            </h1>
          </div>
        </div>

        {/* Mô tả chi tiết */}
        <section className="mb-12 space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
          <p>
            Sóc Bay Platinum sở hữu bộ lông màu bạch kim sáng óng ả, phần bụng
            trắng mịn và sọc lưng màu xám nhạt. Đây là một trong những biến thể
            hiếm và được săn đón nhất của Sugar Glider.
          </p>
          <p>
            Với tính cách hiền lành, thân thiện và rất quấn chủ, Sóc Bay
            Platinum dễ dàng tạo được mối gắn kết bền chặt với người nuôi nếu
            được chăm sóc và tương tác thường xuyên.
          </p>
          <p>
            Nhờ vẻ đẹp sang trọng cùng bản tính đáng yêu, Platinum là lựa chọn
            tuyệt vời cho những người yêu sóc bay và muốn sở hữu một cá thể độc
            đáo, đẳng cấp.
          </p>
        </section>

        {/* Bảng thông tin nhanh */}
        <div className="bg-white border border-black rounded-xl shadow-lg p-6 sm:p-8 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-600 mb-3 text-center">
            Thông Tin Nhanh Về Sóc Bay (Platinum)
          </h2>
          <hr className="mb-5 w-32 sm:w-50 border-[2px] border-gray-600 mx-auto" />
          <div className="grid sm:grid-cols-2 gap-6">
            {quickInfo.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center bg-gray-50 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 text-2xl mb-3">
                  {item.icon}
                </div>
                <div className="font-semibold text-base sm:text-lg">
                  {item.label}
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery ảnh */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-600 mb-4 text-center">
            Hình Ảnh Sóc Bay Platinum
          </h2>
          <hr className="mb-5 w-32 sm:w-50 border-[2px] border-gray-600 mx-auto" />
          <div className="flex gap-4 overflow-x-auto sm:grid sm:grid-cols-3 sm:gap-4 scrollbar-hide px-2 -mx-2">
            {gallery.map((src, idx) => (
              <div
                key={idx}
                className="min-w-[220px] sm:min-w-0 flex-shrink-0 overflow-hidden rounded-lg shadow hover:shadow-lg transition"
              >
                <img
                  src={src}
                  alt={`Sóc Bay Platinum ${idx + 1}`}
                  className="w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Nút quay lại */}
        <div className="text-center">
          <Link
            to="/tin-tuc-soc-bay"
            className="inline-block border border-black bg-gradient-to-r from-gray-400 to-gray-600 text-white py-3 px-6 sm:px-8 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition transform font-semibold text-sm sm:text-base"
          >
            Quay lại
          </Link>
        </div>
      </main>
      <FooterSugar />
    </div>
  );
};

export default SocBayPlatinum;
