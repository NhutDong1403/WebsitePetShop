import React from "react";
import HeaderReptile from "../../../components/ReptileComponent/HeaderReptile";
import FooterReptile from "../../../components/ReptileComponent/FooterReptile";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const DanhMucTacKe = () => {
  return (
    <div className="select-none">
      <HeaderReptile />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-bo-sat" },
            { name: "Sản phẩm khác", to: "/san-pham-bo-sat" },
            { name: "Danh mục Tắc Kè", to: "#" },
          ]}
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Danh Mục Tắc Kè Bán Chạy */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Danh Mục Tắc Kè Bán Chạy
          </h2>
        </div>
        <hr className="mb-5 w-16 sm:w-24 md:w-30 border-2 border-lime-800" />

        {/* CHAMELEON - Tắc Kè Hoa */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            CHAMELEON - Tắc Kè Hoa
          </h2>
        </div>
        <hr className="mb-5 w-16 sm:w-24 md:w-30 border-2 border-lime-800" />

        {/* TOKAY GECKO - Tắc Kè Tokay */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            TOKAY GECKO - Tắc Kè Tokay
          </h2>
        </div>
        <hr className="mb-5 w-16 sm:w-24 md:w-30 border-2 border-lime-800" />
      </div>

      <FooterReptile />
    </div>
  );
};

export default DanhMucTacKe;
