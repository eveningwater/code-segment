| 标题            | 标签                       |
| --------------- | -------------------------- |
| clampNumber(数值限定) | math,beginner(数学,初学者) |

将 $num 限制在边界值 $a 和 $b 指定的包含范围内。

* 如果 $num 在范围内，则返回 $num。
* 否则，使用 min() 和 max() 返回范围内最接近的数字。

> 代码如下:

```php
function clampNumber($num, $a, $b){
  return max(min($num, max($a, $b)), min($a, $b));
}
```

> 使用方式:

```php
clampNumber(2, 3, 5); // 3
clampNumber(1, -1, -5); // -1
```
