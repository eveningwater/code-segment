| 标题                | 标签                             |
| ------------------- | -------------------------------- |
| counter(定时计数器) | browser,advanced(浏览器，高级的) |

为指定的选择器创建一个具有指定范围、步长和持续时间的计数器。

- 检查 `step` 是否具有正确的符号并相应地进行更改。
- 将 `setInterval()` 与 `Math.abs()` 和 `Math.floor()` 结合使用来计算每次新文本绘制之间的时间。
- 使用 `Document.querySelector()`, `Element.innerHTML` 更新所选元素的值。
- 省略第四个参数 `step` 以使用默认步长 `1`。
- 省略第五个参数，持续时间，以使用 `2000` 毫秒的默认持续时间。

> 代码如下:

```js
const counter = (selector, start, end, step = 1, duration = 2000) => {
  const $ = v => document.querySelector(v);
  let current = start,
    _step = (end - start) * step < 0 ? -step : step,
    timer = setInterval(() => {
      current += _step;
      $(selector).innerHTML = current;
      if (current >= end) {
        $(selector).innerHTML = end;
        clearInterval(timer);
      }
    }, Math.abs(Math.floor(duration / (end - start))));
  return timer;
};
```

> 调用方式:

```js
counter('#my-id', 1, 1000, 5, 2000);
// Creates a 2-second timer for the element with id="my-id"
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/counter.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/counter.html"></iframe>
