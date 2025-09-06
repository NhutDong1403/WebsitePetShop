import React from "react";
import { Link } from "react-router-dom";
import HeaderReptile from "../../../components/ReptileComponent/HeaderReptile";
import FooterReptile from "../../../components/ReptileComponent/FooterReptile";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const TinTucIguana = () => {
  return (
    <div className="select-none">
      <HeaderReptile />
      <div className="max-w-6xl mx-auto mt-2 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-bo-sat" },
            { name: "Tin tức", to: "/san-pham-bo-sat" },
            { name: "Thông tin về Rồng Nam Mỹ", to: "#" },
          ]}
        />{" "}
      </div>
      <div
        className="relative min-h-screen px-4 py-12 bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-white/40"
        style={{ backgroundImage: "url('/images/bg1.jpg')" }}
      >
        {/* Nội dung */}
        <div className="relative z-10 max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-8 border">
          {/* Tiêu đề */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lime-700 text-center mb-6">
            Iguana – Thông Tin & Cách Nuôi 🦎
          </h1>

          {/* Hình ảnh chính */}
          <img
            src="/images/iguana-main.jpg"
            alt="Iguana"
            className="w-full h-64 sm:h-72 md:h-96 border-2 object-cover rounded-lg shadow-md mb-8"
          />

          {/* Giới thiệu */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-lime-600 mb-3">
              Giới Thiệu
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Iguana (thường gọi là Rồng Nam Mỹ) là một loài bò sát phổ biến
              trong thú chơi pet. Chúng có kích thước lớn khi trưởng thành, màu
              sắc bắt mắt và tính cách hiền lành nếu được nuôi dưỡng đúng cách.
            </p>
          </section>

          {/* Đặc điểm */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-lime-600 mb-3">
              Đặc Điểm Nổi Bật
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Kích thước trưởng thành: 1.2 – 1.7m (bao gồm đuôi).</li>
              <li>Tuổi thọ trung bình: 10 – 15 năm.</li>
              <li>Thân thiện nếu được chăm sóc từ nhỏ.</li>
              <li>Ăn chay, chủ yếu là rau xanh và trái cây.</li>
            </ul>
          </section>

          {/* Cách nuôi */}
          <section>
            <h2 className="text-2xl font-semibold text-lime-600 mb-3">
              Cách Nuôi Iguana
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Chuồng nuôi:</strong> Cần không gian rộng, thoáng và có
                ánh sáng tự nhiên. Sử dụng đèn UVB để hỗ trợ tổng hợp vitamin
                D3.
              </p>
              <p>
                <strong>Nhiệt độ & độ ẩm:</strong> Duy trì nhiệt độ 27–32°C ban
                ngày và độ ẩm khoảng 70%.
              </p>
              <p>
                <strong>Chế độ ăn:</strong> 80% rau xanh (rau muống, cải xoăn,
                xà lách romaine), 20% trái cây (đu đủ, xoài, dâu tây).
              </p>
              <p>
                <strong>Tắm & vệ sinh:</strong> Tắm cho iguana 2–3 lần/tuần để
                giữ ẩm và sạch sẽ.
              </p>
            </div>
          </section>

          {/* Ảnh minh họa thêm */}
          <div className="flex gap-4 overflow-x-auto scrollbar-hide mt-8">
            <img
              src="/images/iguana-1.jpg"
              alt="Iguana xanh"
              className="flex-shrink-0 w-64 h-48 sm:w-72 sm:h-56 md:w-80 md:h-64 border object-cover rounded-lg shadow"
            />
            <img
              src="/images/iguana-2.jpg"
              alt="Iguana ăn"
              className="flex-shrink-0 w-64 h-48 sm:w-72 sm:h-56 md:w-80 md:h-64 border object-cover rounded-lg shadow"
            />
            <img
              src="/images/iguanareview.jpg"
              alt="Iguana ăn"
              className="flex-shrink-0 w-60 h-48 sm:w-72 sm:h-56 md:w-80 md:h-64 border object-cover rounded-lg shadow"
            />
          </div>

          {/* Nút quay lại */}
          <div className="text-center">
            <Link
              to="/san-pham-bo-sat"
              className="inline-block border border-black bg-gradient-to-r from-lime-400 to-lime-600 text-white py-3 px-8 mt-5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition transform font-semibold"
            >
              Quay lại
            </Link>
          </div>
        </div>
      </div>
      <FooterReptile />
    </div>
  );
};

export default TinTucIguana;
