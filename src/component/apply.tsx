import React, {useState} from 'react';

const Apply = () => {
  const [value, setValue] = useState(1)

  function changeValue(num: number) {
    setValue(value => value + num)
  }

  return (
    <div>
      <div onClick={() => {
        changeValue.apply(null, [1])
      }}>++apply++
      </div>
      <div onClick={() => {
        changeValue.call(null, -1)
      }}>--call--
      </div>
      <div onClick={() => {
        const b = changeValue.bind(changeValue)
        b(1);
      }}>++bind++
      </div>
      <div>{value}</div>
    </div>
  );
};

export default Apply;
