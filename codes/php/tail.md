| 标题                         | 标签                        |
| ---------------------------- | --------------------------- |
| tail(字符串开头匹配子字符串) | array,beginner(数组,初学者) |

返回数组中除第一个元素之外的所有元素。

- 使用 array_slice() 和 count() 返回数组中除第一个元素之外的所有项目。

> 代码如下:

```php
function tail($items){
    return count($items) > 1 ? array_slice($items, 1) : $items;
}
```

> 使用方式:

```php
tail([1, 2, 3]); // [2, 3]
```
