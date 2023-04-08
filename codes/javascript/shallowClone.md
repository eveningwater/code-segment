| 标题                     | 标签         |
| ------------------------ | ------------ |
| shallowClone(浅复制对象) | object(对象) |

创建对象的浅克隆。

- 使用 Object.assign() 和空对象 ({}) 创建原始对象的浅表克隆。

```js
const shallowClone = Object.assign({}, obj);
```

> 调用方式:

```js
const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```

> 应用场景
