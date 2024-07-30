import React, {useState} from 'react';
import './practice2.css'

interface CircleProp {
  name: string
  class: string
}

const Circle = (prop: CircleProp) => {
  return (
    <div className={prop.class}>{prop.name}</div>
  );
}

const Practice2 = () => {

  const [progress, setProgress] = useState(0)
  const [props, setProps] = useState([
    {name: "1", class: "circle active"},
    {name: "2", class: "circle"},
    {name: "3", class: "circle"},
    {name: "4", class: "circle"},
  ])

  const NextClick = () => {
    const percent = 100 / (props.length - 1)
    if (progress !== 100) {
      setProgress(progress => (progress + percent))
      for (const prop of props) {
        if (!prop.class.includes(" active")) {
          prop.class = prop.class + " active"
          break
        }
      }
      setProps([...props])
    }
  }

  const PrevClick = () => {
    const percent = 100 / (props.length - 1)
    console.log(percent)
    if (progress !== 0) {
      if (Math.ceil(progress) === Math.ceil(percent)) {
        setProgress(progress => (0))
      } else {
        setProgress(progress => (progress - percent))
      }

      for (let i = props.length - 1; i >= 0; i--) {
        if (props[i].class.includes(" active")) {
          props[i].class = "circle"
          break
        }
      }

      setProps([...props])
    }
  }

  return (
    <div className="container">
      <div className="progress-container">
        <div className="zore-progress"></div>
        <div className="progress" style={{width: progress + '%'}}></div>
        {props.map(prop => (
          <Circle key={prop.name} name={prop.name} class={prop.class}/>
        ))}
      </div>
      <div>
        <button className="btn" id="prev" onClick={PrevClick}>Prev</button>
        <button className="btn" id="next" onClick={NextClick}>Next</button>
      </div>

    </div>
  );
};


export default Practice2;
