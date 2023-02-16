| 标题           | 标签        |
| -------------- | ----------- |
| pull(过滤数组) | array(数组) |

改变原始数组以过滤掉指定的值。

- 使用 Array.prototype.filter() 和 Array.prototype.includes() 提取不需要的值。
- 设置 Array.prototype.length 以通过将其长度重置为 0 来改变传入的数组。
- 使用 Array.prototype.push() 仅使用拉取的值重新填充它。

```js
const pull = (arr, ...args) => {
  let argState = Array.isArray(args[0]) ? args[0] : args;
  let pulled = arr.filter(v => !argState.includes(v));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
};
```

> 调用方式:

```js
let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
pull(myArray, 'a', 'c'); // myArray = [ 'b', 'b' ]
```

> 应用场景
