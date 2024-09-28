| 标题                                             | 标签                                       |
| ------------------------------------------------ | ------------------------------------------ |
| hyphenToLowerCamelCase(将连字符字符串转为小驼峰) | string,RegExp,camel case(字符串,正则,驼峰) |

将连字符转为小驼峰

- 使用`String.prototype.split()`方法将字符串以连字符为分隔符拆分成数组
- 使用`String.prototype.toUpperCase()`方法将字符转为大写形式

> 代码如下

```js
function lowerCamelCase(arg, hyphen) {
  let arr = arg.split(hyphen || '-');
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
  }
  return arr.join('');
}
```

> 使用正则表达式

```js
function lowerCamelCase(arg, hyphen) {
  const reg = new RegExp((hyphen || '-') + '[a-zA-Z]', 'g');
  return arg.replace(reg, rep => rep.charAt(1).toUpperCase());
}
```

> 调用方式

```js
lowerCamelCase('class-last-name'); // classLastName
lowerCamelCase('class_last_name', '_'); // classLastName
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/lowerCamelCase.ts" data-language="typescript"></div>

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/lowerCamelCase.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/lowerCamelCase.html"></iframe>
