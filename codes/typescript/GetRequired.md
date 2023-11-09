| 标题                      | 标签          |
| ------------------------- | ------------- |
| GetRequired(获取必选类型) | extends(继承) |

获取必选类型。

- 使用 as 断言对应属性的属性值是否是`Required<T>`转换成必选接口类型中的属性值，如果是则返回原属性名，否则返回 never。

> 代码如下:

```ts
type GetRequired<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K];
};
```

> 使用方式:

```ts
type GetRequiredRes1 = GetRequired<{ foo: number; bar?: string }>; // { foo: number }
type GetRequiredRes2 = GetRequired<{ foo: undefined; bar?: undefined }>; // { foo: undefined }
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/GetRequired.ts" data-language="typescript"></div>
