| 标题                         | 标签                        |
| ---------------------------- | --------------------------- |
| Capitalize(字符串首字母大写) | string,extends(字符串,继承) |

字符串首字母大写。

- 泛型 S 继承字符串，使用 infer 关键字推断 S 是否继承自由 首字符 X 以及剩余字符串 R 组成的字符串(推断值为 R)，如果是则使用内置类型 Uppercase 将 X 转换成大写与剩余字符串 R 组成新的字符串，否则返回 S。

> 代码如下:

```ts
type Capitalized<S extends string> = S extends `${infer X}${infer R}`
  ? `${Uppercase<X>}${R}`
  : S;

// type Uppercase<S extends string> = intrinsic;
// intrinsic 是 typescript 引入的一个关键字，就如它的含义一样，是TS 内部 用到的。和其它TS提供的内置类型一样，Uppercase 这几个内置类型也是为了方便类型书写，但是专门针对字符串类型<字符串字面量、模板字符串>而提供的。它们的共同特点是，用它们生成的类型涉及到了值的转换，而不是类型的转换，而这在TS里通过已有的类型书写方式是无法表达、也不太适合去表达的。
```

> 使用方式:

```ts
type capitalized = Capitalized<'hello world'>; // 'Hello world'
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Capitalize.ts" data-language="typescript"></div>
