import React, { useState, useEffect } from "react";

const slides = [
  "/images/banner1.jpg",
  "/images/banner2.png",
  "/images/banner3.jpg",
  "/images/banner4.jpg",
];

export const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-3 sm:px-5 py-5">
      {/* Carousel */}
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        {/* Navigation arrows */}
        <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
          <button
            onClick={prevSlide}
            className="btn btn-circle bg-white text-black shadow-md text-sm sm:text-base"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="btn btn-circle bg-white text-black shadow-md text-sm sm:text-base"
          >
            ❯
          </button>
        </div>
      </div>

      {/* Indicator dots */}
      <div className="absolute left-0 right-0 flex justify-center gap-2 z-15 mt-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-pink-400 w-3 sm:w-4" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      {/* 4 boxes underneath */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mt-6">
        <div className="border-2 border-black bg-pink-200 rounded-xl p-2 sm:p-4 text-center hover:shadow-md transition">
          <p className="font-semibold text-sm sm:text-base md:text-lg text-pink-800">
            SHIP COD TOÀN QUỐC
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            Thanh toán khi nhận hàng
          </p>
        </div>

        <div className="border-2 border-black bg-pink-200 rounded-xl p-2 sm:p-4 text-center hover:shadow-md transition">
          <p className="font-semibold text-sm sm:text-base md:text-lg text-pink-800">
            MIỄN PHÍ ĐỔI HÀNG <span className="text-pink-500">*</span>
          </p>
          <p className="text-xs sm:text-sm text-gray-500">Trong vòng 7 ngày</p>
        </div>

        <div className="border-2 border-black bg-pink-200 rounded-xl p-2 sm:p-4 text-center hover:shadow-md transition">
          <p className="font-semibold text-sm sm:text-base md:text-lg text-pink-800">
            GIAO HÀNG TRONG NGÀY
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            Đối với đơn nội thành HCM
          </p>
        </div>

        <div className="border-2 border-black bg-pink-200 rounded-xl p-2 sm:p-4 text-center hover:shadow-md transition">
          <p className="font-semibold text-sm sm:text-base md:text-lg text-pink-800">
            ĐẶT HÀNG TRỰC TUYẾN
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            Hotline: 0123.456.789
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
