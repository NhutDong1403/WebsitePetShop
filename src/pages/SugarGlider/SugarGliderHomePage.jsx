import React, { useRef } from "react";
import { Link } from "react-router-dom";
import HeaderSugar from "../../components/SugarComponent/HeaderSugar";
import FooterSugar from "../../components/SugarComponent/FooterSugar";
import ProductCardSugar from "../../components/SugarComponent/ProductCardSugar";
import Breadcrumbs from "../../components/Breadcrumbs";

export const SugarGliderHomePage = () => {
  const categories = [
    {
      name: "Sóc Bay (Normal)",
      img: "/images/SugarGlider/socbay/normal.jpg",
      link: "/tat-ca-soc-bay",
    },
    {
      name: "Sóc Bay (White Face)",
      img: "/images/SugarGlider/socbay/whiteface.jpg",
      link: "/tat-ca-soc-bay",
    },
    {
      name: "Sóc Bay (Platinum)",
      img: "/images/SugarGlider/socbay/platinum.jpg",
      link: "/tat-ca-soc-bay",
    },
    {
      name: "Sóc Bay (Leucy)",
      img: "/images/SugarGlider/socbay/leucy.jpg",
      link: "/tat-ca-soc-bay",
    },
    {
      name: "Sóc Bay (Creamino)",
      img: "/images/SugarGlider/socbay/creamino.jpg",
      link: "/tat-ca-soc-bay",
    },
    {
      name: "Sóc Bay (Mosaic)",
      img: "/images/SugarGlider/socbay/mosaic.jpg",
      link: "/tat-ca-soc-bay",
    },
  ];

  const newsItems = [
    {
      title: "Bí quyết chăm sóc sóc bay khỏe mạnh",
      img: "/images/SugarGlider/socbay/news1.jpg",
      date: "2025-08-01",
      link: "/bi-quyet-cham-soc",
    },
    {
      title: "Những giống sóc bay phổ biến tại Việt Nam",
      img: "/images/SugarGlider/socbay/news2.jpg",
      date: "2025-07-20",
      link: "/tin-tuc-soc-bay",
    },
    {
      title: "Phụ kiện cần thiết cho sóc bay",
      img: "/images/SugarGlider/socbay/news3.jpg",
      date: "2025-07-10",
      link: "/tin-tuc-phu-kien-cho-soc-bay",
    },
    {
      title: "Chế độ ăn uống phù hợp cho sóc bay",
      img: "/images/SugarGlider/socbay/news4.jpg",
      date: "2025-06-28",
      link: "/tin-tuc-che-do-an-uong",
    },
    {
      title: "Cách làm quen và thuần sóc bay mới",
      img: "/images/SugarGlider/socbay/news5.jpg",
      date: "2025-06-15",
      link: "/tin-tuc-thuan-soc",
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
      <HeaderSugar />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/" },
            { name: "Sản phẩm khác", to: "/san-pham-soc-bay" },
            { name: "Trang chủ của sóc bay", to: "/san-pham-soc-bay" },
          ]}
        />{" "}
      </div>
      <div className="container mx-auto p-4">
        {/* Tiêu đề */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Danh Mục Sóc Bay
          </h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-gray-800" />

        {/* Grid danh mục */}
        <div
          className="flex gap-4 overflow-x-auto scrollbar-hide
             lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible"
        >
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[70%] sm:w-[45%] md:w-[30%] 
                 lg:w-full lg:flex-shrink lg:min-w-0" // ✅ fix
              >
                <ProductCardSugar />
              </div>
            ))}
        </div>

        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Phụ Kiện Cho Sóc Bay
          </h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-gray-800" />

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
                <ProductCardSugar />
              </div>
            ))}
        </div>

        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Tin Tức</h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-gray-800" />

        <div className="relative w-full max-w-6xl mx-auto mb-5">
          {/* Slider wrapper */}
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
          >
            {newsItems.map((item, i) => (
              <Link
                to={item.link}
                key={i}
                className="flex-shrink-0 w-[80%] sm:w-[48%] md:w-[32%] lg:w-[32%] border rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow snap-start"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-60 object-cover max-w-full"
                />

                <div className="p-3 border-t">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">
                    Ngày đăng: {item.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Nút trái - chỉ hiện trên tablet/desktop */}
          <button
            onClick={() => {
              const cardWidth =
                sliderRef.current.querySelector("div").offsetWidth + 16;
              sliderRef.current.scrollBy({
                left: -cardWidth,
                behavior: "smooth",
              });
            }}
            className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-5 bg-white border border-dashed border-red-500 rounded-full p-2 opacity-80 hover:opacity-100 transition"
          >
            <img
              className="w-10 h-10"
              src="/images/Arrow Left.gif"
              alt="Trái"
            />
          </button>

          {/* Nút phải - chỉ hiện trên tablet/desktop */}
          <button
            onClick={() => {
              const cardWidth =
                sliderRef.current.querySelector("div").offsetWidth + 16;
              sliderRef.current.scrollBy({
                left: cardWidth,
                behavior: "smooth",
              });
            }}
            className="hidden sm:flex absolute top-1/2 -translate-y-1/2 right-5 bg-white border border-dashed border-red-500 rounded-full p-2 opacity-80 hover:opacity-100 transition"
          >
            <img className="w-10 h-10" src="/images/Arrow.gif" alt="Phải" />
          </button>
        </div>
      </div>
      <FooterSugar />
    </div>
  );
};

export default SugarGliderHomePage;
