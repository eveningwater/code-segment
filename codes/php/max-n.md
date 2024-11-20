| 标题                       | 标签                                              |
| -------------------------- | ------------------------------------------------- |
| maxN(数组当中最大值的个数) | array,beginner,intermediate(数组,初学者,两者之间) |

返回所提供数组中的最大值。

- 使用 array_filter 和 max 查找数组中的最大值。

> 代码如下:

```php
function maxN($arr) {
    $max = max($arr);
    $maxArr = array_filter($arr, function ($item) use ($max) {
        return $item === $max;
    });
    return count($maxArr);
}
```

> 使用方式:

```php
maxN([1, 2, 3, 4, 5, 5]); // 2
maxN([1, 2, 3, 4, 5]); // 1
```
