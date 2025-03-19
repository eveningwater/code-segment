| 标题                                    | 标签                       |
| --------------------------------------- | -------------------------- |
| daysFromNow(从现在开始往后多少天的日期) | date,beginner(日期,初学者) |

以字符串表示形式计算从今天开始的 n 天后的日期。

- 使用 `Date` 构造函数获取当前日期。
- 使用 `Math.abs()` 和 `Date.prototype.getDate()` 相应地更新日期并使用 `Date.prototype.setDate()` 设置结果。
- 使用 `Date.prototype.toISOString()` 以 `yyyy-mm-dd` 格式返回字符串。

> 代码如下:

```js
const daysFromNow = n => {
  let d = new Date();
  d.setDate(d.getDate() + Math.abs(n));
  return d.toISOString().split('T')[0];
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/days-from-now.ts" data-language="typescript"></div>

> 调用方式:

```js
daysFromNow(5); // 2022-03-04 (if current date is 2022-02-27)
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/days-from-now.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/days-from-now.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/days-from-now.html"></iframe>
