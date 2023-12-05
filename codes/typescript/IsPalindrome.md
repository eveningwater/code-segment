| 标题                           | 标签                     |
| ------------------------------ | ------------------------ |
| IsPalindrome(回文数字或字符串) | extends,infer(继承,推断) |

回文数字或字符串。

- 类型第一个参数应该是字符串或者数值类型，构建第二个参数将第一个参数包装成字符串，首先使用 infer 推断该字符串是否只有两个字符，如果右边一个字符为空字符串，则返回 true，否则如果字符串两边都是推断的字符，则递归中间的字符串，否则返回 false，否则返回 true。

> 代码如下:

```ts
type IsPalindrome<
  T extends string | number,
  U = `${T}`
> = U extends `${infer L}${infer R}`
  ? R extends ''
    ? true
    : U extends `${L}${infer R}${L}`
    ? IsPalindrome<R>
    : false
  : true;
```

> 使用方式:

```ts
type IsPalindromeRes1 = IsPalindrome<'abc'>; //  false
type IsPalindromeRes2 = IsPalindrome<'b'>; //  true
type IsPalindromeRes3 = IsPalindrome<'abca'>; //  false
type IsPalindromeRes4 = IsPalindrome<'abba'>; //  true
type IsPalindromeRes5 = IsPalindrome<'abcba'>; //  true
type IsPalindromeRes6 = IsPalindrome<121>; //  true
type IsPalindromeRes7 = IsPalindrome<2332>; //  true
type IsPalindromeRes8 = IsPalindrome<19260817>; //  false
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/IsPalindrome.ts" data-language="typescript"></div>
