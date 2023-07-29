| 标题                         | 标签                        |
| ---------------------------- | --------------------------- |
| SelectReadonly(可选只读类型) | readonly,extends(只读,继承) |

可选只读类型。

- 使用 keyof 提取类型 T 的属性，并使用 K 继承，K 的默认值也是 keyof T。
- 属性 R 在 K 中，所以设置为只读，排除 ([Exclude](codes/typescript/Exclude.md))掉 K 里面的属性，keyof T 以外的属性不设置只读，两者进行合并。

> 代码如下:

```ts
type SelectReadonly<T, K extends keyof T = keyof T> = {
  readonly [R in K]: T[R];
} & {
  [R in Exclude<keyof T, K>]: T[R];
};
```

> 使用方式:

```ts
interface SelectReadonlyTodo {
  title: string;
  description: string;
  completed: boolean;
}

const selectReadonlyTodo: SelectReadonly<
  SelectReadonlyTodo,
  'title' | 'description'
> = {
  title: 'Hey',
  description: 'foobar',
  completed: false
};

selectReadonlyTodo.title = 'Hello'; // Error: cannot reassign a readonly property
selectReadonlyTodo.description = 'barFoo'; // Error: cannot reassign a readonly property
selectReadonlyTodo.completed = true; // OK
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/SelectReadonly.ts" data-language="typescript"></div>
