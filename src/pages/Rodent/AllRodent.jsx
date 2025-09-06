import React from "react";
import HeaderRodent from "../../components/RodentComponent/Header.jsx";
import FooterRodent from "../../components/RodentComponent/Footer.jsx";
import Breadcrumbs from "../../components/Breadcrumbs.jsx";

export const AllRodent = () => {
  return (
    <div className="select-none">
      <HeaderRodent />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-gam-nham" },
            { name: "Sản phẩm khác", to: "/san-pham-gam-nham" },
            { name: "Tất cả dòng gặm nhắm", to: "#" },
          ]}
        />{" "}
      </div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Chuột Hamster
          </h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-gray-800" />

        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Chuột Lang
          </h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-gray-800" />

        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Thỏ Kiểng
          </h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-gray-800" />

        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Chuột Hamster
          </h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-gray-800" />

        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Sóc Bắc Mỹ
          </h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-gray-800" />

        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Nhím Kiểng
          </h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-gray-800" />

        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Sóc Kiểng
          </h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-gray-800" />

        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Chuột Rat
          </h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-gray-800" />

        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Chinchilla
          </h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-gray-800" />

        <div className="flex justify-between items-center mt-4 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Chuột Đuôi Mập
          </h2>
        </div>
        <hr className="mb-5 w-30 border-[2px] border-gray-800" />
      </div>
      <FooterRodent />
    </div>
  );
};

export default AllRodent;
