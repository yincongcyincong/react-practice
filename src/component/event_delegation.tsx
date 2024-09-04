import React, {useState} from 'react';
import "./event_delegation.css"

const EventDelegation = () => {
  const [box, setBox] = useState([
    {id: 1, black: false},
    {id: 2, black: true},
    {id: 3, black: false},
  ])

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target instanceof HTMLDivElement) {
      const IdStr = event.target.getAttribute("data-custom-attribute")
      const id = parseInt(IdStr ? IdStr : "0", 10)
      for (const b in box) {
        if (box[b].id === id) {
          box[b].black = !box[b].black
        }
      }

      console.log(box)
      setBox([...box])
    }
  };


  return (
    <div className="event_delegation" onClick={handleClick}>
      {box.map(prop => (
        <div key={prop.id} data-custom-attribute={prop.id} className={prop.black ? "black empty" : "empty"}></div>
      ))}
    </div>
  )
};
export default EventDelegation;
