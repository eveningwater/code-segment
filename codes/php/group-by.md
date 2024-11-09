| 标题                                  | 标签                               |
| ------------------------------------- | ---------------------------------- |
| groupBy(根据传入的函数对数组进行分组) | array,intermediate(数组，两者之间) |

根据给定函数对数组元素进行分组。

- 使用 call_use_func() 和 $items 上的 $func 来根据 $func 对它们进行分组。

> 代码如下:

```php
function groupBy($items, $func){
  $group = [];
  foreach ($items as $item) {
    if ((!is_string($func) && is_callable($func)) || function_exists($func)) {
      $key = call_user_func($func, $item);
      $group[$key][] = $item;
    } elseif (is_object($item)) {
      $group[$item->{$func}][] = $item;
    } elseif (isset($item[$func])) {
      $group[$item[$func]][] = $item;
    }
  }

  return $group;
}
```

> 使用方式:

```php
groupBy(['one', 'two', 'three'], 'strlen'); // [3 => ['one', 'two'], 5 => ['three']]
```
