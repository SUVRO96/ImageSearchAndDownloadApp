import React from "react";
import "./page.css";

const Pagination = ({ totalimages, imageperpage, paginate }) => {
  const pageNumbers = [];

  const pageMaker = () => {
    for (let i = 1; i < Math.ceil(totalimages / imageperpage); i++) {
      pageNumbers.push(i);
    }
  };
  pageMaker();

  return (
    <nav>
      <ul className="pagination-u">
        <li>
          <button className="pagi-item">&laquo;</button>
        </li>
        {pageNumbers &&
          pageNumbers.map(pageNumber => {
            return (
              <li key={pageNumber} className="page-item">
                <button
                  className="pagi-item"
                  onClick={e => {
                    paginate(pageNumber);
                  }}
                >
                  {pageNumber}
                </button>
              </li>
            );
          })}
        <li>
          <button className="pagi-item">&raquo;</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
