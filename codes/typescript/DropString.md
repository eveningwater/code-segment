| 标题                             | 标签                     |
| -------------------------------- | ------------------------ |
| DropString(字符串中删除指定字符) | extends,infer(继承,推断) |

字符串中删除指定字符。

- 创建一个删除一个字符的类型，使用 infer 关键字推断字符串 T 是否包含字符 S,如果是，则递归两边字符组成的模板字符串，否则返回字符串本身，代码如下:

```ts
type DropOne<
  T extends string,
  S extends string
> = T extends `${infer A}${S}${infer B}` ? DropOne<`${A}${B}`, S> : T;
```

- 使用 infer 推断指定字符的每一个字符，递归的调用 DropOne 删除每一个字符，否则返回字符串本身。

> 代码如下:

```ts
type DropString<
  T extends string,
  S extends string
> = S extends `${infer F}${infer R}` ? DropString<DropOne<T, F>, R> : T;
```

> 使用方式:

```ts
type DropStringRes1 = DropString<'butter fly!', ''>; //  'butter fly!'
type DropStringRes2 = DropString<'butter fly!', ' '>; //  'butterfly!'
type DropStringRes3 = DropString<'butter fly!', 'but'>; //  'er fly!'
type DropStringRes4 = DropString<' b u t t e r f l y ! ', 'but'>; //  '     e r f l y ! '
type DropStringRes5 = DropString<'    butter fly!        ', ' '>; //  'butterfly!'
type DropStringRes6 = DropString<' b u t t e r f l y ! ', ' '>; //  'butterfly!'
type DropStringRes7 = DropString<' b u t t e r f l y ! ', 'but'>; //  '     e r f l y ! '
type DropStringRes8 = DropString<' b u t t e r f l y ! ', 'tub'>; //  '     e r f l y ! '
type DropStringRes9 = DropString<' b u t t e r f l y ! ', 'b'>; //  '  u t t e r f l y ! '
type DropStringRes10 = DropString<' b u t t e r f l y ! ', 't'>; //  ' b u   e r f l y ! '
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/DropString.ts" data-language="typescript"></div>
