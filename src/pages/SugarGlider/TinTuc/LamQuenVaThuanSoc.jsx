import React from "react";
import HeaderSugar from "../../../components/SugarComponent/HeaderSugar";
import FooterSugar from "../../../components/SugarComponent/FooterSugar";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { Link } from "react-router-dom";

export const LamQuenVaThuanSoc = () => {
  return (
    <div className="select-none">
      <HeaderSugar />

      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-soc-bay" },
            { name: "Tin tức", to: "/san-pham-soc-bay" },
            { name: "Làm Quen & Thuần Sóc", to: "#" },
          ]}
        />

        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          {/* Banner */}
          <header className="relative bg-gray-800 text-white py-12 shadow-lg">
            <div className="absolute inset-0 bg-[url('/images/bg-soc.jpg')] bg-cover bg-center opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-800/70"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4">
              <h1 className="text-2xl sm:text-3xl font-bold">
                Làm quen và thuần sóc bay
              </h1>
              <p className="text-xs sm:text-sm text-gray-200 mt-1">
                Ngày đăng: 20/07/2025
              </p>
            </div>
          </header>

          {/* Nội dung */}
          <main className="py-8 sm:py-10">
            <article
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 lg:p-16 max-w-6xl mx-auto animate-fadeIn"
              style={{ animation: "fadeIn 0.6s ease-out" }}
            >
              {/* Mô tả mở đầu */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 sm:p-5 mb-6 sm:mb-8 rounded-lg shadow-sm">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  🐿️ <span className="font-semibold">Sóc bay</span> là loài thú
                  cưng thông minh, tình cảm và có thể gắn bó lâu dài với chủ nếu
                  được làm quen đúng cách. Giai đoạn đầu khi mới mang về là thời
                  điểm quan trọng nhất để xây dựng sự tin tưởng.
                </p>
              </div>

              {/* Mục 1 */}
              <div className="mb-8 p-5 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-lg sm:text-xl font-bold text-gray-600 flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 flex items-center justify-center bg-blue-100 text-black rounded-full text-sm font-bold">
                    1
                  </span>
                  Chuẩn bị môi trường yên tĩnh
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Hãy đặt lồng sóc ở nơi ít tiếng ồn, tránh quá nhiều người qua
                  lại. Sóc mới về thường nhút nhát, cần thời gian quan sát và
                  làm quen với mùi, giọng nói của bạn.
                </p>
              </div>

              {/* Mục 2 */}
              <div className="mb-8 p-5 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-lg sm:text-xl font-bold text-gray-600 flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 flex items-center justify-center bg-blue-100 text-black rounded-full text-sm font-bold">
                    2
                  </span>
                  Sử dụng thức ăn yêu thích
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Cho sóc ăn từ tay bằng các món ưa thích như hạt hướng dương,
                  trái cây ngọt. Ban đầu có thể đặt gần bạn, sau đó mới dần đưa
                  sát hơn để chúng quen tay.
                </p>
              </div>

              {/* Mục 3 */}
              <div className="mb-8 p-5 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-lg sm:text-xl font-bold text-gray-600 flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 flex items-center justify-center bg-blue-100 text-black rounded-full text-sm font-bold">
                    3
                  </span>
                  Tương tác nhẹ nhàng
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Trò chuyện bằng giọng nhẹ nhàng và di chuyển chậm rãi khi lại
                  gần lồng. Không nên chạm hoặc bắt sóc đột ngột, để chúng chủ
                  động tiếp cận bạn.
                </p>
              </div>

              {/* Lời kết */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 mt-8 rounded-lg shadow-sm italic text-center text-sm sm:text-base leading-relaxed">
                ❤️ Kiên nhẫn và yêu thương là chìa khóa để sóc bay trở thành
                người bạn đồng hành thân thiết
              </div>

              {/* Nút quay lại */}
              <div className="text-center mt-6 sm:mt-8">
                <Link
                  to="/san-pham-soc-bay"
                  className="w-full sm:w-auto inline-block border border-black 
                 bg-gradient-to-r from-gray-300 to-gray-400 text-black 
                 py-3 px-6 sm:px-8 rounded-full shadow-md 
                 hover:shadow-lg hover:scale-105 transition transform 
                 font-semibold text-sm sm:text-base"
                >
                  Quay lại
                </Link>
              </div>
            </article>
          </main>
        </div>
      </div>

      <FooterSugar />
    </div>
  );
};

export default LamQuenVaThuanSoc;
