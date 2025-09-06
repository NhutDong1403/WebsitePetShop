import React from "react";
import HeaderWing from "../../components/WingerComponent/HeaderWing";
import FooterWing from "../../components/WingerComponent/FooterWing";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductCardWinger from "../../components/WingerComponent/ProductCardWinger";

export const ProductDiscountWinger = () => {
  return (
    <div className="select-none">
      <HeaderWing />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/" },
            { name: "Sản phẩm khác", to: "/san-pham-chim-vet" },
            {
              name: "Sản phẩm khuyến mãi",
              to: "/san-pham-chim-vet-khuyen-mai",
            },
          ]}
        />{" "}
      </div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Sản phẩm khuyến mãi của chim vẹt{" "}
          </h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-indigo-800" />

        {/* Grid danh mục */}
        <div
          className="flex gap-4 mb-5 overflow-x-auto scrollbar-hide
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
                <ProductCardWinger />
              </div>
            ))}
        </div>
      </div>
      <FooterWing />
    </div>
  );
};

export default ProductDiscountWinger;
