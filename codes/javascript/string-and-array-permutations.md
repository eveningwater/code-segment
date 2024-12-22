| 标题                                           | 标签                                                            |
| ---------------------------------------------- | --------------------------------------------------------------- |
| stringAndArrayPermutations(字符串和数组全排列) | string,array,recursion,permutations(字符串，数组，递归，全排列) |

递归实现字符串和数组的全排列

- 循环遍历字符串或数组，将第一项放在返回数组的第一位，然后递归遍历剩余的参数，依次将剩余的参数追加到数组第一位。递归结束后进行拼接，即可得到全排列
- 使用`[...new Set()]`方法去重得到的全排列数组

> 代码如下：

> 字符串全排列：

```js
function permutation(per) {
  if (per.length === 1) {
    return [per];
  }
  let res = [];
  [...per].forEach((v, i, str) => {
    const temp = [...str];
    const header = temp.splice(i, 1);
    permutation(temp).forEach(value => res.push([header, ...value].join('')));
  });
  return [...new Set(res)];
}
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/string-and-array-permutations.ts" data-language="typescript"></div>

> 调用方式：

```js
permutation('abca'); // ["abca", "abac", "acba", "acab", "aabc", "aacb", "baca", "baac", "bcaa", "caba", "caab", "cbaa"]
```

> 一维数组全排列：

```js
function permutation(per) {
  if (per.length === 1) {
    return [per];
  }
  let res = [];
  per.forEach((v, i, arr) => {
    let temp = [...arr];
    let header = temp.splice(i, 1);
    permutation(temp).forEach(val => res.push([...header, ...val]));
  });
  return [...new Set(res.map(value => JSON.stringify(value)))].map(val =>
    JSON.parse(val)
  );
  // 判断相同数组并去重，将数组转为JSON字符串，然后进行字符串去重,该方法无法进行数据类型判断，会将 1和'1'判断为相等，所以有相关数据的话不可以使用
}
```

> 调用方式：

```js
permutation([1, 2, 3, 2]);
// [[ 1, 2, 3, 2 ], [ 1, 2, 2, 3 ], [ 1, 3, 2, 2 ], [ 2, 1, 3, 2 ], [ 2, 1, 2, 3 ], [ 2, 3, 1, 2 ], [ 2, 3, 2, 1 ], [ 2, 2, 1, 3 ], [ 2, 2, 3, 1 ], [ 3, 1, 2, 2 ], [ 3, 2, 1, 2 ], [ 3, 2, 2, 1 ]]
```

> 应用场景：

以下是一个实战<a href="codes/javascript/html/string-and-array-permutations.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/string-and-array-permutations.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/string-and-array-permutations.html"></iframe>
