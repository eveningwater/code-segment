| 标题                 | 标签                     |
| -------------------- | ------------------------ |
| Filter(过滤数组类型) | extends,infer(继承,推断) |

过滤数组类型。

- 使用 infer 推断类型数组 T 的每一项，判断如果每一项和给定第二个参数 U 相等，则添加到数组中，并递归，否则不添加递归，每一个元素都匹配不到则返回空数组

> 代码如下:

```ts
type Filter<T extends any[], U> = T extends [infer F, ...infer R]
  ? F extends U
    ? [F, ...Filter<R, U>]
    : Filter<R, U>
  : [];
```

> 使用方式:

```ts
type Falsy = false | 0 | '' | null | undefined;
type FilterRes1 = Filter<[0, 1, 2], 2>; //  [2]
type FilterRes2 = Filter<[0, 1, 2], 0 | 1>; //  [0, 1]
type FilterRes3 = Filter<[0, 1, 2], Falsy>; //  [0]
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Filter.ts" data-language="typescript"></div>
