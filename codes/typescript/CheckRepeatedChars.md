| 标题                                           | 标签                         |
| ---------------------------------------------- | ---------------------------- |
| CheckRepeatedChars(检查字符串是否存在重复字符) | extends,string(继承，字符串) |

检查字符串是否存在重复字符。

- 使用 infer 推断每一个字符，并判断如果剩余字符和第一个字符结合两边字符组成的模板字符串相等，则返回 true，否则递归剩余字符，如果不满足推断的字符串，则返回 false。

> 代码如下:

```ts
type CheckRepeatedChars<T extends string> = T extends `${infer F}${infer R}`
  ? R extends `${string}${F}${string}`
    ? true
    : CheckRepeatedChars<R>
  : false;
```

> 使用方式:

```ts
type CheckRepeatedCharsRes1 = CheckRepeatedChars<'abc'>; // false
type CheckRepeatedCharsRes2 = CheckRepeatedChars<'aba'>; // true
type CheckRepeatedCharsRes3 = CheckRepeatedChars<'abb'>; // true
type CheckRepeatedCharsRes4 = CheckRepeatedChars<'cbc'>; //  true
type CheckRepeatedCharsRes5 = CheckRepeatedChars<''>; //  false
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/CheckRepeatedChars.ts" data-language="typescript"></div>
