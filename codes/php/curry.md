| 标题              | 标签                         |
| ----------------- | ---------------------------- |
| curry(柯里化函数) | function,advanced(函数,高级) |

对函数进行柯里化，以便在多次调用中获取参数。

- 如果提供的参数 ($args) 数量足够，则调用传递的函数 $function。
- 否则，返回需要其余参数的柯里化函数。

> 代码如下:

```php
function curry($function){
    // &操作符代表引用这个变量，方便递归
    // use指令可以用在函数内部访问外部变量
  $accumulator = function ($arguments) use ($function, &$accumulator) {
    return function (...$args) use ($function, $arguments, $accumulator) {
      $arguments = array_merge($arguments, $args);
    // reflection是php的反射机制，获取函数的参数数量
      $reflection = new ReflectionFunction($function);
      $totalArguments = $reflection->getNumberOfRequiredParameters();

      if ($totalArguments <= count($arguments)) {
        return $function(...$arguments);
      }

      return $accumulator($arguments);
    };
  };

  return $accumulator([]);
}
```

> 使用方式:

```php
$curriedAdd = curry(function ($a, $b) {
    return $a + $b;
});

$add10 = $curriedAdd(10);
var_dump($add10(15)); // 25
```
