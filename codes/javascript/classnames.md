| 标题                   | 标签        |
| ---------------------- | ----------- |
| classnames(规范化类名) | class(类名) |

实现类名规范化，传递对象类名或者数组类名都会被规范化成字符串类名。

- 定义一个结果数组存储所有类名。
- 遍历所有参数，如果参数为字符串或者数组又或者对象，将结果添加到结果数组中，否则跳过遍历。
- 使用 join 方法将结果数组转成字符串并返回。

> 代码如下:

```js
const classnames = (...args) => {
  const classes = [];
  for (let i = 0, len = args.length; i < len; i++) {
    const cls = args[i];
    if (!cls) {
      continue;
    }
    if (typeof cls === 'string' || typeof cls === 'number') {
      classes.push(cls);
    } else if (Array.isArray(cls)) {
      if (cls.length) {
        const _class = classnames.apply(null, cls);
        _class && classes.push(_class);
      }
    } else {
      if (Object.prototype.toString === cls.toString) {
        for (let key in cls) {
          if (Object.prototype.hasOwnProperty.call(cls, key) && cls[key]) {
            classes.push(key);
          }
        }
      } else {
        classes.push(cls.toString());
      }
    }
  }
  return classes.join(' ');
};
```

> 调用方式:

```js
classnames({ test: true, 'test-2': false, 'test-3': true }); // 'test test-2 test-3';
classnames(['test-1', { test: true }]); // 'test-1 test';
classnames('test-1', 'test-2', 3); // 'test-1 test-2 3';
```

> 应用场景

classnames.html 如下:

<div class="code-editor" data-url="codes/javascript/html/classnames.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/classnames.html"></iframe>
