| 标题                          | 标签                       |
| ----------------------------- | -------------------------- |
| defineSetInterval(模拟定时器) | browser,time(浏览器，时间) |

使用 [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) 模拟实现 [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) 函数。

- 使用对象存储每个定时器，使用 Symbol 来标记每个定时器，作为属性。
- 定义一个执行函数，使用递归，将定时器添加到对象当中，并调用它。
- 定义一个清除函数，遍历对象，从每个对象当中删除定时器。

```js
const defineSetInterval = () => {
  const timeWorker = {};
  const key = Symbol();
  const defineInterval = (fn, time) => {
    let executor = (fn, time) => {
      timeWorker[key] = setTimeout(() => {
        fn();
        executor(fn, time);
      }, time);
    };
    executor(fn, time);
    return key;
  };
  const defineClearInterval = k => {
    if (k in timeWorker) {
      clearTimeout(timeWorker[k]);
      delete timeWorker[k];
    }
  };
  return {
    setInterval: defineInterval,
    clearInterval: defineClearInterval
  };
};
```

> 调用方式:

```js
const { setInterval, clearInterval } = defineSetInterval();
//执行定时器
const timeId = setInterval(() => console.log(1));
//清除定时器
clearInterval(timeId);
```

> 应用场景
