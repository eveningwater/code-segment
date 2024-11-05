| 标题                       | 标签                         |
| -------------------------- | ---------------------------- |
| findLastIndex(根据索引值查找最后一个元素) | array,beginner(数组，初学者) |

返回所提供函数返回真值的最后一个元素的索引。

- 使用 array_keys() 和 array_filter() 删除 $func 返回假值的元素，使用 array_pop() 获取最后一个元素。

> 代码如下:

```php
function findLastIndex($items,$fn){
    $keys = array_keys(array_filter($items,$fn));
    return array_pop($keys);
}
```

> 使用方式:

```php
findLastIndex([1, 2, 3, 4], function ($n) {
  return ($n % 2) === 1;
});
// 2
```
