| 标题           | 标签          |
| -------------- | ------------- |
| Omit(忽略类型) | extends(继承) |

忽略类型。

- 使用 keyof 提取任意值的 key 属性，然后 K 继承它。
- 使用 [Pick](codes/typescript/Pick.md)挑选排除掉([Exclude](codes/typescript/Exclude.md))既是 T 的属性又在 K 当中存在的属性。

> 代码如下:

```ts
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

> 使用方式:

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>;

const todo: TodoPreview = {
  completed: false
};
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Omit.ts" data-language="typescript"></div>
