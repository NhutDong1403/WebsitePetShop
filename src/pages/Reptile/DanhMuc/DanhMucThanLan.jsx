import React from "react";
import HeaderReptile from "../../../components/ReptileComponent/HeaderReptile";
import FooterReptile from "../../../components/ReptileComponent/FooterReptile";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const DanhMucThanLan = () => {
  return (
    <div className="select-none">
      <HeaderReptile />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-bo-sat" },
            { name: "Sản phẩm khác", to: "/san-pham-bo-sat" },
            { name: "Danh mục Thằn Lằn", to: "#" },
          ]}
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Danh Mục Thằn Lằn Bán Chạy */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Danh Mục Thằn Lằn Bán Chạy
          </h2>
        </div>
        <hr className="mb-5 w-16 sm:w-24 md:w-30 border-2 border-lime-800" />

        {/* CRESTED GECKO */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            CRESTED GECKO - Thằn Lằn Lông Mi
          </h2>
        </div>
        <hr className="mb-5 w-16 sm:w-24 md:w-30 border-2 border-lime-800" />

        {/* LEOPARD GECKO */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            LEOPARD GECKO - Thằn Lằn Da Báo
          </h2>
        </div>
        <hr className="mb-5 w-16 sm:w-24 md:w-30 border-2 border-lime-800" />

        {/* TEGU */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            TEGU - Thằn Lằn Tegu
          </h2>
        </div>
        <hr className="mb-5 w-16 sm:w-24 md:w-30 border-2 border-lime-800" />

        {/* AFRICAN FAT-TAIL GECKO */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            AFRICAN FAT-TAIL GECKO - Thằn Lằn Đuôi Mập
          </h2>
        </div>
        <hr className="mb-5 w-16 sm:w-24 md:w-30 border-2 border-lime-800" />

        {/* KNOB-TAIL GECKO */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            KNOB-TAIL GECKO - Thằn Lằn Mắt Ếch
          </h2>
        </div>
        <hr className="mb-5 w-16 sm:w-24 md:w-30 border-2 border-lime-800" />

        {/* GIANT DAY GECKO */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            GIANT DAY GECKO - Thằn Lằn Ngày Khổng Lồ
          </h2>
        </div>
        <hr className="mb-5 w-16 sm:w-24 md:w-30 border-2 border-lime-800" />
      </div>

      <FooterReptile />
    </div>
  );
};

export default DanhMucThanLan;
