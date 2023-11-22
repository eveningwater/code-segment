| 标题             | 标签                     |
| ---------------- | ------------------------ |
| Enum(元组转枚举) | extends,infer(继承,推断) |

元组转枚举。

- 创建一个 TupleKeys 类型，该类型接收一个只读元组参数，返回对应索引值，使用 infer 推断数组每一项，返回剩余数组的长度与递归剩余数组项之联合，否则返回 never。代码如下所示:

```ts
type TupleKeys<T extends readonly unknown[]> = T extends readonly [
  infer _,
  ...infer R
]
  ? TupleKeys<R> | R['length']
  : never;
```

- 读取每一个索引，并使用 as 断言成大写字母，判断如果给定第二个参数为 true，则返回对应的索引作为属性值，否则返回数组项作为属性值。

> 代码如下:

```ts
type Enum<T extends readonly string[], U extends boolean = false> = {
  readonly [K in TupleKeys<T> as Capitalize<T[K]>]: U extends true ? K : T[K];
};
```

> 使用方式:

```ts
type EnumRes1 = Enum<[]>; // {}
type EnumRes2 = Enum<typeof OperatingSystem>;
//   {
//     readonly MacOS: 'macOS'
//     readonly Windows: 'Windows'
//     readonly Linux: 'Linux'
//   }
type EnumRes3 = Enum<typeof OperatingSystem, true>;
//   {
//     readonly MacOS: 0
//     readonly Windows: 1
//     readonly Linux: 2
//   }

type EnumRes4 = Enum<typeof Command>;
//   {
//     readonly Echo: 'echo'
//     readonly Grep: 'grep'
//     readonly Sed: 'sed'
//     readonly Awk: 'awk'
//     readonly Cut: 'cut'
//     readonly Uniq: 'uniq'
//     readonly Head: 'head'
//     readonly Tail: 'tail'
//     readonly Xargs: 'xargs'
//     readonly Shift: 'shift'
//   }

type EnumRes5 = Enum<typeof Command, true>;
//   {
//     readonly Echo: 0
//     readonly Grep: 1
//     readonly Sed: 2
//     readonly Awk: 3
//     readonly Cut: 4
//     readonly Uniq: 5
//     readonly Head: 6
//     readonly Tail: 7
//     readonly Xargs: 8
//     readonly Shift: 9
//   }
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Enum.ts" data-language="typescript"></div>
