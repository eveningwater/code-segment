|  标题   | 标签  |
|  ----  | ----  |
| get(路径字符串中获取对象属性) | object,regexp(对象，正则表达式) |

从对象中检索由给定选择器指示的一组属性。

* 对每个选择器使用 Array.prototype.map()，String.prototype.replace() 用点替换方括号。
* 使用 String.prototype.split() 拆分每个选择器。
* 使用 Array.prototype.filter() 删除空值，使用 Array.prototype.reduce() 获取每个选择器指示的值。


```js
const get = (from,...selectors) => [...selectors].filter(s => typeof s === "string").map(s => 
    s.replace(/\[([^\[\]]*)\]/g,'.$1.').split('.').filter(t => t !== '').reduce((prev,cur) => prev && prev[cur],from)
)
```

> 调用方式:

```js
const obj = {
  selector: { to: { val: 'val to select' } },
  target: [1, 2, { a: 'test' }],
};
get(obj, 'selector.to.val', 'target[0]', 'target[2].a');
// ['val to select', 1, 'test']
```


> 应用场景







