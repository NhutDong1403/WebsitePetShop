import React from "react";

export const BottomFooterReptile = () => {
  return (
    <footer className="footer select-none sm:footer-horizontal footer-center bg-gray-100 text-base-content font-semibold p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default BottomFooterReptile;
