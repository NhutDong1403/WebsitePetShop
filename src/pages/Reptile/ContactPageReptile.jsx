import React from "react";
import HeaderReptile from "../../components/ReptileComponent/HeaderReptile";
import FooterReptile from "../../components/ReptileComponent/FooterReptile";
import Breadcrumbs from "../../components/Breadcrumbs";

const ContactPageReptile = () => {
  return (
    <div className="select-none">
      <HeaderReptile />
      <div className="max-w-6xl mx-auto mt-5 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-bo-sat" },
            { name: "Sản phẩm khác", to: "/san-pham-bo-sat" },
            { name: "Liên hệ", to: "#" },
          ]}
        />
      </div>
      <div
        className="relative min-h-screen px-4 py-12 sm:py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/reptileskin.jpg')" }}
      >
        <div className="relative z-10 max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 sm:p-8 md:p-10 border border-lime-300">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 text-lime-700">
            Liên Hệ Với Chúng Tôi 🐍
          </h2>
          <p className="text-center mb-6 sm:mb-8 text-black text-sm sm:text-base">
            Nếu bạn có bất kỳ câu hỏi, phản hồi hoặc yêu cầu đặc biệt nào về sản
            phẩm cho bò sát, vui lòng điền vào form bên dưới hoặc liên hệ trực
            tiếp.
          </p>

          <form className="space-y-4 sm:space-y-6">
            <div>
              <label
                className="block font-semibold mb-1 text-black text-sm sm:text-base"
                htmlFor="name"
              >
                Họ và Tên
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 sm:px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 text-black text-sm sm:text-base"
                placeholder="Nhập họ tên của bạn"
              />
            </div>

            <div>
              <label
                className="block font-semibold mb-1 text-black text-sm sm:text-base"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 sm:px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 text-black text-sm sm:text-base"
                placeholder="example@gmail.com"
              />
            </div>

            <div>
              <label
                className="block font-semibold mb-1 text-black text-sm sm:text-base"
                htmlFor="message"
              >
                Tin nhắn
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-3 sm:px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 text-black text-sm sm:text-base"
                placeholder="Nội dung bạn muốn gửi..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="relative bg-lime-600 border-2 border-black text-white w-full font-semibold px-6 py-2 rounded-md overflow-hidden group text-sm sm:text-base"
            >
              <span className="relative z-10">Gửi Tin Nhắn</span>
              <span className="absolute left-0 top-0 h-full w-0 bg-lime-700 transition-all duration-300 ease-out group-hover:w-full z-0"></span>
            </button>
          </form>

          <div className="mt-8 sm:mt-10 border-t pt-4 sm:pt-6 text-center text-sm sm:text-base text-black">
            Hoặc liên hệ trực tiếp qua email:{" "}
            <a
              href="mailto:reptile@petshop.vn"
              className="underline hover:text-lime-700"
            >
              reptile@petshop.vn
            </a>
          </div>
        </div>
      </div>
      <FooterReptile />
    </div>
  );
};

export default ContactPageReptile;
