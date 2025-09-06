import React, { useState, useRef, useEffect } from "react";
import HeaderReptile from "../../components/ReptileComponent/HeaderReptile";
import FooterReptile from "../../components/ReptileComponent/FooterReptile";
import ProductCardReptile from "../../components/ReptileComponent/ProductCardReptile";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";

const categories = [
  {
    name: "Ball Python (Trăn Bóng)",
    img: "/images/Reptile/bosat/ballpython.jpeg",
    link: "/danh-muc-tran",
  },
  {
    name: "King Snake (Rắn Vua)",
    img: "/images/Reptile/bosat/kingsnake.jpg",
    link: "/danh-muc-ran",
  },
  {
    name: "Corn Snake (Rắn Ngô)",
    img: "/images/Reptile/bosat/cornsnake.jpeg",
    link: "/danh-muc-ran",
  },
  {
    name: "Bearded Dragon (Rồng Úc)",
    img: "/images/Reptile/bosat/beardeddragon.jpg",
    link: "/danh-muc-rong",
  },
  {
    name: "Crested Gecko (Thằn Lằn Lông Mi)",
    img: "/images/Reptile/bosat/crestedgecko.jpg",
    link: "/danh-muc-than-lan",
  },
  {
    name: "Leopard Gecko (Thằn Lằn Da Báo)",
    img: "/images/Reptile/bosat/leopardgecko.jpg",
    link: "/danh-muc-than-lan",
  },
  {
    name: "Rùa cạn",
    img: "/images/Reptile/bosat/sulcata.jpg",
    link: "/danh-muc-rua",
  },
  {
    name: "Rùa Nước",
    img: "/images/Reptile/bosat/ruacasau.jpg",
    link: "/danh-muc-rua",
  },
  {
    name: "Lưỡng Cư",
    img: "/images/Reptile/bosat/surinam.jpg",
    link: "/danh-muc-luong-cu",
  },
  {
    name: "Chân Khớp",
    img: "/images/Reptile/bosat/cuonchieu.jpg",
    link: "/danh-muc-chan-khop",
  },
  {
    name: "Bull Snake (Rắn Bull)",
    img: "/images/Reptile/bosat/bullsnake.jpg",
    link: "/danh-muc-ran",
  },
  {
    name: "Tree Python (Trăn Cây)",
    img: "/images/Reptile/bosat/treepython.jpg",
    link: "/danh-muc-tran",
  },
  {
    name: "Sand Boa (Trăn Cát)",
    img: "/images/Reptile/bosat/sandboa.jpg",
    link: "/danh-muc-tran",
  },
  {
    name: "Hognose Snake (Rắn Mũi Heo)",
    img: "/images/Reptile/bosat/hognose.jpg",
    link: "/danh-muc-ran",
  },
  {
    name: "Milk Snake (Rắn Sữa)",
    img: "/images/Reptile/bosat/milksnake.jpg",
    link: "/danh-muc-ran",
  },
  {
    name: "Rat Snake (Rắn Chuột)",
    img: "/images/Reptile/bosat/ratsnake.jpg",
    link: "/danh-muc-ran",
  },
  {
    name: "Chameleon (Tắc Kè Hoa)",
    img: "/images/Reptile/bosat/chameleon.jpg",
    link: "/danh-muc-tac-ke",
  },
  {
    name: "Tegu (Thằn Lằn Tegu)",
    img: "/images/Reptile/bosat/tegu.jpg",
    link: "/danh-muc-than-lan",
  },
  {
    name: "Iguana (Rồng Nam Mỹ)",
    img: "/images/Reptile/bosat/iguana.jpg",
    link: "/danh-muc-rong",
  },
  {
    name: "Savannah (Kỳ Đà Savannah)",
    img: "/images/Reptile/bosat/savan.jpg",
    link: "/danh-muc-ky-da",
  },
  {
    name: "African Fat-Tail Gecko (Thằn Lằn Đuôi Mập)",
    img: "/images/Reptile/bosat/fattail.jpg",
    link: "/danh-muc-than-lan",
  },
  {
    name: "Tokay Gecko (Tắc Kè)",
    img: "/images/Reptile/bosat/tokay.jpg",
    link: "/danh-muc-tac-ke",
  },
  {
    name: "Knob-Tail Gecko (Thằn Lằn Mắt Ếch)",
    img: "/images/Reptile/bosat/knob.jpg",
    link: "/danh-muc-than-lan",
  },
  {
    name: "Giant Day Gecko",
    img: "/images/Reptile/bosat/daygecko.jpg",
    link: "/danh-muc-than-lan",
  },
];

const ReptileHomePage = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let displayedCategories = [];
  if (showAll) {
    displayedCategories = categories;
  } else {
    displayedCategories = isMobile
      ? categories.slice(0, 6)
      : categories.slice(0, 12);
  }

  const sliderRef = useRef(null);

  const newsItems = [
    {
      img: "/images/Reptile/bosat/iguana.jpg",
      title: "Rồng Nam Mỹ – Mẹo chăm sóc",
      date: "15/October/2024",
      link: "/tin-tuc-iguana",
    },
    {
      img: "/images/Reptile/bosat/beardeddragon.jpg",
      title: "Rồng Úc – Kỹ thuật nuôi",
      date: "16/October/2024",
      link: "/tin-tuc-rong-uc",
    },
    {
      img: "/images/Reptile/bosat/treepython.jpg",
      title: "Trăn Cây – Môi trường sống lý tưởng",
      date: "17/October/2024",
      link: "/tin-tuc-tran-cay",
    },
    {
      img: "/images/Reptile/bosat/leopardgecko.jpg",
      title: "Leopard Gecko – Bí quyết chăm sóc",
      date: "18/October/2024",
      link: "/tin-tuc-lg",
    },
  ];

  return (
    <div className="select-none">
      <HeaderReptile />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto mt-5 px-4">
          <Breadcrumbs
            links={[
              { name: "Trang chủ", to: "/" },
              { name: "Sản phẩm khác", to: "/san-pham-bo-sat" },
              { name: "Trang chủ của bò sát", to: "#" },
            ]}
          />
        </div>

        {/* Danh mục bò sát */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Danh Mục Bò Sát
          </h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-lime-800" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-6">
          {displayedCategories.map((cat) => (
            <div key={cat.name} className="text-center">
              <Link to={cat.link || "#"}>
                <div className="border rounded-lg overflow-hidden bg-white">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <p className="mt-2 font-semibold text-sm">{cat.name}</p>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 border-2 border-black bg-none hover:bg-lime-800/80 hover:text-white rounded-lg font-medium"
          >
            {showAll ? "Thu gọn danh mục bò sát" : "Xem thêm danh mục bò sát"}
          </button>
        </div>

        {/* Bò sát nổi bật */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Bò Sát Nổi Bật
          </h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-lime-800" />

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
                <ProductCardReptile />
              </div>
            ))}
        </div>

        {/* Phụ kiện bò sát */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Phụ Kiện Bò Sát
          </h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-lime-800" />

        <div className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide md:grid md:grid-cols-5 md:gap-4 md:overflow-hidden">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[70%] xs:w-[50%] sm:w-[40%] md:w-auto md:flex-shrink"
              >
                <ProductCardReptile />
              </div>
            ))}
        </div>

        {/* Tin tức */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Tin Tức</h2>
        </div>
        <hr className="mb-7 w-30 border-[2px] border-lime-800" />

        <div className="relative group w-full max-w-6xl mx-auto mb-5">
          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide md:overflow-hidden md:snap-x md:snap-mandatory"
          >
            {newsItems.map((item, i) => (
              <Link
                to={item.link}
                key={i}
                className="flex-shrink-0 w-[75%] xs:w-[60%] sm:w-[50%] md:w-[calc(33.33%-1rem)] border rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 sm:h-60 object-cover"
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

          {/* Nút trái */}
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
      <FooterReptile />
    </div>
  );
};

export default ReptileHomePage;
