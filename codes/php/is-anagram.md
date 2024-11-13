| 标题                   | 标签                            |
| ---------------------- | ------------------------------- |
| head(是否是异位字符串) | string,beginner(字符串，初学者) |

比较两个字符串，如果两个字符串都是字母重排，则返回 true，否则返回 false。

- 使用 count_chars() 比较 $string1 和 $string2。

> 代码如下:

```php
function isAnagram($string1, $string2){
  return count_chars($string1, 1) === count_chars($string2, 1);
}
```

> 使用方式:

```php
isAnagram('act', 'cat'); // true
```
