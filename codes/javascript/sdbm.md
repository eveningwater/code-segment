| 标题                                       | 标签       |
| ------------------------------------------ | ---------- |
| Hash string into number(hash 字符串转数字) | math(数学) |

将输入字符串散列为整数。

- 使用 String.prototype.split() 和 Array.prototype.reduce() 创建输入字符串的散列，利用位移。

```js
const sdbm = str => {
  let arr = str.split('');
  return arr.reduce(
    (hashCode, currentVal) =>
      (hashCode =
        currentVal.charCodeAt(0) +
        (hashCode << 6) +
        (hashCode << 16) -
        hashCode),
    0
  );
};
```

<div class="code-editor" data-url="codes/javascript/ts/sdbm.ts" data-language="typescript"></div>

> 调用方式:

```js
sdbm('name'); // -3521204949
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/sdbm.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/sdbm.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/sdbm.html"></iframe>