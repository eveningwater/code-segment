| 标题                             | 标签                                                     |
| -------------------------------- | -------------------------------------------------------- |
| ReplaceAll(字符串替换(替换所有)) | string,extends,infer,recursively(字符串,继承,推断，递归) |

字符串替换(替换所有)。

- 泛型 S 继承字符串，匹配字符 F 与替换字符 T 同理，使用 infer 关键字推断模板字符串的两边，中间则是 F，匹配到则将中间的字符替换成 T，左边返回推断的字符 L，右边则递归的调用字符，以推断的字符 R 作为第一个参数，第二个参数和第三个参数与第一次调用不变，否则返回 S。

> 代码如下:

```ts
type ReplaceAll<
  S extends string,
  F extends string,
  T extends string
> = F extends ''
  ? S
  : S extends `${infer L}${F}${infer R}`
  ? `${L}${T}${ReplaceAll<R, F, T>}`
  : S;
```

> 使用方式:

```ts
type replacedAllStr = ReplaceAll<'t y p e s', ' ', ''>; // expected to be 'types'
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/ReplaceAll.ts" data-language="typescript"></div>
