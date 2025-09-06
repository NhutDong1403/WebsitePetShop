import React from "react";
import { Link } from "react-router-dom";
import HeaderWing from "../../../components/WingerComponent/HeaderWing";
import FooterWing from "../../../components/WingerComponent/FooterWing";
import Breadcrumbs from "../../../components/Breadcrumbs";


export const GiongVet = () => {
  const parrots = [
    {
      emoji: "🦜",
      name: "Vẹt Xám Châu Phi",
      desc: "Nổi tiếng với khả năng bắt chước tiếng người xuất sắc, vẹt xám châu Phi thông minh và dễ huấn luyện. Bộ lông màu xám với đuôi đỏ đặc trưng",
      img: "/images/Winger/ChimVet/VetXamChauPhi.jpg",
    },
    {
      emoji: "💛",
      name: "Vẹt Cockatiel",
      desc: "Kích thước nhỏ gọn, có chỏm lông dựng và má vàng cam dễ thương. Tính cách hiền lành, phù hợp cho người mới bắt đầu nuôi",
      img: "/images/Winger/ChimVet/vetcockatiel.jpg",
    },
    {
      emoji: "❤️",
      name: "Vẹt Lovebird",
      desc: "Loài vẹt nhỏ với màu sắc sặc sỡ và tính cách sống tình cảm, thường nuôi theo cặp. Chúng thích vận động và chơi đùa",
      img: "/images/Winger/ChimVet/lovebird.jpg",
    },
    {
      emoji: "🌈",
      name: "Vẹt Macaw",
      desc: "Kích thước lớn, màu sắc rực rỡ và giọng hót mạnh mẽ. Cần không gian rộng và chế độ chăm sóc đặc biệt",
      img: "/images/Winger/ChimVet/macaw.jpg",
    },
    {
      emoji: "💚",
      name: "Vẹt Yến Phụng (Budgerigar)",
      desc: "Là loài vẹt nhỏ phổ biến nhất tại Việt Nam, dễ nuôi, giá rẻ và rất thân thiện. Chúng có nhiều màu sắc khác nhau và sống thành bầy",
      img: "/images/Winger/ChimVet/budgerigar.jpg",
    },
    {
      emoji: "💙",
      name: "Vẹt Ngực Hồng (Rose-ringed Parakeet)",
      desc: "Loài vẹt có chiếc vòng hồng quanh cổ, kích thước vừa phải, dễ huấn luyện và thường thấy ở các gia đình nuôi làm cảnh",
      img: "/images/Winger/ChimVet/rose-ringed.jpg",
    },
    {
      emoji: "🧡",
      name: "Vẹt Sun Conure",
      desc: "Có màu vàng rực rỡ pha cam và xanh, tính cách vui tươi, thích chơi đùa. Được nhiều người nuôi tại Việt Nam vì vẻ ngoài bắt mắt",
      img: "/images/Winger/ChimVet/sun-conure.jpg",
    },
    {
      emoji: "💜",
      name: "Vẹt Eclectus",
      desc: "Nổi bật với sự khác biệt rõ rệt giữa con đực (màu xanh lá) và con cái (màu đỏ tía). Thông minh, thân thiện và biết nói khá tốt",
      img: "/images/Winger/ChimVet/eclectus.jpg",
    },
  ];

  return (
    <div className="select-none">
      <HeaderWing />

      <div className="max-w-6xl mx-auto mt-5 px-4">
        <Breadcrumbs
          links={[
            { name: "Trang chủ", to: "/san-pham-chim-vet" },
            { name: "Tin tức", to: "/san-pham-chim-vet" },
            {
              name: "Những giống vẹt phổ biến tại Việt Nam",
              to: "#",
            },
          ]}
        />{" "}
      </div>

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-6 shadow-lg">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-2xl sm:text-3xl font-bold">
              Những giống vẹt phổ biến tại Việt Nam
            </h1>
            <p className="text-xs sm:text-sm text-blue-100 mt-1">
              Ngày đăng: 20/07/2025
            </p>
          </div>
        </header>

        {/* Nội dung */}
        <main className="py-8 sm:py-10">
          <article
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 lg:p-16 max-w-6xl min-h-screen mx-auto animate-fadeIn"
            style={{ animation: "fadeIn 0.6s ease-out" }}
          >
            <p className="leading-relaxed text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base">
              Vẹt là loài chim thông minh, nhiều màu sắc và được yêu thích tại
              Việt Nam. Mỗi giống vẹt có đặc điểm riêng về ngoại hình, tiếng hót
              và tính cách, phù hợp với từng người nuôi khác nhau
            </p>

            <div className="grid sm:grid-cols-2 gap-5 sm:gap-8">
              {parrots.map((parrot, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-105"
                >
                  <img
                    src={parrot.img}
                    alt={parrot.name}
                    className="w-full aspect-[4/3] object-cover rounded-xl"
                  />
                  <div className="p-3 sm:p-5">
                    <h2 className="text-base sm:text-xl font-semibold text-blue-700 flex items-center gap-2">
                      <span>{parrot.emoji}</span> {parrot.name}
                    </h2>
                    <p className="mt-2 text-xs sm:text-base text-gray-700">
                      {parrot.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="leading-relaxed mt-6 sm:mt-8 italic text-center text-sm sm:text-base">
              Việc lựa chọn giống vẹt phù hợp sẽ giúp bạn dễ dàng chăm sóc và
              tạo mối quan hệ gắn bó lâu dài với chúng
            </p>

            <div className="text-center">
              <Link
                to="/san-pham-chim-vet"
                className="inline-block border-2 border-black bg-gradient-to-r from-blue-200 to-blue-300 text-black py-2 sm:py-3 px-6 sm:px-8 mt-5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition transform font-semibold text-sm sm:text-base"
              >
                Quay lại
              </Link>
            </div>
          </article>
        </main>
      </div>
      <FooterWing />
    </div>
  );
};

export default GiongVet;
