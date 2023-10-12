| 标题                               | 标签                      |
| ---------------------------------- | ------------------------- |
| GetMiddleElement(提取数组中间元素) | extends,array(继承，数组) |

提取数组中间元素。

- 如果数组的长度为 0,1,2，那么中间元素就是数组本身，如果大于 2，使用 infer 推断中间和两边的元素并递归，否则返回 never。

> 代码如下:

```ts
type GetMiddleElement<T extends any[]> = T['length'] extends 0 | 1 | 2
  ? T
  : T extends [infer _, ...infer M, infer _]
  ? GetMiddleElement<M>
  : never;
```

> 使用方式:

```ts
type GetMiddleElementRes1 = GetMiddleElement<[]>; // []
type GetMiddleElementRes2 = GetMiddleElement<[1, 2, 3, 4, 5]>; // [3]
type GetMiddleElementRes3 = GetMiddleElement<[1, 2, 3, 4, 5, 6]>; // [3, 4]
type GetMiddleElementRes4 = GetMiddleElement<[() => string]>; // [() => string]
type GetMiddleElementRes5 = GetMiddleElement<[() => number, '3', [3, 4], 5]>; // ['3', [3, 4]]
type GetMiddleElementRes6 = GetMiddleElement<[() => string, () => number]>; // [() => string, () => number]
type GetMiddleElementRes7 = GetMiddleElement<[never]>; // [never]
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/GetMiddleElement.ts" data-language="typescript"></div>
