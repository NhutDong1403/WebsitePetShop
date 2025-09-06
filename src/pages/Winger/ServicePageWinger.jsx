import React from "react";
import Header from "../../components/WingerComponent/HeaderWing";
import Footer from "../../components/WingerComponent/FooterWing";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Link } from "react-router-dom";
export const ServicePageWinger = () => {
  return (
    <div className="select-none">
      <Header />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/" },
            { name: "Dịch vụ Spa", to: "/dich-vu-chim-vet" },
            { name: "Dịch vụ chăm hộ", to: "/dich-vu-chim-vet" },
          ]}
        />{" "}
      </div>
      <div className="bg-sky-50 py-10 px-4 min-h-screen">
        {/* Hero Section */}
        <div className="hero bg-sky-100 rounded-xl py-10 mb-12">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-sky-700">
                Dịch Vụ Chăm Hộ Chim Vẹt
              </h1>
              <p className="py-6 text-gray-700 text-lg">
                Bạn bận rộn, đi công tác hoặc du lịch? Hãy để chúng tôi chăm sóc
                bé Sugar Glider giúp bạn với môi trường an toàn, thân thiện và
                đầy yêu thương.
              </p>
              <button className="relative btn h-[45px] w-70 overflow-hidden text-white bg-sky-600 rounded-md font-semibold transition duration-300 group">
                <Link to="/Admin/dat-lich-cham-ho-chim-vet">
                  <span className="relative z-10 text-lg">
                    Đặt lịch chăm sóc
                  </span>
                  <span className="absolute top-0 left-0 h-full w-0 bg-sky-800 transition-all duration-300 ease-out group-hover:w-full z-0"></span>
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Service Packages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Gói 1 ngày */}
          <div className="card bg-white shadow-md hover:shadow-xl transition duration-300">
            <figure className="rounded-t-xl overflow-hidden">
              <img
                src="/images/Winger/1day.png"
                alt="Gói 1 ngày"
                className="object-cover w-full rounded-b-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-2xl justify-center text-sky-800">
                Gói Chăm Hộ 1 Ngày
              </h2>
              <p className="text-sm text-gray-600">
                Phù hợp cho những chuyến đi ngắn. Bé được ăn uống đúng giờ và
                chơi đùa trong môi trường an toàn.
              </p>
            </div>
          </div>

          {/* Gói 3 ngày */}
          <div className="card bg-white shadow-md hover:shadow-xl transition duration-300">
            <figure className="rounded-t-xl overflow-hidden">
              <img
                src="/images/Winger/3days.png"
                alt="Gói 3 ngày"
                className="object-cover w-full rounded-b-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-2xl justify-center text-sky-800">
                Gói Chăm Hộ 3 Ngày
              </h2>
              <p className="text-sm text-gray-600">
                Bé được chăm sóc toàn diện: ăn uống, chơi đùa, theo dõi sức khỏe
                và làm quen với môi trường mới.
              </p>
            </div>
          </div>

          {/* Gói 1 tuần */}
          <div className="card bg-white shadow-md hover:shadow-xl transition duration-300">
            <figure className="rounded-t-xl overflow-hidden">
              <img
                src="/images/Winger/7days.png"
                alt="Gói 1 tuần"
                className="object-cover w-full rounded-b-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-2xl justify-center text-sky-800">
                Gói Chăm Hộ 7 Ngày
              </h2>
              <p className="text-sm text-gray-600">
                Dành cho kỳ nghỉ dài. Bé được chăm sóc, tương tác hàng ngày, vệ
                sinh lồng và cập nhật thông tin cho chủ nuôi thường xuyên.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicePageWinger;
