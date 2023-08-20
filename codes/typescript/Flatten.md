| 标题              | 标签                                      |
| ----------------- | ----------------------------------------- |
| Flatten(展开数组) | extends,array,recursively(继承,数组,递归) |

展开数组。

- 类型有 2 个参数，第一个参数表示泛型 S,继承任意类型的数组，第二个参数是一个任意类型的数组，存储第一个参数的所有数组项，默认是空数组。
- 递归的用 infer 关键字推断数组 S,是否继承 X 和 Y 的组合，然后将第二个参数数组填充满，最后返回数组 T。

> 代码如下:

```ts
type Flatten<A extends any[], T extends any[] = []> = A extends [
  infer X,
  ...infer Y
]
  ? X extends any[]
    ? Flatten<[...X, ...Y], T>
    : Flatten<[...Y], [...T, X]>
  : T;
```

> 使用方式:

```ts
type flattenFlatten = Flatten<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Flatten.ts" data-language="typescript"></div>
