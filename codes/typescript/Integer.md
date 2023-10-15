| 标题          | 标签                       |
| ------------- | -------------------------- |
| Integer(整数) | extends,number(继承，数值) |

整数。

- 使用 bigint 类型来验证是否是整数，转成字符串比较，满足则返回参数 T,否则返回 never。

> 代码如下:

```ts
type Integer<T extends number> = `${T}` extends `${bigint}` ? T : never;
```

> 使用方式:

```ts
let x = 1;
let y = 1 as const;
type IntegerRes1 = Integer<1>; //  1
type IntegerRes2 = Integer<1.1>; //  never
type IntegerRes3 = Integer<1.0>; //  1
type IntegerRes4 = Integer<1.0>; //  1
type IntegerRes5 = Integer<0.5>; //  never
type IntegerRes6 = Integer<28.0>; //  28
type IntegerRes7 = Integer<28.101>; //  never
type IntegerRes8 = Integer<typeof x>; //  never
type IntegerRes9 = Integer<typeof y>; //  1
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Integer.ts" data-language="typescript"></div>
