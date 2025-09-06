import React from "react";
import { Link } from "react-router-dom";
import HeaderWing from "../../../components/WingerComponent/HeaderWing";
import FooterWing from "../../../components/WingerComponent/FooterWing";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const BiQuyetNuoiVet = () => {
  return (
    <div className="select-none">
      <HeaderWing />

      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-chim-vet" },
            { name: "Tin tức", to: "/san-pham-chim-vet" },
            {
              name: "Bí quyết nuôi vẹt khỏe mạnh và thân thiện",
              to: "#",
            },
          ]}
        />{" "}
      </div>

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-4 sm:py-6 shadow-lg">
          <div className="max-w-4xl mx-auto px-3 sm:px-4">
            <h1 className="text-xl sm:text-3xl font-bold leading-snug">
              Bí quyết nuôi vẹt khỏe mạnh và thân thiện
            </h1>
            <p className="text-xs sm:text-sm text-blue-100 mt-1">
              Ngày đăng: 01/08/2025
            </p>
          </div>
        </header>

        {/* Nội dung */}
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-6 sm:py-10">
          <article
            className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-10 max-w-4xl mx-auto animate-fadeIn"
            style={{ animation: "fadeIn 0.6s ease-out" }}
          >
            {/* Ảnh minh họa */}
            <div className="mb-6 sm:mb-8 overflow-hidden rounded-xl shadow-md">
              <img
                src="/images/Winger/ChimVet/biquyettintuc.jpg"
                alt="Vẹt cảnh"
                className="w-full transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Nội dung bài viết */}
            <div className="prose max-w-none text-gray-700">
              <p className="text-sm sm:text-base leading-relaxed">
                Nuôi vẹt không chỉ mang lại niềm vui mà còn giúp bạn có một
                người bạn đồng hành thông minh và thân thiện. Tuy nhiên, để vẹt
                luôn khỏe mạnh và sống lâu, bạn cần chú ý đến môi trường sống,
                chế độ ăn uống và cách tương tác với chúng
              </p>

              <h2 className="text-lg sm:text-2xl font-semibold text-blue-700 border-l-4 border-blue-500 pl-2 sm:pl-3 mt-6 sm:mt-8 flex items-center gap-2">
                <span>🦜</span> Lựa chọn loài vẹt phù hợp
              </h2>
              <p className="text-sm sm:text-base leading-relaxed">
                Trước khi nuôi, hãy tìm hiểu về các giống vẹt phổ biến như vẹt
                xám châu Phi, vẹt Cockatiel, vẹt Lovebird,... Mỗi loài có đặc
                điểm, nhu cầu chăm sóc và tính cách khác nhau
              </p>

              <h2 className="text-lg sm:text-2xl font-semibold text-blue-700 border-l-4 border-blue-500 pl-2 sm:pl-3 mt-6 sm:mt-8 flex items-center gap-2">
                <span>🏠</span> Chuồng nuôi và không gian sống
              </h2>
              <p className="text-sm sm:text-base leading-relaxed">
                Chuồng cần đủ rộng để vẹt bay nhảy và leo trèo. Trang bị thêm
                các thanh đậu, đồ chơi và gương để vẹt không bị buồn chán
              </p>

              <h2 className="text-lg sm:text-2xl font-semibold text-blue-700 border-l-4 border-blue-500 pl-2 sm:pl-3 mt-6 sm:mt-8 flex items-center gap-2">
                <span>🥗</span> Chế độ dinh dưỡng
              </h2>
              <p className="text-sm sm:text-base leading-relaxed">
                Thức ăn chính của vẹt bao gồm hạt ngũ cốc, trái cây tươi và rau
                xanh. Tránh cho vẹt ăn chocolate, cà phê hay thức ăn mặn vì có
                thể gây hại cho sức khỏe
              </p>

              <h2 className="text-lg sm:text-2xl font-semibold text-blue-700 border-l-4 border-blue-500 pl-2 sm:pl-3 mt-6 sm:mt-8 flex items-center gap-2">
                <span>🗣️</span> Giao tiếp và huấn luyện
              </h2>
              <p className="text-sm sm:text-base leading-relaxed">
                Dành thời gian nói chuyện, huấn luyện và vuốt ve nhẹ nhàng sẽ
                giúp vẹt trở nên thân thiện hơn. Một số loài còn có thể bắt
                chước tiếng người nếu được luyện tập thường xuyên
              </p>

              <p className="text-sm sm:text-base leading-relaxed mt-4 sm:mt-6 italic">
                Chăm sóc vẹt đúng cách không chỉ giúp chúng khỏe mạnh mà còn gắn
                bó hơn với bạn. Hy vọng những bí quyết trên sẽ giúp bạn nuôi vẹt
                thành công!
              </p>
            </div>

            {/* Nút quay lại */}
            <div className="text-center">
              <Link
                to="/san-pham-chim-vet"
                className="inline-block border-2 border-black bg-gradient-to-r from-blue-200 to-blue-300 text-black py-2 px-6 sm:py-3 sm:px-8 mt-5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition transform font-semibold text-sm sm:text-base"
              >
                Quay lại
              </Link>
            </div>
          </article>
        </main>
      </div>
      <FooterWing />
    </div>
  );
};

export default BiQuyetNuoiVet;
