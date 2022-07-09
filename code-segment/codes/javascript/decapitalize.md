|  标题   | 标签  |
|  ----  | ----  |
| decapitalize(取消单词首字母大写) | string(字符串) |

将字符串单词的首字母取消大写。

* 使用数组解构和 `String.prototype.toLowerCase()` 将第一个字母取消大写，`...rest` 以获取第一个字母后的字符数组，然后使用 `Array.prototype.join()` 使其再次成为字符串。
* 省略 `upperRest` 参数以保持字符串的其余部分不变，或将其设置为 `true` 以转换为大写。

> 代码如下:

```js
const decapitalize = ([first,...rest],upperRest = false) => first.toLowerCase() + (upperRest ? rest.join("").toUpperCase() : rest.join(""));
```

> 调用方式:

```js
decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar', true); // 'fOOBAR'
```

> 应用场景