| 标题                  | 标签                                 |
| --------------------- | ------------------------------------ |
| bifurcateBy(划分数组) | array,intermediate(数组，两者之间的) |

根据给定过滤函数的结果将值分成两组。

- 使用 `Array.prototype.reduce()` 和 `Array.prototype.push()` 根据过滤器将元素添加到组中,基于每一个元素回调函数的返回值。
- 如果回调函数有任何元素的真值，则将其添加到第一组，否则将其添加到第二组。

> 代码如下:

```js
const bifurcateBy = (arr, handler) =>
  arr.reduce(
    (acc, val, i) => (acc[handler(val, i) ? 0 : 1].push(val), acc),
    [[], []]
  );
//或者 const bifurcateBy = (arr,handler) => arr.reduce((acc,val,i) => (acc[Number(!handler(val,i))].push(val),acc),[[],[]]);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/bifurcateBy.ts" data-language="typescript"></div>

> 调用方式:

```js
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b');
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/bifurcateBy.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/bifurcateBy.html"></iframe>
