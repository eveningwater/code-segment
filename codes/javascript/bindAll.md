| 标题                | 标签                                                 |
| ------------------- | ---------------------------------------------------- |
| bindAll(函数的绑定) | object,function,intermediate(对象，函数，两者之间的) |

将对象的方法绑定到对象本身，覆盖现有的方法。

- 使用 `Array.prototype.forEach()` 迭代给定的 `handlers`。
- 为每个函数返回一个函数，使用 `Function.prototype.apply()` 将给定的上下文 (`obj`) 应用于 `handler`。

> 代码如下:

```js
const bindAll = (obj, ...handlers) =>
  handlers.forEach(
    handler => (
      (h = obj[handler]),
      (obj[handler] = function () {
        return h.apply(obj);
      })
    )
  );
```

> 调用方式:

```js
const view = {
  label: 'docs',
  click: function () {
    console.log('clicked ' + this.label);
  }
};
bindAll(view, 'click');
document.addEventListener('click', view.click);
// Log 'clicked docs' when clicked.
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/bindAll.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/bindAll.html"></iframe>
