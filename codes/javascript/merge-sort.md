|  标题   | 标签  |
|  ----  | ----  |
| mergeSort(归并排序) | algorithm,array,recursion(算法，数组，递归) |

使用合并排序算法对数字数组进行排序。

* 使用递归。
* 如果数组的长度小于 2，则返回数组。
* 使用 Math.floor() 计算数组的中点。
* 使用 Array.prototype.slice() 将数组一分为二，并在创建的子数组上递归调用 mergeSort()。
* 最后，使用 Array.from() 和 Array.prototype.shift() 将两个排序的子数组合并为一个。

```js
const mergeSort = arr => {
    if(!Array.isArray(arr) || arr.length < 2){
        return arr;
    }
    const mid = Math.floor(arr.length / 2),
          l = mergeSort(arr.slice(0,mid)),
          r = mergeSort(arr.slice(mid,arr.length));
    return Array.from({ length: l.length + r.length },() => {
        if(!l.length){
            return r.shift();
        }else if(!r.length){
            return l.shift();
        }else {
            return l[0] > r[0] ? r.shift() : l.shift();
        }
    })
}
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/merge-sort.ts" data-language="typescript"></div>

> 调用方式:

```js
mergeSort([5, 1, 4, 2, 3]); // [1, 2, 3, 4, 5]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/merge-sort.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/merge-sort.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/merge-sort.html"></iframe>