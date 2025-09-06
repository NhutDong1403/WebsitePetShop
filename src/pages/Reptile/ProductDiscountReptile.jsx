import React from "react";
import HeaderReptile from "../../components/ReptileComponent/HeaderReptile";
import FooterReptile from "../../components/ReptileComponent/FooterReptile";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductCardReptile from "../../components/ReptileComponent/ProductCardReptile";

export const ProductDiscountReptile = () => {
  return (
    <div className="select-none">
      <HeaderReptile />

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-bo-sat" },
            { name: "Sản phẩm khác", to: "/san-pham-bo-sat" },
            { name: "Sản phẩm khuyến mãi", to: "#" },
          ]}
          className="text-sm sm:text-base" // mobile nhỏ chữ hơn
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Tiêu đề */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Sản phẩm khuyến mãi của bò sát
          </h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-lime-800" />

        {/* Sản phẩm khuyến mãi */}
        <div
          className="flex gap-4 mb-5 overflow-x-auto scrollbar-hide 
    lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible
  "
        >
          {Array(8)
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
      </div>

      <FooterReptile />
    </div>
  );
};

export default ProductDiscountReptile;
