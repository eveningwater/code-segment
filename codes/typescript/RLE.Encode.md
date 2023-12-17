| 标题                   | 标签                     |
| ---------------------- | ------------------------ |
| RLE.Encode(统计字符数) | extends,infer(继承,推断) |

统计字符数。

- 使用 namespace 创建 ts 空间名，代码如下所示:

```ts
namespace RLE {
  // ...
}
```

- 实现一个 EncodeHelper 类型，该类型支持传入三个参数，第一个参数为需要被统计编码的字符串参数，第二个参数用于统计每一个不同字符，默认值是空字符串，第三个为一个数组，即统计字符数。首先使用 infer 关键字推断第一个参数的每一个字符，然后将第一个字符同第二个参数做比较，相同则递归剩余字符，并统计第一个字符出现的次数，否则如果第二个参数是空字符串，则将第一个字符作为第二个参数并递归统计字符出现次数，如果第三个参数数组长度为 1，则返回第二个参数和递归首个字符的模板字符串，否则返回由长度值以及第二个参数代码和递归首个字符的模板字符串，否则如果第二个参数是空字符串，则返回空字符串，否则如果第三个参数长度为 1，则返回第二个参数，否则返回长度和第二个参数组成的模板字符串。如下所示:

```ts
type EncodeHelper<
  S extends string,
  P extends string = '',
  L extends 1[] = []
> = S extends `${infer F}${infer R}`
  ? F extends P
    ? EncodeHelper<R, P, [1, ...L]>
    : P extends ''
    ? EncodeHelper<R, F, [1]>
    : L['length'] extends 1
    ? `${P}${EncodeHelper<R, F, [1]>}`
    : `${L['length']}${P}${EncodeHelper<R, F, [1]>}`
  : P extends ''
  ? ''
  : L['length'] extends 1
  ? P
  : `${L['length']}${P}`;
```

- 根据 EncodeHelper 类型可实现 Encode 类型，代码如下所示:

```ts
type Encode<S extends string> = EncodeHelper<S>;
```

- 实现一个 Repeat 类型，该类型支持三个参数，其中第二个参数用于存储数值字符，第三个参数用于存储重复字符，当长度和第二个数值字符相同，则返回空字符串，否则返回第一个参数字符串，并递归剩余字符。代码如下所示:

```ts
type Repeat<
  S extends string,
  L extends string,
  C extends 1[] = []
> = `${C['length']}` extends L ? '' : `${S}${Repeat<S, L, [1, ...C]>}`;
```

- 实现一个 DecodeHelper 类型，使用 infer 推断每一个字符，并依次递归添加重复字符。代码如下所示:

```ts
type DecodeHelper<
  S extends string,
  L extends string = ''
> = S extends `${infer F}${infer R}`
  ? F extends `${number}`
    ? DecodeHelper<R, `${L}${F}`>
    : `${Repeat<F, L extends '' ? '1' : L>}${DecodeHelper<R, ''>}`
  : '';
```

- 结合前面实现的 DecodeHelper 和 Repeat 类型，即可实现 Decode 类型。代码如下所示:

```ts
type Decode<S extends string> = DecodeHelper<S>;
```

> 代码如下:

```ts
namespace RLE {
  type EncodeHelper<
    S extends string,
    P extends string = '',
    L extends 1[] = []
  > = S extends `${infer F}${infer R}`
    ? F extends P
      ? EncodeHelper<R, P, [1, ...L]>
      : P extends ''
      ? EncodeHelper<R, F, [1]>
      : L['length'] extends 1
      ? `${P}${EncodeHelper<R, F, [1]>}`
      : `${L['length']}${P}${EncodeHelper<R, F, [1]>}`
    : P extends ''
    ? ''
    : L['length'] extends 1
    ? P
    : `${L['length']}${P}`;
  export type Encode<S extends string> = EncodeHelper<S>;
  type DecodeHelper<
    S extends string,
    L extends string = ''
  > = S extends `${infer F}${infer R}`
    ? F extends `${number}`
      ? DecodeHelper<R, `${L}${F}`>
      : `${Repeat<F, L extends '' ? '1' : L>}${DecodeHelper<R, ''>}`
    : '';
  type Repeat<
    S extends string,
    L extends string,
    C extends 1[] = []
  > = `${C['length']}` extends L ? '' : `${S}${Repeat<S, L, [1, ...C]>}`;
  export type Decode<S extends string> = DecodeHelper<S>;
}
```

> 使用方式:

```ts
// Raw string -> encoded string
type EncodeRes = RLE.Encode<'AAABCCXXXXXXY'>; // '3AB2C6XY'

// Encoded string -> decoded string
type DecodeRes = RLE.Decode<'3AB2C6XY'>; // 'AAABCCXXXXXXY'
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/RLE.Encode.ts" data-language="typescript"></div>
