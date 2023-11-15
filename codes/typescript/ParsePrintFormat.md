| 标题                           | 标签                     |
| ------------------------------ | ------------------------ |
| ParsePrintFormat(解析打印格式) | extends,infer(继承,推断) |

解析打印格式。

- 存在对应的字母映射关系类型如下:

```ts
type ControlsMap = {
  c: 'char';
  s: 'string';
  d: 'dec';
  o: 'oct';
  h: 'hex';
  f: 'float';
  p: 'pointer';
};
```

- 如果类型参数等于由开始字符+'%'+对应映射属性名字符 + 剩余字符组成的模板字符串，则判断属性名是否是 ControlsMap 的属性，是则返回对应映射值以及递归剩余字符组成的数组，否则递归剩余字符，否则发返回空数组。

> 代码如下:

```ts
type ParsePrintFormat<S extends string> =
  S extends `${infer _}%${infer K}${infer R}`
    ? K extends keyof ControlsMap
      ? [ControlsMap[K], ...ParsePrintFormat<R>]
      : ParsePrintFormat<R>
    : [];
```

> 使用方式:

```ts
type ParsePrintFormatRes1 = ParsePrintFormat<''>; //  []
type ParsePrintFormatRes2 = ParsePrintFormat<'Any string.'>; //  []
type ParsePrintFormatRes3 = ParsePrintFormat<'The result is %d.'>; //  ['dec']
type ParsePrintFormatRes4 = ParsePrintFormat<'The result is %%d.'>; //  []
type ParsePrintFormatRes5 = ParsePrintFormat<'The result is %%%d.'>; //  ['dec']
type ParsePrintFormatRes6 = ParsePrintFormat<'The result is %f.'>; //  ['float']
type ParsePrintFormatRes7 = ParsePrintFormat<'The result is %h.'>; //  ['hex']
type ParsePrintFormatRes8 = ParsePrintFormat<'The result is %q.'>; //  []
type ParsePrintFormatRes9 = ParsePrintFormat<'Hello %s: score is %d.'>; //  ['string', 'dec']
type ParsePrintFormatRes10 = ParsePrintFormat<'The result is %'>; //  []
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/ParsePrintFormat.ts" data-language="typescript"></div>
