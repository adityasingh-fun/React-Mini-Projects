import React, { useEffect, useState } from "react";
import './ScrollIndicator.css'

const ScrollIndicator = ({ url }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [data, setData] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async (getUrl) => {
    setLoading(true);
    try {
      const response = await fetch(getUrl);
      if (!response.ok) {
        throw new Error("Unable to fetch Data. Please try again");
      }
      const getData = await response.json();
      if (getData && getData.products) {
        setData(getData.products);
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage(`Error Occured! ${error.message}`);
      setLoading(false);
    }
  };

  const handleScrollPercentage = () => {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const percentage = (scrolled / height) * 100;
    console.log(percentage)
    setScrollPercentage(percentage)
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  if (loading) return <div>Loading Data! Please Wait.</div>;
  if (errorMessage) return <div>{errorMessage}</div>;

  return (
    <div>
      <div className="header">
        <h1>Scroll Indicator</h1>
        <div className="complete-bar">
          <div style={{width:`${scrollPercentage}%`}} className="bar-scrolled"></div>
        </div>
      </div>
      <div className="contents">
        {data && data.length
          ? data.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item.thumbnail} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;
