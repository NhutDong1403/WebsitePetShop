import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import TopHeaderWing from "../WingerComponent/TopHeaderWing.jsx";
import NavbarWing from "../WingerComponent/NavbarWing.jsx";

export const HeaderWing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const menuRef = useRef(null);
  const searchRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

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
      <div className="fixed top-0 left-0 w-full z-50 navbar bg-indigo-300/70 backdrop-blur-md py-5 shadow-sm">
        <div className="container mx-auto w-full flex justify-between items-center gap-4 px-4">
          {/* Menu + Logo */}
          <div className="flex items-center gap-2 relative" ref={menuRef}>
            <button
              onClick={toggleMenu}
              className="border-transparent hover:border-indigo-400 transition rounded-md cursor-pointer"
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

            <Link to="/san-pham-chim-vet">
              <img
                className="w-15 h-15 rounded-full border-4 border-white"
                src="/images/Winger/LogoWinger.png"
                alt="Logo"
              />
            </Link>

            {/* Dropdown menu */}
            <div
              className={`absolute left-0 z-50 w-[90vw] sm:w-96 bg-indigo-200/90 border-4 border-indigo-600 p-4 rounded-2xl shadow-md max-h-[80vh] overflow-y-auto scrollbar-hide transition-all duration-300 ease-in-out
              ${
                isMenuOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto top-full mt-2"
                  : "opacity-0 -translate-y-3 pointer-events-none top-full"
              }`}
            >
              {/* Accordion 1 */}
              <div className="collapse collapse-arrow border-4 border-indigo-600 mb-2 bg-indigo-400 rounded-xl">
                <input type="checkbox" />
                <div className="collapse-title font-bold text-white">
                  Các Dòng Chim Vẹt
                </div>
                <div className="collapse-content">
                  <ul className="menu text-sm">
                    <li className="hover:bg-indigo-500 font-semibold text-white rounded-lg">
                      <Link to="/san-pham-chim-vet">
                        Xem tất cả chim vẹt tại PawShop
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Accordion 2 */}
              <div className="collapse collapse-arrow border-4 border-indigo-600 mb-2 bg-indigo-400 rounded-xl">
                <input type="checkbox" />
                <div className="collapse-title font-bold text-white">
                  Phụ Kiện Cho Vẹt
                </div>
                <div className="collapse-content">
                  <ul className="menu text-sm text-white">
                    <li className="hover:bg-indigo-500 font-semibold rounded-lg">
                      <Link to="/chuong-nuoi-chim-vet">Lồng nuôi & Phụ kiện cho chim vẹt</Link>
                    </li>
                    <li className="hover:bg-indigo-500 font-semibold rounded-lg">
                      <Link to="/do-choi-chim-vet">Đồ chơi cho chim vẹt</Link>
                    </li>
                    <li className="hover:bg-indigo-500 font-semibold rounded-lg">
                      <Link to="/thuc-an-chim-vet">Thức ăn cho chim vẹt</Link>
                    </li>
                    <li className="hover:bg-indigo-500 font-semibold rounded-lg">
                      <Link to="/thuoc-men-chim-vet">Thuốc men cho chim vẹt</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Accordion 3 */}
              <div className="collapse collapse-arrow border-4 border-indigo-600 mb-2 bg-indigo-400 rounded-xl">
                <input type="checkbox" />
                <div className="collapse-title font-bold text-white">
                  Dịch Vụ Cho Vẹt
                </div>
                <div className="collapse-content">
                  <ul className="menu text-sm">
                    <li className="hover:bg-indigo-500 text-white font-semibold rounded-lg">
                      <Link to="/dich-vu-chim-vet">Dịch vụ chăm hộ</Link>
                    </li>
                    <li className="hover:bg-indigo-500 text-white    font-semibold rounded-lg">
                      <Link to="/cham-soc-chim-vet">Vệ sinh & Chăm sóc sức khỏe</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Extra links */}
              <ul className="menu text-sm font-semibold mt-2 w-full">
                <li>
                  <Link
                    className="flex justify-left mb-2 font-bold px-4 py-3 h-14 sm:h-16 border-4 rounded-lg bg-indigo-400 hover:bg-indigo-500 w-full block text-left text-white border-indigo-600"
                    to="/san-pham-chim-vet-khuyen-mai"
                  >
                    Khuyến Mãi
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex justify-left mb-2 font-bold px-4 py-3 h-14 sm:h-16 border-4 rounded-lg bg-indigo-400 hover:bg-indigo-500 w-full block text-left text-white border-indigo-600"
                    to="/lien-he-chim-vet"
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

          {/* Cart + Profile + Search mobile */}
          <div className="flex items-center gap-4">
            <div className="relative block md:hidden" ref={searchRef}>
              <button onClick={toggleSearch}>
                <svg
                  className="h-8 w-8 text-black"
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
              </button>

              {isSearchOpen && (
                <div className="fixed top-[60px] left-0 w-full z-60 px-4">
                  <div className="flex items-center mt-11 gap-2 bg-indigo-100 border-2 border-black rounded-xl shadow-md px-4 py-2">
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
                    <input
                      type="text"
                      placeholder="Tìm kiếm sản phẩm..."
                      autoFocus
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="flex-grow px-2 py-3 text-sm outline-none bg-transparent"
                    />
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
            <Link to="/gio-hang-chim-vet">
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
              <ul className="dropdown-content border-2 border-black menu bg-indigo-100 rounded-box z-10 w-52 p-2 shadow-md font-semibold">
                <li className="hover:bg-indigo-300 border-2 border-transparent hover:border-black hover:rounded-lg font-semibold">
                  <Link to="/dang-nhap">Đăng nhập</Link>
                </li>
                <li className="hover:bg-indigo-300 border-2 border-transparent hover:border-black hover:rounded-lg font-semibold">
                  <Link to="/dang-ky">Đăng ký</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[100px]"></div>

      {/* Navbar desktop */}
      <div className="hidden md:block">
        <NavbarWing />
      </div>

      <TopHeaderWing />
    </>
  );
};

export default HeaderWing;
