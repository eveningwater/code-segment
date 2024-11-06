| 标题                                                                       | 标签                            |
| -------------------------------------------------------------------------- | ------------------------------- |
| firstStringBetween(匹配字符串之间的子字符串（提供开始匹配符和结束匹配符）) | string,beginner(字符串，初学者) |

返回参数 $start 和 $end 之间的第一个字符串。

- 使用 trim() 和 strstr() 查找 $start 和 $end 之间的字符串。

> 代码如下:

```php
function firstStringBetween($str,$start,$end){
    return trim(strstr(strstr($str, $start), $end, true), $start . $end);
}
```

> 使用方式:

```php
firstStringBetween('This is a [custom] string', '[', ']'); // custom
```
