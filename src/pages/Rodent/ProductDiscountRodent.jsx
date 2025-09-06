import React from "react";
import HeaderRodent from "../../components/RodentComponent/Header";
import FooterRodent from "../../components/RodentComponent/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductCardRodent from "../../components/RodentComponent/ProductCardRodent";

export const ProductDiscountRodent = () => {
  return (
    <div className="select-none">
      <HeaderRodent />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-gam-nham" },
            { name: "Sản phẩm khác", to: "/san-pham-gam-nham" },
            {
              name: "Sản phẩm khuyến mãi",
              to: "/san-pham-gam-nham-khuyen-mai",
            },
          ]}
        />{" "}
      </div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Sản phẩm khuyến mãi của gặm nhấm
          </h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-yellow-800" />

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
                <ProductCardRodent />
              </div>
            ))}
        </div>
      </div>
      <FooterRodent />
    </div>
  );
};

export default ProductDiscountRodent;
