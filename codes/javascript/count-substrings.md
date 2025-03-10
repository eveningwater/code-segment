| 标题                                            | 标签                                            |
| ----------------------------------------------- | ----------------------------------------------- |
| countSubstrings(计算字符串中子字符串出现的次数) | string,algorithm,beginner(字符串，算法，初学者) |

计算给定字符串中子字符串的出现次数。

- 使用 `Array.prototype.indexOf()` 在 `str` 中查找 `searchValue`。
- 如果找到值并更新索引，则增加一个计数器，即 i。
- 使用一个 `while` 循环，该循环将在 `Array.prototype.indexOf()` 返回的值为 `-1` 时立即返回。

> 代码如下:

```js
const countSubstrings = (str, searchValue) => {
  let count = 0,
    i = 0;
  while (true) {
    const r = str.indexOf(searchValue, i);
    if (r !== -1) {
      [count, i] = [count + 1, r + 1];
    } else {
      return count;
    }
  }
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/count-substrings.ts" data-language="typescript"></div>

> 调用方式:

```js
countSubstrings('tiktok tok tok tik tok tik', 'tik'); // 3
countSubstrings('tutut tut tut', 'tut'); // 4
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/count-substrings.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/count-substrings.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/count-substrings.html"></iframe>
