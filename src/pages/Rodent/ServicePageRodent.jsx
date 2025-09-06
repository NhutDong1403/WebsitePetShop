import React from "react";
import HeaderRodent from "../../components/RodentComponent/Header";
import FooterRodent from "../../components/RodentComponent/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Link } from "react-router-dom";

export const ServicePageRodent = () => {
  return (
    <div className="select-none">
      <HeaderRodent />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-gam-nham" },
            { name: "Sản phẩm khác", to: "/san-pham-gam-nham" },
            { name: "Dịch vụ Spa", to: "/dich-vu-gam-nham" },
            { name: "Vệ sinh & Chăm sóc sức khỏe", to: "#" },
          ]}
        />
      </div>

      <div className="bg-orange-50 min-h-screen py-10 px-4 md:px-10">
        {/* Hero */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-700">
            Vệ Sinh & Chăm Sóc Sức Khỏe
          </h1>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Dành cho hamster, chuột lang, nhím kiểng... Chúng tôi mang đến dịch
            vụ chăm sóc chuyên nghiệp và an toàn tuyệt đối cho bé cưng của bạn.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="card bg-white shadow-md hover:shadow-xl transition duration-300">
            <figure>
              <img
                src="/images/Rodent/healthrodent.png"
                alt="Kiểm tra sức khỏe"
                className="object-cover w-full rounded-b-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-2xl flex justify-center text-amber-600">
                Dịch vụ vệ sinh
              </h2>
              <p>
                Tắm khô, vệ sinh lồng chuồng, làm sạch tai – móng – lông bằng
                sản phẩm an toàn.
              </p>
              <div className="card-actions justify-center">
                <button className="relative btn w-full overflow-hidden text-white bg-yellow-600 rounded-md font-semibold transition duration-300 group hover:bg-yellow-600">
                  <Link to="/Admin/dat-lich-ve-sinh-gam-nham">
                    <span className="relative z-10">Đặt lịch</span>
                    <span className="absolute top-0 left-0 h-full w-0 bg-yellow-700 transition-all duration-300 ease-out group-hover:w-full z-0"></span>
                  </Link>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-white shadow-md hover:shadow-xl transition duration-300">
            <figure>
              <img
                src="/images/Rodent/carerodent.png"
                alt="Kiểm tra sức khỏe"
                className="object-cover w-full rounded-b-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-2xl flex justify-center  text-amber-600">
                Chăm sóc sức khỏe
              </h2>
              <p>
                Khám sức khỏe tổng quát, tư vấn dinh dưỡng, tiêm phòng và xử lý
                ký sinh trùng.
              </p>
              <div className="card-actions justify-center">
                <button className="relative btn w-full overflow-hidden text-white bg-yellow-600 rounded-md font-semibold transition duration-300 group hover:bg-yellow-600">
                  <Link to="/Admin/dat-lich-ve-sinh-gam-nham">
                    <span className="relative z-10">Đặt lịch</span>
                    <span className="absolute top-0 left-0 h-full w-0 bg-yellow-700 transition-all duration-300 ease-out group-hover:w-full z-0"></span>{" "}
                  </Link>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-white shadow-md hover:shadow-xl transition duration-300">
            <figure>
              <img
                src="/images/Rodent/supportrodent.png"
                alt="Kiểm tra sức khỏe"
                className="object-cover w-full rounded-b-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-2xl flex justify-center  text-amber-600">
                Tư vấn & Hỗ trợ
              </h2>
              <p>
                Đội ngũ thú y sẵn sàng hỗ trợ, hướng dẫn chế độ chăm sóc và theo
                dõi tại nhà.
              </p>
              <div className="card-actions justify-center">
                <button className="relative btn w-full overflow-hidden text-white bg-yellow-600 rounded-md font-semibold transition duration-300 group hover:bg-yellow-600">
                  <Link to="/Admin/dat-lich-ve-sinh-gam-nham">
                    <span className="relative z-10">Đặt lịch</span>
                    <span className="absolute top-0 left-0 h-full w-0 bg-yellow-700 transition-all duration-300 ease-out group-hover:w-full z-0"></span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-2 text-yellow-600">
            Bạn cần tư vấn thêm?
          </h3>
          <p className="mb-4">
            Liên hệ với chúng tôi để được hỗ trợ nhanh chóng.
          </p>
          <button className="btn bg-yellow-600 text-white hover:bg-yellow-700 hover:scale-102 transition duration-300">
            Liên hệ ngay
          </button>
        </div>
      </div>

      <FooterRodent />
    </div>
  );
};

export default ServicePageRodent;
