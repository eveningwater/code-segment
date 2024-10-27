| 标题              | 标签                                 |
| ----------------- | ------------------------------------ |
| countVowels(组合函数) | string,regexp,beginner(字符串,正则表达式，初学者) |

返回所提供字符串中的元音字母数量。

* 使用正则表达式计算字符串中的元音数量（a、e、i、o 和 u）。

> 代码如下:

```php
function countVowels($str){
    preg_match_all('/[aeiou]/i',$str,$matches);
    return count($matches[0]);
}
```

> 使用方式:

```php
countVowels('sampleInput'); // 4
```
