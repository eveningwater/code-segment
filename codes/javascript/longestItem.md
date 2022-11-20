|  标题   | 标签  |
|  ----  | ----  |
| longestItem(最长的项) | array(数组) |

获取任意数量的可迭代对象或具有长度属性的对象并返回最长的一个。

* 使用 Array.prototype.reduce()，比较对象的长度以找到最长的一个。
* 如果多个对象的长度相同，则返回第一个。
* 如果没有提供参数，则返回 undefined。

```js
const longestItem = (...val) => val.reduce((a,x) => x.length > a.length ? x : a);
```

> 调用方式:

```js
longestItem('this', 'is', 'a', 'testcase'); // 'testcase'
longestItem(...['a', 'ab', 'abc']); // 'abc'
longestItem(...['a', 'ab', 'abc'], 'abcd'); // 'abcd'
longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
longestItem([1, 2, 3], 'foobar'); // 'foobar'
```

> 应用场景



