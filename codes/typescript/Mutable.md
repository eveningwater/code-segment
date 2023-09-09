| 标题                      | 标签                      |
| ------------------------- | ------------------------- |
| Mutable(移除接口可读属性) | readonly, key(可读, 属性) |

移除接口可读属性。

- 使用`-`操作符移除可读属性，重写接口，定义一个 K 属于 T 的属性，然后属性值就是`T[K]`。

> 代码如下:

```ts
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};
```

> 使用方式:

```ts
interface MutableTestTodo {
  readonly title: string;
  readonly description: string;
  readonly completed: boolean;
}

type MutableTodo = Mutable<MutableTestTodo>; // { title: string; description: string; completed: boolean; }
```

    > 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Mutable.ts" data-language="typescript"></div>
