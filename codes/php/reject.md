| 标题                         | 标签                        |
| ---------------------------- | --------------------------- |
| reject(根据回调函数过滤数组) | array,beginner(数组,初学者) |

使用给定的回调过滤集合。

- 使用 array_values()、array_diff() 和 array_filter() 根据 $func 过滤 $items。

> 代码如下:

```php
function reject(&$items,$fun){
  return array_values(array_diff($items,array_filter($items,$fun)));
}
```

> 使用方式:

```php
reject(['Apple', 'Pear', 'Kiwi', 'Banana'], function ($item) {
  return strlen($item) > 4;
}); // ['Pear', 'Kiwi']
```
