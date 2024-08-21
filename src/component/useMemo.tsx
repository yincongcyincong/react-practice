import React, {useMemo} from 'react';

const UseMemo = () => {
  const data = useMemo(() => {
    console.log("cal")
    return "data"
  }, []);
  return (
    <div>
      {data}
    </div>
  );
};

export default UseMemo;
