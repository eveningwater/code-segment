| 标题                     | 标签           |
| ------------------------ | -------------- |
| compareVersion(版本比较) | string(字符串) |

版本比较。

- 使用 split 将两个字符串参数转成数组。
- 使用 Math.max 取两个数组的最大长度。
- 遍历数组，使用+操作符将每一个字符转成数字，并判断大小，返回 1,-1,0 三个值。

```js
const compareVersion = (source, target) => {
  const a1 = source.split('.');
  const a2 = target.split('.');
  const len = Math.max(a1.length, a2.length);

  for (let i = 0; i < len; i++) {
    const v1 = +a1[i] || 0;
    const v2 = +a2[i] || 0;
    if (v1 > v2) {
      return 1;
    }
    if (v1 < v2) {
      return -1;
    }
  }
  return 0;
};
```

> 调用方式:

```js
console.log(
  compareVersion('1.0.3', '1.0.5'), // 返回 -1
  compareVersion('1.0.7', '1.0.5'), // 返回 1
  compareVersion('1.1.3', '1.0.5') // 返回 1
);
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/compareVersion.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/compareVersion.html"></iframe>
