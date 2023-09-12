| 标题                  | 标签                       |
| --------------------- | -------------------------- |
| Shift(删除数组第一项) | extends, array(继承, 数组) |

删除数组第一项。

- T 继承任意类型数组，使用 any 推断数组第一项（因为要移除第一项，而第一项用不到，所以使用 any 表示），infer 关键字推断数组剩余项 R，返回 R，否则返回原数组 T。

> 代码如下:

```ts
type Shift<T extends any[]> = T extends [any, ...infer R] ? [...R] : T;
```

> 使用方式:

```ts
type ShiftResult = Shift<[3, 2, 1]>; // [2, 1]
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Shift.ts" data-language="typescript"></div>
