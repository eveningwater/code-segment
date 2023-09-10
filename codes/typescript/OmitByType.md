| 标题                             | 标签                      |
| -------------------------------- | ------------------------- |
| OmitByType(根据类型忽略接口类型) | readonly, key(可读, 属性) |

根据类型忽略接口类型。

- 定义属性 K 属于 T 的属性，并使用 as 断言如果从 T 中取出属性 K 的属性值继承 U,则返回 never,否则返回 K，属性值仍然是`T[K]`。

> 代码如下:

```ts
type OmitByType<T, U> = {
  [K in keyof T as T[K] extends U ? never : K]: T[K];
};
```

> 使用方式:

```ts
type OmitBoolean = OmitByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>; // { name: string; count: number }
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/OmitByType.ts" data-language="typescript"></div>
