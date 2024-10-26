| 标题              | 标签                                 |
| ----------------- | ------------------------------------ |
| compose(组合函数) | function,intermediate(函数,两者之间) |

返回一个将多个函数组合成单个可调用函数的新函数。

- 使用 array_reduce() 执行从右到左的函数组合。

> 代码如下:

```php
function compose(...$fns){
    return array_reduce(
        $fns,
        function($carry,$fun){
            return function($x) use ($carry,$fun){
                return $carry($fun($x));
            };
        },
        $function($x){
            return $x;
        }
    )
}
```

> 使用方式:

```php
$compose = compose(
  // 加2
  function ($x) {
    return $x + 2;
  },
  // 乘以4
  function ($x) {
    return $x * 4;
  }
);
$compose(3); // 20
```
