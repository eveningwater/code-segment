| 标题                       | 标签                                              |
| -------------------------- | ------------------------------------------------- |
| minN(数组当中最小值的个数) | array,beginner,intermediate(数组,初学者,两者之间) |

返回所提供数组中的最小值。

- 使用 array_filter 和 min 查找数组中的最大值。

> 代码如下:

```php
function minN($arr) {
    $min = min($arr);
    $minArr = array_filter($arr, function ($item) use ($min) {
        return $item === $min;
    });
    return count($minArr);
}
```

> 使用方式:

```php
minN([1, 1, 2, 3, 4, 5, 5]); // 2
minN([1, 2, 3, 4, 5]); // 1
```
