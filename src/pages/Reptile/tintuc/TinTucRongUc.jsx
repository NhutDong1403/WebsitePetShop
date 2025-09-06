import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderReptile from "../../../components/ReptileComponent/HeaderReptile";
import FooterReptile from "../../../components/ReptileComponent/FooterReptile";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const TinTucRongUc = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="select-none">
      <HeaderReptile />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-bo-sat" },
            { name: "Tin tức", to: "/san-pham-bo-sat" },
            { name: "Thông tin về Rồng Úc", to: "#" },
          ]}
        />
      </div>
      <div
        className="bg-lime-50 py-12 px-4"
        style={{
          backgroundImage: "url('/images/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border">
          {/* Hình ảnh tiêu đề */}
          <div className="w-full aspect-w-16 aspect-h-9">
            <img
              src="/images/Reptile/bosat/beardeddragon_header.jpeg"
              alt="Rồng Úc"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Nội dung */}
          <div className="p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lime-800 mb-4 sm:mb-6">
              Rồng Úc (Bearded Dragon) – Người bạn bò sát thân thiện
            </h1>

            <p className="mb-3 sm:mb-4 leading-relaxed text-gray-700 text-sm sm:text-base">
              Rồng Úc, hay Bearded Dragon, là một trong những loài bò sát được
              yêu thích nhất bởi tính cách hiền lành, dễ nuôi và dễ chăm sóc.
              Chúng có khả năng giao tiếp bằng ngôn ngữ cơ thể đặc trưng và rất
              thân thiện với con người.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-lime-700 mt-4 sm:mt-6 mb-2 sm:mb-3">
              Đặc điểm nổi bật
            </h2>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Chiều dài trưởng thành khoảng 40–60 cm.</li>
              <li>Màu sắc đa dạng: vàng, cam, đỏ, nâu.</li>
              <li>Tính cách hiền, ít cắn, dễ thuần.</li>
              <li>Thích phơi nắng và leo trèo.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-lime-700 mt-4 sm:mt-6 mb-2 sm:mb-3">
              Cách nuôi Rồng Úc
            </h2>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
              <li>
                <b>Chuồng nuôi:</b> Bể kính ít nhất 90x45x45cm, có nắp thoáng
                khí.
              </li>
              <li>
                <b>Nhiệt độ:</b> Ban ngày 35-40°C (vùng basking), ban đêm
                24-26°C.
              </li>
              <li>
                <b>Đèn UVB:</b> Giúp tổng hợp vitamin D3, hấp thụ canxi.
              </li>
              <li>
                <b>Thức ăn:</b> Dế, sâu, rau củ quả tươi.
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-lime-700 mt-4 sm:mt-6 mb-2 sm:mb-3">
              Lưu ý khi chăm sóc
            </h2>
            <p className="text-gray-700 text-sm sm:text-base">
              Luôn giữ vệ sinh chuồng nuôi, thay nước sạch mỗi ngày. Không cho
              ăn thức ăn có độc tố hoặc quá chua. Đèn UVB nên thay mỗi 6 tháng
              để đảm bảo hiệu quả.
            </p>

            {/* Ảnh minh họa */}
            <div className="mt-4 sm:mt-6">
              <img
                src="/images/Reptile/bosat/beardeddragon.jpg"
                alt="Rồng Úc cưng"
                className="rounded-lg shadow-md w-full object-cover h-48 sm:h-64 md:h-80"
              />
            </div>

            {/* Nút quay lại */}
            <div className="text-center mt-4 sm:mt-6">
              <Link
                to="/san-pham-bo-sat"
                className="inline-block border border-black bg-gradient-to-r from-lime-400 to-lime-600 text-white py-2 sm:py-3 px-6 sm:px-8 mt-2 sm:mt-5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition transform font-semibold text-sm sm:text-base"
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

export default TinTucRongUc;
