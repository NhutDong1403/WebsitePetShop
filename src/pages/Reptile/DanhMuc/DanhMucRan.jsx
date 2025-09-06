import React from "react";
import HeaderReptile from "../../../components/ReptileComponent/HeaderReptile";
import FooterReptile from "../../../components/ReptileComponent/FooterReptile";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const DanhMucRan = () => {
  return (
    <div className="select-none">
      <HeaderReptile />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-bo-sat" },
            { name: "Sản phẩm khác", to: "/san-pham-bo-sat" },
            { name: "Danh mục Rắn", to: "#" },
          ]}
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Danh Mục Rắn Bán Chạy */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Danh Mục Rắn Bán Chạy
          </h2>
        </div>
        <hr className="mb-5 w-16 sm:w-24 md:w-30 border-2 border-lime-800" />

        {/* KING SNAKE */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            KING SNAKE - Rắn Vua
          </h2>
        </div>
        <hr className="mb-5 w-16 sm:w-24 md:w-30 border-2 border-lime-800" />

        {/* CORN SNAKE */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            CORN SNAKE - Rắn Ngô
          </h2>
        </div>
        <hr className="mb-5 w-16 sm:w-24 md:w-30 border-2 border-lime-800" />

        {/* BULL SNAKE */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            BULL SNAKE - Rắn Bull
          </h2>
        </div>
        <hr className="mb-5 w-16 sm:w-24 md:w-30 border-2 border-lime-800" />

        {/* HOGNOSE */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            HOGNOSE - Rắn Mũi Heo
          </h2>
        </div>
        <hr className="mb-5 w-16 sm:w-24 md:w-30 border-2 border-lime-800" />

        {/* MILK SNAKE */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            MILK SNAKE - Rắn Sữa
          </h2>
        </div>
        <hr className="mb-5 w-16 sm:w-24 md:w-30 border-2 border-lime-800" />

        {/* RAT SNAKE */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            RAT SNAKE - Rắn Chuột
          </h2>
        </div>
        <hr className="mb-5 w-16 sm:w-24 md:w-30 border-2 border-lime-800" />
      </div>

      <FooterReptile />
    </div>
  );
};

export default DanhMucRan;
