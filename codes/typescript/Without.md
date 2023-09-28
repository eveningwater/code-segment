| 标题                  | 标签                      |
| --------------------- | ------------------------- |
| Without(去除数组元素) | extends,array(继承，数组) |

去除数组元素。

- 使用 infer 推断数组的每一项，如果和第二个参数 U 相匹配，则去除，否则保留，并且递归的执行。
- 但是由于第二个参数可能是数组，因此需要将第二个参数转成联合类型来比较。转成联合类型如下所示:

```ts
type toUnion<T> = T extends any[] ? T[number] : T;
```

> 代码如下:

```ts
type Without<T, U> = T extends [infer F, ...infer R]
  ? F extends toUnion<U>
    ? Without<R, U>
    : [F, ...Without<R, U>]
  : T;
```

> 使用方式:

```ts
type WithoutRes = Without<[1, 2], 1>; // expected to be [2]
type WithoutRes1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type WithoutRes2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Without.ts" data-language="typescript"></div>
