| 标题            | 标签                                       |
| --------------- | ------------------------------------------ |
| factorial(阶乘) | math,recursion,beginner(数学,递归，初学者) |

计算数字的阶乘。

- 使用递归。
- 如果 $n 小于或等于 1，则返回 1。
- 否则，返回 $n 与 $n -1 的阶乘的乘积。

> 代码如下:

```php
function factorial($n){
  return $n <= 1? 1 : $n * factorial($n - 1);
}
```

> 使用方式:

```php
factorial(6); // 720
```
