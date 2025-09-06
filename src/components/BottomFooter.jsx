import React from "react";

export const BottomFooter = () => {
  return (
    <footer className="bg-gray-100 text-center text-xs sm:text-base text-gray-700 font-semibold py-2 px-4">
      <p>
        © {new Date().getFullYear()} — Được xây dựng bởi <span className="text-pink-600">Nhựt Đông</span>
      </p>
    </footer>
  );
};
