|  标题   | 标签  |
|  ----  | ----  |
| capitalize(函数调用) | string,intermediate(字符串，两者之间的) |

将字符串的第一个字母大写。

* 使用数组解构和 `String.prototype.toUpperCase()` 将字符串的第一个字母大写。
* 使用 `Array.prototype.join('')` 将大写的第一个与 ...其余字符组合在一起。
* 省略`lowerRest`参数以保持字符串的其余部分不变，或将其设置为true 以转换为小写。


> 代码如下:

```js
    const capitalize = ([first,...rest],lowerRest = false) => first.toUpperCase() + (lowerRest ? rest.join("").toLowerCase() : rest.join(""));
```

> 调用方式:

```js
    capitalize('fooBar'); // 'FooBar'
    capitalize('fooBar', true); // 'Foobar'
```

> 应用场景