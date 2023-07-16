| 标题                       | 标签                     |
| -------------------------- | ------------------------ |
| FirstArray(提取数组第一项) | extends,array(继承,数组) |

提取数组第一项。

- 数组 T 继承任意数组，如果数组 T 继承空数组，则返回 never,否则返回数组第一项。
- 数组 T 继承任意数组，如果数组 T 的长度属性为 0，则返回 never,否则返回数组第一项。
- 数组 T 继承任意数组，如果数组 T 继承任意推断的数组，则返回一项,否则返回 never。

> 代码如下:

```ts
type FirstArray<T extends any[]> = T extends [] ? never : T[0];
// type FirstArray<T extends any []> = T['length'] extends 0 ? never : T[0];
// type FirstArray<T extends any []> = T extends [infer A,...infer rest] ? A : never;
```

> 使用方式:

```ts
type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type head1 = FirstArray<arr1>; // expected to be 'a'
type head2 = FirstArray<arr2>; // expected to be 3
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/FirstArray.ts" data-language="typescript"></div>
