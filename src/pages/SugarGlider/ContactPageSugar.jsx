import React from "react";
import { HeaderSugar } from "../../components/SugarComponent/HeaderSugar";
import { FooterSugar } from "../../components/SugarComponent/FooterSugar";
import Breadcrumbs from "../../components/Breadcrumbs";

export const ContactPageSugar = () => {
  return (
    <div className="select-none">
      <HeaderSugar />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-soc-bay" },
            { name: "Sản phẩm khác", to: "/san-pham-soc-bay" },
            {
              name: "Liên hệ",
              to: "/lien-he-soc-bay",
            },
          ]}
        />{" "}
      </div>
      <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-20">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-300">
          <h1 className="text-3xl font-bold text-gray-700 mb-6 text-center">
            Liên hệ với chúng tôi 🐾
          </h1>

          <p className="text-gray-600 mb-4 text-center">
            Nếu bạn có thắc mắc về sản phẩm hoặc dịch vụ dành cho sóc bay, hãy
            gửi thông tin bên dưới. Chúng tôi sẽ phản hồi nhanh nhất có thể.
          </p>

          <form className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Họ và tên
              </label>
              <input
                type="text"
                className="w-full border-2 border-black rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Nhập họ và tên của bạn"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border-2 border-black rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Nhập email"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Nội dung
              </label>
              <textarea
                rows="4"
                className="w-full border-2 border-black rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Viết nội dung bạn muốn liên hệ"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gray-600 text-white font-semibold py-2 rounded-lg hover:bg-gray-700 transition duration-200"
            >
              Gửi liên hệ
            </button>
          </form>
        </div>
      </div>
      <FooterSugar />
    </div>
  );
};

export default ContactPageSugar;
