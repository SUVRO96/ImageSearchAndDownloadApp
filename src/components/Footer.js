import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#73777B" }}
      >
        <div className="container pt-4">
          <section className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg text-light m-1"
              href="https://www.facebook.com/subhradip.nath.71"
              role="button"
              data-mdb-ripple-color="dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-light m-1"
              href="https://twitter.com/SubhradipNath11"
              role="button"
              data-mdb-ripple-color="dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-light m-1"
              href="https://www.google.co.in/"
              role="button"
              data-mdb-ripple-color="dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-light m-1"
              href="https://www.linkedin.com/in/uniquesuvro/"
              role="button"
              data-mdb-ripple-color="dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-light m-1"
              href="https://github.com/SUVRO96"
              role="button"
              data-mdb-ripple-color="dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>
        <div
          className="text-center text-light p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-light" href="!#" target="_blank">
            uniquesuvro@gmail.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
