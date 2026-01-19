|  标题   | 标签  |
|  ----  | ----  |
| partitionBy(根据回调函数分区数组) | array,object(数组，对象) |

将 fn 应用于 arr 中的每个值，每次提供的函数返回一个新值时将其拆分。

* 将 Array.prototype.reduce() 与一个累加器对象一起使用，该对象将保存结果数组和从 fn 返回的最后一个值。
* 使用 Array.prototype.push() 将 arr 中的每个值添加到累加器数组中的适当分区。

```js
const partitionBy = (arr,fn) => arr.reduce(({ res,last },v,i,arr) => {
    const next = fn(v,i,arr);
    if(next !== last){
        res.push([v]);
    }else{
        res[res.length - 1].push(v);
    }
    return { res,last: next };
},{ res:[] }).res;
```

<div class="code-editor" data-url="codes/javascript/ts/partition-by.ts" data-language="typescript"></div>

> 调用方式:

```js
const numbers = [1, 1, 3, 3, 4, 5, 5, 5];
partitionBy(numbers, n => n % 2 === 0); // [[1, 1, 3, 3], [4], [5, 5, 5]]
partitionBy(numbers, n => n); // [[1, 1], [3, 3], [4], [5, 5, 5]]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/partition-by.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/partition-by.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/partition-by.html"></iframe>