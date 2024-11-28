| 标题                               | 标签                           |
| ---------------------------------- | ------------------------------ |
| palindrome(根据某个条件来排序数组) | string,beginner(字符串,初学者) |

如果给定的字符串是回文，则返回 true，否则返回 false。

- 检查 `strrev($string)` 的值是否等于传递的 $string。

> 代码如下:

```php
function palindrome($str){
    // 非字符串需要转换成字符串
    return strrev($str) === (string) $str;
}
```

> 使用方式:

```php
palindrome('racecar'); // true
palindrome(2221222); // true
```
