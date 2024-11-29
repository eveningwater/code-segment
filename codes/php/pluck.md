| 标题                          | 标签                        |
| ----------------------------- | --------------------------- |
| pluck(从数组中根据属性提取值) | array,beginner(数组,初学者) |

检索给定键的所有值。

- 使用 array_map() 将 $items 数组中的每个对象映射到提供的 $key。

> 代码如下:


```php
function pluck($items,$key){
  return array_map(function($item) use ($key){
    return is_object($item) ? $item->$key : $item[$key];
  },$items);
}
```

> 使用方式:

```php
pluck([
  ['product_id' => 'prod-100', 'name' => 'Desk'],
  ['product_id' => 'prod-200', 'name' => 'Chair'],
], 'name');
// ['Desk', 'Chair']
```
