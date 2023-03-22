| 标题                                | 标签        |
| ----------------------------------- | ----------- |
| replaceOrAppend(添加或替换数组的值) | array(数组) |

替换数组中的项目或追加它（如果它不存在）。

- 使用扩展运算符 (...) 创建数组的浅表副本。
- 使用 Array.prototype.findIndex() 查找满足提供的比较函数 compFn 的第一个元素的索引。
- 如果未找到此类元素，请使用 Array.prototype.push() 将新值附加到数组。
- 否则，使用 Array.prototype.splice() 将找到的索引处的值替换为新值。

```js
const replaceOrAppend = (arr, val, compFn) => {
  const res = [...arr];
  const i = res.findIndex(v => compFn(v, val));
  if (i === -1) {
    res.push(val);
  } else {
    res.splice(i, 1, val);
  }
  return res;
};
```

> 调用方式:

```js
const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 28 }
];
const jane = { name: 'Jane', age: 29 };
const jack = { name: 'Jack', age: 28 };
replaceOrAppend(people, jane, (a, b) => a.name === b.name);
// [ { name: 'John', age: 30 }, { name: 'Jane', age: 29 } ]
replaceOrAppend(people, jack, (a, b) => a.name === b.name);
// [
//   { name: 'John', age: 30 },
//   { name: 'Jane', age: 28 },
//   { name: 'Jack', age: 28 }
// ]
```

> 应用场景
