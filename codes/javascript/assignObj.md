| 标题                | 标签         |
| ------------------- | ------------ |
| assignObj(合并对象) | object(对象) |

实现合并对象方法，功能类似[Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)。

- 判断如果源对象 target 是 null，则直接返回结果。
- 使用 Object 方法包装 target。
- 遍历其它参数，使用 Object.prototype.hasOwnProperty 方法是否存在该属性，存在则将该属性以及属性值赋值给被包装的源对象。
- 返回包装后的源对象。

> 代码如下:

```js
const assignObj = (target, ...args) => {
  if (target === null) {
    return;
  }
  const _ = Object(target);
  args.forEach(item => {
    if (item) {
      for (let key in item) {
        if (Object.prototype.hasOwnProperty.call(item, key)) {
          _[key] = item[key];
        }
      }
    }
  });
  return _;
};
```

> 调用方式:

```js
console.log(assignObj({}, { a: 1, b: 2 })); // { a:1,b:2 }
console.log(assignObj({ a: 3, c: 1 }, { a: 4, b: 2 })); // { a:4,c:1,b:2 }
```

> 应用场景

assignObj.html 如下:

<div class="code-editor" data-url="codes/javascript/html/assignObj.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/assignObj.html"></iframe>
