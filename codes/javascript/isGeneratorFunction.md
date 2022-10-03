|  标题   | 标签  |
|  ----  | ----  |
| isGeneratorFunction(是否是生成器函数) | type,function(类型，函数) |

检查给定参数是否是生成器函数。

* 使用 Object.prototype.toString() 和 Function.prototype.call() 并检查结果是否为 '[object GeneratorFunction]'。

```js
const isGeneratorFunction = val => Object.prototype.toString.call(val) === '[object GeneratorFunction]';
```

> 调用方式:

```js
isGeneratorFunction(function() {}); // false
isGeneratorFunction(function*() {}); // true
```

> 应用场景
