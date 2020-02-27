import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { range } from "../utils";

const PaginationItem = ({ page, currentPage, url }) => {
  const liClasses = classNames({
    "page-item": true,
    "active-link": currentPage === page
  });
  return (
    <li className={liClasses}>
      <Link to={`${url}?page=${page}`} className="page-link">
        {page}
      </Link>
    </li>
  );
};

const Pagination = ({ total, limit, url, currentPage }) => {
  const pagesCont = Math.ceil(total / limit);
  const pages = range(1, pagesCont);

  return (
    <ul className="paggination">
      {pages.map(page => (
        <PaginationItem
          page={page}
          currentPage={currentPage}
          url={url}
          key={page}
        />
      ))}
    </ul>
  );
};
export default Pagination;
