import React from "react";
import { Link } from "react-router-dom";

const formatCurrency = (num) => {
  const validNum = Number(num);
  if (isNaN(validNum)) return "0 ₫";
  return validNum.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

const ProductCardReptile = ({
  id,
  image,
  name,
  price,
  shipping,
  rating,
  sold,
}) => {
  return (
    <Link className="select-none" to={`/san-pham/${id}`}>
      <div className="card rounded-xl bg-stone-100 shadow-lg hover:shadow-xl transition w-full text-sm font-semibold py-5 px-5 h-[460px] flex flex-col justify-between">
        <figure className="p-2">
          <img src={image} alt={name} className="h-60 object-contain" />
        </figure>
        <div className="card-body p-4">
          <h2 className="text-xl font-bold line-clamp-2">{name}</h2>
          <p className="text-red-600 font-semibold">{formatCurrency(price)}</p>
          <p className="text-xs text-gray-500">{shipping}</p>
          <div className="text-xs flex justify-between items-center">
            <span className="text-yellow-500">
              ⭐ {rating} <span className="text-black">| Đã bán: {sold}</span>
            </span>
          </div>
          <Link
            className="relative group btn btn-outline bg-lime-700 btn-sm mt-2 overflow-hidden text-white rounded-xl border-2 border-black hover:border-black"
            to="/gio-hang-bo-sat"
          >
            <span className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 bg-lime-800"></span>
            <span className="relative z-10 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13h10M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
              <span>Thêm vào giỏ hàng</span>
            </span>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default ProductCardReptile;
