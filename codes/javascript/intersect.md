| 标题                              | 标签                       |
| --------------------------------- | -------------------------- |
| intersect(多个一维数组之间的交集) | array,intersect(数组,交集) |

实现多个一维数组之间的交集

- 将输入的数组去重后进行遍历，并将数组中的每一项都追加到`map`实例对象中，键为当前数组值，值为数组值出现的次数，当该值为输入数组长度时，即为所有数组的子项，也就是交集

> 代码如下

```js
function intersect(...arg) {
  const res = new Map(),
    intersect = [];
  arg.forEach(item =>
    [...new Set(item)].forEach(val =>
      res.set(val, res.get(val) ? res.get(val) + 1 : 1)
    )
  );
  res.forEach((value, key) => value === arg.length && intersect.push(key));
  return intersect;
}
```

> 调用方式

```js
intersect([1, 6, 7, 43, 9, 54, 7], [4, 7, 9, 76, 54, '6', '1']); // [7,9,54]
intersect(
  [1, 6, 7, 43, 9, 54, 7],
  [4, 7, 9, 76, 54, '6', '1'],
  [1, 424, 54, 4]
); // [54]
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/intersect.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/intersect.html"></iframe>
