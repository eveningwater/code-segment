| 标题            | 标签                      |
| --------------- | ------------------------- |
| Chunk(数组分块) | extends,array(继承，数组) |

数组分块。

- 要判断是否达到了分组数，则需要通过数组长度与分组数做比较,因此需要额外创建一个空数组，用来存储分组后的元素，并用作判断。
- 如果新数组的长度和分组数相同，则直接返回该数组与递归的执行传入的数组所有元素的组合。
- 使用 infer 推断数组的第一项和剩余项，推断成功则返回递归后的数组,将剩余项继续递归。
- 否则，如果新创建的数组是空数组，则直接返回，都不是则将新创建数组用数组包裹起来。

> 代码如下:

```ts
type Chunk<
  T extends any[],
  N extends number = 1,
  S extends any[] = []
> = S['length'] extends N
  ? [S, ...Chunk<T, N>]
  : T extends [infer F, ...infer R]
  ? Chunk<R, N, [...S, F]>
  : S extends []
  ? S
  : [S];
```

> 使用方式:

```ts
type expChunk1 = Chunk<[1, 2, 3], 2>; // expected to be [[1, 2], [3]]
type expChunk2 = Chunk<[1, 2, 3], 4>; // expected to be [[1, 2, 3]]
type expChunk3 = Chunk<[1, 2, 3], 1>; // expected to be [[1], [2], [3]]
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Chunk.ts" data-language="typescript"></div>
