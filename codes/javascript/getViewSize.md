| 标题                      | 标签                       |
| ------------------------- | -------------------------- |
| getViewSize(获取视图宽高) | document,window(文档,窗口) |

实现一个获取视图宽高的函数。

- 如果支持 window.innerWidth,则直接返回 window.innerWidth 和 window.innerHeight。
- 判断 document.compatMode 的值是否是'CSS1Compat',如果是返回 document.documentElement.clientWidth 与 clientHeight。
- 以上两个条件都不满足则直接返回 document.body.clientWidth 和 clientHeight。

> 代码如下:

```js
const getViewSize = () => {
  if (window.innerWidth) {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  } else if (document.compatMode === 'CSS1Compat') {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    };
  } else {
    return {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    };
  }
};
```

> 调用方式:

```js
const { width, height } = getViewSize(); // { width:xxx,height:xxx }
```

> 应用场景

getViewSize.html 如下:

<div class="code-editor" data-url="codes/javascript/html/getViewSize.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/getViewSize.html"></iframe>
