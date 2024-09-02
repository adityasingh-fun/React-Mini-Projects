import React, { useEffect, useState } from "react";

const ColorGenerator = () => {
  const [color, setColor] = useState(null);
  const [typeOfColor, setTypeOfColor] = useState("hex");

  const getIndex = (length) => {
    // console.log(length)
    const index = Math.floor(Math.random() * length);
    console.log(index);
    return index;
  };

  const handlehexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getIndex(hex.length - 1)];
    }
    setColor(hexColor);
    console.log(color);
  };

  const handleRgbColor = () => {
    const r = getIndex(256);
    const g = getIndex(256);
    const b = getIndex(256);

    setColor(`rgb(${r},${g},${b})`);
    console.log(color);
  };

  useEffect(()=>{

    if(typeOfColor === "hex"){
        handlehexColor()
    }
    else{
        handleRgbColor()
    }

  },[typeOfColor])

  return (
    <div>
      <h1>Random color Generator</h1>
      <button onClick={() => setTypeOfColor("hex")}>Genertae Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Generate RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? () => handlehexColor()
            : () => handleRgbColor()
        }
      >
        Generate Random Color
      </button>
      <div style={{
        backgroundColor:color,
        height:"90vh"
      }}>
        <h1>Color:{typeOfColor}</h1>
        <h2>{color}</h2>
      </div>
    </div>
  );
};

export default ColorGenerator;
