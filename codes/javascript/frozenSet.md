|  标题   | 标签  |
|  ----  | ----  |
| frozenSet(创建一个冻结的Set对象) | date(日期) |

创建一个冻结的 Set 对象。

* 使用 Set 构造函数从可迭代对象中创建一个新的 Set 对象。
* 将新建对象的add、delete、clear方法设置为undefined，使其无法使用，实际上是冻结了对象。

```js
const frozenSet = iterable => {
    const s = new Set(iterable);
    s.delete = undefined;
    s.add = undefined;
    s.clear = undefined;
    return s;
}
```

> 调用方式:

```js
frozenSet([1, 2, 3, 1, 2]);
// Set { 1, 2, 3, add: undefined, delete: undefined, clear: undefined }
```

> 应用场景

