| 标题                    | 标签                         |
| ----------------------- | ---------------------------- |
| deepClone(深度克隆对象) | object,recursion(对象，递归) |

创建对象的深层克隆。克隆原始的、数组和对象，不包括类实例。

- 使用递归。
- 检查传递的对象是否为空，如果是，则返回空。
- 使用 `Object.assign()` 和一个空对象 (`{}`)创建原始的浅克隆。
- 使用 `Object.keys()` 和 `Array.prototype.forEach()` 来确定哪些键值对需要深度克隆。
- 如果对象是一个数组，则将克隆的长度设置为原始长度并使用 `Array.from()`创建一个克隆。

> 代码如下:

```js
const deepClone = obj => {
  if (obj === null) {
    return null;
  }
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    key =>
      (clone[key] =
        typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  );
  if (Array.isArray(obj)) {
    clone.length = obj.length;
    return Array.from(clone);
  }
  return clone;
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/deep-clone.ts" data-language="typescript"></div>

> 调用方式:

```js
const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = deepClone(a); // a !== b, a.obj !== b.obj
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/deep-clone.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/deep-clone.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/deep-clone.html"></iframe>
