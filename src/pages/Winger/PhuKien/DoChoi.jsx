import React from "react";
import HeaderWing from "../../../components/WingerComponent/HeaderWing";
import FooterWing from "../../../components/WingerComponent/FooterWing";
import Breadcrumbs from "../../../components/Breadcrumbs";
import ProductCardWinger from "../../../components/WingerComponent/ProductCardWinger";

export const DoChoi = () => {
  return (
    <div className="select-none">
      <HeaderWing />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/" },
            { name: "Sản phẩm khác", to: "/san-pham-chim-vet" },
            { name: "Phụ kiện cho chim vẹt", to: "/do-choi-chim-vet" },
            { name: "Đồ chơi & Giải trí cho chim vẹt", to: "/do-choi-chim-vet" },
          ]}
        />{" "}
      </div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Đồ chơi & Giải trí cho chim vẹt
          </h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-indigo-800" />

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
                <ProductCardWinger />
              </div>
            ))}
        </div>
      </div>
      <FooterWing />
    </div>
  );
};

export default DoChoi;
