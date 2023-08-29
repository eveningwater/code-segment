| 标题                    | 标签          |
| ----------------------- | ------------- |
| IsUnion(是否是联合类型) | extends(继承) |

是否是联合类型。

- 创建一个泛型 C 继承泛型 T,默认值也是 T。
- 如果泛型 T 继承 T 并且泛型 C 也继承 T，则返回 true,如果泛型 T 继承 T,而泛型 C 不继承 T，则返回 unknown,都不满足则返回 never.
- 返回值如果继承 true，则表示两个类型相同了，不可能是联合类型，因此返回 false，否则返回 true。

> 注: unknown 和任意类型取联合类型都是 unknown(any 除外)。
> 代码如下:

```ts
type IsUnion<T, C extends T = T> = (
  T extends T ? (C extends T ? true : unknown) : never
) extends true
  ? false
  : true;
```

> 使用方式:

```ts
type IsUnionCase1 = IsUnion<string>; // false
type IsUnionCase2 = IsUnion<string | number>; // true
type IsUnionCase3 = IsUnion<[string | number]>; // false
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/IsUnion.ts" data-language="typescript"></div>
