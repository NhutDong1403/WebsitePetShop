import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ links }) => {
  return (
    <nav className="text-sm text-black mb-6" aria-label="Breadcrumb">
      <ol className="list-reset flex flex-wrap gap-x-2 gap-y-1">
        {links.map((link, index) => (
          <li key={index} className="flex items-center">
            {index !== links.length - 1 ? (
              <>
                <Link to={link.to} className="text-black-600 font-medium">
                  {link.name}
                </Link>
                <span className="mx-2 text-gray-400">/</span>
              </>
            ) : (
              <span className="text-gray-500">{link.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
