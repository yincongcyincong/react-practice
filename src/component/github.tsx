import React, {useState} from 'react';
import "./github.css"

const Github = () => {
  const [showLeftFuncClass, setShowLeftFuncClass] = useState("left-all-func")
  const [black, setBlack] = useState("black")
  const toggleLeftFunc  = () => {
    if (showLeftFuncClass.includes(" active") || rightFuncClass.includes(" active")) {
      setShowLeftFuncClass("left-all-func")
      setRightFuncClass("show-right-all-func")
      setBlack("black")
    } else {
      setShowLeftFuncClass("left-all-func active")
      setBlack("black active")
    }
  }

  const [rightFuncClass, setRightFuncClass] = useState("show-right-all-func")
  const toggleRightFunc  = () => {
    console.log(rightFuncClass)
    if (rightFuncClass.includes(" active")) {
      setRightFuncClass("show-right-all-func")
      setBlack("black")
    } else {
      setRightFuncClass("show-right-all-func active")
      setBlack("black active")
    }
  }

  return (
    <>
      <div className={black} onClick={toggleLeftFunc}></div>
      <div>
        <div className={showLeftFuncClass}></div>
      </div>
      <div className="right-all-func">
        <div className={rightFuncClass}>
          <div className="right-content">
            1111
          </div>
          <div className="right-content">
            2222
          </div>
        </div>
      </div>
      <div className="head-container">
        <div className="left-func">
          <div className="more-func" onClick={toggleLeftFunc}>
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

          <div className="portrait" onClick={toggleRightFunc}>
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
