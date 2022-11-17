|  标题   | 标签  |
|  ----  | ----  |
| linearSearch(线性搜索) | array,algorithm(数组，算法) |

使用线性搜索算法查找数组中给定元素的第一个索引。

* 使用 for 循环遍历给定数组的索引。
* 检查对应索引中的元素是否等于item。
* 如果找到元素，则返回索引，使用一元 + 运算符将其从字符串转换为数字。
* 如果遍历整个数组后没有找到该元素，则返回 -1。

```js
const linearSearch = (arr,item) => {
    for(let i = 0;i < arr.length;i++){
        if(arr[i] === item){
          return +i;
        }
    }
    return -1;
}
```

> 调用方式:

```js
linearSearch([2, 9, 9], 9); // 1
linearSearch([2, 9, 9], 7); // -1
```

> 应用场景

