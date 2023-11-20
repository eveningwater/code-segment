| 标题                   | 标签                     |
| ---------------------- | ------------------------ |
| ToNumber(字符串转数字) | extends,infer(继承,推断) |

字符串转数字。

- 使用 infer 推断字符串中的字符，如果属于 number，则返回该值，否则返回 never。

> 代码如下:

```ts
type ToNumber<S extends string> = S extends `${infer N extends number}`
  ? N
  : never;
```

> 使用方式:

```ts
type ToNumberRes1 = ToNumber<'0'>; //  0
type ToNumberRes2 = ToNumber<'5'>; //  5
type ToNumberRes3 = ToNumber<'12'>; //  12
type ToNumberRes4 = ToNumber<'27'>; //  27
type ToNumberRes5 = ToNumber<'18@7_$%'>; //  never
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/ToNumber.ts" data-language="typescript"></div>
