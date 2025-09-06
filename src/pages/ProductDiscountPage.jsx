import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";


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

export const ProductDiscountPage = () => {
  const location = useLocation(); // Đầu tiên lấy location
  const highlight = new URLSearchParams(location.search).get("highlight"); // Sau đó lấy param từ location
  return (
    <div className="select-none">
      <Header />

      <div className="max-w-full mx-auto sm:max-w-6xl mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/" },
            { name: "Sản phẩm khuyến mãi", to: "#" },
          ]}
        />
      </div>

      <div className="container mx-auto">
        <div className="mt-4 mb-4 px-4">
          <h2 className="text-xl sm:text-3xl font-bold text-black text-left">
            Sản phẩm khuyến mãi của chó & mèo
          </h2>
        </div>
        <hr className="mb-5 w-32 sm:w-40 border-[2px] border-pink-600 ml-4" />

        {/* Grid sản phẩm */}
        <div className="mt-4 mb-8">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide px-1 sm:px-0 lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible">
            {products.map((product) => (
              <div
                key={product.id}
                id={highlight === product.id.toString() ? highlight : undefined}
                className="flex-shrink-0 w-[70%] sm:w-[45%] md:w-[30%] lg:w-auto"
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDiscountPage;
