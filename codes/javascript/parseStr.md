| 标题                     | 标签           |
| ------------------------ | -------------- |
| parseStr(解析字符串) | string,parse(字符串,解析) |

解析字符串。

- 使用try..catch语句处理解析失败的场景。
- 使用 [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)或者模拟实现一个[eval](codes/javascript/equalEval.md)方法来解析传入的字符串。
- 第二个参数 type 可以指定解析的类型，默认为 json，值仅有json/eval。

```js
const parseStr = (str, type = 'json') => {
    const parseMethod = {
        'eval': (v) => new Function(`return ${v}`)(),
        'json': JSON.parse
    }
    let res = null;
    try {
        const method = parseMethod[type];
        if(method){
            res = method(str);
        }
    } catch (error) {
        console.error(`[parse data error]:${error}`);
    }
    return res;
}
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/parseStr.ts" data-language="typescript"></div>

> 调用方式:

```js

```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/parseStr.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/parseStr.html"></iframe>
