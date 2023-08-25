| 标题                            | 标签                     |
| ------------------------------- | ------------------------ |
| KebabCase(大写字母转换成短横线) | extends,infer(继承,推断) |

大写字母转换成短横线。

- 泛型约束 S 的类型为字符串,S 如果继承一个用 infer 推断剩余字符和首字符组成的模板字符串，则使用 Uncapitalize 内置类型转换成小写,如果剩余字符还需要转换成小写，则使用短横线连接，否则不需要短横线连接。

Uncapitalize 类型代码如下:

```ts
// intrinsic是一个关键字，会由ts编译该关键字转换成小写
type Uncapitalize<S extends string> = intrinsic;
```

> 代码如下:

```ts
type KebabCase<S extends string> = S extends `${infer F}${infer R}`
  ? R extends Uncapitalize<R>
    ? `${Uncapitalize<F>}${KebabCase<R>}`
    : `${Uncapitalize<F>}-${KebabCase<R>}`
  : S;
```

> 使用方式:

```ts
type KebabCaseFooBarBaz = KebabCase<'FooBarBaz'>;
const keFooBarBaz: KebabCaseFooBarBaz = 'foo-bar-baz';

type KebabCaseDoNothing = KebabCase<'do-nothing'>;
const keDoNothing: KebabCaseDoNothing = 'do-nothing';
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/KebabCase.ts" data-language="typescript"></div>
