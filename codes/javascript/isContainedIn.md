|  标题   | 标签  |
|  ----  | ----  |
| isContainedIn(检查元素是被包含（无论顺序）) | array(数组) |

检查第一个数组的元素是否包含在第二个数组中，无论顺序如何。

* 对从第一个数组创建的 Set 使用 for...of 循环。
* 使用 Array.prototype.some() 检查是否所有不同的值都包含在第二个数组中。
* 使用 Array.prototype.filter() 比较两个数组中每个不同值的出现次数。
* 如果第一个数组中任何元素的计数大于第二个数组，则返回 false，否则返回 true。

```js
const isContainedIn = (a,b) => {
    for(const v of new Set(a)){
        if(!b.some(e => e === v) || a.filter(e => e === v).length > b.filter(e => e === v).length){
            return false;
        }
    }
    return true;
};
```

> 调用方式:

```js
isContainedIn([1, 4], [2, 4, 1]); // true
```

> 应用场景









