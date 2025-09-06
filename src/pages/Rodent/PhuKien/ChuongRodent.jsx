import React from "react";
import HeaderRodent from "../../../components/RodentComponent/Header.jsx";
import FooterRodent from "../../../components/RodentComponent/Footer.jsx";
import Breadcrumbs from "../../../components/Breadcrumbs.jsx";

export const ChuongRodent = () => {
  return (
    <div className="select-none">
      <HeaderRodent />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/" },
            { name: "Sản phẩm khác", to: "/san-pham-gam-nham" },
            { name: "Phụ kiện cho gặm nhắm", to: "/san-pham-gam-nham" },
            { name: "Chuồng cho thú cưng gặm nhắm", to: "#" },
          ]}
        />{" "}
      </div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Chuồng Cho Thú Cưng Gặm Nhắm</h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-amber-800" />
      </div>
      <FooterRodent />
    </div>
  );
};

export default ChuongRodent;
