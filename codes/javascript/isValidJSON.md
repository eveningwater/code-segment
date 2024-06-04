| 标题                                    | 标签       |
| --------------------------------------- | ---------- |
| isValidJSON(是否是合格的 JSON 数据结构) | type(类型) |

检查提供的字符串是否是有效的 JSON。

- 使用 JSON.parse() 和 try...catch 块来检查提供的字符串是否是有效的 JSON。

```js
const isValidJSON = val => {
  try {
    JSON.parse(val);
    return true;
  } catch (error) {
    return false;
  }
};
```

> 调用方式:

```js
isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isValidJSON.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isValidJSON.html"></iframe>
