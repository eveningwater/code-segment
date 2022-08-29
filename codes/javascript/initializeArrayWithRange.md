|  标题   | 标签  |
|  ----  | ----  |
| initializeArrayWithRange(生成连续范围数组) | array(数组) |

初始化一个数组，该数组包含指定范围内的数字，其中 start 和 end 包含它们的共同差步长。

* 使用 Array.from() 创建所需长度的数组。
* 使用 (end - start + 1) / step 和 map 函数用给定范围内的所需值填充数组。
* 省略第二个参数 start 以使用默认值 0。
* 省略最后一个参数 step 以使用默认值 1。

```js
const initializeArrayWithRange = (end,start = 0,step = 1) => Array.from({ length: Math.ceil((end - start + 1) / step)},(_,i) => start + i * step);
```

> 调用方式:

```js
initializeArrayWithRange(5); // [0, 1, 2, 3, 4, 5]
initializeArrayWithRange(7, 3); // [3, 4, 5, 6, 7]
initializeArrayWithRange(9, 0, 2); // [0, 2, 4, 6, 8]
```

> 应用场景

<iframe src="codes/javascript/html/initializeArrayWithRange.html"></iframe>





