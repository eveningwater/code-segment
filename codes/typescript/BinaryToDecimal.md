| 标题                                          | 标签                     |
| --------------------------------------------- | ------------------------ |
| BinaryToDecimal(二进制数值字符串转十进制数字) | extends,infer(继承,推断) |

二进制数值字符串转十进制数字。

- 二进制转换为十进制是将每一位数与 2 的幂相乘然后相加，因此我们传入第二个参数一个数组参数，每次移动一位就需要添加 2 个数字存到数组中，最后返回数组长度即可。当所有字符为 0 的时候，则只需要添加原数组展开的 2 位即可，否则就需要添加原数组的 2 位展开并添加一个随意数字，使用 infer 关键字推断每一个第一个字符串参数的每一个字符。

> 代码如下:

```ts
type BinaryToDecimal<
  T extends string,
  U extends number[] = []
> = T extends `${infer F}${infer R}`
  ? F extends '0'
    ? BinaryToDecimal<R, [...U, ...U]>
    : BinaryToDecimal<R, [...U, ...U, 0]>
  : U['length'];
```

> 使用方式:

```ts
type BinaryToDecimalRes1 = BinaryToDecimal<'10'>; //  2
type BinaryToDecimalRes2 = BinaryToDecimal<'0011'>; // 3
type BinaryToDecimalRes3 = BinaryToDecimal<'00000000'>; //  0
type BinaryToDecimalRes4 = BinaryToDecimal<'11111111'>; //  255
type BinaryToDecimalRes5 = BinaryToDecimal<'10101010'>; //  170
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/BinaryToDecimal.ts" data-language="typescript"></div>
