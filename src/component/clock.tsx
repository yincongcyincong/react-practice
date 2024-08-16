import React, {useEffect, useState} from 'react';
import "./clock.css"

const Clock = () => {
  const [second, setSecond] = useState(30)
  const secondStyle = {
    transform: 'rotate(' + second + 'deg)'
  }

  useEffect(() => {
    // 设置定时器
    const intervalId = setInterval(() => {
      setSecond(second => second + 3);
    }, 1000); // 每秒更新一次

    // 清除定时器的函数，作为 useEffect 的返回值
    return () => {
      clearInterval(intervalId);
    };
  }, []); // 依赖项数组为空，表示此副作用仅在组件挂载和卸载时运行


  return (
    <div className="container">
      <div className="clock-trim">
        <div className="clock clock-level1">
          <div>12</div>
          <div>6</div>
        </div>
        <div className="clock clock-level2">
          <div>11</div>
          <div>5</div>
        </div>
        <div className="clock clock-level3">
          <div>10</div>
          <div>4</div>
        </div>
        <div className="clock clock-level4">
          <div>3</div>
          <div>9</div>
        </div>
        <div className="clock clock-level5">
          <div>2</div>
          <div>8</div>
        </div>
        <div className="clock clock-level6">
          <div>1</div>
          <div>7</div>
        </div>
        <div className="hour-hand"></div>
        <div className="minute-hand"></div>
        <div className="second-hand" style={secondStyle}></div>
      </div>
    </div>
  );
};

export default Clock;
