| 标题                   | 标签                   |
| ---------------------- | ---------------------- |
| bigNumberSum(捕获错误) | number,sum(数字，求和) |

计算两个超大数字相加，非[bigInt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)。

- 将超大数字转成字符串，然后通过`split()`方法转成数组，然后利用`满十进一`的原则，对应数组每一位相加。
- 当相加到第一位，则判断是否大于十，大于则进一。
- 然后用`reverse()`和`join()`将结果数组转成数字字符串。

> 代码如下:

```js
function bigNumberSum(a, b) {
  // 超大数字一定是用一个字符串表示
  // 实现原理，利用满十进一，将字符串分隔成一个数组，即每一位对应相加，满十就进1
  let aArr = a.split(''),
    bArr = b.split('');
  // 取两个数组之间最大长度
  let maxLen = Math.max(aArr.length, bArr.length);
  let flag = false,
    res = [];
  for (let i = 0; i < maxLen; i++) {
    let nPopA = aArr.pop(),
      nPopB = bArr.pop();
    let numA = parseInt(nPopA ? nPopA : 0),
      numB = parseInt(nPopB ? nPopB : 0);
    let unit = flag ? numA + numB + 1 : numA + numB;
    // 如果相加大于了10，则向前进10的倍数，如6 + 5等于11则向前进一，满足满十进一的原则
    if (parseInt(unit / 10) > 0) {
      res.push(unit % 10);
      flag = true;
    } else {
      res.push(unit);
      flag = false;
    }
    // 当相加到第一位，则判断是否相加大于10，大于10则向前进1
    if (flag && i === maxLen - 1) {
      res.push(1);
    }
  }
  // 由于是用的pop方法，从最后一个删除的，因此要reverse调换下顺序，如果用shift方法的话，则不用调用reverse
  return res.reverse().join('');
}
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/big-number-sum.ts" data-language="typescript"></div>

> 调用方式:

```js
bigNumberSum(
  '13253244444444444444444445253453',
  '2352378527582738592783562385'
);
//13255596822972027183037228815838
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/big-number-sum.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/big-number-sum.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/big-number-sum.html"></iframe>
