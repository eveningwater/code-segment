|  标题   | 标签  |
|  ----  | ----  |
| detectLanguage(检测语言类型) | browser(浏览器) |

计算两个数组之间的差集，而不过滤重复值。

* 从 b 创建一个 Set 以获取 b 中的唯一值。
* 在 a 上使用 Array.prototype.filter() 只保留 b 中不包含的值，使用 Set.prototype.has()。

> 代码如下:

```js
const difference = (a,b) => {
    const s = new Set(b);
    return a.filter(x => !s.has(x));
}
```

> 调用方式:

```js
difference([1, 2, 3, 3], [1, 2, 4]); // [3, 3]
```

> 应用场景