import { Link } from "@inertiajs/react";
import React from "react";

const Pagination = ({ links }) => {
  return (
    <nav>
      <ul className="pagination pagination-sm justify-content-end mb-0 mt-4">
        {links?.map((link, i) => (
          <li
            className={`page-item ${link?.url == null ? "disabled" : ""} ${
              link?.active ? "active" : ""
            }`}
            key={i}
          >
            <Link
              className="page-link"
              href={`${link?.url == null ? "#" : link?.url}`}
              dangerouslySetInnerHTML={{ __html: link.label }}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
