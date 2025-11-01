|  标题   | 标签  |
|  ----  | ----  |
| lowercaseKeys(属性名小写) | object(对象) |

从指定的对象创建一个新对象，其中所有的键都是小写的。

* 使用 Object.keys() 和 Array.prototype.reduce() 从指定对象创建一个新对象。
* 使用 String.prototype.toLowerCase() 将原始对象中的每个键转换为小写。

```js
const lowercaseKeys = obj => Object.keys(obj).reduce((acc,key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
} ,{})
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/lowercase-keys.ts" data-language="typescript"></div>

> 调用方式:

```js
const myObj = { Name: 'Adam', sUrnAME: 'Smith' };
const myObjLower = lowercaseKeys(myObj); // {name: 'Adam', surname: 'Smith'};
```

以下是一个实战<a href="codes/javascript/html/lowercase-keys.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/lowercase-keys.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/lowercase-keys.html"></iframe>