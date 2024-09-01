import { useEffect, useState } from "react";

const useFetchHook = (url) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [data, setData] = useState([]);

  const fetchDataFn = async (getUrl) => {
    setLoading(true);
    try {
      const response = await fetch(getUrl);
      if (!response.ok) {
        throw new Error("Unable to fetch data! Please try again");
      }
      const dataRecieved = await response.json();
      if (
        dataRecieved &&
        dataRecieved.products &&
        dataRecieved.products.length
      ) {
        setData(dataRecieved.products);
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage(`Error occured: ${error.message}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFn(url);
  }, [url]);

//   console.log(data);
  return { data, errorMessage, loading };
};

export default useFetchHook;
