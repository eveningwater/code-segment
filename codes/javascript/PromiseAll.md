| 标题                 | 标签                         |
| -------------------- | ---------------------------- |
| PromiseAll(期约合并) | function,promise(函数，期约) |

实现一个期约合并函数。

- 函数应该返回一个 Promise。
- 使用 Array.isArray 检测传入的参数是否是一个数组。
- 创建一个 count 变量用于计数，以及创建一个 resolveArr 变量用来存储结果值。
- 遍历参数数组，并使用 Promise.resolve 包裹每一个参数，每次执行完成即计数，然后将值赋给结果数组，判断如果计数等于参数数组的长度，则直接 resolve 出去。

```js
const myPromiseAll = promiseArr => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArr)) {
      return reject('arguments must be an array!');
    }
    let count = 0;
    let resolveArr = [];
    const len = promiseArr.length;
    for (let i = 0; i < len; i++) {
      Promise.resolve(promiseArr[i])
        .then(value => {
          count++;
          resolveArr[i] = value;
          if (count === len) {
            resolve(resolveArr);
          }
        })
        .catch(e => reject(e));
    }
  });
};
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/PromiseAll.ts" data-language="typescript"></div>

> 调用方式:

```js
const promise1 = new Promise(resolve => resolve(1));
const promise2 = new Promise(resolve => resolve(2));
const promise3 = new Promise(resolve => resolve(3));
const promiseAll = myPromiseAll([promise1, promise2, promise3]);
promiseAll.then(function (res) {
  console.log(res);
});
// 输出：[1,2,3]
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/promiseAll.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/promiseAll.html"></iframe>