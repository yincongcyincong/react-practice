import React, {createContext, useCallback, useContext, useState} from 'react';

const testContext = createContext("");

const Context = () => {
  const [theme, setTheme] = useState('light')

  return (
    <div>
      <testContext.Provider value={theme}>
        <Forum/>
      </testContext.Provider>
      <div onClick={() => {
        if (theme === "light") {
          setTheme("dark")
        } else {
          setTheme("light")
        }
      }}>click
      </div>
    </div>
  );
};

const Forum = () => {
  const data = useContext(testContext)
  return (
    <div>
      {data}
    </div>
  )
}

export default Context;
