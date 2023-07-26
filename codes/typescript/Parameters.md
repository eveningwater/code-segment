| 标题                       | 标签                                   |
| -------------------------- | -------------------------------------- |
| Parameters(数组中添加元素) | function,extends,param(函数,继承,参数) |

数组中添加元素。

- 类型 T 继承任意函数。
- 使用 infer 推导函数参数，推导成功则返回，否则返回任意值。

> 代码如下:

```ts
type Parameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer A
) => any
  ? A
  : never;
```

> 使用方式:

```ts
const foo = (arg1: string, arg2: number): void => {};

type fooFunctionParamsType = Parameters<typeof foo>; // [arg1: string, arg2: number]
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Parameters.ts" data-language="typescript"></div>
