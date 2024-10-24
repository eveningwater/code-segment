| 标题            | 标签                       |
| --------------- | -------------------------- |
| average(平均值) | math,beginner(数学,初学者) |

返回两个或多个数字的平均值。

- 对 `$items` 中的所有值使用 `array_sum()`，并返回结果除以其 `count()`。

> 代码如下:

```php
function average(...$items){
    $count = count($items);
    return $count === 0 ? 0 : array_sum($items) / $count
}
```

> 使用方式:

```php
average(1, 2, 3); // 2
```
