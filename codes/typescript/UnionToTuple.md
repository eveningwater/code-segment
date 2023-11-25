| 标题                         | 标签          |
| ---------------------------- | ------------- |
| UnionToTuple(联合类型转元组) | extends(继承) |

联合类型转元组。

- 实现原理参考这篇[文章](https://juejin.cn/post/7301130064249225267)。

> 代码如下:

```ts
// 第一步
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;
// 第二步
type UnionToOvlds<U> = UnionToIntersection<
  U extends any ? (f: U) => void : never
>;
// 第三步
type PopUnion<U> = UnionToOvlds<U> extends (f: infer A) => void ? A : never;
// 第四步
type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;
// 第五步
type UnionToTuple<T, A extends unknown[] = []> = IsUnion<T> extends true
  ? UnionToTuple<Exclude<T, PopUnion<T>>, [PopUnion<T>, ...A]>
  : [T, ...A];
```

> 使用方式:

```ts
type ExtractValuesOfTuple<T extends any[]> = T[keyof T & number];

type UnionToTupleRes1 = UnionToTuple<'a' | 'b'>['length']; //  2
type UnionToTupleRes2 = ExtractValuesOfTuple<UnionToTuple<'a' | 'b'>>; //  'a' | 'b'
type UnionToTupleRes3 = ExtractValuesOfTuple<UnionToTuple<'a'>>; //  'a'
type UnionToTupleRes4 = ExtractValuesOfTuple<UnionToTuple<any>>; //  any
type UnionToTupleRes5 = ExtractValuesOfTuple<
  UnionToTuple<undefined | void | 1>
>; //  void | 1
type UnionToTupleRes6 = ExtractValuesOfTuple<UnionToTuple<any | 1>>; //  any | 1
type UnionToTupleRes7 = ExtractValuesOfTuple<UnionToTuple<any | 1>>; //  any
type UnionToTupleRes8 = ExtractValuesOfTuple<
  UnionToTuple<'d' | 'f' | 1 | never>
>; //  'f' | 'd' | 1
type UnionToTupleRes9 = ExtractValuesOfTuple<UnionToTuple<[{ a: 1 }] | 1>>; //  [{ a: 1 }] | 1
type UnionToTupleRes10 = ExtractValuesOfTuple<UnionToTuple<never>>; // never
type UnionToTupleRes11 = ExtractValuesOfTuple<
  UnionToTuple<'a' | 'b' | 'c' | 1 | 2 | 'd' | 'e' | 'f' | 'g'>
>; //  'f' | 'e' | 1 | 2 | 'g' | 'c' | 'd' | 'a' | 'b'
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/UnionToTuple.ts" data-language="typescript"></div>
