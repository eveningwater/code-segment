| 标题                 | 标签                                    |
| -------------------- | --------------------------------------- |
| castArray (转换数组) | type,array,beginner(类型，数组，初学者) |

如果它不是一个数组，则将提供的值转换为数组。

- 使用 `Array.prototype.isArray()` 确定 `v` 是否为数组并按原样返回或相应地封装在数组中。

> 代码如下:

```js
const castArray = v => (Array.isArray(v) ? v : [v]);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/cast-array.ts" data-language="typescript"></div>

> 调用方式:

```js
castArray('foo'); // ['foo']
castArray([1]); // [1]
```

> 应用场景

以下是一个基于转换数组而实现的实战<a href="codes/javascript/html/cast-array.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/cast-array.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/cast-array.html"></iframe>
