import React from 'react';

const Promise_test = () => {
  // function promiseFn(num: number, time = 1500) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       num ? resolve(`${num}, 成功`) : reject('失敗');
  //     }, time);
  //   });
  // }
  //
  // const data1 = promiseFn(1); // 因為 await，promise 函式被中止直到回傳
  // const data2 = promiseFn(2);
  // Promise.all([data1, data2]).then(() => {
  //   console.log(data1, data2);
  // })
  //
  // console.log("test finish")

  async function example() {
    console.log('Before promise');
    const result = await new Promise(resolve =>
      setTimeout(() => resolve('Resolved!'), 2000));
    console.log('After promise:', result);
  }

  example();
  console.log('After promise111:');


  return (
    <div>
      test promise
    </div>
  );
};

export default Promise_test;
