import React, { useEffect, useState } from "react";
import "./LoadMoreimage.css";

const LoadMoreImage = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [errorMessage, setErorrMessage] = useState(null);

  

  const fetchImages = async (url) => {
    setloading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Unable to fetch data. Please try again");
      }

      const getData = await response.json();
      if (getData && getData.products && getData.products.length) {
        if(count > 0){
            setData([...data,...getData.products])
        
        }else{
            setData(getData.products);
        }
        
        setloading(false);
      }
    } catch (error) {
      setErorrMessage(`Error occured! ${error.message}`);
      setloading(false);
    }
  };
  console.log("Length",data.length);

  useEffect(() => {
    fetchImages(`https://dummyjson.com/products?limit=20&skip=${count * 10}`);
  }, [count]);

  if (loading) return <div>Loading Data! Please wait.</div>;
  if (errorMessage) return <div>{errorMessage}</div>;

  return (
    <div className="main-container">
      <h1>Load More Images</h1>
      <div className="items-container">
        {data && data.length
          ? data.map((item, index) => {
              return (
                <div className="single-item" key={index}>
                  <img src={item.thumbnail} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              );
            })
          : null}
      </div>
      <button disabled={data.length === 100 ? true : false} onClick={()=> setCount(count + 1)}>Load More</button>
    </div>
  );
};

export default LoadMoreImage;
