| 标题                 | 标签                     |
| -------------------- | ------------------------ |
| BitwiseXOR(按位异或) | extends,infer(继承,推断) |

按位异或。

- 创建一个 FillZero 类型，需要传入四个参数，四个参数都是字符串类型，第三和第四个参数默认是空字符串，当第一个参数和第二个参数的并集是空字符串大的时候，返回第三个和第四个参数组成的数组。否则递归，第一个和第二个参数都是使用 infer 推断是否有剩余字符，有则返回剩余字符，否则返回空字符串，第三个参数和第四个参数使用 infer 推断首个字符，存在剩余字符和首个字符，则返回第三个和第四个参数与首个字符组成大的模板字符串，否则返回 0 和第三以及第四个参数的模板字符串。代码如下:

```ts
type FillZero<
  S1 extends string,
  S2 extends string,
  _Result1 extends string = ``,
  _Result2 extends string = ``
> = `` extends S1 & S2
  ? [_Result1, _Result2]
  : FillZero<
      S1 extends `${any}${infer R}` ? R : ``,
      S2 extends `${any}${infer R}` ? R : ``,
      S1 extends `${infer F}${any}` ? `${_Result1}${F}` : `0${_Result1}`,
      S2 extends `${infer F}${any}` ? `${_Result2}${F}` : `0${_Result2}`
    >;
```

- 创建第三个参数，是一个含有 2 个元素的数组，默认等于`FillZero<S1, S2>`,其中 S1 和 S2 则是前面两个求按位异或的字符串，使用 infer 推断数组第一个元素和第二个元素，如果藕存在，则取两个元素的并集与 never 进行比较，是则返回 1，否则返回 0，递归剩余字符，并重新构建第三个参数，将两个参数的剩余字符当做第三个参数，否则返回空字符串。

> 代码如下:

```ts
type BitwiseXOR<
  S1 extends string,
  S2 extends string,
  _FZS extends [string, string] = FillZero<S1, S2>
> = _FZS[0] extends `${infer F1}${infer R1}`
  ? _FZS[1] extends `${infer F2}${infer R2}`
    ? `${[F1 & F2] extends [never] ? 1 : 0}${BitwiseXOR<R1, R2, [R1, R2]>}`
    : ``
  : ``;
```

> 使用方式:

```ts
type BitwiseXORRes1 = BitwiseXOR<'0', '1'>; // '1'
type BitwiseXORRes2 = BitwiseXOR<'1', '1'>; // '0'
type BitwiseXORRes3 = BitwiseXOR<'10', '1'>; // '11'
type BitwiseXORRes4 = BitwiseXOR<'110', '1'>; // '111'
type BitwiseXORRes5 = BitwiseXOR<'101', '11'>; // '110'
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/BitwiseXOR.ts" data-language="typescript"></div>
