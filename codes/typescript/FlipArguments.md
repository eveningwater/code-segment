| 标题                        | 标签                                                |
| --------------------------- | --------------------------------------------------- |
| FlipArguments(函数参数反转) | extends, array,infer,function(继承, 数组,推断,函数) |

函数参数反转。

- 第一个参数继承任意函数，使用 infer 推断函数的参数，并使用[Reverse](codes/typescript/Reverse.md)反转参数，返回反转参数后的函数。

> 代码如下:

```ts
type FlipArguments<T extends (...args: any) => any> = T extends (
  ...args: infer A
) => infer R
  ? (...args: Reverse<A>) => R
  : T;
```

> 使用方式:

```ts
type Flipped = FlipArguments<
  (arg0: string, arg1: number, arg2: boolean) => void
>;
// (arg0: boolean, arg1: number, arg2: string) => void
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/FlipArguments.ts" data-language="typescript"></div>
