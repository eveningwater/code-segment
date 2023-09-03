| 标题                               | 标签                     |
| ---------------------------------- | ------------------------ |
| MinusOne(数字减 1(数字应是正整数)) | extends,infer(继承,推断) |

数字减 1(数字应是正整数)。

- 创建一个 ParseInt 类型,类型参数 T 应该是字符串，使用 infer 关键字推断如果字符串属于数值字符串，则返回推断的数值，否则返回 never。
- 创建一个 ReverseString 类型，该类型用于反转字符串，因此类型参数是一个字符串，同样可以使用 infer 关键字即可完成反转,无法反转则返回空字符串。
- 创建一个 RemoveLeadingZeros 类型，该类型的作用就是移除前置 0,使用 infer 关键字来推断是否含有前置 0，有就移除，无则返回字符串。
- 创建一个 InternalMinusOne 类型，该类型的作用就是计算减法，使用 infer 首先推断首位字符，如果是 0，则直接返回 9,否则返回从 9 到 8 的数字对应字符（创建了一个数字数组，通过将首位字符当做索引来取值）。
- 最后是 MinusOne 类型的实现,首先使用模板字符串将数值参数转换成字符串，然后使用 ReverseString 将字符串反转，然后使用 InternalMinusOne 计算反转后的字符串，然后再使用 ReverseString 反转，然后使用 RemoveLeadingZeros 移除反转后字符串的前置 0，最后使用 ParseInt 将字符串转成数值。

> 代码如下:

```ts
type ParseInt<T extends string> = T extends `${infer D extends number}`
  ? D
  : never;
type ReverseString<S extends string> = S extends `${infer F}${infer R}`
  ? `${R}${F}`
  : '';
type RemoveLeadingZeros<S extends string> = S extends '0'
  ? S
  : S extends `${'0'}${infer R}`
  ? `${RemoveLeadingZeros<R>}`
  : S;
type InternalMinusOne<S extends string> =
  S extends `${infer D extends number}${infer R}`
    ? D extends 0
      ? `9${InternalMinusOne<R>}`
      : `${[9, 0, 1, 2, 3, 4, 5, 6, 7, 8][D]}${R}`
    : never;
type MinusOne<T extends number> = ParseInt<
  RemoveLeadingZeros<ReverseString<InternalMinusOne<ReverseString<`${T}`>>>>
>;
```

> 使用方式:

```ts
type Zero = MinusOne<1>; // 0
type FiftyFour = MinusOne<55>; // 54
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/MinusOne.ts" data-language="typescript"></div>
