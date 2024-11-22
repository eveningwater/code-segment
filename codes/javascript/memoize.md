| 标题              | 标签           |
| ----------------- | -------------- |
| memoize(缓存函数) | function(函数) |

返回记忆（缓存）函数。

- 通过实例化一个新的 Map 对象来创建一个空缓存。
- 通过首先检查该特定输入值的函数输出是否已被缓存，或者如果没有，则存储并返回它，返回一个函数，该函数将单个参数提供给记忆函数。
- 必须使用 function 关键字以允许记忆函数在必要时更改其 this 上下文。
- 通过将缓存设置为返回函数的属性来允许访问缓存。

```js
const memoize = (fn) => {
  const cache = new Map();
  const cached = (val) =>
    cache.has(val)
      ? cache.get(val)
      : cache.set(val, fn.call(this, val)) && cache.get(val);
  cached.cache = cache;
  return cached;
};
```

> 调用方式:

```js
//See the median snippet
const medianCache = memoize(median);
medianCache([5, 6, 50, 1, -5]);
medianCache([5, 6, 50, 1, -5]);
console.log(medianCache.cache); // Map(2) { [ -5, 1, 5, 6, 50 ] => 5, [ -5, 1, 5, 6, 50 ] => 5 }
```

> 应用场景
