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
            <a className="page-link" href="!#">
              &#60;Prev
            </a>
          </li>
          {pageNumbers &&
            pageNumbers.map(pageNumber => {
              return (
                <li key={pageNumber} className="page-item">
                  <a
                    onClick={() => {
                      paginate(pageNumber);
                    }}
                    href="!#"
                    className="page-link"
                  >
                    {pageNumber}
                  </a>
                </li>
              );
            })}
          <li className="page-item">
            <a className="page-link" href="!#">
              Next&#62;
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
