import React from "react";
import { Link, useLocation } from "react-router-dom";

export const NavbarWing = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  const isDropdownActive = [
    "/san-pham-bo-sat",
    "/san-pham-gam-nham",
    "/san-pham-soc-bay",
    "/san-pham-chim-vet",
  ].includes(currentPath);

  const isDropdownActive1 = [
    "/dich-vu-chim-vet",
    "/cham-soc-chim-vet",
  ].includes(currentPath);

  return (
    <div className="navbar bg-indigo-100 shadow-sm justify-center rounded-b-lg">
      <div className="flex gap-4">
        {/* Logo */}
        <Link to="/san-pham-chim-vet">
          <img
            className="w-10 h-10"
            src="/images/SugarGlider/HomeSugar.gif"
            alt="Home"
          />
        </Link>

        {/* Sản phẩm cho chó */}
        <Link to="/san-pham-cho-cho">
          <button className="btn btn-outline border-2 border-black text-black hover:bg-indigo-300 hover:border-2">
            Sản Phẩm Cho Chó
          </button>
        </Link>

        {/* Sản phẩm cho mèo */}
        <Link to="/san-pham-cho-meo">
          <button className="btn btn-outline border-2 border-black text-black hover:bg-indigo-300 hover:border-2">
            Sản Phẩm Cho Mèo
          </button>
        </Link>

        {/* Dropdown Sản phẩm khác */}
        <div className="dropdown dropdown-hover dropdown-end block">
          <div
            tabIndex={0}
            role="button"
            className={`btn btn-outline border-2 border-black text-black ${
              isDropdownActive
                ? "bg-indigo-300 border-2 hover:bg-indigo-200"
                : "hover:bg-indigo-300 hover:border-2"
            }`}
          >
            Sản Phẩm Khác
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-indigo-100 border-2 border-black rounded-box z-1 w-55 shadow-sm mt-0.5 font-semibold"
          >
            <Link to="/san-pham-bo-sat">
              <li
                className={`rounded-lg border-2 mb-1 ${
                  isActive("/san-pham-bo-sat")
                    ? "bg-indigo-400 border-black text-white"
                    : "border-transparent hover:bg-indigo-300 hover:border-black hover:text-white"
                }`}
              >
                <a>Sản phẩm cho bò sát</a>
              </li>
            </Link>
            <Link to="/san-pham-gam-nham">
              <li
                className={`rounded-lg border-2 mb-1 ${
                  isActive("/san-pham-gam-nham")
                    ? "bg-indigo-400 border-black text-white"
                    : "border-transparent hover:bg-indigo-300 hover:border-black hover:text-white"
                }`}
              >
                <a>Sản phẩm cho gặm nhấm</a>
              </li>
            </Link>
            <Link to="/san-pham-soc-bay">
              <li
                className={`rounded-lg border-2 mb-1 ${
                  isActive("/san-pham-soc-bay")
                    ? "bg-indigo-400 border-black text-white"
                    : "border-transparent hover:bg-indigo-300 hover:border-black hover:text-white"
                }`}
              >
                <a>Sản phẩm cho sóc bay</a>
              </li>
            </Link>
            <Link to="/san-pham-chim-vet">
              <li
                className={`rounded-lg border-2 mb-1 ${
                  isActive("/san-pham-chim-vet")
                    ? "bg-indigo-400 border-black text-white"
                    : "border-transparent hover:bg-indigo-300 hover:border-black hover:text-white"
                }`}
              >
                <a>Sản phẩm cho chim vẹt</a>
              </li>
            </Link>
          </ul>
        </div>

        {/* Dropdown Spa */}
        <div className="dropdown dropdown-hover dropdown-end block">
          <div
            tabIndex={0}
            role="button"
            className={`btn btn-outline border-2 border-black text-black ${
              isDropdownActive1
                ? "bg-indigo-300 border-2 hover:bg-indigo-200"
                : "hover:bg-indigo-300 hover:border-2"
            }`}
          >
            Dịch Vụ Spa
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-indigo-100 border-2 border-black rounded-box z-1 w-60 shadow-sm mt-0.5 font-semibold"
          >
            <Link to="/dich-vu-chim-vet">
              <li
                className={`rounded-lg border-2 mb-1 ${
                  isActive("/dich-vu-chim-vet")
                    ? "bg-indigo-400 border-black text-white"
                    : "border-transparent hover:bg-indigo-300 hover:border-black hover:text-white"
                }`}
              >
                <a>Dịch vụ chăm hộ</a>
              </li>
            </Link>
            <Link to="/cham-soc-chim-vet">
              <li
                className={`rounded-lg border-2 mb-1 ${
                  isActive("/cham-soc-chim-vet")
                    ? "bg-indigo-400 border-black text-white"
                    : "border-transparent hover:bg-indigo-300 hover:border-black hover:text-white"
                }`}
              >
                <a>Vệ sinh & Chăm sóc sức khỏe</a>
              </li>
            </Link>
          </ul>
        </div>

        {/* Khuyến mãi */}
        <Link to="/san-pham-chim-vet-khuyen-mai">
          <button
            className={`btn btn-outline border-2 text-black bg-indigo-100 border border-black hover:bg-indigo-300 hover:border-2 ${
              isActive("/san-pham-chim-vet-khuyen-mai")
                ? "bg-indigo-300 border-2"
                : ""
            }`}
          >
            Khuyến Mãi
          </button>
        </Link>

        {/* Liên hệ */}
        <Link to="/lien-he-chim-vet">
          <button
            className={`btn btn-outline border-2 text-black bg-indigo-100 border border-black hover:bg-indigo-300 hover:border-2 ${
              isActive("/lien-he-chim-vet") ? "bg-indigo-300 border-2" : ""
            }`}
          >
            Liên hệ
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavbarWing;
