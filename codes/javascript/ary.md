| 标题          | 标签                            |
| ------------- | ------------------------------- |
| ary(创建函数) | function,advanced(函数，高级的) |

创建一个最多接受`n`个参数的函数，忽略任何其他参数。

- 使用`Array.prototype.slice(0,n)`和展开运算符`...`调用提供的函数`fn`（最多`n`个参数）。

> 代码如下:

```js
const ary =
  (fn, n) =>
  (...args) =>
    fn(...args.slice(0, n));
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/ary.ts" data-language="typescript"></div>

> 调用方式:

```js
const firstTwoMax = ary(Math.max, 2);
// 这里不严谨，可查看ts代码段，'a'不能当作number传入，而这里只是截取前2个值，所以'a'会被忽略，如果比较前3个数，则结果是[NaN, 6, 10]
// 即可理解为，const firstThreeMax = ary(Math.max, 3); [[2, 6, 'a'], [6, 4, 8], [10]].map(x => firstThreeMax(...x));的结果
[[2, 6, 'a'], [6, 4, 8], [10]].map(x => firstTwoMax(...x)); // [6, 6, 10]
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/ary.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/ary.html"></iframe>
