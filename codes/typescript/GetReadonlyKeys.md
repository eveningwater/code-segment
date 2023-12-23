| 标题                          | 标签                     |
| ----------------------------- | ------------------------ |
| GetReadonlyKeys(获取只读属性) | extends,infer(继承,推断) |

获取只读属性。

- 创建一个 Equal 类型，实现可参考[判断 2 个类型是否相等](codes/typescript/Equal.md)。代码如下所示:

```ts
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;
```

- 构建第二个和第三个参数，第二个参数为继承`Readonly<T>`,其中 T 为第一个参数，并默认赋值也是该值，第三个参数为 T 的属性 K，即 keyof T。
- 使用 Pick 从类型 T 和类型 U 中挑选出属性 K，并判断两者是否相等，相等则返回属性 K,否则返回 never。

> 代码如下:

```ts
type GetReadonlyKeys<
  T,
  U extends Readonly<T> = Readonly<T>,
  K extends keyof T = keyof T
> = K extends keyof T
  ? Equal<Pick<T, K>, Pick<U, K>> extends true
    ? K
    : never
  : never;
```

> 使用方式:

```ts
type GetReadonlyKeysRes1 = GetReadonlyKeys<Todo1>; // 'title'
type GetReadonlyKeysRes2 = GetReadonlyKeys<Todo2>; // 'title' | 'description'

interface Todo1 {
  readonly title: string;
  description: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  readonly description: string;
  completed?: boolean;
}
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/GetReadonlyKeys.ts" data-language="typescript"></div>
