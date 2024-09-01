import React, { useRef } from 'react'
import data from './data'


const ScrollToParticularSection = () => {
    const ref = useRef(null);

    const handleonclick = ()=>{
        window.scrollTo({
            top: ref.current.getBoundingClientRect().top,
            behavior:"smooth"
        })
    }


  return (
    <div>
      <h1>Scroll To Particular section</h1>
      <button onClick={handleonclick}> Scroll to Section </button>
      {
          data && data.length?
          data.map((item,index)=>{
            return <div ref={index === 2? ref: null} style={item.style} key={index}>{item.label}</div>
          })
          :null
      }
    </div>
  )
}

export default ScrollToParticularSection
