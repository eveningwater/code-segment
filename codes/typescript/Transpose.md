| 标题                | 标签                     |
| ------------------- | ------------------------ |
| Transpose(矩阵转换) | extends,infer(继承,推断) |

矩阵转换。

- 创建一个数组参数 R，如果第一个数组参数 T 的长度不为 0，则返回第一项，否则返回空数组。
- 从 R 中取出索引值并从 T 中也取出索引值，如果 X 和`T[Y]`相同，则返回`T[Y][X]`,否则返回 never。

> 代码如下:

```ts
type Transpose<T extends number[][], R = T['length'] extends 0 ? [] : T[0]> = {
  [X in keyof R]: {
    [Y in keyof T]: X extends keyof T[Y] ? T[Y][X] : never;
  };
};
```

> 使用方式:

```ts
type TransposeRes1 = Transpose<[]>; // []
type TransposeRes2 = Transpose<[[1]]>; // [[1]]
type TransposeRes3 = Transpose<[[1, 2]]>; // [[1], [2]]
type TransposeRes4 = Transpose<[[1, 2], [3, 4]]>; // [[1, 3], [2, 4]]
type TransposeRes5 = Transpose<[[1, 2, 3], [4, 5, 6]]>; // [[1, 4], [2, 5], [3, 6]]
type TransposeRes6 = Transpose<[[1, 4], [2, 5], [3, 6]]>; // [[1, 2, 3], [4, 5, 6]]
type TransposeRes7 = Transpose<[[1, 2, 3], [4, 5, 6], [7, 8, 9]]>; // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Transpose.ts" data-language="typescript"></div>
