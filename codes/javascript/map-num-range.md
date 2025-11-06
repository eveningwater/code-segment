|  标题   | 标签  |
|  ----  | ----  |
| mapNumRange(映射数字从当前范围到另一个范围) | math(数学) |

将一个数字从一个范围映射到另一个范围。

* 从 inMin-inMax 返回在 outMin-outMax 之间映射的 num。

```js
const mapNumRange = (num,inMin,inMax,outMin,outMax) => ((num - inMin) * (outMax - outMin) / (inMax - inMin)) + outMin;
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/map-num-range.ts" data-language="typescript"></div>

> 调用方式:

```js
mapNumRange(5, 0, 10, 0, 100); // 50
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/map-num-range.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/map-num-range.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/map-num-range.html"></iframe>