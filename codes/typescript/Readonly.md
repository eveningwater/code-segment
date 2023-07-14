| 标题                         | 标签                                |
| ---------------------------- | ----------------------------------- |
| Readonly(让接口类型属性只读) | readonly,keyof(只读,属于类型的属性) |

让接口类型属性只读。

- 使用 keyof 获取类型 T 的属性名，组合成联合类型（类似 string | boolean），并设置属性名和属性值。
- 使用 readonly 关键字让属性名只读。

> 代码如下:

```ts
type Readonly<T> = {
  readonly [R in keyof T]: T[R];
};
```

> 使用方式:

```ts
interface ReadonlyTodo {
  title: string;
  description: string;
}

const todo: Readonly<ReadonlyTodo> = {
  title: "Hey",
  description: "foobar",
};

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Readonly.ts" data-language="typescript"></div>
