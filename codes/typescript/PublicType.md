| 标题                       | 标签                     |
| -------------------------- | ------------------------ |
| PublicType(去除带\_的属性) | extends,infer(继承,推断) |

去除带\_的属性。

- 断言属于 T 的属性是否存在下划线，存在则返回 never，否则返回属性，属性值不变。

> 代码如下:

```ts
type PublicType<T> = {
  [P in keyof T as P extends `${string}_${string}` ? never : P]: T[P];
};
```

> 使用方式:

```ts
type PublicTypeRes1 = PublicType<{ a: number }>; // { a: number }
type PublicTypeRes2 = PublicType<{ _b: string | bigint }>; // {}
type PublicTypeRes3 = PublicType<{ readonly c?: number }>; // { readonly c?: number }
type PublicTypeRes4 = PublicType<{ d: string; _e: string }>; // { d: string }
type PublicTypeRes5 = PublicType<{ _f: () => bigint[] }>; // {}
type PublicTypeRes6 = PublicType<{ g: '_g' }>; // { g: '_g' }
type PublicTypeRes7 = PublicType<{ __h: number; i: unknown }>; // { i: unknown }
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/PublicType.ts" data-language="typescript"></div>
