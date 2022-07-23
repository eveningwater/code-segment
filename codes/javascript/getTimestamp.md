|  标题   | 标签  |
|  ----  | ----  |
| getTimestamp(获取时间戳) | date(日期对象) |

从 Date 对象获取 Unix 时间戳。

* 使用 Date.prototype.getTime() 以毫秒为单位获取时间戳，然后除以 1000 以获取以秒为单位的时间戳。
* 使用 Math.floor() 将生成的时间戳适当地四舍五入为整数。
* 省略参数 date 以使用当前日期。

```js
const getTimestamp = (date = new Date()) => Math.floor(date.getTime() / 1000); 
```

> 调用方式:

```js
getTimestamp(); // 1602162242
```


> 应用场景

<iframe src="codes/javascript/html/getTimestamp.html"></iframe>












