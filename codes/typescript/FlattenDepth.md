| 标题                       | 标签                                                   |
| -------------------------- | ------------------------------------------------------ |
| FlattenDepth(深度拍平数组) | extends, array,infer,recursively(继承, 数组,推断,递归) |

深度拍平数组。

- 第一个参数 T 继承任意数组，第二个参数 S 为 number 类型，代表拍平的层级，默认值是 1，第三个参数是一个数组，用来比较拍平的层级是否满足传入参数即 S 要求。
- 拍平一层的时候，只需要使用 infer 推断第一项和剩余项，剩余项递归的拍平，第一项如果继承任意数组，则使用展开运算符展开，否则直接返回第一项即可。如下所示:

```ts
type Flatten<T extends any[]> = T extends [infer F, ...infer R]
  ? F extends any[]
    ? [...F, ...Flatten<R>]
    : [F, ...Flatten<R>]
  : T;
```

- 深度拍平只需要将...F 换成递归即可，如下所示:

```ts
type Flatten<T extends any[]> = T extends [infer F, ...infer R]
  ? F extends any[]
    ? [...Flatten<F>, ...Flatten<R>]
    : [F, ...Flatten<R>]
  : T;
```

- 考虑拍平层级的问题，需要额外增加一个参数，是一个数组，通过计算数组的长度，从而能够比较拍平的层数是否符合需求，每次拍平只需要向数组里面增加一个数组项即可，这里增加的数组项值就是 1，满足数组长度等于拍平层级数，则直接返回，否则继续递归。
- 递归剩余参数时不需要加 1，因为拍平的操作始终是在数组第一项。

> 代码如下:

```ts
type FlattenDepth<
  T extends any[],
  S extends number = 1,
  U extends any[] = []
> = S extends U['length']
  ? T
  : T extends [infer F, ...infer R]
  ? F extends any[]
    ? [...FlattenDepth<F, S, [...U, 1]>, ...FlattenDepth<R, S, U>]
    : [F, ...FlattenDepth<R, S, U>]
  : T;
```

> 使用方式:

```ts
type aFlattenDepth = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>; // [1, 2, 3, 4, [5]]. flattern 2 times
type bFlattenDepth = FlattenDepth<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/FlattenDepth.ts" data-language="typescript"></div>
