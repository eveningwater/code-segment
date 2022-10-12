|  标题   | 标签  |
|  ----  | ----  |
| isNumber(是否数字) | type,math(类型,数学) |

检查给定参数是否为数字。

* 使用 typeof 检查一个值是否被归类为数字原语。
* 为了防止 NaN，请检查是否 val === val（因为 NaN 的 typeof 等于 number 并且是唯一不等于自身的值）。

```js
const isNumber = val => typeof val === 'number' && val === val;
```

> 调用方式:

```js
isNumber(1); // true
isNumber('1'); // false
isNumber(NaN); // false
```

> 应用场景
