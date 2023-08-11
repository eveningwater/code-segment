| 标题                     | 标签                     |
| ------------------------ | ------------------------ |
| Trim(清除字符串右边空白) | space,extends(空白,继承) |

清除字符串右边空白。

- 创建一个 Space 类型，值为空白。
- 泛型 S 继承字符串，使用 infer 关键字推断 S 是否继承自由 Space 拼接而成的字符串(推断值为 R)，如果是则递归的返回 R。

> 代码如下:

```ts
type Space = ' ' | '\n' | '\t';
type Trim<S extends string> = S extends `${Space}${infer R}${Space}`
  ? Trim<R>
  : S;
```

> 使用方式:

```ts
type TrimStr = Trim<'  Hello World  '>; // 'Hello World'
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Trim.ts" data-language="typescript"></div>
