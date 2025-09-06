import React from "react";
import HeaderSugar from "../../../components/SugarComponent/HeaderSugar";
import FooterSugar from "../../../components/SugarComponent/FooterSugar";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const CheDoAnUongSocBay = () => {
  const foods = [
    {
      name: "Trái cây tươi",
      desc: "Táo, nho, lê, chuối, đu đủ… giàu vitamin. Tránh cho ăn trái cây có hạt độc như hạt táo",
      img: "/images/SugarGlider/TinTuc/traicay.jpg",
    },
    {
      name: "Rau củ",
      desc: "Cà rốt, bông cải, đậu que… cung cấp chất xơ và khoáng chất. Luôn rửa sạch trước khi cho ăn",
      img: "/images/SugarGlider/TinTuc/raucu.jpg",
    },
    {
      name: "Nguồn đạm",
      desc: "Sâu khô, dế, trứng luộc hoặc thức ăn giàu protein giúp sóc bay phát triển cơ bắp và lông",
      img: "/images/SugarGlider/TinTuc/protein.jpg",
    },
    {
      name: "Thức ăn dạng viên",
      desc: "Các loại bột hoặc viên dinh dưỡng được chế biến sẵn, cân bằng vitamin và khoáng",
      img: "/images/SugarGlider/TinTuc/thucanvien.jpg",
    },
    {
      name: "Nước sạch",
      desc: "Luôn có bình nước sạch, thay mỗi ngày để tránh vi khuẩn.",
      img: "/images/SugarGlider/TinTuc/nuoc.jpg",
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
            { name: "Chế độ ăn uống cho sóc bay", to: "#" },
          ]}
        />
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-700 mb-6">
              Chế độ ăn uống cho sóc bay
            </h1>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 text-sm sm:text-base">
              Chế độ ăn uống cân bằng giúp sóc bay khỏe mạnh, năng động và sống
              thọ hơn. Dưới đây là các nhóm thức ăn khuyến nghị:
            </p>

            {/* Grid hiển thị danh sách */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {foods.map((item, index) => (
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

            {/* Nút quay lại */}
            <div className="text-center mt-8">
              <Link
                to="/san-pham-soc-bay"
                className="w-full sm:w-auto inline-block border border-black bg-gradient-to-r from-gray-200 to-gray-300 text-black py-3 px-6 sm:px-8 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition transform font-semibold text-sm sm:text-base"
              >
                Quay lại
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FooterSugar />
    </div>
  );
};

export default CheDoAnUongSocBay;
