| 标题                 | 标签                                        |
| -------------------- | ------------------------------------------- |
| median(求数组中位数) | array,math,intermediate(数组,数学,两者之间) |

返回数字数组的中位数。

- 找到数组的中间值，使用 sort() 对值进行排序。
- 如果数组的长度为奇数，则返回中位的数字，否则返回两个中间数字的平均值。

> 代码如下:

```php
function median($items){
  sort($items);
  $count = count($items);
  $mid = floor($count / 2);
  return ($count % 2 == 1) ? $items[$mid] : ($items[$mid - 1] + $items[$mid]) / 2;
}
```

> 使用方式:

```php
median([1, 3, 3, 6, 7, 8, 9]); // 6
median([1, 2, 3, 6, 7, 9]); // 4.5
```
