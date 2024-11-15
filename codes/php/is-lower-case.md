| 标题                                               | 标签                                   |
| -------------------------------------------------- | -------------------------------------- |
| isLowerCase(是否是小写字母组成的字符串) | string,beginner(字符串,初学者) |

如果给定的字符串是小写，则返回 true，否则返回 false。

* 使用 [strtolower](https://www.php.net/manual/en/function.strtolower.php) 将给定的字符串转换为小写，并将其与原始字符串进行比较。

> 代码如下:

```php
function isLowerCase($str){
    return $str === strtolower($str);
}
```

> 使用方式:

```php
isLowerCase('Morning shows the day!'); // false
isLowerCase('hello'); // true
```
