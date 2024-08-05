import React, {useState} from 'react';
import "./github.css"

const Github = () => {
  const [showLeftFuncClass, setShowLeftFuncClass] = useState("left-all-func")
  const [black, setBlack] = useState("black")
  const troggleLeftFunc  = () => {
    if (showLeftFuncClass.includes(" active")) {
      setShowLeftFuncClass("left-all-func")
      setBlack("black")
    } else {
      setShowLeftFuncClass("left-all-func active")
      setBlack("black active")
    }
  }

  return (
    <>
      <div className={black} onClick={troggleLeftFunc}></div>
      <div className={showLeftFuncClass}></div>
      <div className="head-container">
        <div className="left-func">
          <div className="more-func" onClick={troggleLeftFunc}>
            三
          </div>
          <div>
            <a href="https://github.com/">
              <img src="https://github.githubassets.com/assets/mona-loading-default-static-8f7c56ad1b9a.svg" alt="icon"
                   className="icon-img"/>
            </a>
          </div>
          <div>
            <a href="https://github.com/" className="dashbord"> Dashboard </a>
          </div>
        </div>
        <div className="right-func">

          <div className="portrait">
            <img src="https://avatars.githubusercontent.com/u/24344673?s=64&v=4" alt="portrait"
                 className="portrait-img"/>
          </div>
          <div>
            O
          </div>
          <div>
            O
          </div>
          <div className="plus">
            +
          </div>
          <div className="search">
            <input type="text" className="search-input"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Github;
