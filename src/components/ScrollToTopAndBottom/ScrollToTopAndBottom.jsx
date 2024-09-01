import React, { useRef } from 'react'
import useFetchHook from '../UseFetchCustomHook/useFetchHook'

const ScrollToTopAndBottom = () => {
    const getProducts = useFetchHook('https://dummyjson.com/products');
    const {data,loading,errorMessage} = getProducts;
    const ref = useRef(null);
    console.log(getProducts);

    const handleScrollTopTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    const handleScrollToBottom = ()=>{
        ref.current.scrollIntoView({behavior:"smooth"})
    }

  return (
    <div>
      <h1>Scroll to top and botttom</h1>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      {
        data && data.length?
        data.map((product,index)=>{
            return <div key={index}>
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
            </div>
        })
        : null
      }
      <button onClick={handleScrollTopTop}>Scroll To Top</button>
      <div ref={ref}></div>
    </div>
  )
}

export default ScrollToTopAndBottom
