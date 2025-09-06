import React from "react";
import HeaderRodent from "../../components/RodentComponent/Header";
import FooterRodent from "../../components/RodentComponent/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Link } from "react-router-dom";

export const TakeCarePageRodent = () => {
  return (
    <div className="select-none">
      <HeaderRodent />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-gam-nham" },
            { name: "Sản phẩm khác", to: "/san-pham-gam-nham" },
            { name: "Dịch vụ Spa", to: "/cham-soc-gam-nham" },
            { name: "Dịch vụ chăm hộ", to: "#" },
          ]}
        />
      </div>

      <div className="bg-orange-50 py-10 px-4 min-h-screen">
        {/* Hero Section */}
        <div className="hero bg-amber-100 rounded-xl py-10 mb-12">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-amber-700">
                Dịch Vụ Chăm Hộ Gặm Nhắm
              </h1>
              <p className="py-6 text-gray-700 text-lg">
                Bạn bận rộn, đi công tác hoặc du lịch? Hãy để chúng tôi chăm sóc
                bé Hamster, Thỏ, Guinea Pig… giúp bạn trong môi trường{" "}
                <span className="font-semibold text-amber-600">
                  an toàn, sạch sẽ và đầy yêu thương.
                </span>
              </p>
              <Link to="/Admin/dat-lich-cham-ho-gam-nham">
                <button className="relative btn h-[45px] w-70 overflow-hidden text-white bg-amber-500 rounded-md font-semibold transition duration-300 group">
                  <span className="relative z-10 text-lg">
                    Đặt lịch chăm hộ
                  </span>
                  <span className="absolute top-0 left-0 h-full w-0 bg-amber-600 transition-all duration-300 ease-out group-hover:w-full z-0"></span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Service Packages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Gói 1 ngày */}
          <div className="card bg-white shadow-md hover:shadow-xl transition duration-300">
            <figure className="rounded-t-xl overflow-hidden">
              <img
                src="/images/Rodent/1day.png"
                alt="Gói 1 ngày"
                className="object-cover w-full rounded-b-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-2xl justify-center text-amber-700">
                Gói Chăm Hộ 1 Ngày
              </h2>
              <p className="text-sm text-gray-600">
                Phù hợp cho những chuyến đi ngắn. Bé được cho ăn uống, vệ sinh
                và vui chơi hợp lý
              </p>
            </div>
          </div>

          {/* Gói 3 ngày */}
          <div className="card bg-white shadow-md hover:shadow-xl transition duration-300">
            <figure className="rounded-t-xl overflow-hidden">
              <img
                src="/images/Rodent/3days.png"
                alt="Gói 3 ngày"
                className="object-cover w-full rounded-b-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-2xl justify-center text-amber-700">
                Gói Chăm Hộ 3 Ngày
              </h2>
              <p className="text-sm text-gray-600">
                Bé được chăm sóc toàn diện: ăn uống, vệ sinh lồng, vui chơi và
                theo dõi sức khỏe thường xuyên
              </p>
            </div>
          </div>

          {/* Gói 1 tuần */}
          <div className="card bg-white shadow-md hover:shadow-xl transition duration-300">
            <figure className="rounded-t-xl overflow-hidden">
              <img
                src="/images/Rodent/7days.png"
                alt="Gói 1 tuần"
                className="object-cover w-full rounded-b-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-2xl justify-center text-amber-700">
                Gói Chăm Hộ 7 Ngày
              </h2>
              <p className="text-sm text-gray-600">
                Dành cho kỳ nghỉ dài. Bé được chăm sóc, tương tác vui chơi và
                gửi hình ảnh/video cập nhật cho chủ
              </p>
            </div>
          </div>
        </div>
      </div>

      <FooterRodent />
    </div>
  );
};

export default TakeCarePageRodent;
