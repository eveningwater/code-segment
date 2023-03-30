| 标题                   | 标签                                         |
| ---------------------- | -------------------------------------------- |
| runAsync(异步运行函数) | browser,function,promise(浏览器，函数，期约) |

使用[Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)在单独的线程中运行一个函数，允许长时间运行的函数不阻塞 UI。

- 使用 Blob 对象 URL 创建一个 Worker，其内容应该是所提供函数的字符串化版本。立即发布回调函数的返回值。
- 返回一个 Promise，监听 onmessage 和 onerror 事件并解析从 worker 传回的数据，或者抛出一个错误。

```js
const runAsync = fn => {
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
```

> 调用方式:

```js
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
```

> 应用场景

<iframe src="codes/javascript/html/runAsync.html"></iframe>

> ps: 这是一个不错的函数
