|  标题   | 标签  |
|  ----  | ----  |
| join(数组转字符串) | array(数组) |

将数组的所有元素连接成一个字符串并返回此字符串。 使用分隔符和结束分隔符。

* 使用 Array.prototype.reduce() 将元素组合成一个字符串。
* 省略第二个参数 separator，以使用默认分隔符 ','。
* 省略第三个参数 end 以默认使用与分隔符相同的值。

```js
const join = (arr,separator = ',',end = separator) => arr.reduce((acc,val,i) => i == arr.length - 2 ? acc + val + end : i === arr.length - 1 ? acc + val : acc + val + separator,'');
```

> 调用方式:

```js
join(['pen', 'pineapple', 'apple', 'pen'],',','&'); // 'pen,pineapple,apple&pen'
join(['pen', 'pineapple', 'apple', 'pen'], ','); // 'pen,pineapple,apple,pen'
join(['pen', 'pineapple', 'apple', 'pen']); // 'pen,pineapple,apple,pen'
```

> 应用场景

