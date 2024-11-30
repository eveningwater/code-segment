| 标题           | 标签                        |
| -------------- | --------------------------- |
| pull(过滤数组) | array,beginner(数组,初学者) |

改变原始数组以过滤掉指定的值。

- 使用 array_values() 和 array_diff() 从 $items 中删除指定的值。

> 代码如下:

```php
function pull(&$items,...$values){
  $items = array_values(array_diff($items,$values));
  return $items;
}
```

> 使用方式:

```php
$items = ['a', 'b', 'c', 'a', 'b', 'c'];
pull($items, 'a', 'c'); // $items 将是 ['b', 'b']
```
