import React from "react";
import Header from "../../components/RodentComponent/Header";
import Footer from "../../components/RodentComponent/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

const ContactPageRodent = () => {
  return (
    <div className="select-none">
      <Header />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/" },
            { name: "Sản phẩm khác", to: "/san-pham-gam-nham" },
            {
              name: "Liên hệ",
              to: "/lien-he-gam-nham",
            },
          ]}
        />{" "}
      </div>
      <div className="min-h-screen bg-amber-50 py-10 px-4 flex justify-center items-start">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8 border border-amber-200">
          <h2 className="text-3xl font-bold text-center mb-6 text-amber-800">
            Liên Hệ Với Chúng Tôi 🐹
          </h2>

          <p className="text-center mb-8 text-gray-600">
            Nếu bạn có bất kỳ câu hỏi, góp ý hoặc cần hỗ trợ về sản phẩm dành
            cho gặm nhấm, hãy gửi tin nhắn cho chúng tôi. Chúng tôi sẽ phản hồi
            sớm nhất!
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Họ và tên
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
                placeholder="Nhập họ và tên của bạn"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
                placeholder="example@email.com"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Tin nhắn
              </label>
              <textarea
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
                placeholder="Nhập nội dung tin nhắn..."
                required
              ></textarea>
            </div>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="relative w-full overflow-hidden rounded-full bg-amber-500 px-6 py-2 text-white font-semibold group"
              >
                <span className="relative z-10">Gửi Tin Nhắn</span>
                <span className="absolute left-0 top-0 h-full w-0 bg-amber-600 transition-all duration-300 ease-out group-hover:w-full z-0"></span>
              </button>
            </div>
          </form>

          <div className="mt-10 text-center text-gray-600 text-sm">
            📞 Hotline: <span className="font-semibold">0123 456 789</span> | ✉️
            Email: <span className="font-semibold">support@gamnham.vn</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPageRodent;
