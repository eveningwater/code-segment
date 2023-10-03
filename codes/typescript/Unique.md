| 标题             | 标签                      |
| ---------------- | ------------------------- |
| Unique(数组去重) | extends,array(继承，数组) |

数组去重。

- 实现一个 Equal 类型，该类型传入 2 个参数，用于判断两个参数是否相等，如果相等则返回 true，否则返回 false，使用 extends 用于判断两个参数是否相等，代码如下所示。

```ts
type Equal<T, U> = T extends U ? true : false;
```

- 实现一个 Include 类型，该类型主要用于判断数组中的元素是否相等，有 2 个参数，第一个参数为匹配项，第二个参数为数组，如果相等则返回 true，否则递归，继续判断后续的项。代码如下所示:

```ts
type Includes<T, U> = U extends [infer F, ...infer R]
  ? Equal<T, F> extends true
    ? true
    : Includes<T, R>
  : false;
```

- 增加一个辅助参数，用于存储去重后的数组，然后递归第一个参数数组的每一项，去重即可。

> 代码如下:

```ts
type Unique<T extends any[], U extends any[] = []> = T extends [
  infer F,
  ...infer R
]
  ? Includes<F, U> extends true
    ? Unique<R, [...U]>
    : Unique<R, [...U, F]>
  : U;
```

> 使用方式:

```ts
type UniqueRes = Unique<[1, 1, 2, 2, 3, 3]>; // expected to be [1, 2, 3]
type UniqueRes1 = Unique<[1, 2, 3, 4, 4, 5, 6, 7]>; // expected to be [1, 2, 3, 4, 5, 6, 7]
type UniqueRes2 = Unique<[1, 'a', 2, 'b', 2, 'a']>; // expected to be [1, "a", 2, "b"]
type UniqueRes3 = Unique<
  [string, number, 1, 'a', 1, string, 2, 'b', 2, number]
>; // expected to be [string, number, 1, "a", 2, "b"]
type UniqueRes4 = Unique<[unknown, unknown, any, any, never, never]>; // expected to be [unknown, any, never]
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Unique.ts" data-language="typescript"></div>
