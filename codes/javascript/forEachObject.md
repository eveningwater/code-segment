| 标题                    | 标签         |
| ----------------------- | ------------ |
| forEachObject(遍历对象) | object(对象) |

遍历对象。

- 使用 Object.keys 方法读取对象的属性组成一个属性数组。
- 使用 Array.prototype.forEach 遍历属性数组，并且通过回调函数将属性以及属性值返回。

> 代码如下:

```js
const forEachObject = (obj, callback) => {
  Object.keys(obj).forEach(key => callback(obj[key], key));
};
```

> 调用方式:

```js
const obj = {
  a: 1,
  b: 2
};
forEachObject(obj, (value, key) => console.log(value, key)); // 1,a b,2
```

> 应用场景

forEachObject.html 如下:

<div class="code-editor" data-url="codes/javascript/html/forEachObject.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/forEachObject.html"></iframe>
