| 标题                                          | 标签                       |
| --------------------------------------------- | -------------------------- |
| approximatelyEqual(检查 2 个数字是否大致相等) | math,beginner(数学,初学者) |

检查两个数字是否大致相等。

- 使用 abs() 将两个值的绝对差与 $epsilon 进行比较。
- 省略第三个参数 $epsilon，以使用默认值 0.001。

> 代码如下:

```php
function approximatelyEqual($num1,$num2,$epsilon=0.001){
    return abs($num1-$num2) < $epsilon;
}
```

> 使用方式:

```php
approximatelyEqual(10.0, 10.00001); // true
approximatelyEqual(10.0, 10.01); // false
```
