| 标题                                                          | 标签         |
| ------------------------------------------------------------- | ------------ |
| findLastKey(查找提供的函数为其返回真值的最后一个元素的属性名) | object(对象) |

查找满足提供的测试功能的最后一个键。否则返回未定义。

- 使用 `Object.keys()` 获取对象的所有属性。
- 使用 `Array.prototype.reverse()` 反转顺序，使用 `Array.prototype.find()` 测试每个键值对提供的函数。
- 回调接收三个参数——值、键和对象。

> 代码如下:

```js
const findLastKey = (obj, handler) =>
  Object.keys(obj)
    .reverse()
    .find(key => handler(obj[key], key, obj));
```

> 调用方式:

```js
findLastKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  x => x['active']
); // 'pebbles'
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/findLastKey.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/findLastKey.html"></iframe>
