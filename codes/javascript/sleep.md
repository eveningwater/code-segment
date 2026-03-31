| 标题                | 标签                         |
| ------------------- | ---------------------------- |
| sleep(延迟异步函数) | function,promise(函数，期约) |

延迟异步函数的执行。

- 延迟执行异步函数的一部分，将其置于休眠状态，返回一个 Promise。

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
```

<div class="code-editor" data-url="codes/javascript/ts/sleep.ts" data-language="typescript"></div>

> 调用方式:

```js
async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/sleep.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/sleep.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/sleep.html"></iframe>