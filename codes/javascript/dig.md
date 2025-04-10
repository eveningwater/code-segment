| 标题                  | 标签                         |
| --------------------- | ---------------------------- |
| dig(深度查找对象属性) | object,recursion(对象，递归) |

根据给定键获取嵌套 JSON 对象中的目标值。

- 使用 in 运算符检查目标是否存在于 obj 中。
- 如果找到，则返回 obj[target] 的值。
- 否则使用 Object.values() 和 Array.prototype.reduce() 在每个嵌套对象上递归调用 dig 直到找到第一个匹配的键/值对。

> 代码如下:

```js
const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) {
          return acc;
        }
        if (typeof val === 'object' && val !== null) {
          return dig(val, target);
        }
      }, undefined);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/dig.ts" data-language="typescript"></div>

> 调用方式:

```js
const data = {
  level1: {
    level2: {
      level3: 'some data'
    }
  }
};
dig(data, 'level3'); // 'some data'
dig(data, 'level4'); // undefined
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/dig.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/dig.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/dig.html"></iframe>
