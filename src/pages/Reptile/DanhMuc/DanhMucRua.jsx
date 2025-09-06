import React from "react";
import HeaderReptile from "../../../components/ReptileComponent/HeaderReptile";
import FooterReptile from "../../../components/ReptileComponent/FooterReptile";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const DanhMucRua = () => {
  return (
    <div className="select-none">
      <HeaderReptile />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-bo-sat" },
            { name: "Sản phẩm khác", to: "/san-pham-bo-sat" },
            { name: "Danh mục Rùa Cạn", to: "#" },
          ]}
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Danh Mục Rùa Cạn Bán Chạy */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Danh Mục Rùa Cạn Bán Chạy
          </h2>
        </div>
        <hr className="mb-5 w-16 sm:w-24 md:w-30 border-2 border-lime-800" />

        {/* SULCATA */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            SULCATA - Rùa Châu Phi
          </h2>
        </div>
        <hr className="mb-5 w-16 sm:w-24 md:w-30 border-2 border-lime-800" />

        {/* LEOPARD TORTOISE */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            LEOPARD TORTOISE - Rùa Da Báo
          </h2>
        </div>
        <hr className="mb-5 w-16 sm:w-24 md:w-30 border-2 border-lime-800" />

        {/* INDIAN STAR TORTOISE */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            INDIAN STAR TORTOISE - Rùa Sao Ấn Độ
          </h2>
        </div>
        <hr className="mb-5 w-16 sm:w-24 md:w-30 border-2 border-lime-800" />
      </div>

      <FooterReptile />
    </div>
  );
};

export default DanhMucRua;
