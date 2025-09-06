import React, { useRef } from "react";
import { Link } from "react-router-dom";
import HeaderWing from "../../components/WingerComponent/HeaderWing";
import FooterWing from "../../components/WingerComponent/FooterWing";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductCardWinger from "../../components/WingerComponent/ProductCardWinger";

export const WingerHomePage = () => {
  const newsItems = [
    {
      title: "Bí quyết nuôi vẹt khỏe mạnh và thân thiện",
      img: "/images/Winger/ChimVet/biquyet.jpg",
      date: "2025-08-01",
      link: "/bi-quyet-cham-chim-vet",
    },
    {
      title: "Những giống vẹt phổ biến tại Việt Nam",
      img: "/images/Winger/ChimVet/giongvet.jpg",
      date: "2025-07-20",
      link: "/giong-vet-pho-bien",
    },
    {
      title: "Phụ kiện cần thiết cho vẹt cảnh",
      img: "/images/Winger/ChimVet/phukien.png",
      date: "2025-07-10",
      link: "/phu-kien-can-thiet",
    },
    {
      title: "Chế độ ăn uống phù hợp cho vẹt",
      img: "/images/Winger/ChimVet/chedoan.jpg",
      date: "2025-06-28",
      link: "/che-do-an",
    },
  ];

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -sliderRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: sliderRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="select-none">
      <HeaderWing />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/" },
            { name: "Sản phẩm khác", to: "/san-pham-chim-vet" },
            { name: "Trang chủ của chim vẹt", to: "/san-pham-chim-vet" },
          ]}
        />{" "}
      </div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Tất cả dòng chim vẹt có tại PawShop
          </h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-blue-700" />

        <div
          className="flex gap-4 overflow-x-auto scrollbar-hide 
    lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible
  "
        >
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className=" flex-shrink-0 
          w-[70%] sm:w-[45%] md:w-[30%] 
          lg:w-auto  /* bỏ width khi vào grid */
        "
              >
                <ProductCardWinger />
              </div>
            ))}
        </div>

        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Phụ Kiện Cho Chim Vẹt
          </h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-blue-700" />

        <div
          className="flex gap-4 overflow-x-auto scrollbar-hide 
    lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible
  "
        >
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className=" flex-shrink-0 
          w-[70%] sm:w-[45%] md:w-[30%] 
          lg:w-auto  /* bỏ width khi vào grid */
        "
              >
                <ProductCardWinger />
              </div>
            ))}
        </div>

        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Tin Tức</h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-blue-700" />

        <div className="relative group w-full max-w-6xl mx-auto mb-5">
          {/* Slider wrapper */}
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {newsItems.map((item, i) => (
              <Link
                to={item.link}
                key={i}
                className="flex-shrink-0 w-[90%] sm:w-[48%] lg:w-[calc(33.34%-1rem)] border rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 sm:h-56 lg:h-60 object-cover"
                />
                <div className="p-3 border-t">
                  <h3 className="font-semibold text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Ngày đăng: {item.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Nút trái */}
          <button
            onClick={() => {
              const cardWidth =
                sliderRef.current.querySelector("div").offsetWidth + 16;
              sliderRef.current.scrollBy({
                left: -cardWidth,
                behavior: "smooth",
              });
            }}
            className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-5 bg-white border border-dashed border-red-500 rounded-full p-1 sm:p-2 opacity-0 group-hover:opacity-100 transition"
          >
            <img
              className="w-6 sm:w-10 h-6 sm:h-10"
              src="/images/Arrow Left.gif"
              alt="Trái"
            />
          </button>

          {/* Nút phải */}
          <button
            onClick={() => {
              const cardWidth =
                sliderRef.current.querySelector("div").offsetWidth + 16;
              sliderRef.current.scrollBy({
                left: cardWidth,
                behavior: "smooth",
              });
            }}
            className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-5 bg-white border border-dashed border-red-500 rounded-full p-1 sm:p-2 opacity-0 group-hover:opacity-100 transition"
          >
            <img
              className="w-6 sm:w-10 h-6 sm:h-10"
              src="/images/Arrow.gif"
              alt="Phải"
            />
          </button>
        </div>
      </div>
      <FooterWing />
    </div>
  );
};

export default WingerHomePage;
