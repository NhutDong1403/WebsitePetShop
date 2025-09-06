import React from "react";
import HeaderReptile from "../../../components/ReptileComponent/HeaderReptile";
import FooterReptile from "../../../components/ReptileComponent/FooterReptile";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const TankMica = () => {
  return (
    <div className="select-none">
      <HeaderReptile />
      <div className="max-w-6xl mx-auto mt-2 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-bo-sat" },
            { name: "Sản phẩm khác", to: "/san-pham-bo-sat" },
            { name: "Phụ kiện bò sát", to: "/tank-mica" },
            { name: "Tank Mica Cho Bò Sát", to: "#" },
          ]}
        />{" "}
      </div>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Danh Sách Tank Mica Cho Bò Sát
          </h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-lime-800" />
      </div>
      <FooterReptile />
    </div>
  );
};

export default TankMica;
