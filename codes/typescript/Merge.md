| 标题                | 标签                   |
| ------------------- | ---------------------- |
| Merge(合并接口类型) | extends,key(继承,属性) |

合并接口类型。

- 泛型约束 T 和 S 的类型为接口,定义属性 K 属于 T 或者 S 的 key，如果属性继承 S，则返回 S[K],如果继承 T,则返回 T[K],否则返回 never。

> 代码如下:

```ts
type Merge<T extends Record<string, any>, S extends Record<string, any>> = {
  [K in keyof T | keyof S]: K extends keyof S
    ? S[k]
    : K extends keyof T
    ? T[K]
    : never;
};
```

另一种实现方式是利用 Omit 类型先从 T 中删除 S 中含有的属性，然后与 S 进行合并。如下所示:

```ts
// 不过这种实现方式看到的并不是想要的结果
type Merge<T extends Record<string, any>, S extends Record<string, any>> = Omit<
  T,
  keyof S
> &
  S;
```

> 使用方式:

```ts
type MergeFoo = {
  name: string;
  age: string;
};
type MergeCoo = {
  age: number;
  sex: string;
};

type MergeResult = Merge<MergeFoo, MergeCoo>; // expected to be {name: string, age: number, sex: string}
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Merge.ts" data-language="typescript"></div>
