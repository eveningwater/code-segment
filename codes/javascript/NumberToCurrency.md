|  标题  |  标签  |
|  ----  |  ----  |
| NumberToCurrency(数字转金额格式) | number(数字) |

数字转金额格式

* 使用`Number.prototype.toLocaleString()`实现数字转金额。
* 第一个参数设置`cmn-Hans-CN`或者`zh-CN`使地区使用中国，第二个参数中的`style`属性设置为`currency`实现金额格式，并设置`currency: 'CNY'`使用人民币格式
[更多格式可查看](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)

> 代码如下

```js
10000000..toLocaleString('cmn-Hans-CN',{
  style: 'currency',
  currency: 'CNY'
})
// "￥10,000,000.00"
```

> 调用方式

> 应用场景
