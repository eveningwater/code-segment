| 标题             | 标签                         |
| ---------------- | ---------------------------- |
| If(条件判断类型) | boolean,extends(布尔值,继承) |

实现条件判断类型。

- 类型 C 继承 boolean,判断如果 C 是继承 true,则返回类型 T，否则返回类型 F。

> 代码如下:

```ts
type If<C extends boolean, T, F> = C extends true ? T : F;
```

> 使用方式:

```ts
type A = If<true, 'a', 'b'>; // 'a'
type B = If<false, 'a', 'b'>; // 'b'
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/If.ts" data-language="typescript"></div>
