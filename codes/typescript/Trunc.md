| 标题            | 标签                     |
| --------------- | ------------------------ |
| Trunc(数值取整) | extends,math(继承，数学) |

数值取整。

- 使用模板字符串符号将数值转成字符串，并使用 infer 推断数值字符串是 0.x 格式还是 x.x 格式。
- 使用 infer 继续推断小数点前的字符，并返回该字符，否则直接返回该数值。

> 代码如下:

```ts
type FillZero<T extends string | number> = T extends
  | `0.${infer R}`
  | `.${infer R}`
  ? `0.${R}`
  : `${T}`;
type Trunc<T extends string | number> =
  FillZero<T> extends `${infer F}.${infer _}` ? F : `${T}`;
```

> 使用方式:

```ts
type TruncRes1 = Trunc<0.1>; //  '0'
type TruncRes2 = Trunc<0.2>; //  '0'
type TruncRes3 = Trunc<1.234>; //  '1'
type TruncRes4 = Trunc<12.345>; //  '12'
type TruncRes5 = Trunc<-5.1>; //  '-5'
type TruncRes6 = Trunc<'.3'>; //  '0'
type TruncRes7 = Trunc<'1.234'>; //  '1'
type TruncRes8 = Trunc<'-10.234'>; //  '-10'
type TruncRes9 = Trunc<10>; //  '10'
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Trunc.ts" data-language="typescript"></div>
