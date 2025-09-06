import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";

export const Service1Page = () => {
  return (
    <div className="select-none">
      <Header />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/" },
            { name: "Dịch vụ Spa", to: "/dich-vu-1" },
            { name: "Vệ Sinh & Chăm Sóc Cơ Bản", to: "#" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <div className="min-h-screen bg-pink-100 py-10 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="hero bg-pink-200 rounded-xl py-10 mb-12">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-pink-700">
                Vệ sinh & Chăm sóc cơ bản
              </h1>
              <p className="py-6 text-pink-700 text-lg">
                <b>Vệ sinh & Chăm sóc</b> chó mèo giúp bé sạch sẽ, khỏe mạnh và
                tránh bệnh tật. Tắm, chải lông, cắt móng, vệ sinh tai mắt là
                những việc cần làm thường xuyên
              </p>
              <Link to="/Admin/dat-lich-ve-sinh-cho-meo">
                <button className="relative btn h-[45px] w-70 overflow-hidden text-white bg-pink-700 rounded-md font-semibold transition duration-300 group">
                  <span className="relative z-10 text-lg ">Đặt lịch</span>
                  <span className="absolute top-0 left-0 h-full w-0 bg-pink-600 transition-all duration-300 ease-out group-hover:w-full z-0"></span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="flex flex-row gap-6 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-2 scrollbar-hide">
          {" "}
          {/* Card 1 */}
          <div className="card bg-white border-2 border-black shadow-md hover:shadow-xl transition duration-300 min-w-[280px] sm:min-w-0">
            <figure className="rounded-t-lg overflow-hidden">
              <img
                src="/images/bath.png"
                alt="Tắm & Vệ sinh"
                className="object-cover w-full rounded-b-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-2xl sm:text-3xl flex justify-center text-pink-600">
                Tắm & Vệ sinh
              </h2>
              <p className="text-sm sm:text-base">
                Giữ cho bé luôn sạch sẽ, thơm mát bằng phương pháp dịu nhẹ
              </p>
              <Link to="/Admin/dat-lich-ve-sinh-cho-meo">
                <div className="card-actions justify-center mt-4">
                  <button className="btn bg-gradient-to-r from-pink-400 to-pink-600 w-full text-white text-base sm:text-lg font-semibold px-6 py-3 rounded-xl shadow-md hover:scale-105 transition duration-300">
                    Đặt lịch ngay
                  </button>
                </div>
              </Link>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card bg-white border-2 border-black shadow-md hover:shadow-xl transition duration-300 min-w-[280px] sm:min-w-0">
            <figure className="rounded-t-lg overflow-hidden">
              <img
                src="/images/nail.png"
                alt="Cắt móng"
                className="object-cover w-full rounded-b-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-2xl sm:text-3xl flex justify-center text-pink-600">
                Cắt móng & Chải lông
              </h2>
              <p className="text-sm sm:text-base">
                Chăm sóc móng cẩn thận để tránh tổn thương khi chạy nhảy và chơi
                đùa
              </p>
              <Link to="/Admin/dat-lich-ve-sinh-cho-meo">
                <div className="card-actions justify-center mt-4">
                  <button className="btn bg-gradient-to-r from-pink-400 to-pink-600 w-full text-white text-base sm:text-lg font-semibold px-6 py-3 rounded-xl shadow-md hover:scale-105 transition duration-300">
                    Đặt lịch ngay
                  </button>
                </div>
              </Link>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card bg-white border-2 border-black shadow-md hover:shadow-xl transition duration-300 min-w-[280px] sm:min-w-0">
            <figure className="rounded-t-lg overflow-hidden">
              <img
                src="/images/nail.png"
                alt="Cắt móng"
                className="object-cover w-full rounded-b-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-2xl sm:text-3xl flex justify-center text-pink-600">
                Kiểm tra sức khỏe
              </h2>
              <p className="text-sm sm:text-base">
                Giúp phát hiện sớm bệnh, ngừa rủi ro, giữ thú cưng luôn khỏe
                mạnh
              </p>
              <Link to="/Admin/dat-lich-ve-sinh-cho-meo">
                <div className="card-actions justify-center mt-4">
                  <button className="btn bg-gradient-to-r from-pink-400 to-pink-600 w-full text-white text-base sm:text-lg font-semibold px-6 py-3 rounded-xl shadow-md hover:scale-105 transition duration-300">
                    Đặt lịch ngay
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA cuối trang */}
        <div className="text-center mt-16">
          <h3 className="text-lg sm:text-xl text-pink-600 font-semibold mb-2">
            Bạn cần tư vấn thêm?
          </h3>
          <p className="mb-4 hidden sm:block">
            Liên hệ với chúng tôi để được hỗ trợ nhanh chóng
          </p>
          <button className="btn bg-gradient-to-r from-pink-400 to-pink-600 w-[300px] sm:w-[250px] text-white text-base sm:text-lg font-semibold px-6 py-3 rounded-xl shadow-md hover:scale-105 transition duration-300">
            Liên hệ ngay
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Service1Page;
