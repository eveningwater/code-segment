| 标题               | 标签                                  |
| ------------------ | ------------------------------------- |
| Pick(提取接口类型) | in,keyof(是否在类型中,属于类型的属性) |

提取接口类型。

- 使用keyof获取类型T的属性名，组合成联合类型（类似 string | boolean），然后让K继承。
- 使用in操作符判断属性类型是否在K中，如果是就返回T[K]，也就是属性值。

> 代码如下:

```ts
type Pick<T, K extends keyof T> = {
    [R in K]: T[K]
}
```

> 使用方式:

```ts
interface PickTodo {
    title: string
    description: string
    completed: boolean
}

type PickTodoPreview = Pick<PickTodo, 'title' | 'completed'>; // { title:string;completed: boolean; }
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Pick.ts" data-language="typescript"></div>
