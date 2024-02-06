| 标题                                                                                                  | 标签                       |
| ----------------------------------------------------------------------------------------------------- | -------------------------- |
| hammingDistance([汉明距离](https://baike.baidu.com/item/%E6%B1%89%E6%98%8E%E8%B7%9D%E7%A6%BB/475174)) | math,algorithm(数学，算法) |

计算两个值之间的汉明距离。

- 使用 XOR 运算符 (^) 查找两个数字之间的位差。
- 使用 Number.prototype.toString() 转换为二进制字符串。
- 使用 String.prototype.match() 计算并返回字符串中 1 的数量。

```js
const hammingDistance = (a, b) =>
  ((a ^ b).toString(2).match(/1/g) || '').length;
```

> 调用方式:

```js
hammingDistance(2, 3); // 1
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/hammingDistance.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/hammingDistance.html"></iframe>
