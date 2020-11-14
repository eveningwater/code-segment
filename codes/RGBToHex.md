|  标题   | 标签  |
|  ----  | ----  |
| RGBToHex(将RGB颜色转换成Hex颜色) | string,math,intermediate(字符串,数学，两者之间) |

将一个`RGB`颜色转换成`Hex`(即16进制)颜色模式。

* 使用[按位左移运算符(<<)](https://segmentfault.com/a/1190000018241410)和`Number.prototype.toString(16)`将给定的`RGB`参数转换为十六进制字符串。
* 使用[String.prototype.padStart(6,'0')](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)获得6位十六进制值

> 代码如下:

```js
    const RGBToHex = (r,g,b) => {
        r /= 255;
        g /= 255;
        b /= 255;
        const v = Math.max(r,g,b);
        const n = v - Math.min(r,g,b);
        const h = n && v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n;
        // h,s = n / v,b = v
        return [60 * (h < 0 ? h + 6 : h), v && (n / v) * 100, v * 100];
    }
```

> 调用方式:

```js
    RGBToHex(252, 111, 48);
    // [18.529411764705856, 80.95238095238095, 98.82352941176471]
```

> 应用场景