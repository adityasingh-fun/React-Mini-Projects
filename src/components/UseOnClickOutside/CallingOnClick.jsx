import React, { useRef, useState } from "react";
import UseOnClickOutise from "./UseOnClickOutise";

const CallingOnClick = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  UseOnClickOutise(ref,()=>setShowContent(false))

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>Some Random Content</h1>
          <p>If you click outside the content , It will close</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show More</button>
      )}
    </div>
  );
};

export default CallingOnClick;
