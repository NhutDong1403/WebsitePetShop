import React from "react";
import AdminHeader from "../../../components/AdminComponent/AdminHeader";
import { Link, useNavigate } from "react-router-dom"; // ✅ useNavigate để điều hướng
import Breadcrumbs from "../../../components/Breadcrumbs";
import { useUser } from "../../../contexts/UserContext"; // ✅ lấy logout từ context

export const AdminHomePage = () => {
  const navigate = useNavigate();
  const { logout } = useUser(); // ✅ logout từ context

  const handleLogout = () => {
    logout(); // xoá token + reset user
    navigate("/"); // quay về trang chủ
  };

  return (
    <div className="select-none">
      <AdminHeader />
      <div className="drawer drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        {/* MAIN CONTENT */}
        <div className="drawer-content justify-start flex flex-col p-6 w-full bg-gray-50 min-h-screen">
          <p className="text-4xl font-extrabold mb-8 text-gray-800 drop-shadow-md">
            📊 Dashboard
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Breadcrumbs
              links={[
                { name: "Trang chủ người dùng", to: "/" },
                { name: "Trang chủ Admin", to: "/Admin" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-fade-in">
              <h2 className="font-semibold text-xl text-gray-700 mb-2 flex items-center gap-2">
                🛍 Sản phẩm
              </h2>
              <p className="text-2xl font-bold text-gray-900">120</p>
              <p className="text-gray-500 mt-1">sản phẩm</p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-fade-in">
              <h2 className="font-semibold text-xl text-gray-700 mb-2 flex items-center gap-2">
                📦 Đơn hàng
              </h2>
              <p className="text-2xl font-bold text-gray-900">35</p>
              <p className="text-gray-500 mt-1">đơn hàng hôm nay</p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-fade-in">
              <h2 className="font-semibold text-xl text-gray-700 mb-2 flex items-center gap-2">
                👥 Người dùng
              </h2>
              <p className="text-2xl font-bold text-gray-900">560</p>
              <p className="text-gray-500 mt-1">thành viên</p>
            </div>
          </div>

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden self-center mt-6"
          >
            Open drawer
          </label>
        </div>

        {/* SIDEBAR */}
        <div className="drawer-side w-[500px] border-r-2 border-black shadow-xl scrollbar-hide">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <div className="flex flex-col bg-base-200 text-base-content min-h-screen w-80 font-semibold text-lg overflow-auto scrollbar-hide">
            {/* MENU SCROLLABLE */}
            <ul className="menu p-4 flex-1">
              <li>
                <a className="text-xl hover:bg-gray-300 rounded-lg">
                  🏠 Dashboard
                </a>
              </li>
              <li>
                <details>
                  <summary className="text-xl hover:bg-gray-300 rounded-lg whitespace-normal break-words">
                    📋 Thông tin tài khoản
                  </summary>
                  <ul className="space-y-2 ml-4 text-base w-full">
                    <Link to="/Admin/chi-tiet-tai-khoan">
                      <li className="ml-3 mb-1 mt-1 hover:bg-gray-500 p-2 rounded-lg hover:text-white">
                        Chi tiết tài khoản
                      </li>
                    </Link>
                  </ul>
                </details>
              </li>

              <li>
                <details className="w-full">
                  <summary className="flex items-center text-xl rounded-lg hover:bg-gray-300 w-full cursor-pointer list-none">
                    <span>📦</span>
                    <span className="whitespace-normal break-words">
                      Quản lý Danh mục Sản phẩm
                    </span>
                  </summary>

                  <ul className="space-y-2 ml-4 text-base w-full">
                    {/* Chó mèo */}
                    <li>
                      <details className="w-full">
                        <summary className="w-full">🐾 Chó mèo</summary>
                        <ul className="space-y-2 ml-6 text-sm w-full">
                          <Link to="/Admin/danh-muc-cho-cho">
                            <li className="mt-1 w-full hover:bg-gray-500 p-2 rounded-lg hover:text-white">
                              Sản phẩm cho chó
                            </li>
                          </Link>
                          <Link to="/Admin/danh-muc-cho-meo">
                            <li className="mb-2 w-full hover:bg-gray-500 p-2 rounded-lg hover:text-white">
                              Sản phẩm cho mèo
                            </li>
                          </Link>
                        </ul>
                      </details>
                    </li>

                    {/* Bò sát */}
                    <li>
                      <details className="w-full">
                        <summary className="w-full">🐾 Bò sát</summary>
                        <ul className="space-y-2 ml-6 text-sm w-full">
                          <Link to="/Admin/danh-muc-bo-sat">
                            <li className="mt-1 w-full hover:bg-gray-500 p-2 rounded-lg hover:text-white">
                              Thú cưng bò sát
                            </li>
                          </Link>
                          <Link to="/Admin/danh-muc-phu-kien-bo-sat">
                            <li className="mb-2 w-full hover:bg-gray-500 p-2 rounded-lg hover:text-white">
                              Phụ kiện bò sát
                            </li>
                          </Link>
                        </ul>
                      </details>
                    </li>

                    {/* Gặm nhắm */}
                    <li>
                      <details className="w-full">
                        <summary className="w-full">🐾 Gặm nhắm</summary>
                        <ul className="space-y-2 ml-6 text-sm w-full">
                          <Link to="/Admin/danh-muc-gam-nham">
                            <li className="mt-1 w-full hover:bg-gray-500 p-2 rounded-lg hover:text-white">
                              Thú cưng gặm nhắm
                            </li>
                          </Link>
                          <Link to="/Admin/danh-muc-phu-kien-gam-nham">
                            <li className="mb-2 w-full hover:bg-gray-500 p-2 rounded-lg hover:text-white">
                              Phụ kiện gặm nhắm
                            </li>
                          </Link>
                        </ul>
                      </details>
                    </li>

                    {/* Sóc bay */}
                    <li>
                      <details className="w-full">
                        <summary className="w-full">🐾 Sóc bay</summary>
                        <ul className="space-y-2 ml-6 text-sm w-full">
                          <Link to="/Admin/danh-muc-soc-bay">
                            <li className="mt-1 w-full hover:bg-gray-500 p-2 rounded-lg hover:text-white">
                              Thú cưng sóc bay
                            </li>
                          </Link>
                          <Link to="/Admin/danh-muc-phu-kien-soc-bay">
                            <li className="mb-2 w-full hover:bg-gray-500 p-2 rounded-lg hover:text-white">
                              Phụ kiện sóc bay
                            </li>
                          </Link>
                        </ul>
                      </details>
                    </li>

                    {/* Chim vẹt */}
                    <li>
                      <details className="w-full">
                        <summary className="w-full">🐾 Chim vẹt</summary>
                        <ul className="space-y-2 ml-6 text-sm w-full">
                          <Link to="/Admin/danh-muc-chim-vet">
                            <li className="mt-1 w-full hover:bg-gray-500 p-2 rounded-lg hover:text-white">
                              Thú cưng chim vẹt
                            </li>
                          </Link>
                          <Link to="/Admin/danh-muc-phu-kien-chim-vet">
                            <li className="mt-1 w-full hover:bg-gray-500 p-2 rounded-lg hover:text-white">
                              Phụ kiện chim vẹt
                            </li>
                          </Link>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <details className="w-full">
                  <summary className="text-xl hover:bg-gray-300 rounded-lg whitespace-normal break-words">
                    📦 Quản lý Sản phẩm
                  </summary>
                  <ul className="space-y-2 ml-4 text-base w-full">
                    {/* Chó mèo */}
                    <li>
                      <details className="w-full">
                        <summary className="w-full">🐾 Chó mèo</summary>
                        <ul className="space-y-2 ml-6 text-sm w-full">
                          <Link to="/Admin/them-san-pham-cho-cho">
                            <li className="mt-1 w-full hover:bg-gray-500 p-2 rounded-lg hover:text-white">
                              Sản phẩm cho chó
                            </li>
                          </Link>
                          <Link to="/Admin/them-san-pham-cho-meo">
                            <li className="mb-2 w-full hover:bg-gray-500 p-2 rounded-lg hover:text-white">
                              Sản phẩm cho mèo
                            </li>
                          </Link>
                        </ul>
                      </details>
                    </li>

                    {/* Bò sát */}
                    <li>
                      <details className="w-full">
                        <summary className="w-full">🐾 Bò sát</summary>
                        <ul className="space-y-2 ml-6 text-sm w-full">
                          <Link to="/Admin/them-thu-cung-bo-sat">
                            <li className="mt-1 w-full hover:bg-gray-500 p-2 rounded-lg hover:text-white">
                              Thú cưng bò sát
                            </li>
                          </Link>
                          <Link to="/Admin/them-phu-kien-bo-sat">
                            <li className="mb-2 w-full hover:bg-gray-500 p-2 rounded-lg hover:text-white">
                              Phụ kiện bò sát
                            </li>
                          </Link>
                        </ul>
                      </details>
                    </li>

                    {/* Gặm nhắm */}
                    <li>
                      <details className="w-full">
                        <summary className="w-full">🐾 Gặm nhắm</summary>
                        <ul className="space-y-2 ml-6 text-sm w-full">
                          <Link to="/Admin/them-thu-cung-gam-nham">
                            <li className="mt-1 w-full hover:bg-gray-500 p-2 rounded-lg hover:text-white">
                              Thú cưng gặm nhắm
                            </li>
                          </Link>
                          <Link to="/Admin/them-phu-kien-gam-nham">
                            <li className="mb-2 w-full hover:bg-gray-500 p-2 rounded-lg hover:text-white">
                              Phụ kiện gặm nhắm
                            </li>
                          </Link>
                        </ul>
                      </details>
                    </li>

                    {/* Sóc bay */}
                    <li>
                      <details className="w-full">
                        <summary className="w-full">🐾 Sóc bay</summary>
                        <ul className="space-y-2 ml-6 text-sm w-full">
                          <Link to="/Admin/them-thu-cung-soc-bay">
                            <li className="mt-1 w-full hover:bg-gray-500 p-2 rounded-lg hover:text-white">
                              Thú cưng sóc bay
                            </li>
                          </Link>
                          <Link to="/Admin/them-phu-kien-soc-bay">
                            <li className="mb-2 w-full hover:bg-gray-500 p-2 rounded-lg hover:text-white">
                              Phụ kiện sóc bay
                            </li>
                          </Link>
                        </ul>
                      </details>
                    </li>

                    {/* Chim vẹt */}
                    <li>
                      <details className="w-full">
                        <summary className="w-full">🐾 Chim vẹt</summary>
                        <ul className="space-y-2 ml-6 text-sm w-full">
                          <Link to="/Admin/them-thu-cung-chim-vet">
                            <li className="mt-1 w-full hover:bg-gray-500 p-2 rounded-lg hover:text-white">
                              Thú cưng chim vẹt
                            </li>
                          </Link>
                          <Link to="/Admin/them-phu-kien-chim-vet">
                            <li className="mt-1 w-full hover:bg-gray-500 p-2 rounded-lg hover:text-white">
                              Phụ kiện chim vẹt
                            </li>
                          </Link>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <details>
                  <summary className="text-xl hover:bg-gray-300 rounded-lg whitespace-normal break-words">
                    🛒 Quản lý Đơn hàng
                  </summary>
                  <ul className="text-base ml-4">
                    <Link to="/Admin/danh-sach-don-hang">
                      <li className="ml-3 mt-1 mb-1 hover:bg-gray-500 p-2 rounded-lg hover:text-white">
                        Danh sách đơn hàng
                      </li>
                    </Link>
                    <Link to="/Admin/thong-ke-doanh-thu">
                      <li className="ml-3 mb-1 hover:bg-gray-500 p-2 rounded-lg hover:text-white">
                        Thống kê doanh thu
                      </li>
                    </Link>
                  </ul>
                </details>
              </li>
              <li>
                <Link
                  to="/Admin/quan-ly-nguoi-dung"
                  className="text-xl hover:bg-gray-300 rounded-lg"
                >
                  👥 Quản lý Người dùng
                </Link>
              </li>
              <li>
                <Link
                  to="/Admin/bao-cao-thong-ke"
                  className="text-xl hover:bg-gray-300 rounded-lg"
                >
                  📊 Báo cáo & Thống kê
                </Link>
              </li>
              <li>
                <Link
                  to="/Admin/dat-lich"
                  className="text-xl hover:bg-gray-300 rounded-lg"
                >
                  ⌛ Quản lý đặt lịch
                </Link>
              </li>
            </ul>

            {/* NÚT ĐĂNG XUẤT CỐ ĐỊNH */}
            <div className="p-2 border-t">
              <button
                onClick={handleLogout}
                className="w-full block text-red-600 hover:bg-red-100 rounded-lg p-2 text-center"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
