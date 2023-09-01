| 标题                           | 标签                     |
| ------------------------------ | ------------------------ |
| PercentageParser(百分比解析器) | extends,infer(继承,推断) |

百分比解析器。

- 创建一个 CheckPrefix 类型，类型支持传入一个泛型参数，用于检查第一个字符是否是+或-,是就返回，否则返回 never。
- 创建一个 CheckSuffix 类型，类型同样是支持传入一个泛型参数，用于检查末尾字符是否是%，是就返回一个数组，数组最后一项是%，数组第一项是断言的字符串 P，否则返回空字符串，数组第一项是泛型。
- 泛型 S 约束为继承 string（字符串），首先检查首位字符是否是符号，当做参数传给类型 CheckPrefix，是就返回，并将剩下字符通过 CheckSuffix 展开，否则返回空字符串，同样的将字符串传给 CheckSuffix 当做参数展开。

> 代码如下:

```ts
type CheckPrefix<T> = T extends '+' | '-' ? T : never;
type CheckSuffix<X> = X extends `${infer P}%` ? [P, '%'] : [X, ''];
type PercentageParser<S extends string> = S extends `${CheckPrefix<
  infer L
>}${infer R}`
  ? [L, ...CheckSuffix<R>]
  : ['', ...CheckSuffix<S>];
```

> 使用方式:

```ts
type PercentageParserPString1 = '';
type PercentageParserPString2 = '+85%';
type PercentageParserPString3 = '-85%';
type PercentageParserPString4 = '85%';
type PercentageParserPString5 = '85';

type PercentageParserR1 = PercentageParser<PercentageParserPString1>; // expected ['', '', '']
type PercentageParserR2 = PercentageParser<PercentageParserPString2>; // expected ["+", "85", "%"]
type PercentageParserR3 = PercentageParser<PercentageParserPString3>; // expected ["-", "85", "%"]
type PercentageParserR4 = PercentageParser<PercentageParserPString4>; // expected ["", "85", "%"]
type PercentageParserR5 = PercentageParser<PercentageParserPString5>; // expected ["", "85", ""]
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/PercentageParser.ts" data-language="typescript"></div>
