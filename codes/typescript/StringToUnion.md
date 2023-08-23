| 标题                          | 标签                                      |
| ----------------------------- | ----------------------------------------- |
| StringToUnion(字符串联合类型) | extends,infer,recursively(继承,推断,递归) |

字符串联合类型。

- 泛型约束 T 的类型为 string，递归的使用 infer 关键字推断每一个字符，并使用|操作符返回联合类型,否则返回 never。

> 代码如下:

```ts
type StringToUnion<T extends string> = T extends `${infer F}${infer R}`
  ? F | StringToUnion<R>
  : never;
```

> 使用方式:

```ts
type StringToUnionTest = '123';
type StringToUnionResult = StringToUnion<StringToUnionTest>; // expected to be "1" | "2" | "3"
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/StringToUnion.ts" data-language="typescript"></div>
