import React from "react";
import HeaderSugar from "../../../components/SugarComponent/HeaderSugar";
import FooterSugar from "../../../components/SugarComponent/FooterSugar";
import Breadcrumbs from "../../../components/Breadcrumbs";
import ProductCardSugar from "../../../components/SugarComponent/ProductCardSugar";

export const DoChoi = () => {
  return (
    <div className="select-none">
      <HeaderSugar />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/" },
            { name: "Sản phẩm khác", to: "/san-pham-soc-bay" },
            { name: "Phụ kiện cho sóc bay", to: "/do-choi-cho-soc" },
            { name: "Đồ chơi cho sóc bay", to: "/do-choi-cho-soc" },
          ]}
        />{" "}
      </div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Đồ Chơi Cho Sóc Bay</h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-gray-800" />

        <div
          className="flex gap-4 mb-5 overflow-x-auto scrollbar-hide 
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
      </div>
      <FooterSugar />
    </div>
  );
};

export default DoChoi;
