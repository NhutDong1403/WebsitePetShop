import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

export const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const path = location.pathname;
  const isOtherProductPage =
    path.startsWith("/san-pham-bo-sat") ||
    path.startsWith("/san-pham-gam-nham") ||
    path.startsWith("/san-pham-soc-bay") ||
    path.startsWith("/san-pham-chim-vet");

  const isOtherProductPage1 =
    path.startsWith("/dich-vu-1") || path.startsWith("/dich-vu-2");

  const isActive = (path) => currentPath === path;

  return (
    <div className="navbar bg-pink-200 shadow-sm rounded-b-lg px-4 flex justify-center items-center">
      {/* Logo */}
      <div className="flex-shrink-0 mr-5">
        <Link to="/">
          <img className="w-10 h-10" src="/images/Home1.gif" alt="Home" />
        </Link>
      </div>

      {/* Menu desktop */}
      <div className="hidden md:flex gap-4 justify-center items-center">
        {/* --- Các button giữ nguyên code cũ của bạn --- */}
        <Link to="/san-pham-cho-cho">
          <button
            className={`btn border-2 ${
              currentPath === "/san-pham-cho-cho"
                ? "bg-pink-300 border-white"
                : "bg-pink-200 border-black"
            } hover:bg-pink-300 hover:border-white`}
          >
            Sản Phẩm Cho Chó
          </button>
        </Link>

        <Link to="/san-pham-cho-meo">
          <button
            className={`btn border-2 ${
              currentPath === "/san-pham-cho-meo"
                ? "bg-pink-300 border-white"
                : "bg-pink-200 border-black"
            } hover:bg-pink-300 hover:border-white`}
          >
            Sản Phẩm Cho Mèo
          </button>
        </Link>

        {/* Dropdown sản phẩm khác */}
        <div className="dropdown dropdown-hover dropdown-end block">
          <div
            tabIndex={0}
            role="button"
            className={`btn border-2 ${
              isOtherProductPage
                ? "bg-pink-300 border-white"
                : "bg-pink-200 border-black"
            } hover:bg-pink-300 hover:border-white`}
          >
            Sản Phẩm Khác
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content mt-0.5 border-2 border-black menu bg-pink-100 rounded-box z-10 w-60 p-2 shadow-md font-semibold"
          >
            <li className="hover:bg-pink-300 border-2 border-transparent hover:border-black hover:text-white hover:rounded-lg font-semibold">
              <Link to="/san-pham-bo-sat">Sản phẩm cho bò sát</Link>
            </li>
            <li className="hover:bg-pink-300 border-2 border-transparent hover:border-black hover:text-white hover:rounded-lg font-semibold">
              <Link to="/san-pham-gam-nham">Sản phẩm cho gặm nhấm</Link>
            </li>
            <li className="hover:bg-pink-300 border-2 border-transparent hover:border-black hover:text-white hover:rounded-lg font-semibold">
              <Link to="/san-pham-soc-bay">Sản phẩm cho sóc bay</Link>
            </li>
            <li className="hover:bg-pink-300 border-2 border-transparent hover:border-black hover:text-white hover:rounded-lg font-semibold">
              <Link to="/san-pham-chim-vet">Sản phẩm cho chim vẹt</Link>
            </li>
          </ul>
        </div>

        {/* Dropdown dịch vụ */}
        <div className="dropdown dropdown-hover dropdown-end block">
          <div
            tabIndex={0}
            role="button"
            className={`btn border-2 ${
              isOtherProductPage1
                ? "bg-pink-300 border-white"
                : "bg-pink-200 border-black"
            } hover:bg-pink-300 hover:border-white`}
          >
            Dịch Vụ Spa
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content mt-0.5 border-2 border-black menu bg-pink-100 rounded-box 
               z-10 w-60 p-2 shadow-md font-semibold"
          >
            <li
              className={`hover:bg-pink-300 hover:border-black hover:text-white hover:rounded-lg font-semibold ${
                currentPath === "/dich-vu-1"
                  ? "border-2 bg-pink-300 border-black text-white rounded-lg"
                  : "border-transparent"
              }`}
            >
              <Link to="/dich-vu-1">Dịch vụ chăm hộ</Link>
            </li>

            <li
              className={`hover:bg-pink-300 hover:border-black hover:text-white hover:rounded-lg mt-1 font-semibold ${
                currentPath === "/dich-vu-2"
                  ? "border-2 bg-pink-300 border-black text-white rounded-lg"
                  : "border-transparent"
              }`}
            >
              <Link to="/dich-vu-2">Vệ sinh & Chăm sóc cơ bản</Link>
            </li>
          </ul>
        </div>

        <Link to="/san-pham-khuyen-mai">
          <button
            className={`btn border-2 ${
              currentPath === "/san-pham-khuyen-mai"
                ? "bg-pink-300 border-white"
                : "bg-pink-200 border-black"
            } hover:bg-pink-300 hover:border-white`}
          >
            Khuyến Mãi
          </button>
        </Link>

        <Link to="/lien-he">
          <button
            className={`btn border-2 ${
              currentPath === "/lien-he"
                ? "bg-pink-300 border-white"
                : "bg-pink-200 border-black"
            } hover:bg-pink-300 hover:border-white`}
          >
            Liên hệ
          </button>
        </Link>
      </div>

      {/* Menu mobile (ẩn desktop) */}
      <div className="md:hidden relative ml-auto">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="btn bg-pink-200 border-none hover:bg-pink-300"
        >
          ☰
        </button>

        {/* Dropdown menu mobile có hiệu ứng */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute right-0 top-full mt-2 w-64 bg-pink-100 shadow-md rounded-lg flex flex-col gap-2 p-3 z-50"
            >
              <Link to="/san-pham-cho-cho" onClick={() => setMenuOpen(false)}>
                <button className="w-full text-left px-3 py-2 rounded bg-pink-200 hover:bg-pink-300">
                  Sản Phẩm Cho Chó
                </button>
              </Link>
              <Link to="/san-pham-cho-meo" onClick={() => setMenuOpen(false)}>
                <button className="w-full text-left px-3 py-2 rounded bg-pink-200 hover:bg-pink-300">
                  Sản Phẩm Cho Mèo
                </button>
              </Link>
              <Link to="/san-pham-bo-sat" onClick={() => setMenuOpen(false)}>
                <button className="w-full text-left px-3 py-2 rounded bg-pink-200 hover:bg-pink-300">
                  Sản phẩm cho Bò Sát
                </button>
              </Link>
              <Link to="/san-pham-gam-nham" onClick={() => setMenuOpen(false)}>
                <button className="w-full text-left px-3 py-2 rounded bg-pink-200 hover:bg-pink-300">
                  Sản phẩm cho Gặm Nhấm
                </button>
              </Link>
              <Link to="/dich-vu-1" onClick={() => setMenuOpen(false)}>
                <button className="w-full text-left px-3 py-2 rounded bg-pink-200 hover:bg-pink-300">
                  Vệ sinh & Chăm sóc cơ bản
                </button>
              </Link>
              <Link to="/dich-vu-2" onClick={() => setMenuOpen(false)}>
                <button className="w-full text-left px-3 py-2 rounded bg-pink-200 hover:bg-pink-300">
                  Làm đẹp & Spa nâng cao
                </button>
              </Link>
              <Link
                to="/san-pham-khuyen-mai"
                onClick={() => setMenuOpen(false)}
              >
                <button className="w-full text-left px-3 py-2 rounded bg-pink-200 hover:bg-pink-300">
                  Khuyến Mãi
                </button>
              </Link>
              <Link to="/lien-he" onClick={() => setMenuOpen(false)}>
                <button className="w-full text-left px-3 py-2 rounded bg-pink-200 hover:bg-pink-300">
                  Liên hệ
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
