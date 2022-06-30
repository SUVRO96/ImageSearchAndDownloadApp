import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../App.css";
import {
  faArrowAltCircleDown,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";

const ImageResults = props => {
  // Modal component
  // const Modal = ({ imgSrc }) => {
  //   return (
  //     <div id="myModal" class="modal">
  //       <span class="close">&times;</span>
  //       <img class="modal-content" id="img01" src={imgSrc} alt="No_image" />
  //     </div>
  //   );
  // };

  // set openImage
  const openImage = id => {
    console.log(id);
  };

  return (
    <div
    // style={{ maxHeight: "500px", overflowY: "auto" }}
    >
      <div className="row m-1" id="gallery">
        {/* mapping the search results  */}
        {props.images &&
          props.images.map(image => {
            return (
              <div
                className="img-div col-12 col-sm-6 col-lg-3 my-2"
                key={image.id}
              >
                <a href="!#" onClick={openImage}>
                  <img
                    className="w-100"
                    src={image.webformatURL}
                    alt={image.id}
                    style={{ height: "13rem" }}
                  />
                </a>
                <div className="col-12 d-flex justify-content-around bg-light opacity-25">
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
    </div>
  );
};

export default ImageResults;
