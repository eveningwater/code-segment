|  标题   | 标签  |
|  ----  | ----  |
| getColonTimeFromDate(获取小时分钟秒) | date,string(日期，字符串) |

从 Date 对象返回 `HH:MM:SS` 形式的字符串。

* 使用 Date.prototype.toTimeString() 和 String.prototype.slice() 获取给定 Date 对象的 `HH:MM:SS` 部分。

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0,8);
```

> 调用方式:

```js
getColonTimeFromDate(new Date()); // '08:38:00'
```


> 应用场景

<iframe src="codes/javascript/html/getColonTimeFromDate.html"></iframe>










