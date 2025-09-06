import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarReptile from "../ReptileComponent/NavbarReptile";
import TopHeaderReptile from "./TopHeaderReptile";

export const HeaderReptile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // 👈 state search mobile
  const menuRef = useRef(null);
  const searchRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="fixed left-0 w-full z-50 navbar bg-lime-700/70 backdrop-blur-md py-5 shadow-sm">
        <div className="container mx-auto w-full flex justify-between items-center gap-4 px-4">
          {/* MENU ICON + LOGO */}
          <div className="flex items-center gap-2 relative" ref={menuRef}>
            {/* Menu icon */}
            <button
              onClick={toggleMenu}
              className="border-transparent hover:border-lime-400 transition rounded-md cursor-pointer"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
            {/* Logo */}
            <Link to="/san-pham-bo-sat">
              <img
                className="w-15 h-15 rounded-full border-4 border-white"
                src="/images/Reptile/LogoReptile.png"
                alt="Logo"
              />
            </Link>
            {/* Dropdown menu responsive */}
            <div
              className={`absolute left-0 z-50 w-[90vw] sm:w-85 bg-lime-500/90 border-4 border-emerald-900 p-4 rounded-2xl shadow-md max-h-[80vh] overflow-y-auto scrollbar-hide transition-all duration-300 ease-in-out
    ${
      isMenuOpen
        ? "opacity-100 translate-y-0 pointer-events-auto top-full mt-2"
        : "opacity-0 -translate-y-3 pointer-events-none top-full"
    }`}
            >
              {/* Accordion 1 */}
              <div className="collapse collapse-arrow text-white border-4 border-emerald-900 mb-2 bg-green-700 rounded-xl">
                <input type="checkbox" />
                <div className="collapse-title font-bold text-white">
                  Các Dòng Bò Sát
                </div>
                <div className="collapse-content">
                  <ul className="menu text-sm">
                    <li className="hover:bg-green-600 font-semibold rounded-lg">
                      <Link to="/danh-muc-ran">Các Loài Rắn</Link>
                    </li>
                    <li className="hover:bg-green-600 font-semibold rounded-lg">
                      <Link to="/danh-muc-tran">Các Loài Trăn</Link>
                    </li>
                    <li className="hover:bg-green-600 font-semibold rounded-lg">
                      <Link to="/danh-muc-than-lan">Các Loài Thằn Lằn</Link>
                    </li>
                    <li className="hover:bg-green-600 font-semibold rounded-lg">
                      <Link to="/danh-muc-rua">Các Loài Rùa Cạn</Link>
                    </li>
                    <li className="hover:bg-green-600 font-semibold rounded-lg">
                      <Link to="/danh-muc-rua-nuoc">Các Loài Rùa Nước</Link>
                    </li>
                    <li className="hover:bg-green-600 font-semibold rounded-lg">
                      <Link to="/danh-muc-chan-khop">Các Loài Chân Khớp</Link>
                    </li>
                    <li className="hover:bg-green-600 font-semibold rounded-lg">
                      <Link to="/danh-muc-tac-ke">Các Loài Tắc Kè</Link>
                    </li>
                    <li className="hover:bg-green-600 font-semibold rounded-lg">
                      <Link to="/danh-muc-ky-da">Các Loài Kỳ Đà</Link>
                    </li>
                    <li className="hover:bg-green-600 font-semibold rounded-lg">
                      <Link to="/danh-muc-rong">Các Loài Rồng</Link>
                    </li>
                    <li className="hover:bg-green-600 font-semibold rounded-lg">
                      <Link to="/danh-muc-luong-cu">Các Loài Lưỡng Cư</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Accordion 2 */}
              <div className="collapse collapse-arrow border-4 border-emerald-900 mb-2 bg-green-700 rounded-xl">
                <input type="checkbox" />
                <div className="collapse-title font-bold text-white">
                  Phụ Kiện Cho Bò Sát
                </div>
                <div className="collapse-content">
                  <ul className="menu text-sm text-white">
                    <li className="hover:bg-green-600 font-semibold rounded-lg">
                      <Link to="/tank-kinh">Tank kính cho bò sát</Link>
                    </li>
                    <li className="hover:bg-green-600 font-semibold rounded-lg">
                      <Link to="/tank-nhua">Tank nhựa cho bò sát</Link>
                    </li>
                    <li className="hover:bg-green-600 font-semibold rounded-lg">
                      <Link to="/tank-mica">Tank mica cho bò sát</Link>
                    </li>
                    <li className="hover:bg-green-600 font-semibold rounded-lg">
                      <Link to="/tank-acrylic">Tank acrylic cho bò sát</Link>
                    </li>
                    <li className="hover:bg-green-600 font-semibold rounded-lg">
                      <Link to="/chen-nuoc">Chén nước cho bò sát</Link>
                    </li>
                    <li className="hover:bg-green-600 font-semibold rounded-lg">
                      <Link to="/den-suoi">Đèn sưởi cho bò sát</Link>
                    </li>
                    <li className="hover:bg-green-600 font-semibold rounded-lg">
                      <Link to="/do-nhiet-do">Đo nhiệt độ & độ ẩm</Link>
                    </li>
                    <li className="hover:bg-green-600 font-semibold rounded-lg">
                      <Link to="/do-trang-tri">Đồ trang trí</Link>
                    </li>
                    <li className="hover:bg-green-600 font-semibold rounded-lg">
                      <Link to="/hang-tru">Hang trú</Link>
                    </li>
                    <li className="hover:bg-green-600 font-semibold rounded-lg">
                      <Link to="/thuc-pham-bo-sung">Thực phẩm bổ sung</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Accordion 3 */}
              <div className="collapse collapse-arrow text-white border-4 border-emerald-900 mb-2 bg-green-700 rounded-xl">
                <input type="checkbox" />
                <div className="collapse-title font-bold text-white">
                  Dịch Vụ Spa
                </div>
                <div className="collapse-content">
                  <ul className="menu text-sm">
                    <li className="hover:bg-green-600 font-semibold rounded-lg">
                      <Link to="/cham-soc-bo-sat">Dịch vụ chăm hộ</Link>
                    </li>
                    <li className="hover:bg-green-600 font-semibold rounded-lg">
                      <Link to="/dich-vu-bo-sat">
                        Vệ sinh & Chăm sóc sức khỏe
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Extra links */}
              <ul className="menu text-sm font-semibold mt-2 w-full">
                <li>
                  <Link
                    to="/san-pham-bo-sat-khuyen-mai"
                    className="flex justify-left mb-2 font-bold px-4 py-3 h-14 sm:h-16 border-4 rounded-lg bg-green-700 hover:bg-green-600 w-full block text-left text-white border border-emerald-900"
                  >
                    Khuyến Mãi
                  </Link>
                </li>
                <li>
                  <Link
                    to="/lien-he-bo-sat"
                    className="flex justify-left mb-2 font-bold px-4 py-3 h-14 sm:h-16 border-4 rounded-lg bg-green-700 hover:bg-green-600 w-full block text-left text-white border border-emerald-900"
                  >
                    Liên Hệ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Search desktop */}
          <div className="flex-grow max-w-xl hidden md:block">
            <label className="flex items-center border-2 border-black rounded-full px-3 py-2 w-full">
              <svg
                className="h-[1em] opacity-50 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                required
                placeholder="Tìm kiếm sản phẩm..."
                className="flex-grow outline-none bg-transparent"
              />
            </label>
          </div>

          {/* Cart + Profile + Search Mobile */}
          <div className="flex items-center gap-4">
            {/* Icon search chỉ hiện mobile */}
            <div className="relative block md:hidden" ref={searchRef}>
              <button onClick={toggleSearch}>
                <svg
                  className="h-8 w-8 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8" strokeWidth="2"></circle>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35"
                  />
                </svg>
              </button>

              {/* Dropdown input search */}
              {isSearchOpen && (
                <div className="fixed top-[60px] left-0 w-full z-60 px-4">
                  <div className="flex items-center mt-11 gap-2 bg-lime-100 border-2 border-black rounded-xl shadow-md px-4 py-2">
                    {/* Icon search */}
                    <svg
                      className="h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <circle cx="11" cy="11" r="8" strokeWidth="2" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-4.35-4.35"
                      />
                    </svg>

                    {/* Input */}
                    <input
                      type="text"
                      placeholder="Tìm kiếm sản phẩm..."
                      autoFocus
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="flex-grow px-2 py-3 text-sm outline-none bg-transparent"
                    />

                    {/* Close / Clear button */}
                    {searchValue && (
                      <button
                        onClick={() => setSearchValue("")}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Cart */}
            <Link to="/gio-hang-bo-sat">
              <div className="relative w-10 h-10 cursor-pointer">
                <img src="/images/Cart.gif" alt="Cart" className="w-10 h-10" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  12
                </span>
              </div>
            </Link>

            {/* Profile */}
            <div className="dropdown dropdown-hover dropdown-end block">
              <div tabIndex={0} role="button">
                <img
                  src="/images/Profile.gif"
                  alt="Profile"
                  className="w-10 h-10 cursor-pointer"
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content border-2 border-black menu bg-lime-100 rounded-box z-10 w-52 p-2 shadow-md font-semibold"
              >
                <li className="hover:bg-lime-300 border-2 border-transparent hover:border-black hover:rounded-lg font-semibold">
                  <Link to="/dang-nhap">Đăng nhập</Link>
                </li>
                <li className="hover:bg-lime-300 border-2 border-transparent hover:border-black hover:rounded-lg font-semibold">
                  <Link to="/dang-ky">Đăng ký</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer tránh header che */}
      <div className="h-[100px]"></div>

      {/* Navbar desktop */}
      <div className="hidden md:block">
        <NavbarReptile />
      </div>
    </>
  );
};

export default HeaderReptile;
