| 标题                                                   | 标签                            |
| ------------------------------------------------------ | ------------------------------- |
| isContains(判断给定子字符串是否是给定字符串的子字符串) | string,beginner(字符串，初学者) |

检查给定字符串输入中是否存在单词/子字符串。

- 使用[strpos](https://www.php.net/manual/en/function.strpos.php)查找字符串中子字符串第一次出现的位置。

> 代码如下:

```php
function isContains($str1, $str2){
  // 该函数的返回值有可能是int值，所以需要判断是否是false
  return strpos($str1, $str2) === false ? false : true;
}
```

> 使用方式:

```php
isContains('This is an example string', 'example'); // true
isContains('This is an example string', 'hello'); // false
```
