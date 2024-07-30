import React, {useState} from 'react';
import './practice1.css'
import Practice1Img, {Practice1Prop} from "./practice1img";


export default function Practice1() {
  const [props, setProps] = useState([
    {
      name: "可莉",
      classes: "panel img1 active"
    },
    {
      name: "香菱",
      classes: "panel img2"
    },
    {
      name: "七七",
      classes: "panel img3"
    },
    {
      name: "甘雨",
      classes: "panel img4"
    },
    {
      name: "神里绫华",
      classes: "panel img5"
    }
  ])


  return (
    <div className="container">
      {props.map(prop => (
        <Practice1Img key={prop.name} name={prop.name} classes={prop.classes} onMouseOver={() => {
          for (const idx in props) {
            if (props[idx].name === prop.name) {
              props[idx].classes = props[idx].classes + " active"
            } else {
              if (props[idx].classes.includes("active")) {
                props[idx].classes = props[idx].classes.replace(" active", "");
              }
            }
          }

          setProps([...props]);
        }}/>
      ))}
    </div>
  );
};
