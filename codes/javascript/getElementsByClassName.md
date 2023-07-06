| 标题                                                  | 标签                                          |
| ----------------------------------------------------- | --------------------------------------------- |
| getElementsByClassName(模拟通过类名查找 dom 元素方法) | browser,class,regexp(浏览器，类名,正则表达式) |

使用正则表达式实现 [Document.getElementsByClassName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName) 方法。

- 使用 Document.getElementsByTagName 方法获取页面所有元素。
- 使用正则构造函数构建匹配类名的正则表达式。
- 遍历元素集合，判断元素的类名和正则表达式相匹配，则添加到结果数组中去。
- 返回结果数组。

```js
const getElementsByClassName = className => {
  const elements = document.getElementsByTagName('*');
  const regex = new RegExp('(^|\\s)' + className + '(\\s|$)');
  const res = [];
  const result = [];
  for (let i = 0, len = elements.length; i < len; i++) {
    const element = elements[i];
    if (regex.test(element.className)) {
      result.push(element);
    }
  }
  return result;
};
```

> 调用方式:

```js
const highs = getElementsByClassName('high');
// 假设页面中含有类名为high的元素，则会返回一个多个该类名元素的集合
```

> 应用场景
