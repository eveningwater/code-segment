|  标题   | 标签  |
|  ----  | ----  |
| initializeArrayWithValues(生成数组) | array(数组) |

用指定的值初始化并填充数组。

* 使用 Array.from() 创建所需长度的数组，使用 Array.prototype.fill() 填充所需值。
* 省略最后一个参数 val，以使用默认值 0。

```js
const initializeArrayWithValues = (n,val = 0) => Array.from({ length:n }).fill(val);
```

> 调用方式:

```js
initializeArrayWithValues(5, 2); // [2, 2, 2, 2, 2]
```

> 应用场景

<iframe src="codes/javascript/html/initializeArrayWithValues.html"></iframe>








