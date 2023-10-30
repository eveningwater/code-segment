| 标题                                         | 标签                     |
| -------------------------------------------- | ------------------------ |
| CheckRepeatedTuple(检查元组是否含有重复元素) | extends,infer(继承,推断) |

检查元组是否含有重复元素。

- 使用 infer 推断数组第一项和剩余项，如果剩余项中存在和第一项匹配的类型，则返回 true，否则递归剩余项，否则返回 false。

> 代码如下:

```ts
type CheckRepeatedTuple<T extends any[]> = T extends [infer F, ...infer R]
  ? F extends R[number]
    ? true
    : CheckRepeatedTuple<R>
  : false;
```

> 使用方式:

```ts
type CheckRepeatedTupleRes1 = CheckRepeatedTuple<
  [number, number, string, boolean]
>; // true
type CheckRepeatedTupleRes2 = CheckRepeatedTuple<[number, string]>; // false
type CheckRepeatedTupleRes3 = CheckRepeatedTuple<[1, 2, 3]>; // false
type CheckRepeatedTupleRes4 = CheckRepeatedTuple<[1, 2, 1]>; // true
type CheckRepeatedTupleRes5 = CheckRepeatedTuple<[]>; // false
type CheckRepeatedTupleRes6 = CheckRepeatedTuple<string[]>; // false
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/CheckRepeatedTuple.ts" data-language="typescript"></div>
