|  标题   | 标签  |
|  ----  | ----  |
| mergeSortedArrays(归并排序合并数组) | array(数组) |

将两个排序数组合并为一个。

* 使用扩展运算符 (...) 克隆两个给定的数组。
* 使用 Array.from() 根据给定数组创建适当长度的数组。
* 使用 Array.prototype.shift() 从克隆数组中删除的元素填充新创建的数组。

```js
const mergeSortedArrays = (a,b) => {
    const _a = [...a],
          _b = [...b];
    return Array.from({ length: _a.length + _b.length },() => {
        if(!_a.length){
            return _b.shift();
        }else if(!_b.length){
            return _a.shift();
        }else {
            return _a[0] > _b[0] ? _b.shift() : _a.shift();
        }
    })
}
```

> 调用方式:

```js
mergeSortedArrays([1, 4, 5], [2, 3, 6]); // [1, 2, 3, 4, 5, 6]
```

> 应用场景