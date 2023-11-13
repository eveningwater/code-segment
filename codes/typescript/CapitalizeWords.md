| 标题                            | 标签                     |
| ------------------------------- | ------------------------ |
| CapitalizeWords(单词首字母大写) | extends,infer(继承,推断) |

单词首字母大写。

- 构建第二个参数作为占位符，如空白/符号等则作为第二个参数，使用 infer 推断字符串每一个字符，使用 Uppercase 类型用于避免递归嵌套过深的错误，判断字符是否是小写 Lowercase 类型，如果是，则使用 Capitalize 类型转成大写，并且前面跟随占位符，递归剩余字符，否则递归剩余字符，返回占位符和大写后的字符组成的模板字符串，否则递归占位字符。

> 代码如下:

```ts
type CapitalizeWords<
  S extends string,
  W extends string = ''
> = S extends `${infer A}${infer B}`
  ? Uppercase<A> extends Lowercase<A>
    ? `${Capitalize<`${W}${A}`>}${CapitalizeWords<B>}`
    : CapitalizeWords<B, `${W}${A}`>
  : Capitalize<W>;
```

> 使用方式:

```ts
type CapitalizeWords1 = CapitalizeWords<'foobar'>; // 'Foobar'
type CapitalizeWords2 = CapitalizeWords<'FOOBAR'>; // 'FOOBAR'
type CapitalizeWords3 = CapitalizeWords<'foo bar'>; // 'Foo Bar'
type CapitalizeWords4 = CapitalizeWords<'foo bar hello world'>; // 'Foo Bar Hello World'
type CapitalizeWords5 = CapitalizeWords<'foo bar.hello,world'>; // 'Foo Bar.Hello,World'
type CapitalizeWords6 =
  CapitalizeWords<'aa!bb@cc#dd$ee%ff^gg&hh*ii(jj)kk_ll+mm{nn}oo|pp🤣qq'>; // 'Aa!Bb@Cc#Dd$Ee%Ff^Gg&Hh*Ii(Jj)Kk_Ll+Mm{Nn}Oo|Pp🤣Qq'
type CapitalizeWords7 = CapitalizeWords<''>; // ''
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/CapitalizeWords.ts" data-language="typescript"></div>
