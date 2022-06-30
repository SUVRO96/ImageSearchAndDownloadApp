import React from "react";

const Pagination = ({ totalimages, imageperpage, paginate }) => {
  const pageNumbers = [];

  const pageMaker = () => {
    for (let i = 1; i < Math.ceil(totalimages / imageperpage); i++) {
      pageNumbers.push(i);
    }
  };
  pageMaker();

  return (
    <div className="d-flex justify-content-center">
      <nav>
        <ul className="pagination bg-dark">
          <li className="page-item">
            <button className="page-link">&#60;Prev</button>
          </li>
          {pageNumbers &&
            pageNumbers.map(pageNumber => {
              return (
                <li key={pageNumber} className="page-item">
                  <button
                    onClick={() => {
                      paginate(pageNumber);
                    }}
                    className="page-link"
                  >
                    {pageNumber}
                  </button>
                </li>
              );
            })}
          <li className="page-item">
            <button className="page-link">Next&#62;</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
