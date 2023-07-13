| 标题                                | 标签                          |
| ----------------------------------- | ----------------------------- |
| NonNullable(排除空值与未定义值类型) | null,undefined(空值,未定义值) |

排除空值与未定义值类型。

- 使用 & 将类型 T 与空对象联合，从而排除undefined和null类型。

> 代码如下:

```ts
type NonNullable<T> = T & {};
```

> 使用方式:

```ts
type NonNullableA = null | undefined | string;
type NonNullableB = NonNullable<NonNullableA>; // string
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/NonNullable.ts" data-language="typescript"></div>
