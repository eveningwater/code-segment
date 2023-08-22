| 标题               | 标签                     |
| ------------------ | ------------------------ |
| Absolute(求绝对值) | extends,infer(继承,推断) |

求绝对值。

- 类型 T 继承数值字符串和大数值类型，将 T 转换成字符串，使用 infer 推断是否和 T 相反，是返回推断的值，否则返回 T。

> 代码如下:

```ts
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer A}`
  ? A
  : T;
```

> 使用方式:

```ts
type AbsoluteTest = -100;
type AbsoluteResult = Absolute<AbsoluteTest>; // expected to be "100"
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Absolute.ts" data-language="typescript"></div>
