| 标题                            | 标签                           |
| ------------------------------- | ------------------------------ |
| isBooleanAttr(是否是布尔值属性) | string,attribute(字符串，属性) |

是否是布尔值属性。

- 定义可读属性字符串，调用 join 方法转成数组，然后使用 includes 方法判断是否在数组中存在给定的参数属性。

```js
const isBooleanAttr = key => {
  const boolAttr = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`;
  return boolAttr.split(',').includes(key);
};
```

> 调用方式:

```js
isBooleanAttr('required'); // true;
isBooleanAttr('id'); // false;
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isBooleanAttr.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isBooleanAttr.html"></iframe>
