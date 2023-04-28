| 标题                                            | 标签         |
| ----------------------------------------------- | ------------ |
| stringifyCircularJSON(将循环对象序列化成字符串) | object(对象) |

将包含循环引用的 JSON 对象序列化为 JSON 格式。

- 使用 WeakSet.prototype.add() 和 WeakSet.prototype.has() 创建一个 WeakSet 来存储和检查可见值。
- 将 JSON.stringify() 与自定义替换函数一起使用，该函数会省略已经看到的值，并根据需要添加新值。
- ⚠️ 注意：此函数查找并删除循环引用，这会导致序列化 JSON 中的循环数据丢失。

```js
const stringifyCircularJSON = obj => {
  const seen = new WeakSet();
  return JSON.stringify(obj, (v, k) => {
    if (v !== null && typeof v === 'object') {
      if (seen.has(v)) {
        return;
      }
      seen.add(v);
    }
    return v;
  });
};
```

> 调用方式:

```js
const obj = { n: 42 };
obj.obj = obj;
stringifyCircularJSON(obj); // '{"n": 42}'
```

> 应用场景
