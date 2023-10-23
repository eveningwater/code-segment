| 标题                         | 标签                     |
| ---------------------------- | ------------------------ |
| ReplaceFirst(替换第一个字符) | extends,infer(继承,推断) |

替换第一个字符。

- 使用 infer 推断数组 T 是否存在数组项，从第一项开始推断，展开运算符表示剩余项，如果存在从第一项开始匹配给定的 S 参数，则返回 U 和剩余数组项 R 组成的数组，否则将 F 返回，并将剩余项继续递归，否则返回原数组 T。

> 代码如下:

```ts
type ReplaceFirst<T extends any[], S, U> = T extends [infer F, ...infer R]
  ? F extends S
    ? [U, ...R]
    : [F, ...ReplaceFirst<R, S, U>]
  : T;
```

> 使用方式:

```ts
type ReplaceFirstRes1 = ReplaceFirst<[1, 2, 3], 3, 4>; // [1, 2, 4]
type ReplaceFirstRes2 = ReplaceFirst<['A', 'B', 'C'], 'C', 'D'>; // ['A', 'B', 'D']
type ReplaceFirstRes3 = ReplaceFirst<[true, true, true], true, false>; // [false, true, true]
type ReplaceFirstRes4 = ReplaceFirst<
  [string, boolean, number],
  boolean,
  string
>; // [string, string, number]
type ReplaceFirstRes5 = ReplaceFirst<[1, 'two', 3], string, 2>; // [1, 2, 3]
type ReplaceFirstRes6 = ReplaceFirst<
  ['six', 'eight', 'ten'],
  'eleven',
  'twelve'
>; // ['six', 'eight', 'ten']
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/ReplaceFirst.ts" data-language="typescript"></div>
