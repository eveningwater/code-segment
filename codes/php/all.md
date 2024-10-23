| 标题                  | 标签                        |
| --------------------- | --------------------------- |
| all(检查数组所有元素) | array,beginner(数组,初学者) |

如果提供的函数对数组的所有元素返回 true，则返回 true，否则返回 false。

- 使用 `array_filter()` 和 `count()` 检查 `$func` 是否对 `$array` 中的所有元素返回 true。

> 代码如下:

```php
function all($array,$func){
    return count(array_filter($array,$func)) === count($array);
}
```

> 使用方式:

```php
all([2, 3, 4, 5], function ($item) {
  return $item > 1;
}); // true
```
