| 标题                       | 标签                     |
| -------------------------- | ------------------------ |
| Format(格式化打印的字符串) | extends,infer(继承,推断) |

格式化打印的字符串。

- 创建一个 映射类型，包含 s 属性，属性值为字符串，d 属性，属性值为 number，代码如下:

```ts
type MapDict = {
  d: number;
  s: string;
};
```

- 使用 infer 推断字符串是否由%组成，如果是则判断中间字符 M 是否是映射类型的属性，是，则返回对应的函数，函数参数为映射类型，返回值为递归剩余字符，否则递归剩余字符，否则返回 string。

> 代码如下:

```ts
type Format<T extends string> = T extends `${string}%${infer M}${infer R}`
  ? M extends keyof MapDict
    ? (x: MapDict[M]) => Format<R>
    : Format<R>
  : string;
```

> 使用方式:

```ts
type FormatRes1 = Format<'abc'>; //  string
type FormatRes2 = Format<'a%sbc'>; //  (s1: string) => string
type FormatRes3 = Format<'a%dbc'>; //  (d1: number) => string
type FormatRes4 = Format<'a%%dbc'>; //  string
type FormatRes5 = Format<'a%%%dbc'>; //  (d1: number) => string
type FormatRes6 = Format<'a%dbc%s'>; //  (d1: number) => (s1: string) => string
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Format.ts" data-language="typescript"></div>
