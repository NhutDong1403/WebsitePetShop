import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductCard from "../components/ProductCard";
const newproducts = [
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
    image: "link_image",
    name: "Tên sản phẩm",
    price: 109000,
    shipping: "Giao hàng nhanh",
    rating: 4.8,
    sold: 1200,
  },
  {
    image: "link_image",
    name: "Tên sản phẩm",
    price: 109000,
    shipping: "Giao hàng nhanh",
    rating: 4.8,
    sold: 1200,
  },
  {
    image: "link_image",
    name: "Tên sản phẩm",
    price: 109000,
    shipping: "Giao hàng nhanh",
    rating: 4.8,
    sold: 1200,
  },
  {
    image: "link_image",
    name: "Tên sản phẩm",
    price: 109000,
    shipping: "Giao hàng nhanh",
    rating: 4.8,
    sold: 1200,
  },
  {
    image: "link_image",
    name: "Tên sản phẩm",
    price: 109000,
    shipping: "Giao hàng nhanh",
    rating: 4.8,
    sold: 1200,
  },
  {
    image: "link_image",
    name: "Tên sản phẩm",
    price: 109000,
    shipping: "Giao hàng nhanh",
    rating: 4.8,
    sold: 1200,
  },
  {
    image: "link_image",
    name: "Tên sản phẩm",
    price: 109000,
    shipping: "Giao hàng nhanh",
    rating: 4.8,
    sold: 1200,
  },

  // ... thêm sản phẩm khác
];

export const NewProductPage = () => {
  return (
    <div className="select-none">
      <Header />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/" },
            { name: "Sản phẩm mới về", to: "#" },
          ]}
        />{" "}
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mt-3 mb-3 sm:mt-4 sm:mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Sản Phẩm Mới Về
          </h2>
        </div>
        <hr className="mb-4 sm:mb-5 w-20 sm:w-30 border-[2px] border-pink-800" />

        <div className="px-4 mb-5">
          {/* Mobile: scroll ngang | Desktop: grid */}
          <div
            className="
    flex gap-4 overflow-x-auto scrollbar-hide 
    lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible
  "
          >
            {newproducts.map((item, index) => (
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
      </div>
      <Footer />
    </div>
  );
};

export default NewProductPage;
