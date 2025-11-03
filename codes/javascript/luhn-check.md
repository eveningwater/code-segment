|  标题   | 标签  |
|  ----  | ----  |
| luhnCheck([模10算法](https://baike.baidu.com/item/Luhn%E7%AE%97%E6%B3%95/22799984?fr=aladdin)) | math,algorithm(数学,算法) |

实施 [Luhn 算法](https://en.wikipedia.org/wiki/Luhn_algorithm)，用于验证各种识别号码，例如信用卡号码、IMEI 号码、国家提供商标识符号码等。

* 使用 String.prototype.split()、Array.prototype.reverse() 和 Array.prototype.map() 结合 parseInt() 来获得一个数字数组。
* 使用 Array.prototype.shift() 获取最后一位。
* 使用 Array.prototype.reduce() 来实现 Luhn 算法。
* 如果 sum 可以被 10 整除，则返回 true，否则返回 false。

```js
const luhnCheck = num => {
    const arr = (num + '').split('').reverse().map(x => parseInt(x));
    const lastDigit = arr.shift();
    let sum = arr.reduce((acc,val,i) => (i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val)),0);
    sum += lastDigit;
    return sum % 10 === 0
}
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/luhn-check.ts" data-language="typescript"></div>

> 调用方式:

```js
luhnCheck('4485275742308327'); // true
luhnCheck(6011329933655299); //  true
luhnCheck(123456789); // false
```

以下是一个实战<a href="codes/javascript/html/luhn-check.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/luhn-check.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/luhn-check.html"></iframe>