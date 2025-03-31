| 标题                | 标签           |
| ------------------- | -------------- |
| defer(延迟调用函数) | function(函数) |

延迟调用函数，直到当前调用堆栈被清除。

- 使用 `setTimeout()` 和 `1` 毫秒的超时将新事件添加到事件队列并允许渲染引擎完成其工作。
- 使用扩展 (`...`) 运算符为函数提供任意数量的参数。

> 代码如下:

```js
const defer = (handler, ...args) => setTimeout(handler, 1, ...args);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/defer.ts" data-language="typescript"></div>

> 调用方式:

```js
// Example A:
defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'

// Example B:
const longRunningFunction = () => {
    document.querySelector('#test')!.innerHTML = 'Hello';
}
defer(longRunningFunction);
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/defer.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/defer.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/defer.html"></iframe>
