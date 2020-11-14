|  标题   | 标签  |
|  ----  | ----  |
| RGBToHex(将RGB颜色转换成Hex颜色) | string,math,intermediate(字符串,数学，两者之间) |

将一个`RGB`颜色转换成`Hex`(即16进制)颜色模式。

* 使用[按位左移运算符(<<)](https://segmentfault.com/a/1190000018241410)和`Number.prototype.toString(16)`将给定的`RGB`参数转换为十六进制字符串。
* 使用[String.prototype.padStart(6,'0')](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)获得6位十六进制值

> 代码如下:

```js
    const RGBToHex = (r,g,b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6,'0');
```

> 调用方式:

```js
    RGBToHex(255, 165, 1); // 'ffa501'
```

> 应用场景