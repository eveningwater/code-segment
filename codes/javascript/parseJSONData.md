| 标题                     | 标签           |
| ------------------------ | -------------- |
| parseJSONData(将json字符串解析成json数据) | string,JSON(字符串,JSON) |

将json字符串解析成json数据。

- 使用try..catch语句处理解析失败的场景。
- 使用 [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)方法来解析传入的字符串。


```js
const parseJSONData = (str) => {
    let res;
    try {
        res = JSON.parse(str);
    } catch (error) {
       console.error(`[parse data error]:${error}`) 
    }
    return res;
}
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/parseJSONData.ts" data-language="typescript"></div>

> 调用方式:

```js
parseJSONData(`{ "name":"eveningwater"}`) // { name:"eveningwater" }
parseJSONData(`["eveningwater",1]`); // ["eveningwater",1]
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/parseJSONData.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/parseJSONData.html"></iframe>
