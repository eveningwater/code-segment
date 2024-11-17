| 标题                                               | 标签                                   |
| -------------------------------------------------- | -------------------------------------- |
| isUpperCase(是否是大写字母组成的字符串) | string,beginner(字符串,初学者) |

如果给定的字符串是大写，则返回 true，否则返回 false。

* 使用 [strtoupper](https://www.php.net/manual/en/function.strtoupper.php) 将给定的字符串转换为大写，并将其与原始字符串进行比较。

> 代码如下:

```php
function isUpperCase($str){
    return $str === strtoupper($str);
}
```

> 使用方式:

```php
isUpperCase('MORNING SHOWS THE DAY!'); // true
isUpperCase('qUick Fox'); // false
```
