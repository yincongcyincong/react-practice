import React, {useReducer} from 'react';

function reducer(state: any, action: any) {
  switch (action) {
    case "incre":
      return {
        age: state.age + 1,
      }
      break;
    case "decre":
      return {
        age: state.age - 1,
      }
      break;
  }
}

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, {age: 42});

  return (
    <div>
      <div>{state?.age}</div>
      <button onClick={() => {
        dispatch("incre")
      }}>+
      </button>
      <button onClick={() => {
        dispatch("decre")
      }}>-
      </button>
    </div>
  );
};

export default Reducer;
