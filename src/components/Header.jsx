import { Link } from "react-router-dom";
import { TopHeader } from "./TopHeader.jsx";
import { Navbar } from "./Navbar.jsx";
import React, { useState, useRef, useEffect } from "react";
import { useUser } from "../contexts/UserContext"; // dùng context

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { user, logout } = useUser(); // lấy user từ context

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Đóng menu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 navbar bg-pink-200/50 backdrop-blur-md py-5 shadow-sm">
        <div className="container mx-auto w-full flex justify-between items-center gap-4 px-4">
          {/* Menu + Logo */}
          <div className="flex items-center gap-2 relative" ref={menuRef}>
            <button
              onClick={toggleMenu}
              className="border-transparent hover:border-pink-200 transition rounded-md cursor-pointer"
            >
              <div className="transition-transform duration-300 ease-in-out">
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-black transform rotate-180 transition duration-300 ease-in-out"
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
                    className="h-8 w-8 transition duration-300 ease-in-out"
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
              </div>
            </button>

            <Link to="/">
              <img
                className="w-15 h-15 rounded-full border-4 border-white"
                src="/images/Logo.png"
                alt="Logo"
              />
            </Link>

            <div
              className={`absolute left-0 z-50 w-[90vw] sm:w-85 bg-pink-100 border-4 border-pink-500 p-4 rounded-2xl shadow-md max-h-[80vh] overflow-y-auto scrollbar-hide transition-all duration-300 ease-in-out
               ${
                 isMenuOpen
                   ? "opacity-100 translate-y-0 pointer-events-auto top-full mt-2"
                   : "opacity-0 -translate-y-3 pointer-events-none top-full"
               }`}
            >
              {/* Accordion 1 */}
              <div className="collapse collapse-arrow border-4 border-pink-400 bg-pink-300 mb-2 rounded-xl">
                <input type="checkbox" />
                <div className="collapse-title font-bold text-gray-50">
                  Phụ Kiện Cho Chó
                </div>
                <div className="collapse-content">
                  <ul className="menu text-sm text-gray-50">
                    <li className="hover:bg-pink-500 font-semibold rounded-lg">
                      <Link to="/thuc-an-cho-cho">
                        Thức ăn & Dinh dưỡng cho chó
                      </Link>
                    </li>
                    <li className="hover:bg-pink-500 font-semibold rounded-lg">
                      <Link to="/ve-sinh-cho-cho">
                        Vệ sinh & Khử mùi cho chó
                      </Link>
                    </li>
                    <li className="hover:bg-pink-500 font-semibold rounded-lg">
                      <Link to="/phu-kien-cho-cho">
                        Phụ kiện & Vật dụng cho chó
                      </Link>
                    </li>
                    <li className="hover:bg-pink-500 font-semibold rounded-lg">
                      <Link to="/thuoc-men-cho-cho">
                        Thuốc men & Chăm sóc cho chó
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="collapse collapse-arrow border-4 border-pink-400 bg-pink-300 mb-2 rounded-xl">
                <input type="checkbox" />
                <div className="collapse-title font-bold text-gray-50">
                  Phụ Kiện Cho Mèo
                </div>
                <div className="collapse-content">
                  <ul className="menu text-sm text-gray-50">
                    <li className="hover:bg-pink-500 font-semibold rounded-lg">
                      <Link to="/thuc-an-cho-meo">
                        Thức ăn & Dinh dưỡng cho mèo
                      </Link>
                    </li>
                    <li className="hover:bg-pink-500 font-semibold rounded-lg">
                      <Link to="/ve-sinh-cho-meo">
                        Vệ sinh & Khử mùi cho mèo
                      </Link>
                    </li>
                    <li className="hover:bg-pink-500 font-semibold rounded-lg">
                      <Link to="/phu-kien-cho-meo">
                        Phụ kiện & Vật dụng cho mèo
                      </Link>
                    </li>
                    <li className="hover:bg-pink-500 font-semibold rounded-lg">
                      <Link to="/thuoc-men-cho-meo">
                        Thuốc men & Chăm sóc cho mèo
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="collapse collapse-arrow border-4 border-pink-400 bg-pink-300 mb-2 rounded-xl">
                <input type="checkbox" />
                <div className="collapse-title font-bold text-gray-50">
                  Sản Phẩm Khác
                </div>
                <div className="collapse-content">
                  <ul className="menu text-sm text-gray-50">
                    <li className="hover:bg-pink-500 font-semibold rounded-lg">
                      <Link to="/san-pham-bo-sat">Sản phẩm cho bò sát</Link>
                    </li>
                    <li className="hover:bg-pink-500 font-semibold rounded-lg">
                      <Link to="/san-pham-gam-nham">Sản phẩm cho gặm nhấm</Link>
                    </li>
                    <li className="hover:bg-pink-500 font-semibold rounded-lg">
                      <Link to="/san-pham-soc-bay">Sản phẩm cho sóc bay</Link>
                    </li>
                    <li className="hover:bg-pink-500 font-semibold rounded-lg">
                      <Link to="/san-pham-chim-vet">Sản phẩm cho chim vẹt</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Accordion 3 */}
              <div className="collapse collapse-arrow text-gray-50 border-4 border-pink-400 bg-pink-300 mb-2 rounded-xl">
                <input type="checkbox" />
                <div className="collapse-title font-bold text-gray-50">
                  Dịch Vụ Spa
                </div>
                <div className="collapse-content">
                  <ul className="menu text-sm">
                    <li className="hover:bg-pink-500 font-semibold rounded-lg">
                      <Link to="/dich-vu-1">Dịch vụ chăm hộ</Link>
                    </li>
                    <li className="hover:bg-pink-500 font-semibold rounded-lg">
                      <Link to="/dich-vu-2">Vệ sinh & Chăm sóc sức khỏe</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Extra links */}
              <ul className="menu text-sm font-semibold mt-2 w-full">
                <li>
                  <Link
                    to="/san-pham-khuyen-mai"
                    className="flex justify-left mb-2 font-bold px-4 py-3 h-14 sm:h-16 border-4 rounded-lg border-pink-400 bg-pink-300 mb-2 w-full block text-left text-gray-50 border border-emerald-900"
                  >
                    Khuyến Mãi
                  </Link>
                </li>
                <li>
                  <Link
                    to="/lien-he"
                    className="flex justify-left mb-2 font-bold px-4 py-3 h-14 sm:h-16 border-4 rounded-lg border-pink-400 bg-pink-300 mb-2 w-full block text-left text-gray-50 border border-emerald-900"
                  >
                    Liên Hệ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Search */}
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

          {/* Cart + Profile */}
          <div className="flex items-center gap-4">
            <Link to="/gio-hang">
              <div className="relative w-10 h-10 cursor-pointer">
                <img src="/images/Cart.gif" alt="Cart" className="w-10 h-10" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  12
                </span>
              </div>
            </Link>

            <div className="dropdown dropdown-hover dropdown-end block">
              <div tabIndex={0} role="button">
                <img
                  src={user?.avatar || "/images/Profile.gif"}
                  alt="Profile"
                  className="w-10 h-10 cursor-pointer rounded-full"
                />
              </div>
              <ul className="dropdown-content border-2 border-black menu bg-pink-100 rounded-box z-10 w-52 p-2 shadow-md font-semibold">
                {user ? (
                  <>
                    <li>
                      <Link to="/profile">Thông tin tài khoản</Link>
                    </li>
                    <li>
                      <button onClick={logout}>Đăng xuất</button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/dang-nhap">Đăng nhập</Link>
                    </li>
                    <li>
                      <Link to="/dang-ky">Đăng ký</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[100px]"></div>

      {/* Navbar */}
      <div className="hidden md:block">
        <Navbar />
      </div>
      <TopHeader />
    </>
  );
};

export default Header;
