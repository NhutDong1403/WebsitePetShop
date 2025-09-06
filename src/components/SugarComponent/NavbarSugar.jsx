import React from "react";
import { Link, useLocation } from "react-router-dom";

export const NavbarSugar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  const isDropdownActive = [
    "/san-pham-bo-sat",
    "/san-pham-gam-nham",
    "/san-pham-soc-bay",
    "/san-pham-chim-vet",
    "/tat-ca-soc-bay",
  ].includes(currentPath);

  const isDropdownActive1 = ["/cham-soc-soc-bay", "/dich-vu-soc-bay"].includes(
    currentPath
  );

  return (
    <div className="navbar bg-gray-200 shadow-sm justify-center rounded-b-lg">
      <div className="flex gap-4">
        <Link to="/san-pham-soc-bay">
          <img
            className="w-10 h-10"
            src="/images/SugarGlider/HomeSugar.gif"
            alt="Home"
          />
        </Link>

        <Link to="/san-pham-cho-cho">
          <button className="btn btn-outline border-2 border-black text-black hover:bg-gray-300 hover:border-2">
            Sản Phẩm Cho Chó
          </button>
        </Link>

        <Link to="/san-pham-cho-meo">
          <button className="btn btn-outline border-2 border-black text-black hover:bg-gray-300 hover:border-2">
            Sản Phẩm Cho Mèo
          </button>
        </Link>

        {/* Dropdown Sản Phẩm Khác */}
        <div className="dropdown dropdown-hover dropdown-end block">
          <div
            tabIndex={0}
            role="button"
            className={`btn btn-outline border-2 border-black text-black ${
              isDropdownActive
                ? "bg-gray-400 border-2 hover:bg-gray-300" 
                : "hover:bg-gray-300 hover:border-2"
            }`}
          >
            Sản Phẩm Khác
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-gray-200 border-2 border-black rounded-box z-1 w-55 shadow-sm mt-0.5 font-semibold"
          >
            <Link to="/san-pham-bo-sat">
              <li
                className={`rounded-lg border-2 mb-1 ${
                  isActive("/san-pham-bo-sat")
                    ? "bg-gray-500 border-black text-white"
                    : "border-transparent hover:bg-gray-300 hover:border-black hover:text-white"
                }`}
              >
                <a>Sản phẩm cho bò sát</a>
              </li>
            </Link>
            <Link to="/san-pham-gam-nham">
              <li
                className={`rounded-lg border-2 mb-1 ${
                  isActive("/san-pham-gam-nham")
                    ? "bg-gray-500 border-black text-white"
                    : "border-transparent hover:bg-gray-300 hover:border-black hover:text-white"
                }`}
              >
                <a>Sản phẩm cho gặm nhấm</a>
              </li>
            </Link>
            <Link to="/san-pham-soc-bay">
              <li
                className={`rounded-lg border-2 mb-1 ${
                  isActive("/san-pham-soc-bay") || isActive("/tat-ca-soc-bay")
                    ? "bg-gray-500 border-black text-white"
                    : "border-transparent hover:bg-gray-300 hover:border-black hover:text-white"
                }`}
              >
                <a>Sản phẩm cho sóc bay</a>
              </li>
            </Link>

            <Link to="/san-pham-chim-vet">
              <li
                className={`rounded-lg border-2 mb-1 ${
                  isActive("/san-pham-chim-vet")
                    ? "bg-gray-500 border-black text-white"
                    : "border-transparent hover:bg-gray-300 hover:border-black hover:text-white"
                }`}
              >
                <a>Sản phẩm cho chim vẹt</a>
              </li>
            </Link>
          </ul>
        </div>

        {/* Spa */}
        <div className="dropdown dropdown-hover dropdown-end block">
          <div
            tabIndex={0}
            role="button"
            className={`btn btn-outline border-2 border-black text-black hover:bg-gray-300 hover:border-2 ${
              isDropdownActive1 ? "bg-gray-300 border-2" : ""
            }`}
          >
            Dịch Vụ Spa
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-gray-200 border-2 border-black rounded-box z-1 w-60 shadow-sm mt-0.5 font-semibold"
          >
            <Link to="/cham-soc-soc-bay">
              <li
                className={`rounded-lg border-2 mb-1 ${
                  isActive("/cham-soc-soc-bay")
                    ? "bg-gray-500 border-black text-white"
                    : "border-transparent hover:bg-gray-300 hover:border-black hover:text-white"
                }`}
              >
                {/* nội dung */}

                <a>Dịch vụ chăm hộ</a>
              </li>
            </Link>
            <Link to="/dich-vu-soc-bay">
              <li
                className={`rounded-lg border-2 mb-1 ${
                  isActive("/dich-vu-soc-bay")
                    ? "bg-gray-500 border-black text-white"
                    : "border-transparent hover:bg-gray-300 hover:border-black hover:text-white"
                }`}
              >
                <a>Vệ sinh & Chăm sóc sức khỏe</a>
              </li>
            </Link>
          </ul>
        </div>

        {/* Khuyến mãi */}
        <Link to="/san-pham-soc-bay-khuyen-mai">
          <button
            className={`btn btn-outline border-2 text-black bg-gray-200 border border-black hover:bg-gray-300 hover:border-2 ${
              isActive("/san-pham-soc-bay-khuyen-mai")
                ? "bg-gray-300 border-2"
                : ""
            }`}
          >
            Khuyến Mãi
          </button>
        </Link>

        {/* Liên hệ */}
        <Link to="/lien-he-soc-bay">
          <button
            className={`btn btn-outline border-2 text-black bg-gray-200 border border-black hover:bg-gray-300 hover:border-2 ${
              isActive("/lien-he-soc-bay") ? "bg-gray-300 border-2" : ""
            }`}
          >
            Liên hệ
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavbarSugar;
