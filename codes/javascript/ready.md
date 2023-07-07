| 标题                        | 标签                                                 |
| --------------------------- | ---------------------------------------------------- |
| ready(加载完毕后再执行回调) | browser,regexp,callback(浏览器，正则表达式,回调函数) |

模拟实现加载完毕后执行回调函数。

- 构建加载完毕的正则表达式。
- 判断 document.readyState 的值和正则表达式是否匹配，并且要存在 document.body 元素，然后执行回调。
- 否则监听 DOMContentLoaded 事件然后执行回调函数。

```js
const ready = callback => {
  const readyRE = /complete|loaded|interactive/;
  if (readyRE.test(document.readyState) && document.body) {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', () => callback(), false);
  }
};
```

> 调用方式:

```js
ready(function () {
  alert('加载完毕！');
}); // 页面加载完即弹出弹出框
```

> 应用场景
