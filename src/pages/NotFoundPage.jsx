import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen select-none flex flex-col items-center justify-center bg-blue-100 text-black px-6 py-12">
      <img
        src="/images/404.png" // Bạn có thể thay đổi đường dẫn hoặc dùng 1 ảnh phù hợp
        alt="404 Not Found"
        className="w-64 h-auto mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">404 - Không tìm thấy trang</h1>
      <p className="text-lg text-center mb-6">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
      </p>
      <Link
        to="/"
        className="btn btn-error text-white hover:bg-red-600 border border-black"
      >
        Quay về Trang Chủ
      </Link>
    </div>
  );
};

export default NotFoundPage;
