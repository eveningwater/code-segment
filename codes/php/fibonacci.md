| 标题                    | 标签                                       |
| ----------------------- | ------------------------------------------ |
| fibonacci(斐波那契数列) | math,recursion,beginner(数学,递归，初学者) |

生成一个包含斐波那契数列（直到第 n 项）的数组。

- 创建一个空数组，初始化前两个值（0 和 1）。
- 从 2 到 $n 循环，并使用最后两个值的总和将值添加到数组中。

> 代码如下:

```php
function fibonacci($n){
    $fi = [0,1];
    for($i = 2; $i <= $n; $i++){
        $fi[$i] = $fi[$i - 1] + $fi[$i - 2];
    }
}
```

> 使用方式:

```php
fibonacci(6); // [0, 1, 1, 2, 3, 5]
```
