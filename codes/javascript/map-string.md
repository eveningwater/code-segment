|  标题   | 标签  |
|  ----  | ----  |
| mapString(映射字符串) | string(字符串) |

使用对给定字符串中的每个字符调用提供的函数的结果创建一个新字符串。

* 使用 String.prototype.split() 和 Array.prototype.map() 为 str 中的每个字符调用提供的函数 fn。
* 使用 Array.prototype.join() 将字符数组重新组合成一个字符串。
* 回调函数 fn 接受三个参数（当前字符、当前字符的索引和调用的字符串 mapString）。

```js
const mapString = (str,fn) => str.split('').map((i,v) => fn(i,v,str)).join(''); 
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/map-string.ts" data-language="typescript"></div>

> 调用方式:

```js
mapString('lorem ipsum', c => c.toUpperCase()); // 'LOREM IPSUM'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/map-string.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/map-string.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/map-string.html"></iframe>