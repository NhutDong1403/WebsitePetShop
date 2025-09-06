import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/RodentComponent/Header.jsx";
import FooterRodent from "../../components/RodentComponent/Footer";
import Breadcrumbs from "../../components/Breadcrumbs.jsx";
import ProductCardRodent from "../../components/RodentComponent/ProductCardRodent.jsx";

export const RodentHomePage = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const categories = [
    {
      name: "Chuột Hamster",
      img: "/images/Rodent/GamNham/hamster.jpg",
      link: "/tat-ca-gam-nham",
    },
    {
      name: "Chuột Lang",
      img: "/images/Rodent/GamNham/chuotlang.jpg",
      link: "/tat-ca-gam-nham",
    },
    {
      name: "Thỏ Kiểng",
      img: "/images/Rodent/GamNham/thokieng.jpg",
      link: "/tat-ca-gam-nham",
    },
    {
      name: "Sóc Bắc Mỹ",
      img: "/images/Rodent/GamNham/socbacmy.jpg",
      link: "/tat-ca-gam-nham",
    },
    {
      name: "Nhím Kiểng",
      img: "/images/Rodent/GamNham/nhimkieng.jpg",
      link: "/tat-ca-gam-nham",
    },
    {
      name: "Sóc Kiểng",
      img: "/images/Rodent/GamNham/sockieng.jpg",
      link: "/tat-ca-gam-nham",
    },
    {
      name: "Chuột Rat",
      img: "/images/Rodent/GamNham/rat.webp",
      link: "/tat-ca-gam-nham",
    },
    {
      name: "Chinchilla",
      img: "/images/Rodent/GamNham/chinchilla.jpeg",
      link: "/tat-ca-gam-nham",
    },
    {
      name: "Chuột Đuôi Mập",
      img: "/images/Rodent/GamNham/duoimap.jpg",
      link: "/tat-ca-gam-nham",
    },
  ];

  const newsItems = [
    {
      title: "Cách chăm sóc hamster khỏe mạnh và sạch sẽ",
      img: "/images/Rodent/GamNham/chamsoc.jpg",
      date: "2025-08-01",
      link: "/cham-soc-hamster",
    },
    {
      title: "Những giống chuột lang phổ biến ở Việt Nam",
      img: "/images/Rodent/GamNham/chuotlang1.jpg",
      date: "2025-07-20",
      link: "/giong-chuot-lang",
    },
    {
      title: "Chế độ ăn uống hợp lý cho thỏ kiểng",
      img: "/images/Rodent/GamNham/chedoan.png",
      date: "2025-07-10",
      link: "/che-do-an-cua-tho",
    },
    {
      title: "Bí quyết nuôi nhím kiểng thân thiện và dễ gần",
      img: "/images/Rodent/GamNham/biquyet.jpg",
      date: "2025-06-28",
      link: "/bi-quyet-nuoi-nhim",
    },
  ];

  const sliderRef = useRef(null);

  // Kiểm tra màn hình mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedCategories = isMobile
    ? showAll
      ? categories
      : categories.slice(0, 6)
    : categories;

  return (
    <div className="select-none">
      <Header />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/" },
            { name: "Sản phẩm khác", to: "/san-pham-gam-nham" },
            { name: "Trang chủ của gặm nhấm", to: "/san-pham-gam-nham" },
          ]}
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Danh mục */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Danh Mục Gặm Nhấm
          </h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-yellow-500" />

        <div className="flex flex-col items-center mb-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-6">
            {displayedCategories.map((cat) => (
              <Link
                key={cat.name}
                to={cat.link}
                className="text-center transition-transform duration-200 hover:scale-105"
              >
                <div className="border rounded-lg overflow-hidden bg-white shadow hover:shadow-lg">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <p className="mt-2 font-semibold text-sm">{cat.name}</p>
              </Link>
            ))}
          </div>

          {/* Nút toggle chỉ hiện trên mobile nếu có >6 danh mục */}
          {isMobile && categories.length > 6 && (
            <div className="flex justify-center mt-8 w-full">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-4 sm:px-6 py-2 sm:py-2.5 w-11/12 sm:w-auto text-sm sm:text-base border-2 border-black bg-none hover:bg-lime-800/80 hover:text-white rounded-lg font-medium transition"
              >
                {showAll
                  ? "Thu gọn danh mục gặm nhắm"
                  : "Xem thêm danh mục gặm nhắm"}
              </button>
            </div>
          )}
        </div>

        {/* Sản phẩm nổi bật */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Sản Phẩm Nổi Bật
          </h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-yellow-500" />

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
                <ProductCardRodent />
              </div>
            ))}
        </div>

        {/* Tin tức */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Tin Tức</h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-yellow-500" />

        {/* Slider tin tức */}
        <div className="relative w-full max-w-6xl mx-auto mb-5">
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide sm:overflow-x-hidden"
          >
            {newsItems.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="flex-shrink-0 w-[80%] sm:w-[calc(33.34%-1rem)] border rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-72 sm:h-60 object-cover"
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

          {/* Nút điều hướng slider desktop */}
          <button
            onClick={() => {
              const cardWidth =
                sliderRef.current.querySelector("a").offsetWidth + 16;
              sliderRef.current.scrollBy({
                left: -cardWidth,
                behavior: "smooth",
              });
            }}
            className="absolute top-1/2 -translate-y-1/2 left-5 hidden sm:block bg-white border rounded-full p-2"
          >
            <img className="w-8 h-8" src="/images/Arrow Left.gif" alt="Trái" />
          </button>
          <button
            onClick={() => {
              const cardWidth =
                sliderRef.current.querySelector("a").offsetWidth + 16;
              sliderRef.current.scrollBy({
                left: cardWidth,
                behavior: "smooth",
              });
            }}
            className="absolute top-1/2 -translate-y-1/2 right-5 hidden sm:block bg-white border rounded-full p-2"
          >
            <img className="w-8 h-8" src="/images/Arrow.gif" alt="Phải" />
          </button>
        </div>
      </div>

      <FooterRodent />
    </div>
  );
};

export default RodentHomePage;
