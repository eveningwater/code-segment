| 标题                     | 标签                                                |
| ------------------------ | --------------------------------------------------- |
| AppendArgument(追加参数) | function,params,infer,extends(函数,参数,推断，继承) |

追加参数。

- 类型有 2 个参数，第一个参数应是一个函数，第二个参数应是函数参数类型，如果第一个参数 fn 继承使用 infer 推断函数参数和函数返回值的类型函数，则将第二个参数当做参数与推断出的函数参数做合并，并返回这个合并了参数后的函数，否则返回 never。

> 代码如下:

```ts
type AppendArgument<fn, A> = fn extends (...args: infer R) => infer T
  ? (...args: [...R, A]) => T
  : never;
```

> 使用方式:

```ts
type AppendArgumentFn = (a: number, b: string) => number;

type AppendArgumentResult = AppendArgument<AppendArgumentFn, boolean>;
// expected be (a: number, b: string, x: boolean) => number
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/AppendArgument.ts" data-language="typescript"></div>
