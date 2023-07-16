| 标题                                | 标签                             |
| ----------------------------------- | -------------------------------- |
| ArraySplice(实现数组的 splice 方法) | array,splice(数组，删除数组元素) |

实现数组的`Array.prototype.splice()`方法。

- 参数等同于`Array.prototype.splice`，即第一个参数为删除的索引，第二个参数为删除多少数组项，第三以及之后的参数则代表插入的数组元素

> 代码如下:

```js
Array.prototype.ArraySplice = function (start, deleteCount) {
  var max = Math.max, //最大值
    min = Math.min, //最小值
    len = this.length, //当前数组长度
    insertIndex = max(arguments.length - 2, 0), //插入索引
    k = 0, //循环值
    new_len, //新数组长度
    result = [], //最终结果
    delta, //插入的索引值
    element, //数组每一项
    shift_count; //从删除开始的截取索引
  start = start || 0;
  // 当开始索引小于0时，与长度相加
  if (start < 0) start += len;
  //开始索引值的一个取值范围
  start = max(min(start, len), 0);
  // 删除数组项的一个取值范围
  deleteCount = max(
    min(typeof deleteCount === 'number' ? deleteCount : len, len - start),
    0
  );
  // 插入索引值
  delta = insertIndex - deleteCount;
  // 新的长度
  new_len = len + delta;
  // 从开始索引到删除数组项数开始截取
  while (k < deleteCount) {
    element = this[start + k];
    if (element !== undefined) result[k] = element;
    k += 1;
  }
  shift_count = len - start - deleteCount;
  // 如果插入索引值不为0
  if (delta < 0 || delta > 0) {
    k = delta < 0 ? start + insertIndex : 1;
    while (shift_count) {
      this[delta < 0 ? k : new_len - k] = this[delta < 0 ? k - delta : len - k];
      k += 1;
      shift_count -= 1;
    }
    this.length = new_len;
  }
  for (k = 0; k < insertIndex; k++) {
    this[start + k] = arguments[k + 2];
  }
  return result;
};
```

> 调用方式:

```js
var arr = [1, 2, 3];
arr.ArraySplice(0, 1, [1, 2]); //[1]
arr; //[[1,2],2,3]
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/ArraySplice.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/ArraySplice.html"></iframe>
