import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <div className="navbar select-none bg-yellow-50 shadow-sm justify-center rounded-b-lg">
      <div className="flex gap-4">
        <Link to="/san-pham-gam-nham">
          <img
            className="w-10 h-10"
            src="/images/Rodent/HomeRodent.gif"
            alt="Home"
          />
        </Link>

        <Link to="/san-pham-cho-cho">
          <button className="btn btn-outline border-2 border-black text-black hover:bg-amber-100 hover:border-2">
            Sản Phẩm Cho Chó
          </button>
        </Link>

        <Link to="/san-pham-cho-meo">
          <button className="btn btn-outline border-2 border-black text-black hover:bg-amber-100 hover:border-2">
            Sản Phẩm Cho Mèo
          </button>
        </Link>

        {/* SẢN PHẨM KHÁC */}
        <div className="dropdown dropdown-hover dropdown-end block">
          <div
            tabIndex={0}
            role="button"
            className={`btn btn-outline border-2 border-black text-black hover:bg-amber-100 hover:border-2 ${
              isActive("/san-pham-gam-nham")
                ? "bg-amber-200 border-2"
                : "" || isActive("/tat-ca-gam-nham")
                ? "bg-amber-200 border-2"
                : ""
            }`}
          >
            Sản Phẩm Khác
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-amber-100 border-2 border-black rounded-box z-1 w-55 shadow-sm mt-0.5 font-semibold"
          >
            <Link to="/san-pham-bo-sat">
              <li className="border-2 rounded-lg mb-1 border-transparent hover:bg-yellow-300 hover:border-black hover:text-white">
                <a>Sản phẩm cho bò sát</a>
              </li>
            </Link>
            <Link to="/san-pham-gam-nham">
              <li
                className={`rounded-lg border-2 mb-1 ${
                  isActive("/san-pham-gam-nham") || isActive("/tat-ca-gam-nham")
                    ? "bg-yellow-400 border-black text-white"
                    : "border-transparent hover:bg-yellow-300 hover:border-black hover:text-white"
                }`}
              >
                <a>Sản phẩm cho gặm nhấm</a>
              </li>
            </Link>
            <Link to="/san-pham-soc-bay">
              <li className="border-2 rounded-lg mb-1 border-transparent hover:bg-yellow-300 hover:border-black hover:text-white">
                <a>Sản phẩm cho sóc bay</a>
              </li>
            </Link>
            <Link to="/san-pham-chim-vet">
              <li className="border-2 rounded-lg mb-1 border-transparent hover:bg-yellow-300 hover:border-black hover:text-white">
                <a>Sản phẩm cho chim vẹt</a>
              </li>
            </Link>
          </ul>
        </div>

        {/* DỊCH VỤ SPA */}
        <div className="dropdown dropdown-hover dropdown-end block">
          <div
            tabIndex={0}
            role="button"
            className={`btn btn-outline border-2 border-black text-black hover:bg-amber-100 hover:border-2 ${
              isActive("/dich-vu-gam-nham") || isActive("/cham-soc-gam-nham")
                ? "bg-amber-200 border-2"
                : ""
            }`}
          >
            Dịch Vụ Spa
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-amber-100 border-2  border-black rounded-box z-1 w-60 shadow-sm mt-0.5 font-semibold"
          >
            <Link to="/cham-soc-gam-nham">
              <li
                className={`rounded-lg border-2 mb-1 ${
                  isActive("/cham-soc-gam-nham")
                    ? "bg-yellow-300 border-black text-white"
                    : "border-transparent hover:bg-yellow-300 hover:border-black hover:text-white"
                }`}
              >
                <a>Dịch vụ chăm hộ</a>
              </li>
            </Link>
            <Link to="/dich-vu-gam-nham">
              <li
                className={`rounded-lg border-2 mb-1 ${
                  isActive("/dich-vu-gam-nham")
                    ? "bg-yellow-300 border-black text-white"
                    : "border-transparent hover:bg-yellow-300 hover:border-black hover:text-white"
                }`}
              >
                <a>Vệ sinh & Chăm sóc sức khỏe</a>
              </li>
            </Link>
          </ul>
        </div>

        {/* KHUYẾN MÃI */}
        <Link to="/san-pham-gam-nham-khuyen-mai">
          <button
            className={`btn btn-outline border-2 text-black bg-amber-50 border border-black hover:bg-amber-100 hover:border-2 ${
              isActive("/san-pham-gam-nham-khuyen-mai")
                ? "bg-amber-200 border-2"
                : ""
            }`}
          >
            Khuyến Mãi
          </button>
        </Link>

        {/* LIÊN HỆ */}
        <Link to="/lien-he-gam-nham">
          <button
            className={`btn btn-outline border-2 text-black bg-amber-50 border border-black hover:bg-amber-100 hover:border-2 ${
              isActive("/lien-he-gam-nham") ? "bg-amber-200 border-2" : ""
            }`}
          >
            Liên hệ
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
