| 标题                | 标签                         |
| ------------------- | ---------------------------- |
| sleep(延迟异步函数) | function,promise(函数，期约) |

延迟异步函数的执行。

- 延迟执行异步函数的一部分，将其置于休眠状态，返回一个 Promise。

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
```

> 调用方式:

```js
async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
```

> 应用场景
