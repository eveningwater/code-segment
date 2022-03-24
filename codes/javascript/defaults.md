|  标题   | 标签  |
|  ----  | ----  |
| deepMerge(对象分配默认值) | object(对象) |

为对象中未定义的所有属性分配默认值。

* 使用 `Object.assign()` 创建一个新的空对象并复制原始对象以维护键顺序。
* 使用 `Array.prototype.reverse()` 和扩展运算符 (`...`) 从左到右组合默认值。
* 最后，再次使用 `obj` 覆盖原来有值的属性。

> 代码如下:

```js
const defaults = (obj,...defs) => Object.assign({},obj,...defs.reverse(),obj);
```

> 调用方式:

```js
defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
```

> 应用场景