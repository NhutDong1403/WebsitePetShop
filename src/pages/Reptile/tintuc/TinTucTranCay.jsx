import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderReptile from "../../../components/ReptileComponent/HeaderReptile";
import FooterReptile from "../../../components/ReptileComponent/FooterReptile";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const TinTucTranCay = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="select-none">
      <HeaderReptile />
      <div className="max-w-6xl mx-auto mt-2 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-bo-sat" },
            { name: "Tin tức", to: "/san-pham-bo-sat" },
            { name: "Thông tin về Green Tree Python", to: "#" },
          ]}
        />{" "}
      </div>
      <div
        className="bg-green-50 py-12 px-4"
        style={{ backgroundImage: "url('/images/bg2.jpg')" }}
      >
        <div className="max-w-5xl mx-auto border bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Ảnh tiêu đề */}
          <div className="w-full aspect-w-16 aspect-h-9">
            <img
              src="/images/Reptile/bosat/green_tree_python_header.jpg"
              alt="Trăn Cây Xanh"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Nội dung */}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-green-800 mb-6">
              Trăn Cây Xanh – Vẻ đẹp rừng nhiệt đới
            </h1>

            <p className="mb-4 leading-relaxed text-gray-700">
              Trăn Cây Xanh (Green Tree Python) là loài bò sát nổi bật với màu
              xanh lá rực rỡ, thường sống trên cây ở các khu rừng nhiệt đới.
              Chúng thu hút người chơi bò sát bởi ngoại hình độc đáo và phong
              thái uyển chuyển.
            </p>

            <h2 className="text-2xl font-semibold text-green-700 mt-6 mb-3">
              Đặc điểm nổi bật
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Chiều dài trưởng thành 1,5 – 2 mét.</li>
              <li>Màu sắc thay đổi từ vàng, xanh lá đến xanh lam.</li>
              <li>Thân săn chắc, chuyên leo trèo trên cây.</li>
              <li>Tính cách cảnh giác, cần thuần hóa từ từ.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-green-700 mt-6 mb-3">
              Cách nuôi Trăn Cây
            </h2>
            <p className="mb-3 text-gray-700">
              Trăn Cây cần môi trường gần giống tự nhiên để giảm stress và giúp
              phát triển tốt:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <b>Chuồng nuôi:</b> Bể kính cao, có nhiều cành cây để leo.
              </li>
              <li>
                <b>Nhiệt độ:</b> Ban ngày 27-32°C, ban đêm 24-26°C.
              </li>
              <li>
                <b>Độ ẩm:</b> 60-80%, phun sương hằng ngày.
              </li>
              <li>
                <b>Thức ăn:</b> Chuột, chim non (cho ăn 1-2 tuần/lần).
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-green-700 mt-6 mb-3">
              Lưu ý khi chăm sóc
            </h2>
            <p className="text-gray-700">
              Không nên cầm nắm quá nhiều để tránh làm trăn căng thẳng. Khi vệ
              sinh chuồng, đảm bảo nhiệt độ và độ ẩm không thay đổi đột ngột.
              Luôn rửa tay trước và sau khi tiếp xúc.
            </p>

            {/* Ảnh minh họa */}
            <div className="mt-8">
              <img
                src="/images/Reptile/bosat/treepython1.jpg"
                alt="Trăn Cây Xanh"
                className="rounded-lg shadow-md w-full object-cover max-h-96"
              />
            </div>

            {/* Nút quay lại */}
            <div className="text-center">
              <Link
                to="/san-pham-bo-sat"
                className="inline-block border border-black bg-gradient-to-r from-lime-400 to-lime-600 text-white py-3 px-8 mt-5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition transform font-semibold"
              >
                Quay lại
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FooterReptile />
    </div>
  );
};

export default TinTucTranCay;
