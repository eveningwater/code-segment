| 标题                                      | 标签                           |
| ----------------------------------------- | ------------------------------ |
| getUnicode(解码统一码（Unicode）为字符串) | string,unicode(字符串，统一码) |

解码统一码（Unicode）为字符串。

- 判断如果传入的的不是一个字符串或者是字符串字符串中包含'\\u'，则判定是一个需要解码的 Unicode。
- 定义一个结果变量，将字符串以'\\u'作为分隔符转成数组，遍历数组，调用 parseInt 方法将每一个数组项转成 16 进制的数字，然后再调用字符串的 String.fromCharCode 方法将每一个数字转成 16 进制的字符串，拼接每一个结果。
- 返回这个结果。

```js
const getUnicode = text => {
  if (text && text.indexOf('\\u') !== -1) {
    let textArr = text.split('\\u'),
      result = '';
    for (let j = 0, length = textArr.length; j < length; j++) {
      result += String.fromCharCode(parseInt(textArr[j], 16));
    }
    return result.slice(1);
  } else {
    return text;
  }
};
```

> 调用方式:

```js
getUnicode(`\\u48\\u65\\u6c\\u6c\\u6f\\u2c\\u77\\u6f\\u72\\u6c\\u64\\u21`); // 'Hello,world!'
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/getUnicode.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/getUnicode.html"></iframe>
