| 标题                                       | 标签                                       |
| ------------------------------------------ | ------------------------------------------ |
| generatorToArray(生成器输出结果转换成数组) | function,array,generator(函数,数组,生成器) |

将生成器函数的输出转换为数组。

- 使用扩展运算符 (...) 将生成器函数的输出转换为数组。

```js
const generatorToArray = gen => [...gen];
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/generator-to-array.ts" data-language="typescript"></div>

> 调用方式:

```js
const s = new Set([1, 2, 1, 3, 1, 4]);
generatorToArray(s.entries()); // [[ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ]]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/generator-to-array.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/generator-to-array.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/generator-to-array.html"></iframe>
