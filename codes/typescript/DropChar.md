| 标题               | 标签                     |
| ------------------ | ------------------------ |
| DropChar(删除字符) | extends,infer(继承,推断) |

删除字符。

- 创建一个 泛型 M 继承字符串类型，使用模板字符串以及 infer 关键字推断字符串 S 是否继承左右中间各拼接而成的模板字符串，如果是则递归的调用 DropChar,否则返回 S。

> 代码如下:

```ts
type DropChar<S, M extends string> = S extends `${infer L}${M}${infer R}`
  ? DropChar<`${L}${R}`, M>
  : S;
```

> 使用方式:

```ts
type Butterfly = DropChar<' b u t t e r f l y ! ', ' '>; // 'butterfly!'
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/DropChar.ts" data-language="typescript"></div>
