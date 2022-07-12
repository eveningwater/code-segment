|  标题   | 标签  |
|  ----  | ----  |
| getMeridiemSuffixOfInteger(获取整数的上午下午后缀) | browser(浏览器) |

将整数转换为带后缀的字符串，根据其值添加 am 或 pm。

* 使用模运算符 (%) 和条件检查将整数转换为带有 meridiem 后缀的字符串化 12 小时格式。

```js
const getMeridiemSuffixOfInteger = (num,lang = "en") => {
    const suffix = {
        "en":["am","pm"],
        "zh":["上午","下午"]
    }
    const [ams,pms] = suffix[lang];
    return num === 0 || num === 24 ? 12 + ams : num === 12 ? 12 + pms : num < 12 ? (num % 12) + ams : (num % 12) + pms;
}
```

> 调用方式:

```js
getMeridiemSuffixOfInteger(0); // '12am'
getMeridiemSuffixOfInteger(11); // '11am'
getMeridiemSuffixOfInteger(13); // '1pm'
getMeridiemSuffixOfInteger(25); // '1pm'
```


> 应用场景

<iframe src="codes/javascript/html/getMeridiemSuffixOfInteger.html"></iframe>













