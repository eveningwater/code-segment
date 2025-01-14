| 标题                                | 标签                                  |
| ----------------------------------- | ------------------------------------- |
| assertValidKeys(断言有效属性名函数) | object,intermediate(对象，两者之间的) |

验证对象的所有属性名是否与给定的属性名匹配。

- 使用`Object.keys()`方法来得到一个对象中的所有属性名。
- 使用`Array.prototype.every()`和`Array.prototype.includes()`来验证对象中每一个属性名是否在属性名数组中指定。

> 代码如下:

```js
const assertValidKeys = (obj, keys) =>
  Object.keys(obj).every(key => keys.includes(key));
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/assert-valid-keys.ts" data-language="typescript"></div>

> 调用方式:

```js
assertValidKeys({ id: 10, name: 'apple' }, ['id', 'name']); // true
assertValidKeys({ id: 10, name: 'apple' }, ['id', 'type']); // false
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/assert-valid-keys.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/assert-valid-keys.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/assert-valid-keys.html"></iframe>
