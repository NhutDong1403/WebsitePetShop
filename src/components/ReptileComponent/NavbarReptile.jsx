import React from "react";
import { Link, useLocation } from "react-router-dom";
import TopHeaderReptile from "./TopHeaderReptile";

export const NavbarReptile = () => {
  const location = useLocation();
  const path = location.pathname;
  const isActive = (targetPath) => path === targetPath;

  const isOtherProductPage = [
    "/san-pham-bo-sat",
    "/san-pham-gam-nham",
    "/san-pham-soc-bay",
    "/san-pham-chim-vet",
    "/danh-muc-ran",
    "/danh-muc-tran",
    "/danh-muc-than-lan",
    "/danh-muc-rua",
    "/danh-muc-rua-nuoc",
    "/danh-muc-chan-khop",
    "/danh-muc-tac-ke",
    "/danh-muc-ky-da",
    "/danh-muc-rong",
    "/danh-muc-luong-cu",
  ].includes(path);

  return (
    <div className="select-none">
      <div className="navbar bg-lime-700 shadow-sm justify-center rounded-b-lg">
        <div className="flex gap-4">
          <Link to="/san-pham-bo-sat">
            <img
              className="w-10 h-10"
              src="/images/Reptile/HomeReptile.gif"
              alt="Home"
            />
          </Link>

          <Link to="/san-pham-cho-cho">
            <button
              className={`btn btn-outline border-2 border-white text-white hover:bg-lime-600 hover:border-2 ${
                isActive("/san-pham-cho-cho") ? "bg-lime-600 border-2" : ""
              }`}
            >
              Sản Phẩm Cho Chó
            </button>
          </Link>

          <Link to="/san-pham-cho-meo">
            <button
              className={`btn btn-outline border-2 border-white text-white hover:bg-lime-600 hover:border-2 ${
                isActive("/san-pham-cho-meo") ? "bg-lime-600 border-2" : ""
              }`}
            >
              Sản Phẩm Cho Mèo
            </button>
          </Link>

          <div className="dropdown dropdown-hover dropdown-end block">
            <div
              tabIndex={0}
              role="button"
              className={`btn btn-outline border-2 border-white text-white hover:bg-lime-600 hover:border-2 ${
                isOtherProductPage ? "bg-lime-600 border-2" : ""
              }`}
            >
              Sản Phẩm Khác
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-lime-600/90 border-2 border-black rounded-box z-1 w-55 shadow-sm mt-0.5 font-semibold gap-y-1"
            >
              <li
                className={`rounded-lg mb-1 border-2 transition-colors duration-200 ${
                  isActive("/san-pham-bo-sat") ||
                  isActive("/danh-muc-ran") ||
                  isActive("/danh-muc-tran") ||
                  isActive("/danh-muc-rong") ||
                  isActive("/danh-muc-rua") ||
                  isActive("/danh-muc-tac-ke") ||
                  isActive("/danh-muc-rua-nuoc") ||
                  isActive("/danh-muc-than-lan") ||
                  isActive("/danh-muc-chan-khop") ||
                  isActive("/danh-muc-luong-cu")
                    ? "bg-lime-700 border-black text-white"
                    : "border-transparent hover:bg-lime-700 hover:text-white hover:border-black"
                }`}
              >
                <Link to="/san-pham-bo-sat">Sản phẩm cho bò sát</Link>
              </li>

              <li
                className={`rounded-lg mb-1 border-2 transition-colors duration-200 ${
                  isActive("/san-pham-gam-nham")
                    ? "bg-lime-700 border-black text-white"
                    : "border-transparent hover:bg-lime-700 hover:text-white hover:border-black"
                }`}
              >
                <Link to="/san-pham-gam-nham">Sản phẩm cho gặm nhấm</Link>
              </li>

              <li
                className={`rounded-lg mb-1 border-2 transition-colors duration-200 ${
                  isActive("/san-pham-soc-bay")
                    ? "bg-lime-700 border-black text-white"
                    : "border-transparent hover:bg-lime-700 hover:text-white hover:border-black"
                }`}
              >
                <Link to="/san-pham-soc-bay">Sản phẩm cho sóc bay</Link>
              </li>

              <li
                className={`rounded-lg mb-1 border-2 transition-colors duration-200 ${
                  isActive("/san-pham-chim-vet")
                    ? "bg-lime-700 border-black text-white"
                    : "border-transparent hover:bg-lime-700 hover:text-white hover:border-black"
                }`}
              >
                <Link to="/san-pham-chim-vet">Sản phẩm cho chim vẹt</Link>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-hover dropdown-end block">
            <div
              tabIndex={0}
              role="button"
              className={`btn btn-outline border-2 text-white border border-white ${
                isActive("/dich-vu-bo-sat") || isActive("/cham-soc-bo-sat")
                  ? "bg-lime-600 hover:bg-lime-600 border-2"
                  : "bg-lime-700 hover:bg-lime-600"
              }`}
            >
              Dịch Vụ Spa
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-lime-600/90 border-2 border-black rounded-box z-1 w-60 shadow-sm mt-0.5 font-semibold gap-y-1"
            >
              <Link to="/cham-soc-bo-sat">
                <li
                  className={`rounded-lg mb-1 border-2 transition-colors duration-200 ${
                    isActive("/cham-soc-bo-sat")
                      ? "bg-lime-700 border-black text-white"
                      : "border-transparent hover:bg-lime-700 hover:text-white hover:border-black"
                  }`}
                >
                  <span>Dịch vụ chăm hộ</span>
                </li>
              </Link>

              <Link to="/dich-vu-bo-sat">
                <li
                  className={`rounded-lg mb-1 border-2 transition-colors duration-200 ${
                    isActive("/dich-vu-bo-sat")
                      ? "bg-lime-700 border-black text-white"
                      : "border-transparent hover:bg-lime-700 hover:text-white hover:border-black"
                  }`}
                >
                  <span>Vệ sinh & Chăm sóc sức khỏe</span>
                </li>
              </Link>
            </ul>
          </div>

          <Link to="/san-pham-bo-sat-khuyen-mai">
            <button
              className={`btn btn-outline border-2 text-white border-white hover:bg-lime-600 hover:border-2 ${
                isActive("/san-pham-bo-sat-khuyen-mai")
                  ? "bg-lime-600 border-2"
                  : ""
              }`}
            >
              Khuyến Mãi
            </button>
          </Link>

          <Link to="/lien-he-bo-sat">
            <button
              className={`btn btn-outline border-2 text-white border-white hover:bg-lime-600 hover:border-2 ${
                isActive("/lien-he-bo-sat") ? "bg-lime-600 border-2" : ""
              }`}
            >
              Liên hệ
            </button>
          </Link>
        </div>
      </div>
      <TopHeaderReptile />
    </div>
  );
};

export default NavbarReptile;
