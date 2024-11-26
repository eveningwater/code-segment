| 标题                    | 标签                                              |
| ----------------------- | ------------------------------------------------- |
| once(只执行 1 次的函数) | function,intermediate(函数,两者之间) |

仅调用一次函数。

- 返回一个函数，该函数仅在 $called 为 false 时调用提供的函数 $function，并将 $called 设置为 true。

> 代码如下:

```php
function once($fun){
    return function (...$args) use ($fun) {
        static $called = false;
        if ($called) {
            return;
        }
        $called = true;
        return $fun(...$args);
    }
}
```

> 使用方式:

```php
$add = function ($a, $b) {
  return $a + $b;
};

$once = once($add);

var_dump($once(10, 5)); // 15
var_dump($once(20, 10)); // null
```
