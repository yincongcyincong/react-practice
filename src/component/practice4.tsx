import React, {useState} from 'react';

import "./practice4.css"

const Practice4 = () => {

  const [className, setClassName] = useState("open")

  const openOrCloseInput = () => {
    if (className === "open") {
      setClassName("close")
    } else {
      setClassName("open")
    }
  }

  return (
    <div className="container">
      <button onClick={openOrCloseInput}>搜索</button>
      <input type="text" className={className}/>
    </div>
  );
};

export default Practice4;
