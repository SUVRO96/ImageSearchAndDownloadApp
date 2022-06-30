import axios from "axios";
import React, { useState, useEffect } from "react";
import Pagination from "./pagination/Pagination";
import ImageResults from "./ImageResults";

const Search = () => {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [safe, setSafe] = useState(true);
  const [totalImages, setTotalImages] = useState(0);
  const key = "27445298-5f896c46c2765f656e1380e0f";

  // for pagination
  const imagPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = e => {
    const val = e.target.value;
    setSearch(val);
  };
  // set safe Search
  const isSafe = e => {
    setSafe(!safe);
  };

  // change page

  const paginate = pageNumber => {
    // console.log(pageNumber);
    setCurrentPage(pageNumber);
  };

  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const next = () => {
    let totalPage = Math.ceil(totalImages / imagPerPage);
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  // api call
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(
          `https://pixabay.com/api/?key=${key}&q=${search}&image_type=photo&min_width=640&per_page=${imagPerPage}&page=${currentPage}&safesearch=${safe}`
        );
        setImages(res.data.hits);
        setTotalImages(res.data.totalHits);
      } catch (err) {
        console.warn(err);
      }
    };
    fetchImages();
  }, [search, totalImages, currentPage, safe]);

  return (
    <>
      <div className="toggle-container col my-3 position-absolute end-0 text-light">
        <span style={{ position: "relative", bottom: "0.3rem" }}>
          Safe-Search
        </span>
        <div className="toggler">
          <label className="switch">
            <input type="checkbox" defaultChecked={safe} onChange={isSafe} />
            <span className="slider"></span>
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col text-center p-5 m-2">
          <input
            className="search-bar bg-dark"
            type="text"
            placeholder="Search for Images"
            onChange={handleChange}
            value={search}
          />
        </div>
      </div>
      <Pagination
        imageperpage={imagPerPage}
        totalimages={totalImages}
        paginate={paginate}
        prev={prev}
        next={next}
      />
      <br />
      {images.length > 0 ? (
        <>
          <ImageResults images={images} />
        </>
      ) : null}
      <br />
      <Pagination
        imageperpage={imagPerPage}
        totalimages={totalImages}
        paginate={paginate}
        currentpage={currentPage}
        prev={prev}
        next={next}
      />
    </>
  );
};

export default Search;
