import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";
import {
  faArrowAltCircleDown,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import { saveAs } from "file-saver";

const ImageResults = props => {
  const [openModal, setOpenModal] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  const saveFile = () => {
    saveAs(currentUrl, "photo1");
  };

  // set openImage
  const openImage = url => {
    setOpenModal(true);
    setCurrentUrl(url);
  };

  const closeImage = url => {
    setOpenModal(false);
    setCurrentUrl("");
  };

  let classCheck = openModal ? " d-block" : "";

  return (
    <>
      <div id="myModal" class={`modal${classCheck}`}>
        <span class="close" onClick={closeImage}>
          &times;
        </span>
        <img class="modal-content" id="img01" src={currentUrl} alt="No_image" />
        <button class="save-btn btn btn-dark btn-lg" onClick={saveFile}>
          <i class="fa-solid fa-circle-arrow-down"></i> Download
        </button>
      </div>
      <div className="row mx-3 my-1" id="gallery">
        {/* mapping the search results  */}
        {props.images &&
          props.images.map(image => {
            return (
              <div
                className="img-div col-12 col-sm-6 col-lg-3 my-2 "
                key={image.id}
              >
                <img
                  className="w-100"
                  src={image.webformatURL}
                  alt={image.id}
                  style={{ height: "13rem" }}
                  onClick={() => {
                    openImage(image.largeImageURL);
                  }}
                />
                <div className="col-12 d-flex justify-content-around border border-white bg-dark opacity-75 text-light">
                  <span>
                    {image.likes}
                    <FontAwesomeIcon icon={faHeart} />
                  </span>

                  <span>
                    {image.downloads}
                    <FontAwesomeIcon icon={faArrowAltCircleDown} />
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ImageResults;
