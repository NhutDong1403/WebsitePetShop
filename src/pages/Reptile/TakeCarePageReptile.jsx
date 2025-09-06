import React from "react";
import HeaderReptile from "../../components/ReptileComponent/HeaderReptile";
import FooterReptile from "../../components/ReptileComponent/FooterReptile";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Link } from "react-router-dom";

export const TakeCarePageReptile = () => {
  return (
    <div className="select-none">
      <HeaderReptile />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ bò sát", to: "/san-pham-bo-sat" },
            { name: "Sản phẩm khác", to: "/san-pham-bo-sat" },
            { name: "Dịch vụ Spa", to: "/cham-soc-bo-sat" },
            { name: "Dịch Vụ Chăm Hộ", to: "#" },
          ]}
        />
      </div>

      <div className="bg-lime-50 py-10 px-4 min-h-screen">
        {/* Hero Section */}
        <div className="hero bg-lime-100 rounded-xl py-10 mb-12">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-lime-700">
                Dịch Vụ Chăm Hộ Cho Bò Sát
              </h1>
              <p className="py-6 text-lime-700 text-lg">
                Bạn bận rộn, đi công tác hoặc du lịch? Hãy để chúng tôi chăm sóc
                các bé bò sát trong môi trường an toàn, khoa học và đầy yêu
                thương.
              </p>
              <Link to="/Admin/dat-lich-cham-ho-bo-sat">
                <button className="relative btn h-[45px] w-70 overflow-hidden text-white bg-lime-600 rounded-md font-semibold transition duration-300 group">
                  <span className="relative z-10 text-lg ">
                    Đặt lịch chăm hộ
                  </span>
                  <span className="absolute top-0 left-0 h-full w-0 bg-lime-800 transition-all duration-300 ease-out group-hover:w-full z-0"></span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Service Packages */}
        <div className="max-w-6xl mx-auto">
          {/* Wrapper: mobile scroll, desktop grid */}
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:space-x-0">
            {/* Gói 1 ngày */}
            <div className="min-w-[250px] sm:min-w-0 card bg-white shadow-md hover:shadow-xl transition duration-300">
              <figure className="rounded-t-xl overflow-hidden">
                <img
                  src="/images/Reptile/1day.png"
                  alt="Gói 1 ngày"
                  className="object-cover w-full rounded-b-xl"
                />
              </figure>
              <div className="card-body text-center">
                <h2 className="card-title text-3xl justify-center text-lime-700">
                  Gói Chăm Hộ 1 Ngày
                </h2>
                <p className="text-lg text-black">
                  Phù hợp khi bạn đi công việc ngắn. Bé được ăn uống đúng giờ,
                  theo dõi sức khỏe cơ bản
                </p>
              </div>
            </div>

            {/* Gói 3 ngày */}
            <div className="min-w-[250px] sm:min-w-0 card bg-white shadow-md hover:shadow-xl transition duration-300">
              <figure className="rounded-t-xl overflow-hidden">
                <img
                  src="/images/Reptile/3day.png"
                  alt="Gói 3 ngày"
                  className="object-cover w-full rounded-b-xl"
                />
              </figure>
              <div className="card-body text-center">
                <h2 className="card-title text-3xl justify-center text-lime-700">
                  Gói Chăm Hộ 3 Ngày
                </h2>
                <p className="text-lg text-black">
                  Bé được chăm sóc toàn diện: ăn uống, vệ sinh, theo dõi môi
                  trường nhiệt độ – độ ẩm
                </p>
              </div>
            </div>

            {/* Gói 7 ngày */}
            <div className="min-w-[250px] sm:min-w-0 card bg-white shadow-md hover:shadow-xl transition duration-300">
              <figure className="rounded-t-xl overflow-hidden">
                <img
                  src="/images/Reptile/7day.png"
                  alt="Gói 7 ngày"
                  className="object-cover w-full rounded-b-xl"
                />
              </figure>
              <div className="card-body text-center">
                <h2 className="card-title text-3xl justify-center text-lime-700">
                  Gói Chăm Hộ 7 Ngày
                </h2>
                <p className="text-lg text-black">
                  Dành cho kỳ nghỉ dài. Bé được chăm sóc kỹ lưỡng, vệ sinh
                  chuồng, báo cáo định kỳ bằng hình ảnh/video
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterReptile />
    </div>
  );
};

export default TakeCarePageReptile;
