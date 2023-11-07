| 标题                   | 标签                        |
| ---------------------- | --------------------------- |
| debounce(防抖期约函数) | function,promise(函数,期约) |

创建一个返回期约的防抖动函数，但延迟调用提供的函数，直到自上次调用以来至少经过 ms 毫秒。在此期间返回的所有期约都将返回相同的数据。

- 每次调用防抖函数时，使用 `clearTimeout()` 清除当前挂起的延迟函数并使用 `setTimeout()` 创建一个新的延迟函数，该延迟函数将延迟调用该函数，直到至少 `ms` 毫秒过去。
- 使用 `Function.prototype.apply()` 将 `this` 上下文应用于函数并提供必要的参数。
- 创建一个新的 `Promise` 并将其解析和拒绝回调添加到待处理的 `Promise` 堆栈中。
- 调用 `setTimeout()` 时，复制当前堆栈（因为它可以在提供的函数调用及其分辨率之间更改），清除它并调用提供的函数。
- 当提供的函数解析/拒绝时，使用返回的数据解析/拒绝堆栈中的所有期约（在调用函数时复制）。
- 省略第二个参数 `ms`，将延迟函数设置为默认值 `0ms`。

> 代码如下:

```js
const debouncePromise = (handler, ms) => {
  let timer = null;
  const pending = [];
  return (...args) =>
    new Promise((resolve, reject) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const currentPending = [...pending];
        pending.length = 0;
        Promise.resolve(handler.apply(this, args)).then(
          data => {
            currentPending.forEach(({ resolve: res }) => res(data));
          },
          error => {
            currentPending.forEach(({ reject: rej }) => rej(error));
          }
        );
      }, ms);
      pending.push({ resolve, reject });
    });
};
```

> 调用方式:

```js
const fn = arg =>
  new Promise(resolve => {
    setTimeout(resolve, 1000, ['resolved', arg]);
  });
const debounced = debouncePromise(fn, 200);
debounced('foo').then(console.log);
debounced('bar').then(console.log);
// Will log ['resolved', 'bar'] both times
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/debouncePromise.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/debouncePromise.html"></iframe>
