import React from "react";
import HeaderSugar from "../../components/SugarComponent/HeaderSugar";
import FooterSugar from "../../components/SugarComponent/FooterSugar";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Link } from "react-router-dom";

export const ServicePageSugar = () => {
  return (
    <div className="select-none">
      <HeaderSugar />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/" },
            { name: "Dịch vụ Spa", to: "/dich-vu-soc-bay" },
            { name: "Vệ sinh & Chăm sóc sức khỏe", to: "/dich-vu-soc-bay" },
          ]}
        />{" "}
      </div>
      <div className="min-h-screen bg-base-200 py-10 px-4">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-600">
            Dịch Vụ Cho Sóc Bay
          </h1>
          <p className="mt-4 text-black max-w-2xl mx-auto">
            Chúng tôi cung cấp các dịch vụ chăm sóc đặc biệt dành riêng cho
            Sugar Glider – thú cưng đáng yêu của bạn!
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="card bg-white shadow-md hover:shadow-xl transition duration-300">
            <figure>
              <img
                src="/images/SugarGlider/bath.png"
                alt="Tắm"
                className="object-cover w-full rounded-b-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-2xl flex justify-center text-gray-600">
                Tắm & Vệ Sinh
              </h2>
              <p>
                Giữ cho bé nhà bạn luôn sạch sẽ, thơm mát bằng phương pháp dịu
                nhẹ.
              </p>
              <div className="card-actions justify-center">
                <button className="relative btn w-full overflow-hidden text-white bg-gray-600 rounded-md font-semibold transition duration-300 group">
                  <Link to="/Admin/dat-lich-ve-sinh-soc-bay">
                    <span className="relative z-10">Đặt lịch</span>
                    <span className="absolute top-0 left-0 h-full w-0 bg-gray-800 transition-all duration-300 ease-out group-hover:w-full z-0"></span>
                  </Link>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-white shadow-md hover:shadow-xl transition duration-300">
            <figure className="rounded-lg overflow-hidden">
              <img
                src="/images/SugarGlider/nail.png"
                alt="Cắt móng"
                className="object-cover w-full rounded-b-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-2xl flex justify-center text-gray-600">
                Cắt móng
              </h2>
              <p>
                Chăm sóc móng cẩn thận để tránh tổn thương khi leo trèo và chơi
                đùa.
              </p>
              <div className="card-actions justify-center">
                <button className="relative btn w-full overflow-hidden text-white bg-gray-600 rounded-md font-semibold transition duration-300 group">
                  <Link to="/Admin/dat-lich-ve-sinh-soc-bay">
                    <span className="relative z-10">Đặt lịch</span>
                    <span className="absolute top-0 left-0 h-full w-0 bg-gray-800 transition-all duration-300 ease-out group-hover:w-full z-0"></span>
                  </Link>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-white shadow-md hover:shadow-xl transition duration-300">
            <figure>
              <img
                src="/images/SugarGlider/health.png"
                alt="Khám sức khoẻ"
                className="object-cover w-full rounded-b-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-2xl flex justify-center text-gray-600">
                Khám sức khoẻ
              </h2>
              <p>
                Kiểm tra định kỳ sức khỏe để bé nhà bạn luôn khỏe mạnh và phát
                triển tốt.
              </p>
              <div className="card-actions justify-center">
                <button className="relative btn w-full overflow-hidden text-white bg-gray-600 rounded-md font-semibold transition duration-300 group">
                  <Link to="/Admin/dat-lich-ve-sinh-soc-bay">
                    <span className="relative z-10">Đặt lịch</span>
                    <span className="absolute top-0 left-0 h-full w-0 bg-gray-800 transition-all duration-300 ease-out group-hover:w-full z-0"></span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-2">Bạn cần tư vấn thêm?</h3>
          <p className="mb-4">
            Liên hệ với chúng tôi để được hỗ trợ nhanh chóng.
          </p>
          <button className="btn bg-gray-600 text-white hover:bg-gray-800 hover:scale-105 transition duration-300">
            Liên hệ ngay
          </button>
        </div>
      </div>
      <FooterSugar />
    </div>
  );
};

export default ServicePageSugar;
