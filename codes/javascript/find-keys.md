| 标题                                   | 标签         |
| -------------------------------------- | ------------ |
| findKeys(根据指定值查找对象所有属性名) | object(对象) |

在提供的对象中查找与给定值匹配的所有键。

- 使用 `Object.keys()` 获取对象的所有属性。
- 使用 `Array.prototype.filter()` 测试每个键值对并返回所有等于给定值的键。

> 代码如下:

```js
const findKeys = (obj, val) =>
  Object.keys(obj).filter((key) => obj[key] === val);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/find-keys.ts" data-language="typescript"></div>

> 调用方式:

```js
const ages = {
  Leo: 20,
  Zoey: 21,
  Jane: 20,
};
findKeys(ages, 20); // [ 'Leo', 'Jane' ]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/find-keys.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/find-keys.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/find-keys.html"></iframe>
