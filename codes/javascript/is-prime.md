| 标题                      | 标签                       |
| ------------------------- | -------------------------- |
| isPrime(是否是质（素）数) | math,algorithm(数学，算法) |

检查提供的整数是否为[素数](https://baike.baidu.com/item/%E8%B4%A8%E6%95%B0/263515)。

- 检查从 2 到给定数字的平方根的数字。
- 如果其中任何一个除以给定的数字，则返回 false，否则返回 true，除非该数字小于 2。

```js
const isPrime = num => {
  const boundary = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= boundary; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num >= 2;
};
```


ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-prime.ts" data-language="typescript"></div>

> 调用方式:

```js
isPrime(11); // true
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-prime.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-prime.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-prime.html"></iframe>
