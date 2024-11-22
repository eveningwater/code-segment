| 标题              | 标签                            |
| ----------------- | ------------------------------- |
| memoize(缓存函数) | function,advanced(函数，高级的) |

返回记忆化（缓存）函数。

- 通过实例化新数组创建一个空缓存。
- 返回一个函数，该函数接受一个参数，该参数将提供给记忆化函数，方法是首先检查该函数针对该特定输入值的输出是否已缓存，否则存储并返回该输出。
- 通过将缓存设置为返回函数的属性来允许访问缓存。

> 代码如下:

```php
function memoize($fn){
    return function use ($fn){
        static $cache = [];
        $args = func_get_args();
        $key = serialize($args);
        $cached = true;

        if(!isset($cache[$key])){
            $cached = false;
            $cache[$key] = $fn(...$args);
        }

        return ['result' => $cache[$key], 'cached' => $cached]
    }
}
```

> 使用方式:

```php
$memoizedAdd = memoize(
  function ($num) {
    return $num + 10;
  }
);

var_dump($memoizedAdd(5)); // ['result' => 15, 'cached' => false]
var_dump($memoizedAdd(6)); // ['result' => 16, 'cached' => false]
var_dump($memoizedAdd(5)); // ['result' => 15, 'cached' => true]
```
