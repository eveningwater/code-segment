| 标题                | 标签                                   |
| ------------------- | -------------------------------------- |
| Replace(字符串替换) | string,extends,infer(字符串,继承,推断) |

字符串替换。

- 泛型 S 继承字符串，匹配字符 F 与替换字符 T 同理，使用 infer 关键字推断模板字符串的两边，中间则是 F，匹配到则将中间的字符替换成 T，否则返回 S。

> 代码如下:

```ts
type Replace<
  S extends string,
  F extends string,
  T extends string
> = F extends ''
  ? S
  : S extends `${infer L}${F}${infer R}`
  ? `${L}${T}${R}`
  : S;
```

> 使用方式:

```ts
type replacedStr = Replace<'types are fun!', 'fun', 'awesome'>; // 'types are awesome!'
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Replace.ts" data-language="typescript"></div>
