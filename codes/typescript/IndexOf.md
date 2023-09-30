| 标题                  | 标签                      |
| --------------------- | ------------------------- |
| IndexOf(匹配数组元素) | extends,array(继承，数组) |

匹配数组元素。

- 使用一个空数组用于存储索引值，并将这个数组的长度当做匹配到的索引值，存储的值可以是任意值，空数组叫做 C。
- 使用 infer 推断数组的第一项和剩余项，并采用函数的方式来推断数组的第一项是否和给定的值匹配，将函数参数值分别和第一项以及给定项匹配，返回 1 和 0 来方便两者是否判断是否匹配，如果匹配则返回数组 C 的长度，否则递归的匹配剩余项。
- 都匹配不到则返回-1。

> 代码如下:

```ts
type IndexOf<T extends any[], I, C extends number[] = []> = T extends [
  infer F,
  ...infer R
]
  ? (<V>() => V extends F ? 1 : 0) extends <V>() => V extends I ? 1 : 0
    ? C['length']
    : IndexOf<R, I, [...C, 0]>
  : -1;
```

> 使用方式:

```ts
type IndexOfRes = IndexOf<[1, 2, 3], 2>; // expected to be 1
type IndexOfRes1 = IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>; // expected to be 2
type IndexOfRes2 = IndexOf<[0, 0, 0], 2>; // expected to be -1
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/IndexOf.ts" data-language="typescript"></div>
