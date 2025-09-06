import React from "react";
import { Link } from "react-router-dom";
import HeaderWing from "../../../components/WingerComponent/HeaderWing";
import FooterWing from "../../../components/WingerComponent/FooterWing";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const PhuKienCanThiet = () => {
  const accessories = [
    {
      name: "Lồng nuôi rộng rãi",
      desc: "Chọn lồng có kích thước phù hợp với loài vẹt, đảm bảo đủ không gian để bay nhảy và leo trèo",
      img: "/images/Winger/ChimVet/longnuoi.jpg",
    },
    {
      name: "Cầu đậu & thang leo",
      desc: "Giúp vẹt vận động, rèn luyện cơ bắp và giảm stress khi ở trong lồng",
      img: "/images/Winger/ChimVet/cau-dau.jpg",
    },
    {
      name: "Đồ chơi gặm",
      desc: "Giúp vẹt mài mỏ, tránh cắn phá đồ đạc và kích thích trí tuệ",
      img: "/images/Winger/ChimVet/do-choi.jpg",
    },
    {
      name: "Bát ăn & bình nước",
      desc: "Nên dùng chất liệu an toàn, dễ vệ sinh và cố định chắc chắn trong lồng",
      img: "/images/Winger/ChimVet/bat-an.webp",
    },
  ];

  return (
    <div className="select-none">
      <HeaderWing />

      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-chim-vet" },
            { name: "Tin tức", to: "/san-pham-chim-vet" },
            {
              name: "Phụ kiện cần thiết khi nuôi vẹt",
              to: "#",
            },
          ]}
        />{" "}
      </div>

      <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-8 sm:py-10 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-4 sm:mb-6">
            Phụ kiện cần thiết khi nuôi vẹt
          </h1>
          <p className="text-gray-600 text-center max-w-2xl sm:max-w-3xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base">
            Chuẩn bị đầy đủ phụ kiện giúp vẹt khỏe mạnh, vui vẻ và gắn bó hơn
            với bạn. Dưới đây là những món đồ bạn nên có trước khi bắt đầu nuôi:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {accessories.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-105"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full aspect-[4/3] object-cover rounded-xl"
                />

                <div className="p-4 sm:p-5">
                  <h2 className="text-lg sm:text-xl font-semibold text-blue-600">
                    {item.name}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm lg:text-base text-gray-700">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/san-pham-chim-vet"
            className="inline-block border-2 border-black bg-gradient-to-r from-blue-200 to-blue-300 
              text-black py-2 sm:py-3 px-6 sm:px-8 mt-6 rounded-full shadow-md 
              hover:shadow-lg hover:scale-105 transition transform font-semibold text-sm sm:text-base"
          >
            Quay lại
          </Link>
        </div>
      </div>
      <FooterWing />
    </div>
  );
};

export default PhuKienCanThiet;
