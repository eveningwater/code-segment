| 标题                       | 标签                                         |
| -------------------------- | -------------------------------------------- |
| LengthOfString(字符串长度) | extends,string,recursively(继承,字符串,递归) |

字符串长度。

- 类型有 2 个参数，第一个参数表示泛型 S,继承字符串类型，第二个参数是一个字符串数组，存储第一个参数的字符串中的所有字符，默认是空数组。
- 递归的用 infer 关键字推断字符串 S,是否继承模板字符串，然后将第二个参数数组填充满，最后返回数组的 length 属性即可得到字符串的长度。

> 代码如下:

```ts
type LengthOfString<
  S extends string,
  T extends string[] = []
> = S extends `${infer F}${infer R}`
  ? LengthOfString<R, [...T, F]>
  : T['length'];
```

> 使用方式:

```ts
type LengthOfStringStr = LengthOfString<'str'>; // 3
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/LengthOfString.ts" data-language="typescript"></div>
