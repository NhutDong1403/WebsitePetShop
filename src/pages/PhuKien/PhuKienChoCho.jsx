import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

export const PhuKienChoCho = () => {
  return (
    <>
      <Header /> 
      <div className="max-w-6xl mx-auto mt-5 px-4 select-none">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-cho-cho" },
            { name: "Sản phẩm cho chó", to: "/san-pham-cho-cho" },
            { name: "Phụ kiện & Vật dụng cho chó", to: "#" },
          ]}
        />{" "}
      </div>
      <div className="container mx-auto px-4 select-none">
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Phụ kiện & Vật dụng cho chó</h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-pink-500" />
      </div>
      <Footer />
    </>
  );
};

export default PhuKienChoCho;
