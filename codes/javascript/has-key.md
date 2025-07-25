| 标题                           | 标签         |
| ------------------------------ | ------------ |
| hasKey(检查对象中是否含有属性) | object(对象) |

检查目标值是否存在于 JSON 对象中。

- 检查键是否为非空并使用 Array.prototype.every() 依次检查其键到对象 obj 的内部深度。
- 使用 Object.prototype.hasOwnProperty() 检查 obj 是否没有当前键或者不是对象，停止传播并返回 false。
- 否则将键的值分配给 obj 以在下一次迭代中使用。
- 如果给定的键列表为空，则预先返回 false。

```js
const hasKey = (obj, keys) =>
  keys.length > 0 &&
  keys.every(key => {
    if (typeof obj !== 'object' || !obj.hasOwnProperty(key)) {
      return false;
    }
    obj = obj[key];
    return true;
  });
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/has-key.ts" data-language="typescript"></div>

> 调用方式:

```js
let obj = {
  a: 1,
  b: { c: 4 },
  'b.d': 5
};
hasKey(obj, ['a']); // true
hasKey(obj, ['b']); // true
hasKey(obj, ['b', 'c']); // true
hasKey(obj, ['b.d']); // true
hasKey(obj, ['d']); // false
hasKey(obj, ['c']); // false
hasKey(obj, ['b', 'f']); // false
```

> 应用场景


以下是一个实战<a href="codes/javascript/html/has-key.html" target="_blank" rel="noopener noreferrer">示例</a>:


<div class="code-editor" data-url="codes/javascript/html/has-key.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/has-key.html"></iframe>
