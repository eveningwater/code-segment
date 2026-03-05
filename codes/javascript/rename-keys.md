| 标题                       | 标签         |
| -------------------------- | ------------ |
| renameKeys(重命名对象属性) | object(对象) |

用提供的值替换多个对象键的名称。

- 将 Object.keys() 与 Array.prototype.reduce() 和扩展运算符 (...) 结合使用，以获取对象的键并根据 keysMap 重命名它们。

```js
const renameKeys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  );
```

<div class="code-editor" data-url="codes/javascript/ts/rename-keys.ts" data-language="typescript"></div>

> 调用方式:

```js
const obj = { name: 'Bobo', job: 'Front-End Master', shoeSize: 100 };
renameKeys({ name: 'firstName', job: 'passion' }, obj);
// { firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/rename-keys.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/rename-keys.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/rename-keys.html"></iframe>