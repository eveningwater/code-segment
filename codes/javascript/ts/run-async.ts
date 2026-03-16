const runAsync = <T>(fn: () => T) => {
  const worker = new Worker(
    URL.createObjectURL(
      new Blob([`postMessage((${fn})());`], {
        type: 'application/javascript;charset=utf-8'
      })
    )
  );
  return new Promise((resolve, reject) => {
    worker.onmessage = ({ data }) => {
      resolve(data), worker.terminate();
    };
    worker.onerror = err => {
      reject(err), worker.terminate();
    };
  });
};

const longRunningFunction = () => {
  let result = 0;
  for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 700; j++) {
      for (let k = 0; k < 300; k++) {
        result = result + i + j + k;
      }
    }
  }
  return result;
};
/*
   注意：由于该函数在不同的上下文中运行，因此不支持闭包。
   提供给 runAsync 的函数被字符串化，所以一切都变成了字符串。
   所有变量和函数都必须在里面定义。
*/
runAsync(longRunningFunction).then(console.log); // 209685000000
runAsync(() => 10 ** 3).then(console.log); // 1000
let outsideVariable = 50;
runAsync(() => typeof outsideVariable).then(console.log); // undefined