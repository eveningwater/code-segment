|  标题   | 标签  |
|  ----  | ----  |
| dropWhile(截取数组) | array(数组) |

删除数组中的元素，直到传递的函数返回 true。 返回数组中剩余的元素。

* 遍历数组，使用 `Array.prototype.slice()` 删除数组的第一个元素，直到 handler 返回的值为真。
* 返回剩余的元素。

> 代码如下:

```js
const dropWhile = (arr,handler) => {
    while(arr.length > 0 && !handler(arr[0])){
        arr = arr.slice(1);
    }
    return arr;
}
```

> 调用方式:

```js
dropWhile([1, 2, 3, 4], n => n >= 3); // [3, 4]
```

> 应用场景