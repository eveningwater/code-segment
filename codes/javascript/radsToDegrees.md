| 标题                    | 标签       |
| ----------------------- | ---------- |
| radsToDegrees(弧度转度) | math(数学) |

将角度从弧度转换为度数。

- 使用 Math.PI 和弧度转度公式将角度从弧度转换为度数。

```js
const radsToDegrees = rad => (rad * 180.0) / Math.PI;
```

> 调用方式:

```js
radsToDegrees(Math.PI / 2); // 90
```

> 应用场景
