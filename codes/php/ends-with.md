| 标题                               | 标签                           |
| ---------------------------------- | ------------------------------ |
| ends-with(匹配字符串结尾) | string,beginner(字符串,初学者) |

检查字符串是否以给定的子字符串结尾。

* 将 strrpos() 与 strlen 结合使用，查找 $str 中 $end 的位置。

> 代码如下:

```php
function endsWith($str,$end){
    return strrpos($str,$end) === strlen($str) - strlen($end);
}
```

> 使用方式:

```php
endsWith('Hi, this is me', 'me'); // true
```
