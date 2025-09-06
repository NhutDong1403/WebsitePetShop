import React from "react";
import HeaderWing from "../../components/WingerComponent/HeaderWing";
import FooterWing from "../../components/WingerComponent/FooterWing";
import Breadcrumbs from "../../components/Breadcrumbs";

export const ContactPageWinger = () => {
  return (
    <div className="select-none">
      <HeaderWing />
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/" },
            { name: "Sản phẩm khác", to: "/san-pham-chim-vet" },
            {
              name: "Liên hệ",
              to: "/lien-he-chim-vet",
            },
          ]}
        />{" "}
      </div>
      <section className="bg-gradient-to-br from-blue-100 to-blue-50 min-h-screen flex items-center justify-center px-4 py-16">
        <div className="card w-full max-w-2xl bg-white shadow-2xl border border-blue-200 rounded-2xl">
          <div className="card-body px-8 py-10">
            <h2 className="text-4xl font-bold text-center text-sky-600 mb-4">
              Liên hệ với chúng tôi
            </h2>
            <p className="text-center text-gray-600 mb-8 text-base">
              Nếu bạn có bất kỳ câu hỏi nào về dịch vụ, hãy để lại thông tin bên
              dưới. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất!
            </p>

            <form className="space-y-6">
              {/* Họ tên */}
              <div className="flex flex-col">
                <label className="text-base font-semibold flex items-center gap-2 mb-1">
                  👤 Họ và tên
                </label>
                <input
                  type="text"
                  placeholder="Họ và tên của bạn..."
                  className="input border-2 border-black input-bordered w-full"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-base font-semibold flex items-center gap-2 mb-1">
                  📧 Email
                </label>
                <input
                  type="email"
                  placeholder="Gmail của bạn..."
                  className="input border-2 border-black input-bordered w-full"
                  required
                />
              </div>

              {/* Tin nhắn */}
              <div className="flex flex-col">
                <label className="text-base font-semibold flex items-center gap-2 mb-1">
                  💬 Nội dung tin nhắn
                </label>
                <textarea
                  className="textarea border-2 border-black textarea-bordered w-full min-h-[120px]"
                  placeholder="Nội dung liên hệ của bạn..."
                  required
                ></textarea>
              </div>

              {/* Gửi nút */}
              <div className="flex justify-center pt-2">
                <button className="relative border-2 border-black overflow-hidden btn btn-primary text-lg px-8 shadow-md transition-transform duration-300 hover:scale-[1.02] group">
                  <span className="relative z-10 text-white">Gửi liên hệ</span>
                  <span className="absolute left-0 top-0 h-full w-0 bg-white opacity-10 transition-all duration-500 ease-in-out group-hover:w-full"></span>
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="divider my-8">hoặc</div>

            {/* Thông tin liên hệ nhanh */}
            <div className="text-center text-sm text-gray-500">
              <p>
                ☎️ Hotline:{" "}
                <strong className="text-blue-700">0123 456 789</strong>
              </p>
              <p>
                💬 Zalo: <strong className="text-blue-700">@chimvetcare</strong>
              </p>
              <p>🕒 Thời gian hỗ trợ: 8h00 - 20h00 hàng ngày</p>
            </div>
          </div>
        </div>
      </section>
      <FooterWing />
    </div>
  );
};

export default ContactPageWinger;
