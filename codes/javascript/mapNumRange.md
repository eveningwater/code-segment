|  标题   | 标签  |
|  ----  | ----  |
| mapNumRange(映射数字从当前范围到另一个范围) | math(数学) |

将一个数字从一个范围映射到另一个范围。

* 从 inMin-inMax 返回在 outMin-outMax 之间映射的 num。

```js
const mapNumRange = (num,inMin,inMax,outMin,outMax) => ((num - inMin) * (outMax - outMin) / (inMax - inMin)) + outMin;
```

> 调用方式:

```js
mapNumRange(5, 0, 10, 0, 100); // 50
```

> 应用场景