| 标题                               | 标签                           |
| ---------------------------------- | ------------------------------ |
| startsWith(字符串开头匹配子字符串) | string,beginner(字符串,初学者) |

检查字符串是否以给定的子字符串开头。

- 使用 strpos() 查找 $substr 在 $str 中的位置。

> 代码如下:

```php
function startsWith($str,$substr){
    return strpos($str,$substr) === 0;
}
```

> 使用方式:

```php
startsWith('Hi, this is me', 'Hi'); // true
```
