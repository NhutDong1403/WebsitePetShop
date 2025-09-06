import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
const products = [
  {
    id: 1,
    image: "/images/hat1.png",
    name: "Thức ăn hạt cho chó",
    price: 109000,
    shipping: "Giao hàng nhanh",
    rating: 4.8,
    sold: 1200,
  },
  {
    image: "/images/hat1.png",
    name: "Tên sản phẩm",
    price: 109000,
    shipping: "Giao hàng nhanh",
    rating: 4.8,
    sold: 1200,
  },
  {
    image: "/images/hat1.png",
    name: "Tên sản phẩm",
    price: 109000,
    shipping: "Giao hàng nhanh",
    rating: 4.8,
    sold: 1200,
  },
  {
    image: "/images/hat1.png",
    name: "Tên sản phẩm",
    price: 109000,
    shipping: "Giao hàng nhanh",
    rating: 4.8,
    sold: 1200,
  },
  {
    image: "/images/hat1.png",
    name: "Tên sản phẩm",
    price: 109000,
    shipping: "Giao hàng nhanh",
    rating: 4.8,
    sold: 1200,
  },
  {
    image: "/images/hat1.png",
    name: "Tên sản phẩm",
    price: 109000,
    shipping: "Giao hàng nhanh",
    rating: 4.8,
    sold: 1200,
  },
  {
    image: "/images/hat1.png",
    name: "Tên sản phẩm",
    price: 109000,
    shipping: "Giao hàng nhanh",
    rating: 4.8,
    sold: 1200,
  },
  {
    image: "/images/hat1.png",
    name: "Tên sản phẩm",
    price: 109000,
    shipping: "Giao hàng nhanh",
    rating: 4.8,
    sold: 1200,
  },

  // ... thêm sản phẩm khác
];
export const HomePage = () => {
  return (
    <div className="select-none">
      <Header />
      <Carousel />
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex justify-between items-center mt-3 mb-3 sm:mt-4 sm:mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Sản Phẩm Khuyến Mãi
          </h2>
        </div>
        <hr className="mb-4 sm:mb-5 w-20 sm:w-30 border-[2px] border-pink-800" />
      </div>

      <div className="px-4">
        {/* Mobile: scroll ngang | Desktop: grid */}
        <div
          className="
    flex gap-4 overflow-x-auto scrollbar-hide 
    lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible
  "
        >
          {products.map((item, index) => (
            <div
              key={index}
              className="
          flex-shrink-0 
          w-[70%] sm:w-[45%] md:w-[30%] 
          lg:w-auto  /* bỏ width khi vào grid */
        "
            >
              <ProductCard {...item} />
            </div>
          ))}
        </div>
      </div>

      <Link to="/san-pham-khuyen-mai">
        <div className="flex justify-center my-6 px-4 sm:px-0">
          <span className="w-full max-w-xs sm:max-w-xl text-sm sm:text-base font-semibold bg-white border-2 border-black rounded-lg px-4 py-2 sm:px-6 sm:py-3 text-center hover:bg-pink-200 transition">
            Xem thêm{" "}
            <span className="font-bold text-pink-800">Sản Phẩm Khuyến Mãi</span>
          </span>
        </div>
      </Link>

      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex justify-between items-center mt-3 mb-3 sm:mt-4 sm:mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Sản Phẩm Mới Về
          </h2>
        </div>
        <hr className="mb-4 sm:mb-5 w-20 sm:w-30 border-[2px] border-pink-800" />
      </div>

      <div className="px-4">
        {/* Mobile: scroll ngang | Desktop: grid */}
        <div
          className="
    flex gap-4 overflow-x-auto scrollbar-hide 
    lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible
  "
        >
          {products.map((item, index) => (
            <div
              key={index}
              className="
          flex-shrink-0 
          w-[70%] sm:w-[45%] md:w-[30%] 
          lg:w-auto  /* bỏ width khi vào grid */
        "
            >
              <ProductCard {...item} />
            </div>
          ))}
        </div>
      </div>

      <Link to="/san-pham-moi-ve">
        <div className="flex justify-center my-6 px-4 sm:px-0">
          <span className="w-full max-w-xs sm:max-w-xl text-sm sm:text-base font-semibold bg-white border-2 border-black rounded-lg px-4 py-3 text-center hover:bg-pink-200 transition">
            Xem thêm{" "}
            <span className="font-bold text-pink-800">Sản Phẩm Mới Về</span>
          </span>
        </div>
      </Link>

      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex justify-between items-center mt-3 mb-3 sm:mt-4 sm:mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Sản Phẩm Cho Chó
          </h2>
        </div>
        <hr className="mb-4 sm:mb-5 w-20 sm:w-30 border-[2px] border-pink-800" />
      </div>

      <div className="px-4">
        {/* Mobile: scroll ngang | Desktop: grid */}
        <div
          className="
    flex gap-4 overflow-x-auto scrollbar-hide 
    lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible
  "
        >
          {products.map((item, index) => (
            <div
              key={index}
              className="
          flex-shrink-0 
          w-[70%] sm:w-[45%] md:w-[30%] 
          lg:w-auto  /* bỏ width khi vào grid */
        "
            >
              <ProductCard {...item} />
            </div>
          ))}
        </div>
      </div>

      <Link to="/san-pham-cho-cho">
        <div className="flex justify-center my-6 px-4 sm:px-0">
          <span className="w-full max-w-xs sm:max-w-xl text-sm sm:text-base font-semibold bg-white border-2 border-black rounded-lg px-4 py-3 text-center hover:bg-pink-200 transition">
            Xem thêm{" "}
            <span className="font-bold text-pink-800">Sản Phẩm Cho Chó</span>
          </span>
        </div>
      </Link>

      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex justify-between items-center mt-3 mb-3 sm:mt-4 sm:mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Sản Phẩm Cho Mèo
          </h2>
        </div>
        <hr className="mb-4 sm:mb-5 w-20 sm:w-30 border-[2px] border-pink-800" />
      </div>

      <div className="px-4">
        {/* Mobile: scroll ngang | Desktop: grid */}
        <div
          className="
    flex gap-4 overflow-x-auto scrollbar-hide 
    lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible
  "
        >
          {products.map((item, index) => (
            <div
              key={index}
              className="
          flex-shrink-0 
          w-[70%] sm:w-[45%] md:w-[30%] 
          lg:w-auto  /* bỏ width khi vào grid */
        "
            >
              <ProductCard {...item} />
            </div>
          ))}
        </div>
      </div>

      <Link to="/san-pham-cho-meo">
        <div className="flex justify-center my-6 px-4 sm:px-0">
          <span className="w-full max-w-xs sm:max-w-xl text-sm sm:text-base font-semibold bg-white border-2 border-black rounded-lg px-4 py-3 text-center hover:bg-pink-200 transition">
            Xem thêm{" "}
            <span className="font-bold text-pink-800">Sản Phẩm Cho Mèo</span>
          </span>
        </div>
      </Link>

      <Footer />
    </div>
  );
};

export default HomePage;
