| 标题                     | 标签                                                 |
| ------------------------ | ---------------------------------------------------- |
| Concat(合并数组元素类型) | array,extends,unknown,readonly(数组,继承,未知，只读) |

合并数组元素类型。

- 类型 T 和类型 U 都继承只读数组类型,使用展开运算符将两者合并。

> 代码如下:

```ts
type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [
  ...T,
  ...U
];
```

> 使用方式:

```ts
type Result = Concat<[1], [2]>; // [1, 2]
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Concat.ts" data-language="typescript"></div>
