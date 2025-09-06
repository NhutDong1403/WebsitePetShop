import React from "react";
import { Link } from "react-router-dom";
import HeaderReptile from "../../../components/ReptileComponent/HeaderReptile";
import FooterReptile from "../../../components/ReptileComponent/FooterReptile";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const TinTucLG = () => {
  return (
    <div className="select-none">
      <HeaderReptile />
      <div className="max-w-6xl mx-auto mt-2 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-bo-sat" },
            { name: "Tin tức", to: "/san-pham-bo-sat" },
            { name: "Thông tin về Leopard Gecko", to: "#" },
          ]}
        />{" "}
      </div>
      <div
        className="bg-yellow-50 py-12 px-4"
        style={{ backgroundImage: "url('/images/bg2.jpg')" }}
      >
        <div className="max-w-5xl mx-auto bg-white border rounded-xl shadow-lg overflow-hidden">
          {/* Ảnh tiêu đề */}
          <div className="w-full aspect-w-16 aspect-h-9">
            <img
              src="/images/Reptile/bosat/leopard_gecko_header.jpg"
              alt="Thằn Lằn Da Báo"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Nội dung */}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-lime-800 mb-6">
              Thằn Lằn Da Báo – Vẻ đẹp từ thiên nhiên hoang dã
            </h1>

            <p className="mb-4 leading-relaxed text-gray-700">
              Thằn Lằn Da Báo (Leopard Gecko) là một trong những loài bò sát
              cảnh phổ biến nhất trên thế giới nhờ vẻ ngoài nổi bật với các đốm
              hoa văn giống da báo và tính cách hiền lành. Chúng là lựa chọn lý
              tưởng cho những người mới bắt đầu nuôi bò sát.
            </p>

            <h2 className="text-2xl font-semibold text-lime-700 mt-6 mb-3">
              Đặc điểm nổi bật
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Chiều dài trưởng thành khoảng 18–25 cm.</li>
              <li>Hoa văn đốm đen trên nền vàng hoặc trắng.</li>
              <li>Mắt lớn, đuôi mập dự trữ năng lượng.</li>
              <li>Tính tình hiền lành, dễ thuần hóa.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-lime-700 mt-6 mb-3">
              Môi trường sống
            </h2>
            <p className="mb-3 text-gray-700">
              Trong tự nhiên, chúng sống ở vùng bán sa mạc, khí hậu khô và ấm.
              Khi nuôi, bạn nên mô phỏng môi trường tương tự để chúng khỏe mạnh.
            </p>

            <h2 className="text-2xl font-semibold text-lime-700 mt-6 mb-3">
              Cách nuôi trong môi trường nhân tạo
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <b>Chuồng nuôi:</b> Bể kính hoặc hộp nhựa có nắp lưới thoáng
                khí.
              </li>
              <li>
                <b>Nhiệt độ:</b> Ban ngày 26-30°C, ban đêm 22-25°C, có đèn sưởi.
              </li>
              <li>
                <b>Độ ẩm:</b> 30-40%, cần hộp trú ẩm để hỗ trợ lột da.
              </li>
              <li>
                <b>Thức ăn:</b> Dế, sâu superworm, gián dubia (rắc canxi).
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-lime-700 mt-6 mb-3">
              Lưu ý chăm sóc
            </h2>
            <p className="text-gray-700">
              Luôn cung cấp nước sạch, tránh thức ăn quá to so với đầu. Vệ sinh
              chuồng định kỳ để tránh vi khuẩn và ký sinh trùng.
            </p>

            {/* Ảnh minh họa */}
            <div className="mt-8">
              <img
                src="/images/Reptile/bosat/leopard_gecko.jpg"
                alt="Thằn Lằn Da Báo"
                className="rounded-lg shadow-md w-full object-cover max-h-96"
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
      </div>
      <FooterReptile />
    </div>
  );
};

export default TinTucLG;
