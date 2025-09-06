import React from "react";
import { Link } from "react-router-dom";
import { BottomFooterReptile } from "../ReptileComponent/BottomFooterReptile";

export const FooterWing = () => {
  return (
    <>
      <footer
        className="
          bg-indigo-300/70 text-base-content p-6 sm:p-10 rounded-t-lg
          flex flex-col gap-8
          md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-10
        "
      >
        {/* Logo + mô tả */}
        <aside className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            className="w-28 h-28 rounded-full border-4 border-white shadow-lg mb-3"
            src="/images/Winger/LogoWinger.png"
            alt="Logo"
          />
          <p>
            <b className="text-2xl sm:text-3xl text-amber-400 font-bold tracking-wide">
              PawShop
            </b>
            <br />
            <span className="block text-sm text-black leading-relaxed text-justify max-w-xs mt-2">
              Thiên đường dành cho thú cưng – nơi bạn tìm thấy mọi điều tuyệt
              vời nhất cho người bạn bốn chân: đồ ăn, phụ kiện, chăm sóc sức
              khỏe, và hơn thế nữa
            </span>
          </p>
        </aside>

        {/* Dịch vụ */}
        <nav className="flex flex-col items-center md:items-start border-t md:border-none pt-4 md:pt-0 text-black">
          <h6 className="text-lg sm:text-2xl font-bold uppercase tracking-wide text-amber-400 mb-2">
            Dịch vụ
          </h6>
          <Link to="/ve-sinh-cham-soc-co-ban" className="link link-hover mt-1">
            Vệ sinh & Chăm sóc cơ bản
          </Link>
          <Link to="/lam-dep-spa-nang-cao" className="link link-hover mt-1">
            Làm đẹp & Spa nâng cao
          </Link>
        </nav>

        {/* Thông tin cửa hàng */}
        <nav className="flex flex-col items-center md:items-start border-t md:border-none pt-4 md:pt-0 text-black">
          <h6 className="text-lg sm:text-2xl font-bold uppercase tracking-wide text-amber-400 mb-2">
            Thông tin cửa hàng
          </h6>
          <a className="w-full text-center md:text-left">
            <b>Địa chỉ:</b> 285 Cách mạng tháng 8 P12 Q10
          </a>
          <a className="w-full text-center md:text-left">
            <b>Liên hệ:</b> 0123.456.789
          </a>
          <a className="w-full text-center md:text-left">
            <b>Gmail:</b> info@pawshop.vn
          </a>
        </nav>

        {/* Chăm sóc khách hàng */}
        <nav className="flex flex-col items-center md:items-start border-t md:border-none pt-4 md:pt-0 text-black">
          <h6 className="text-lg sm:text-2xl font-bold uppercase tracking-wide text-amber-400 mb-2">
            Chăm sóc khách hàng
          </h6>

          <div className="flex items-center gap-2 my-2">
            <img
              src="/images/SugarGlider/ContactSugar.gif"
              alt="Phone"
              className="w-10 h-10"
            />
            <span className="text-lg sm:text-xl font-semibold text-brown-800">
              0123.456.789
            </span>
          </div>

          <div className="flex items-center gap-2 my-2">
            <img
              src="/images/SugarGlider/GmailSugar.gif"
              alt="Gmail"
              className="w-10 h-10"
            />
            <span className="text-lg sm:text-xl font-semibold text-brown-800">
              info@pawshop.vn
            </span>
          </div>

          <h6 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-amber-400 mb-2 mt-4">
            Theo dõi chúng tôi
          </h6>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2">
            {["facebook", "instagram", "lazada", "tiktok", "shopee"].map(
              (icon) => (
                <img
                  key={icon}
                  src={`/images/${icon}.png`}
                  alt={icon}
                  className="w-12 h-12 rounded-xl p-2 object-contain bg-blue-200 shadow-md hover:scale-110 transition-transform"
                />
              )
            )}
          </div>
        </nav>
      </footer>

      <BottomFooterReptile />
    </>
  );
};

export default FooterWing;
