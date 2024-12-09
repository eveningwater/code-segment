| 标题                     | 标签                        |
| ------------------------ | --------------------------- |
| without(根据传入值过滤数组) | array,beginner(数组,初学者) |

过滤掉数组中具有指定值之一的元素。

- 使用 array_values() 和 array_diff() 从 $items 中删除 $params 中的任何值。

> 代码如下:

```php
function without($items,...$params){
    return array_values(array_diff($items,$params));
}
```

> 使用方式:

```php
without([2, 1, 2, 3], 1, 2); // [3]
```
