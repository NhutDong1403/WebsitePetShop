import React from "react";

export const AdminHeader = () => {
  return (
    <div className="select-none">
      <div className="p-5 bg-gray-200 rounded-b-lg">
        <div className="flex justify-center items-center mt-4 mb-4">
          <img
            className="w-30 h-30 mr-5 rounded-full border-3 border-black"
            src="/images/Winger/LogoWinger.png"
            alt="logoRodent"
          />
          <img
            className="w-30 h-30 mr-5 rounded-full border-3 border-black"
            src="/images/Rodent/LogoRodent.png"
            alt="logoRodent"
          />
          <img
            className="w-30 h-30 mr-5 rounded-full border-3 border-black"
            src="/images/Logo.png"
            alt="logoadmin"
          />
          <img
            className="w-30 h-30 rounded-full border-3 border-black"
            src="/images/Reptile/LogoReptile.png"
            alt="logoreptile"
          />
          <img
            className="w-30 h-30 ml-5 rounded-full border-3 border-black"
            src="/images/SugarGlider/LogoSugar.png"
            alt="logosugar"
          />
        </div>
        <div className="flex justify-center items-center mt-4 mb-4">
          <h2 className="text-4xl mt-1 p-2 font-bold">
            Quản Lý Cửa Hàng PawShop
          </h2>
        </div>
        <hr className="mb-5 w-full border-[2px] border-red-700" />
      </div>
        <div className="bg-gray-300 py-2 overflow-hidden whitespace-nowrap">
          <div className="text-gray-700 font-semibold text-sm animate-scroll">
            ✨ Chào mừng Admin đã đăng nhập vào trang ! Chúc cửa hàng luôn mua may bán đắt !✨
          </div>
        </div>
    </div>
  );
};

export default AdminHeader;
