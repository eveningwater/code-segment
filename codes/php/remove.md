| 标题                                 | 标签                        |
| ------------------------------------ | --------------------------- |
| remove(根据回调函数移除数组中的元素) | array,beginner(数组,初学者) |

从数组中删除给定函数返回 false 的元素。

- 使用 array_filter() 查找返回真值的数组元素，使用 array_diff_keys() 删除 $filtered 中不包含的元素。

> 代码如下:

```php
function remove($items,$fun){
  $filtered = array_filter($items,$fun);
  return array_diff_keys($items,$filtered);
}
```

> 使用方式:

```php
remove([1, 2, 3, 4], function ($n) {
  return ($n % 2) === 0;
});
// [0 => 1, 2 => 3]
```
