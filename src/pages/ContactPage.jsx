import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";

export const ContactPage = () => {
  return (
    <div className="select-none">
      <Header />
      <div className="max-w-6xl mx-auto mt-5 px-3 sm:px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/" },
            { name: "Liên hệ", to: "#" },
          ]}
        />
      </div>

      <div className="bg-pink-50 min-h-dvh pt-6 sm:pt-10  px-3 sm:px-4">
        <div className="max-w-5xl mx-auto mt-10 bg-white rounded-xl shadow-md p-4 sm:p-8 space-y-8 sm:space-y-12">
          <h1 className="text-2xl sm:text-3xl mt-3 font-bold text-center text-pink-500">
            Liên hệ với chúng tôi
          </h1>

          {/* Info + Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Info */}
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <p className="text-gray-600">
                Nếu bạn có bất kỳ câu hỏi nào, đừng ngần ngại liên hệ với chúng
                tôi qua thông tin dưới đây hoặc gửi tin nhắn trực tiếp qua biểu
                mẫu.
              </p>
              <div className="text-gray-700 space-y-2">
                <p>
                  <strong>📞 Điện thoại:</strong> 0123 456 789
                </p>
                <p>
                  <strong>📧 Email:</strong> lienhe@petshop.vn
                </p>
                <p>
                  <strong>📍 Địa chỉ:</strong> 123 Đường Pet, Quận Thú Cưng, TP.
                  Hồ Chí Minh
                </p>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Họ và tên
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  placeholder="Nhập tên của bạn"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  placeholder="Nhập email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Nội dung
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-2 h-24 sm:h-28 resize-none focus:outline-none focus:ring-2 focus:ring-pink-300"
                  placeholder="Tin nhắn của bạn"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="relative w-full overflow-hidden bg-pink-500 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold z-10 group shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
              >
                {/* Background hover effect */}
                <span className="absolute left-0 top-0 h-full w-0 bg-pink-600 transition-all duration-300 ease-out group-hover:w-full z-0"></span>

                {/* Content */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <img
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    src="/images/Send.gif"
                    alt="send icon"
                  />
                  Gửi tin nhắn
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
