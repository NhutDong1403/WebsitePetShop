import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductCard from "../components/ProductCard";

export const ProductDogPage = () => {
  const location = useLocation(); // Đầu tiên lấy location
  const highlight = new URLSearchParams(location.search).get("highlight"); // Sau đó lấy param từ location
  const products = [
    {
      id: 1,
      name: "Thức ăn cho chó con",
      image: "/images/hat1.png",
      price: 250000,
      discountPrice: 180000,
    },
    {
      id: 2,
      name: "Thức ăn cho mèo trưởng thành lớn hơn 20kg",
      image: "/images/hat.png",
      price: 220000,
      discountPrice: 160000,
    },
    {
      id: 3,
      name: "Sữa tắm cho chó",
      image: "/images/hat1.png",
      price: 150000,
      discountPrice: 110000,
    },
    {
      id: 4,
      name: "Cát vệ sinh cho mèo",
      image: "/images/hat1.png",
      price: 120000,
      discountPrice: 90000,
    },
    {
      id: 5,
      name: "Cát vệ sinh cho mèo",
      image: "/images/hat1.png",
      price: 120000,
      discountPrice: 90000,
    },
    {
      id: 6,
      name: "Cát vệ sinh cho mèo",
      image: "/images/hat1.png",
      price: 120000,
      discountPrice: 90000,
    },
    {
      id: 7,
      name: "Cát vệ sinh cho mèo",
      image: "/images/hat1.png",
      price: 120000,
      discountPrice: 90000,
    },
  ];

  useEffect(() => {
    if (highlight) {
      const target = document.getElementById(highlight);
      if (target) {
        target.classList.add(
          "bg-yellow-300",
          "shadow-lg",
          "scale-105",
          "transition",
          "duration-300"
        );
        target.scrollIntoView({ behavior: "smooth", block: "center" });

        setTimeout(() => {
          target.classList.remove("bg-yellow-300", "shadow-lg", "scale-105");
        }, 3000);
      }
    }
  }, [highlight]);
  return (
    <div className="select-none">
      <Header />

      <div className="max-w-6xl mx-auto mt-5 px-3 sm:px-4 lg:px-8">
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          <Breadcrumbs
            links={[
              { name: "Trang chủ", to: "/" },
              { name: "Sản phẩm cho chó", to: "/san-pham-cho-cho" },
              { name: "Tất cả sản phẩm cho chó", to: "#" },
            ]}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mục 1 */}
        <div className="mt-4 mb-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Thức ăn & Dinh dưỡng cho chó
          </h2>
          <hr className="mt-2 mb-5 w-16 sm:w-24 border-[2px] border-pink-600" />
          {/* Danh sách sản phẩm */}
          <div className="mt-4 mb-8">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide px-1 sm:px-0 lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible">
              {products.map((product) => (
                <div
                  key={product.id}
                  id={
                    highlight === product.id.toString() ? highlight : undefined
                  }
                  className="flex-shrink-0 w-[70%] sm:w-[45%] md:w-[30%] lg:w-auto"
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mục 2 */}
        <div className="mt-4 mb-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Vệ sinh & Khử mùi cho chó
          </h2>
          <hr className="mt-2 mb-5 w-16 sm:w-24 border-[2px] border-pink-600" />
          {/* Danh sách sản phẩm */}
          <div className="mt-4 mb-8">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide px-1 sm:px-0 lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible">
              {products.map((product) => (
                <div
                  key={product.id}
                  id={
                    highlight === product.id.toString() ? highlight : undefined
                  }
                  className="flex-shrink-0 w-[70%] sm:w-[45%] md:w-[30%] lg:w-auto"
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mục 3 */}
        <div className="mt-4 mb-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Phụ kiện & Vật dụng cho chó
          </h2>
          <hr className="mt-2 mb-5 w-16 sm:w-24 border-[2px] border-pink-600" />
          {/* Danh sách sản phẩm */}
          <div className="mt-4 mb-8">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide px-1 sm:px-0 lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible">
              {products.map((product) => (
                <div
                  key={product.id}
                  id={
                    highlight === product.id.toString() ? highlight : undefined
                  }
                  className="flex-shrink-0 w-[70%] sm:w-[45%] md:w-[30%] lg:w-auto"
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mục 4 */}
        <div className="mt-4 mb-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Thuốc men & Chăm sóc cho chó
          </h2>
          <hr className="mt-2 mb-5 w-16 sm:w-24 border-[2px] border-pink-600" />
          {/* Danh sách sản phẩm */}
          <div className="mt-4 mb-8">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide px-1 sm:px-0 lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible">
              {products.map((product) => (
                <div
                  key={product.id}
                  id={
                    highlight === product.id.toString() ? highlight : undefined
                  }
                  className="flex-shrink-0 w-[70%] sm:w-[45%] md:w-[30%] lg:w-auto"
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDogPage;
