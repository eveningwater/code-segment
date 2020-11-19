|  标题  |  标签  |
|  ----  |  ----  |
| difference(数组差集) | array,difference(数组,差集) |

实现数组差集

* 使用`new Array(number)`创建一个具有多个空值的数组，并使用`Array.prototype.fill()`方法将空值填充为空数组
* 双层遍历我们给出的数组，以下层数组值为键，上层数组索引为值，保存为`Map`对象，重复则值为0

> 代码如下

```js
function diff (...arg) {
    const myMap = new Map()
    let res = new Array(arg.length + 1).fill([])
    arg.forEach((item, index) => item.forEach(val => myMap.set(val, myMap.get(val) ? 0 : index + 1)))
    myMap.forEach((value, key) => res[value] = [...res[value], key])
    return res
}
```

> 调用方式

```js
diff([1,6,7,43,9,54], [4,7,9,76,54,'6'])
// [[7,9,54],[1,6,43],[4,76,'6']]
// 返回值第一项为 数组交集 后面每项均为各个数组剔除交集后的差集，若只取差集 则返回值[1]即可
```

> 应用场景
