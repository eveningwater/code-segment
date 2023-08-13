| 标题                | 标签                         |
| ------------------- | ---------------------------- |
| any(任意元素的检查) | array,beginner(数组，初学者) |

提供一个回调函数检查元素集合中至少存在一个元素满足回调函数中的条件，并返回布尔值。

- 使用`Array.prototype.some()`方法根据提供的回调函数`fn`来测试元素集合中的元素是否满足条件并返回布尔值。
- 如果不传入第二个参数，则使用默认的`fn`值，即`Boolean`。

> 代码如下:

```js
const any = (arr, fn = Boolean) => arr.some(fn);
```

> 调用方式:

```js
any([0, 1, 2, 0], x => x >= 2); // true
any([0, 0, 1, 0]); // true
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/any.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/any.html"></iframe>
