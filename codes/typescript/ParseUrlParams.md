| 标题                         | 标签                                  |
| ---------------------------- | ------------------------------------- |
| ParseUrlParams(解析路径参数) | extends,string,url(继承，字符串,路径) |

解析路径参数。

- 创建第二个参数 U 用于返回结果，类型为 string,默认值是 never,使用 infer 推断字符串，如果满足:和/组成的模板字符串则递归，如果只是满足:的模板字符串，则返回联合类型，否则返回 U。

> 代码如下:

```ts
type ParseUrlParams<
  T extends string,
  U extends string = never
> = T extends `${string}:${infer S}/${infer R}`
  ? ParseUrlParams<R, S | U>
  : T extends `${string}:${infer S}`
  ? S | U
  : U;
```

> 使用方式:

```ts
type ParseUrlParamsRes1 = ParseUrlParams<''>; //  never
type ParseUrlParamsRes2 = ParseUrlParams<':id'>; //  'id'
type ParseUrlParamsRes3 = ParseUrlParams<'posts/:id'>; //  'id'
type ParseUrlParamsRes4 = ParseUrlParams<'posts/:id/'>; //  'id'
type ParseUrlParamsRes5 = ParseUrlParams<'posts/:id/:user'>; //  'id' | 'user'
type ParseUrlParamsRes6 = ParseUrlParams<'posts/:id/:user/like'>; //  'id' | 'user'
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/ParseUrlParams.ts" data-language="typescript"></div>
