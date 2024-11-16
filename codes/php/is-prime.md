| 标题                | 标签                       |
| ------------------- | -------------------------- |
| isPrime(是否是质数) | math,beginner(数学,初学者) |

检查提供的整数是否为质数。

- 检查从 2 到给定数字的平方根的数字。
- 如果其中任何一个能整除给定数字，则返回 false，否则返回 true，除非该数字小于 2。

> 代码如下:

```php
function isPrime($num){
    $len = floor(sqrt($num));
    for($i = 2;$i <= $len;$i++){
        if($num % $i == 0){
            return false;
        }
    }
    return $num >= 2;
}
```

> 使用方式:

```php
isPrime(3); // true
```
