import React from "react";
import HeaderWing from "../../components/WingerComponent/HeaderWing";
import FooterWing from "../../components/WingerComponent/FooterWing";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Link } from "react-router-dom";

export const ServicePageWinger = () => {
  return (
    <div className="select-none">
      <HeaderWing />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/" },
            { name: "Dịch vụ Spa", to: "/dich-vu-chim-vet" },
            { name: "Vệ sinh & Chăm sóc sức khỏe", to: "/cham-soc-chim-vet" },
          ]}
        />
      </div>

      {/* Nội dung chính */}
      <div className="min-h-screen bg-sky-100 py-10 px-4">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-sky-700">
            Dịch Vụ Cho Chim Vẹt
          </h1>
          <p className="mt-4 text-gray-800 max-w-2xl mx-auto">
            Đảm bảo sức khỏe và môi trường sống sạch sẽ cho chú vẹt của bạn.
            Chúng tôi mang đến dịch vụ an toàn, tận tâm và tiện lợi.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="card bg-white text-2xl font-semibold shadow-md hover:shadow-xl transition duration-300">
            <figure>
              <img
                src="/images/Winger/cageclean.png"
                alt="Vệ sinh lồng"
                className="object-cover w-full rounded-b-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-2xl font-semibold flex justify-center text-sky-700">
                Vệ sinh & Khử khuẩn 
              </h2>
              <p>
                Giúp lồng chim luôn sạch sẽ, an toàn, hạn chế vi khuẩn gây bệnh.
              </p>
              <div className="card-actions justify-center">
                <button className="relative btn w-full overflow-hidden text-white bg-sky-600 rounded-md font-semibold transition duration-300 group">
                  <Link to="/Admin/dat-lich-ve-sinh-chim-vet">
                    <span className="relative z-10">Đặt lịch</span>
                    <span className="absolute top-0 left-0 h-full w-0 bg-sky-800 transition-all duration-300 ease-out group-hover:w-full z-0"></span>
                  </Link>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-white shadow-md hover:shadow-xl transition duration-300">
            <figure className="rounded-lg overflow-hidden">
              <img
                src="/images/Winger/nailtrim.png"
                alt="Tỉa móng"
                className="object-cover w-full rounded-b-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-2xl font-semibold flex justify-center text-sky-700">
                Tỉa móng & lông
              </h2>
              <p>
                Đảm bảo an toàn cho vẹt khi vận động, giữ ngoại hình gọn gàng.
              </p>
              <div className="card-actions justify-center">
                <button className="relative btn w-full overflow-hidden text-white bg-sky-600 rounded-md font-semibold transition duration-300 group">
                  <Link to="/Admin/dat-lich-ve-sinh-chim-vet">
                    <span className="relative z-10">Đặt lịch</span>
                    <span className="absolute top-0 left-0 h-full w-0 bg-sky-800 transition-all duration-300 ease-out group-hover:w-full z-0"></span>
                  </Link>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-white shadow-md hover:shadow-xl transition duration-300">
            <figure>
              <img
                src="/images/Winger/healthcheck.png"
                alt="Kiểm tra sức khỏe"
                className="object-cover w-full rounded-b-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-2xl font-semibold flex justify-center text-sky-700">
                Kiểm tra sức khỏe
              </h2>
              <p>
                Kiểm tra mắt, mỏ, móng, phân và hành vi để theo dõi tình trạng
                sức khỏe.
              </p>
              <div className="card-actions justify-center">
                <button className="relative btn w-full overflow-hidden text-white bg-sky-600 rounded-md font-semibold transition duration-300 group">
                  <Link to="/Admin/dat-lich-ve-sinh-chim-vet">
                    <span className="relative z-10">Đặt lịch</span>
                    <span className="absolute top-0 left-0 h-full w-0 bg-sky-800 transition-all duration-300 ease-out group-hover:w-full z-0"></span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-2 text-sky-700">
            Bạn cần tư vấn thêm?
          </h3>
          <p className="mb-4 text-gray-700">
            Liên hệ với chúng tôi để được hỗ trợ nhanh chóng.
          </p>
          <button className="btn bg-sky-600 text-white hover:bg-sky-800 hover:scale-105 transition duration-300">
            Liên hệ ngay
          </button>
        </div>
      </div>

      <FooterWing />
    </div>
  );
};

export default ServicePageWinger;
