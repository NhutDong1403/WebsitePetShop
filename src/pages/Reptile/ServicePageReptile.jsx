import React from "react";
import HeaderReptile from "../../components/ReptileComponent/HeaderReptile";
import FooterReptile from "../../components/ReptileComponent/FooterReptile";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Link } from "react-router-dom";

export const ServicePageReptile = () => {
  return (
    <div className="select-none">
      <HeaderReptile />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ bò sát", to: "/san-pham-bo-sat" },
            { name: "Sản phẩm khác", to: "/san-pham-bo-sat" },
            { name: "Dịch vụ Spa", to: "/dich-vu-bo-sat" },
            { name: "Vệ Sinh & Chăm Sóc Sức Khỏe", to: "#" },
          ]}
        />
      </div>

      <div className="min-h-screen bg-lime-50 py-10 px-4 text-lime-900">
        {/* Hero Section */}
        <div className="hero bg-lime-100 rounded-xl py-10 mb-12">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold text-lime-700">
                Vệ sinh & Chăm Sóc Sức Khỏe Cho Bò Sát
              </h1>
              <p className="py-6 text-lime-700 text-lg">
                Bạn bận rộn, đi công tác hoặc du lịch? Hãy để chúng tôi chăm sóc
                các bé bò sát trong môi trường an toàn, khoa học và đầy yêu
                thương.
              </p>      
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="max-w-6xl mx-auto">
          {/* Mobile: flex + scroll ngang | Desktop: grid */}
          <div className="flex space-x-4 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:space-x-0 snap-x snap-mandatory scrollbar-hide">
            {/* Card 1 */}
            <div className="min-w-[260px] sm:min-w-0 card bg-white shadow-md hover:shadow-xl transition duration-300 border border-lime-200 snap-center">
              <figure>
                <img
                  src="/images/Reptile/bathreptile.png"
                  alt="Tắm & làm sạch da"
                  className="object-cover w-full rounded-b-xl"
                />
              </figure>
              <div className="card-body text-center">
                <h2 className="card-title text-2xl flex justify-center text-lime-700">
                  Tắm & Làm Sạch Da
                </h2>
                <p>
                  Sử dụng nước ấm và dung dịch dịu nhẹ dành riêng cho bò sát.
                  Giúp loại bỏ vi khuẩn, vảy chết và giữ ẩm tự nhiên cho da.
                </p>
                <div className="card-actions justify-center">
                  <Link
                    className="relative btn w-full overflow-hidden text-white bg-lime-700 rounded-md font-semibold transition duration-300 group hover:bg-lime-600"
                    to="/Admin/dat-lich-ve-sinh-bo-sat"
                  >
                    <span className="relative z-10">Đặt lịch</span>
                    <span className="absolute top-0 left-0 h-full w-0 bg-lime-900 transition-all duration-300 ease-out group-hover:w-full z-0"></span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="min-w-[260px] sm:min-w-0 card bg-white shadow-md hover:shadow-xl transition duration-300 border border-lime-200 snap-center">
              <figure>
                <img
                  src="/images/Reptile/nailreptile.png"
                  alt="Cắt móng"
                  className="object-cover w-full rounded-b-xl"
                />
              </figure>
              <div className="card-body text-center">
                <h2 className="card-title text-2xl flex justify-center text-lime-700">
                  Cắt Móng & Chăm Sóc Móng
                </h2>
                <p>
                  Cắt tỉa móng gọn gàng, hạn chế trầy xước, bảo vệ thú cưng khỏi
                  tổn thương khi vận động.
                </p>
                <div className="card-actions justify-center">
                  <Link
                    className="relative btn w-full overflow-hidden text-white bg-lime-700 rounded-md font-semibold transition duration-300 group hover:bg-lime-600"
                    to="/Admin/dat-lich-ve-sinh-bo-sat"
                  >
                    <span className="relative z-10">Đặt lịch</span>
                    <span className="absolute top-0 left-0 h-full w-0 bg-lime-900 transition-all duration-300 ease-out group-hover:w-full z-0"></span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="min-w-[260px] sm:min-w-0 card bg-white shadow-md hover:shadow-xl transition duration-300 border border-lime-200 snap-center">
              <figure>
                <img
                  src="/images/Reptile/healthreptile.png"
                  alt="Kiểm tra sức khỏe"
                  className="object-cover w-full rounded-b-xl"
                />
              </figure>
              <div className="card-body text-center">
                <h2 className="card-title text-2xl flex justify-center text-lime-700">
                  Kiểm Tra Da, Vảy & Mắt
                </h2>
                <p>
                  Phát hiện sớm các bệnh ngoài da, nhiễm trùng, vấn đề về mắt
                  phổ biến ở bò sát cảnh.
                </p>
                <div className="card-actions justify-center">
                  <Link
                    className="relative btn w-full overflow-hidden text-white bg-lime-700 rounded-md font-semibold transition duration-300 group hover:bg-lime-600"
                    to="/Admin/dat-lich-ve-sinh-bo-sat"
                  >
                    <span className="relative z-10">Đặt lịch</span>
                    <span className="absolute top-0 left-0 h-full w-0 bg-lime-900 transition-all duration-300 ease-out group-hover:w-full z-0"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-2 text-lime-700">
            Bạn cần tư vấn thêm?
          </h3>
          <p className="mb-4">
            Liên hệ với chúng tôi để được hỗ trợ nhanh chóng.
          </p>
          <button className="btn bg-lime-700 text-white hover:bg-lime-900 hover:scale-105 transition duration-300">
            Liên hệ ngay
          </button>
        </div>
      </div>

      <FooterReptile />
    </div>
  );
};

export default ServicePageReptile;
