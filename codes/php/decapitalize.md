| 标题                               | 标签                           |
| ---------------------------------- | ------------------------------ |
| decapitalize(取消字符串首字母大写) | string,beginner(字符串,初学者) |

取消字符串首字母的大写。

- 取消字符串首字母的大写，然后将其与字符串的其余部分相加。
- 省略 $upperRest 参数以保持字符串的其余部分完整，或将其设置为 true 以转换为大写。

> 代码如下:

```php
function decapitalize($string, $upperRest = false){
    return lcfirst($upperRest ? strtoupper($string) : $string);
}
```

> 使用方式:

```php
decapitalize('FooBar'); // 'fooBar'
```
