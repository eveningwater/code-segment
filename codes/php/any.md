| 标题                                        | 标签                        |
| ------------------------------------------- | --------------------------- |
| any(检查数组所有元素是否有一项满足给定条件) | array,beginner(数组,初学者) |

如果提供的函数对数组的至少一个元素返回 true，则返回 true，否则返回 false。

- 使用 `array_filter()` 和 `count()` 检查 `$func` 是否对 `$array` 中的任何元素返回 true。

> 代码如下:

```php
function any($array,$func){
    return count(array_filter($array,$func)) > 0;
}
```

> 使用方式:

```php
any([2, 3, 4, 5], function ($item) {
  return $item < 3;
}); // true
```
