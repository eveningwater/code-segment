| 标题              | 标签       |
| ----------------- | ---------- |
| inRange(数字范围) | math(数学) |

检查给定数字是否在给定范围内。

- 使用算术比较检查给定数字是否在指定范围内。
- 如果未指定第二个参数 end，则认为范围是从 0 到开始。

```js
const inRange = (n, start, end = null) => {
  if (end && start > end) {
    [end, start] = [start, end];
  }
  return end === null ? n >= 0 && n < start : n >= start && n < end;
};
```

> 调用方式:

```js
inRange(3, 2, 5); // true
inRange(3, 4); // true
inRange(2, 3, 5); // false
inRange(3, 2); // false
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/inRange.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/inRange.html"></iframe>
