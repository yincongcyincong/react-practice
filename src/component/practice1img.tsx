import React from 'react';
import './practice1.css'

export interface Practice1Prop {
  name: string
  classes: string
  onMouseOver?: () => void
}

export default function Practice1Img (props: Practice1Prop) {
  return (
    <div className={props.classes} onClick={props.onMouseOver}>
      <h3>{props.name}</h3>
    </div>
  );
};


