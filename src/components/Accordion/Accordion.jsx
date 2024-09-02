import React, { useState } from "react";
import data from "./data";
import "./Accordion.css";

const Accordion = () => {
  const [singleSelection, setSingleSelection] = useState(null);
  const [multiSelect,setMultiSelect] = useState([]);
  const [enableMultiSelect,setEnableMultiSelect] = useState(false);
  const handleSingleSelection = (getCurrentId)=>{
    setSingleSelection(getCurrentId === singleSelection?null:getCurrentId);
    console.log(getCurrentId)
  }

  const handleMultiSelection = (getCurrentId)=>{
    console.log("MultiSelect calling")
    const copyMultiSelect = [...multiSelect];
    if(copyMultiSelect.indexOf(getCurrentId) === -1){
        copyMultiSelect.push(getCurrentId);
    }
    else{
      copyMultiSelect.splice(copyMultiSelect.indexOf(getCurrentId),1)
    }

    setMultiSelect(copyMultiSelect)
  }

  console.log(multiSelect)

  console.log(enableMultiSelect)
  return (
    <div>
        <button onClick={()=>setEnableMultiSelect(!enableMultiSelect)} >Enable Multi Selection</button>
      {data.map((item) => {
        return (
          <div onClick={enableMultiSelect? ()=> handleMultiSelection(item.id) : () => handleSingleSelection(item.id)} className="element" key={item.id}>
            <h2>{item.question}</h2>
            <span >+</span>
            {
                enableMultiSelect? 
                multiSelect.indexOf(item.id) !== -1 ? <p>{item.answer}</p> : null
                :singleSelection === item.id ? <p>{item.answer}</p>:null
            }
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
