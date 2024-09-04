import React, {useState} from 'react';

const ControllerConpontent = () => {
  const [value, setValue] = useState("")

  function unControllerChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value)
  }

  function controllerChange (event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }


  return (
    <div>
      <input type="text" onChange={unControllerChange} />
      <input type="text" onChange={controllerChange} value={value} />
    </div>
  );
};

export default ControllerConpontent;
