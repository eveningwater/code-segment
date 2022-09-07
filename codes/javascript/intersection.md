|  标题   | 标签  |
|  ----  | ----  |
| intersection(求数组交集) | array(数组) |

返回两个数组中都存在的元素，过滤重复值。

* 从 b 创建一个 Set，然后在 a 上使用 Array.prototype.filter() 以仅保留 b 中包含的值。

```js
const intersection = (a,b) => {
    const s = new Set(b);
    return [...new Set(a)].filter(x => s.has(x));
}
```

> 调用方式:

```js
intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```


> 应用场景


