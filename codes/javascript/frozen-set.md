| 标题                               | 标签       |
| ---------------------------------- | ---------- |
| frozenSet(创建一个冻结的 Set 对象) | date(日期) |

创建一个冻结的 Set 对象。

- 使用 Set 构造函数从可迭代对象中创建一个新的 Set 对象。
- 将新建对象的 add、delete、clear 方法设置为 undefined，使其无法使用，实际上是冻结了对象。

```js
const frozenSet = iterable => {
  const s = new Set(iterable);
  s.delete = undefined;
  s.add = undefined;
  s.clear = undefined;
  return s;
};
```

最好是使用[Object.defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)方法或者[proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)方法来实现:

> 方法 1:


```js
const frozenSet = (iterable) => {
  const s = new Set(iterable);
  const methodNames = ["add", "clear", "delete"];

  methodNames.forEach((methodName) => {
      Object.defineProperty(s, methodName, {
          value: () => {
              throw new Error("Cannot modify frozen set");
          },
          writable: false,
          enumerable: false,
          configurable: false,
      });
  });
  return s;
};
```

> 方法 2:

```js
const frozenSet = (iterable) => {
  const s = new Set(iterable);
  return new Proxy(s, {
      get(target, prop, receiver) {
          if (["add", "delete", "clear"].includes(prop)) {
              return () => {
                  throw new Error("Cannot modify frozen set");
              };
          }
          return Reflect.get(target, prop, receiver);
      },
      set() {
          throw new Error("Cannot modify frozen set");
      },
      deleteProperty() {
          throw new Error("Cannot modify frozen set");
      },
  });
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/frozen-set.ts" data-language="typescript"></div>

> 调用方式:

```js
frozenSet([1, 2, 3, 1, 2]);
// Set { 1, 2, 3, add: undefined, delete: undefined, clear: undefined }
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/frozen-set.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/frozen-set.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/frozen-set.html"></iframe>
