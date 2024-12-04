| 标题                | 标签                           |
| ------------------- | ------------------------------ |
| shorten(省略字符串) | string,beginner(字符串,初学者) |

返回缩短的字符串。

- 使用 mb_strlen()、mb_substr() 和 rtrim() 将字符串缩短为给定数量的字符。

> 代码如下:

```php
function shorten($str,$length = 100,$suffix = '...'){
    if(mb_strlen($str) <= $length){
        return $str;
    }
    return rtrim(mb_substr($str,0,$length,'UTF-8')).$suffix;
}
```

> 使用方式:

```php
shorten('The quick brown fox jumped over the lazy dog', 15); // The quick brown...
```
