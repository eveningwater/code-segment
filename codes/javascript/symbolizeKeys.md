| 标题                                    | 标签         |
| --------------------------------------- | ------------ |
| symbolizeKeys(将对象属性转换成符号属性) | object(对象) |

创建一个新对象，将每个键转换为符号。

- 使用 Object.keys() 获取 obj 的键。
- 使用 Array.prototype.reduce() 和 Symbol 创建一个新对象，其中每个键都转换为 Symbol。

```js
const symbolizeKeys = obj =>
  Object.keys(obj).reduce(
    (acc, key) => ({ ...acc, [Symbol(key)]: obj[key] }),
    {}
  );
```

> 调用方式:

```js
symbolizeKeys({ id: 10, name: 'apple' });
// { [Symbol(id)]: 10, [Symbol(name)]: 'apple' }
```

> 应用场景
