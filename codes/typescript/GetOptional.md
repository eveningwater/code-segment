| 标题                      | 标签          |
| ------------------------- | ------------- |
| GetOptional(获取可选类型) | extends(继承) |

获取可选类型。

- 使用 as 断言对应属性的属性值是否是`Required<T>`转换成必选接口类型中的属性值，如果是则返回 never，否则返回原属性。

> 代码如下:

```ts
type GetOptional<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K];
};
```

> 使用方式:

```ts
type GetOptionalRes1 = GetOptional<{ foo: number; bar?: string }>; //  { bar?: string }
type GetOptionalRes2 = GetOptional<{ foo: undefined; bar?: undefined }>; //  { bar?: undefined }
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/GetOptional.ts" data-language="typescript"></div>
