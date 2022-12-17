|  标题   | 标签  |
|  ----  | ----  |
| mostFrequent(返回数组中出现最多次数的元素) | array(数组) |

返回数组中使用频率最高的元素。

* 使用Array.prototype.reduce()将唯一值映射到对象的键，每次遇到相同的值时添加到现有的键。
* 在结果上使用Object.entries()结合array. prototype.reduce()来获得数组中出现频率最高的值。

```js
const mostFrequent = arr => Object.entries(arr.reduce((a,v) => {
    a[v] = a[v] ? a[v] + 1 : 1;
    return a;
},{})).reduce((a,v) => v[1] > a[1] ? v : a,[null,0])[0];
```

> 调用方式:

```js
mostFrequent(['a', 'b', 'a', 'c', 'a', 'a', 'b']); // 'a'
```

> 应用场景