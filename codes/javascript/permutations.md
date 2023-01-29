|  标题   | 标签  |
|  ----  | ----  |
| permutations(数组排列) | array,algorithm,recursion(数组，算法，递归) |

生成数组元素的所有排列（包含重复项）。

* 使用递归。
* 对于给定数组中的每个元素，为其其余元素创建所有部分排列。
* 使用 Array.prototype.map() 将元素与每个部分排列组合，然后使用 Array.prototype.reduce() 将所有排列组合到一个数组中。
* 基本情况是 Array.prototype.length 等于 2 或 1。
* ⚠️警告：此函数的执行时间随着每个数组元素呈指数增长。 超过 8 到 10 个条目可能会导致浏览器在尝试解决所有不同组合时挂起。

```js
const permutations = arr => {
    if(arr.length <= 2){
        return arr.length === 2 ? [arr,[arr[1],arr[0]]] : arr;
    }
    return arr.reduce((acc,item,i) => acc.concat(permutations([...arr.slice(0,i),...arr.slice(i + 1)]).map(val => [item,...val])),[]);
}
```

> 调用方式:

```js
permutations([1, 33, 5]);
// [ [1, 33, 5], [1, 5, 33], [33, 1, 5], [33, 5, 1], [5, 1, 33], [5, 33, 1] ]
```

> 应用场景