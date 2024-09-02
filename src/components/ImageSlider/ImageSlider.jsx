import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./ImageSlider.css";

const ImageSlider = ({ url }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesData, setImagesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleOnLeftClick = (getIndex) => {
    getIndex === 0
      ? (getIndex = imagesData.length - 1)
      : (getIndex = getIndex - 1);
    setCurrentImage(getIndex);
  };

  const handleOnRightClick = (getIndex) => {
    getIndex === imagesData.length - 1
      ? (getIndex = 0)
      : (getIndex = getIndex + 1);
    setCurrentImage(getIndex);
  };

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Unable to fetch. Please try again");
      }
      const data = await response.json();
      if (data && data.products && data.products.length) {
        setImagesData(data.products);
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  console.log(imagesData);

  if (loading) return <div>Loading Data! Please wait.</div>;
  if (errorMessage) return <div>Error occured {errorMessage}</div>;
  return (
    <div className="images-container">
        <BsArrowLeftCircleFill
          className="left-arrow arrow"
          onClick={() => handleOnLeftClick(currentImage)}
        />
        {imagesData && imagesData.length
          ? imagesData.map((item, index) => {
              return (
                <img
                  key={index}
                  className={
                    index === currentImage ? "image " : "image image-inactive"
                  }
                  src={item.thumbnail}
                  alt="{item.title}"
                />
              );
            })
          : null}

        <BsArrowRightCircleFill
          className="right-arrow arrow"
          onClick={() => handleOnRightClick(currentImage)}
        />
        <div className="indicators">
        {
            imagesData && imagesData.length?
            imagesData.map((_,index)=>{
                return <button className={index === currentImage? "button": "button in-active-button"} onClick={()=> setCurrentImage(index)}></button>
            })
            : null
        }
        </div>
      </div>
  );
};

export default ImageSlider;
