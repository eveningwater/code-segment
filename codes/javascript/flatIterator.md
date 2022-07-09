|  标题   | 标签  |
|  ----  | ----  |
| flatIterator(扁平迭代器) | array,iterator,generator(数组,迭代器，生成器) |

创建一个生成器，该生成器对可迭代的、扁平化的嵌套可迭代对象进行迭代。

* 使用递归。
* 使用 `for...of` 循环遍历给定可迭代对象的值。
* 使用 `Symbol.iterator` 检查每个值是否是可迭代的。 如果是，则使用 `yield*` 表达式递归地委托给同一个生成器函数。 否则，产生当前值。

> 代码如下:

```js
const flatIterator = function* (iter){
    for(let item of iter){
        if(item[Symbol.iterator]){
            yield* flatIterator(item);
        }else{
            yield item;
        }
    }
}
```

> 调用方式:

```js
const arr = [1, 2, [3, 4], [5, [6, [7], 8]], 9, new Set([10, 11])];
[...flatIterator(arr)]; // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
```

> 应用场景