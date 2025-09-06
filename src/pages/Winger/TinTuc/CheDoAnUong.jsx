import React from "react";
import { Link } from "react-router-dom";
import HeaderWing from "../../../components/WingerComponent/HeaderWing";
import FooterWing from "../../../components/WingerComponent/FooterWing";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const CheDoAnUong = () => {
  const foods = [
    {
      title: "Hạt và ngũ cốc",
      desc: "Nguồn thức ăn chính cho nhiều loài vẹt, cung cấp năng lượng và chất dinh dưỡng cần thiết. Nên chọn hỗn hợp hạt dành riêng cho vẹt",
      img: "/images/Winger/ChimVet/hat-ngu-coc.jpg",
    },
    {
      title: "Rau củ quả tươi",
      desc: "Bổ sung vitamin, khoáng chất và chất xơ. Các loại như cà rốt, bông cải xanh, táo, cam, ớt chuông đều tốt cho vẹt",
      img: "/images/Winger/ChimVet/rau-cu-qua.jpg",
    },
    {
      title: "Thức ăn viên (Pellet)",
      desc: "Cung cấp chế độ dinh dưỡng cân đối, dễ bảo quản và hạn chế lựa chọn thức ăn không tốt",
      img: "/images/Winger/ChimVet/pellet.jpg",
    },
    {
      title: "Thực phẩm bổ sung",
      desc: "Khoáng, canxi, vitamin dạng bột hoặc thanh liếm giúp hỗ trợ sức khỏe xương và lông",
      img: "/images/Winger/ChimVet/bo-sung.jpg",
    },
    {
      title: "Thực phẩm cần tránh",
      desc: "Không cho vẹt ăn socola, cafein, bơ, hành, tỏi, rượu và các loại thực phẩm nhiều muối, đường",
      img: "/images/Winger/ChimVet/canh-bao.jpg",
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
              name: "Chế độ ăn uống cho vẹt",
              to: "#",
            },
          ]}
        />{" "}
      </div>

      <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-6 xs:py-7 sm:py-10 px-2 xs:px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl xs:text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-3 xs:mb-4 sm:mb-6">
            Chế độ ăn uống cho vẹt
          </h1>
          <p className="text-gray-600 text-center max-w-xl xs:max-w-2xl sm:max-w-3xl mx-auto mb-6 xs:mb-8 sm:mb-10 text-xs xs:text-sm sm:text-base">
            Một chế độ ăn uống hợp lý sẽ giúp vẹt của bạn khỏe mạnh, hoạt bát và
            có bộ lông óng mượt. Hãy kết hợp đa dạng các nhóm thực phẩm sau đây:
          </p>

          {/* Grid responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-8">
            {foods.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-105"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover"
                />

                <div className="p-3 xs:p-4 sm:p-5">
                  <h2 className="text-xl text-center xs:text-lg sm:text-xl font-semibold text-blue-600">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-xs xs:text-sm lg:text-base text-gray-700">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nút quay lại */}
        <div className="text-center">
          <Link
            to="/san-pham-chim-vet"
            className="inline-block border-2 border-black bg-gradient-to-r from-blue-200 to-blue-300 
              text-black py-2 xs:py-2.5 sm:py-3 px-5 xs:px-6 sm:px-8 mt-6 rounded-full shadow-md 
              hover:shadow-lg hover:scale-105 transition transform font-semibold text-xs xs:text-sm sm:text-base"
          >
            Quay lại
          </Link>
        </div>
      </div>
      <FooterWing />
    </div>
  );
};

export default CheDoAnUong;
