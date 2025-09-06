import React from "react";
import HeaderSugar from "../../components/SugarComponent/HeaderSugar";
import FooterSugar from "../../components/SugarComponent/FooterSugar";
import ProductCardSugar from "../../components/SugarComponent/ProductCardSugar";
import Breadcrumbs from "../../components/Breadcrumbs";

export const AllSugarGlider = () => {
  return (
    <div className="select-none">
      <HeaderSugar />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/" },
            { name: "Sản phẩm khác", to: "/san-pham-soc-bay" },
            { name: "Tất cả dòng sóc bay tại PawShop", to: "/san-pham-soc-bay" },
          ]}
        />{" "}
      </div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Tất Cả Sóc Bay Tại PawShop</h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-gray-800" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-5">
            <ProductCardSugar/>
            <ProductCardSugar/>
            <ProductCardSugar/>
            <ProductCardSugar/>
            <ProductCardSugar/>
            <ProductCardSugar/>
            <ProductCardSugar/>
            <ProductCardSugar/>
        </div>
      </div>
      <FooterSugar />
    </div>
  );
};

export default AllSugarGlider;
