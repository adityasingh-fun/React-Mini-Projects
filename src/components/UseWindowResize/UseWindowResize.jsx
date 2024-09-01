import React, { useEffect, useState } from 'react'

const UseWindowResize = () => {
    const [size,setSize] = useState({
        width:0,
        height:0
    })

    const changeDimensions = ()=>{
        setSize({
            width:window.innerWidth,
            height:window.innerHeight
        })
    }

    useEffect(()=>{
        changeDimensions()

        window.addEventListener("resize",changeDimensions)
        return ()=>{
            window.removeEventListener("resize",changeDimensions)
        }
    },[])
  return (
    <div>
      <h1>Window's Current Size</h1>
      <h2>Width: {size.width}</h2>
      <h2>Height: {size.height}</h2>
    </div>
  )
}

export default UseWindowResize
