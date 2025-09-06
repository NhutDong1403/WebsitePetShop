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

const SocBayLeucy = () => {
  const gallery = [
    "/images/SugarGlider/socbay/leucyy.jpg",
    "/images/SugarGlider/socbay/leucy1.jpg",
    "/images/SugarGlider/socbay/leucy2.jpg",
  ];

  const quickInfo = [
    {
      icon: <FaPalette className="text-gray-500 text-xl" />,
      label: "Màu lông",
      value: "Trắng tinh khiết toàn thân, mắt đen",
    },
    {
      icon: <FaSmile className="text-gray-500 text-xl" />,
      label: "Tính cách",
      value: "Hiền lành, quấn chủ, khá nhút nhát lúc đầu",
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
            { name: "Sóc bay Leucy", to: "/soc-bay-leucy" },
          ]}
        />

        {/* Ảnh cover với overlay */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg mb-10 sm:mb-12">
          <img
            src="/images/SugarGlider/socbay/leucy1.jpg"
            alt="Sóc Bay Leucy"
            className="w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
              Sóc Bay (Leucy)
            </h1>
          </div>
        </div>

        {/* Mô tả chi tiết */}
        <section className="mb-12 space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
          <p>
            <b>Sóc Bay Leucistic</b>, hay còn gọi là "<b>Leucy</b>", sở hữu bộ
            lông trắng tinh khiết từ đầu đến đuôi, kết hợp đôi mắt đen tròn long
            lanh. Đây là một trong những biến thể hiếm và được giới chơi sóc bay
            cực kỳ săn đón.
          </p>
          <p>
            Chúng có tính cách <b>hiền lành, dễ gần và rất quấn chủ</b>, nhưng
            thường hơi nhút nhát trong thời gian đầu làm quen. Với sự chăm sóc
            và tương tác thường xuyên, <b>Leucy</b> sẽ trở nên thân thiện và gần
            gũi hơn.
          </p>
          <p>
            Nhờ vẻ ngoài thanh khiết và độc đáo, "<b>Leucy</b>" không chỉ là một
            thú cưng đáng yêu mà còn là niềm tự hào của người nuôi.
          </p>
        </section>

        {/* Bảng thông tin nhanh */}
        <div className="bg-white border border-black rounded-xl shadow-lg p-6 sm:p-8 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-600 mb-3 text-center">
            Thông Tin Nhanh Về Sóc Bay (Leucy)
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
            Hình Ảnh Sóc Bay Leucy
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
                  alt={`Sóc Bay Leucy ${idx + 1}`}
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

export default SocBayLeucy;
