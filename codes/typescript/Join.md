| 标题               | 标签                                    |
| ------------------ | --------------------------------------- |
| Join(数组转字符串) | extends,array,string(继承，数组,字符串) |

数组转字符串。

- 使用 infer 推断数组第一项和剩余项，如果剩余项长度为 0，则直接返回第一项组成的字符串，使用&将第一项与 string 求交集即可转成字符串。
- 否则返回第一项，并插入分隔符，以及递归的推断剩余项。
- 否则返回 never。

> 代码如下:

```ts
type Join<T extends any[], S extends string | number> = T extends [
  infer F,
  ...infer R
]
  ? R['length'] extends 0
    ? `${F & string}`
    : `${F & string}${S}${Join<R, S>}`
  : never;
```

> 使用方式:

```ts
type JoinRes = Join<['a', 'p', 'p', 'l', 'e'], '-'>; // expected to be 'a-p-p-l-e'
type JoinRes1 = Join<['Hello', 'World'], ' '>; // expected to be 'Hello World'
type JoinRes2 = Join<['2', '2', '2'], 1>; // expected to be '21212'
type JoinRes3 = Join<['o'], 'u'>; // expected to be 'o'
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Join.ts" data-language="typescript"></div>
