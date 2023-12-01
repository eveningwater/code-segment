| 标题                    | 标签                     |
| ----------------------- | ------------------------ |
| Split(字符串分割成数组) | extends,infer(继承,推断) |

字符串分割成数组。

- 如果字符串是 string，则直接返回 string [],如果字符串是使用 infer 推断的包含 U 分割符的组成的模板字符串，则返回字符与递归剩余字符组成的数组，否则如果传入的分隔符是空字符串，则返回空数组，否则返回包含该字符串包裹的数组。

> 代码如下:

```ts
type Split<T extends string, U extends string = ' '> = string extends T
  ? string[]
  : T extends `${infer A}${U}${infer B}`
  ? [A, ...(B extends '' ? [] : Split<B, U>)]
  : U extends ''
  ? []
  : [T];
```

> 使用方式:

```ts
type SplitRes1 = Split<'Hi! How are you?'>; //  ['Hi! How are you?']
type SplitRes2 = Split<'Hi! How are you?', 'z'>; //  ['Hi! How are you?']
type SplitRes3 = Split<'Hi! How are you?', ' '>; //  ['Hi!', 'How', 'are', 'you?']
type SplitRes4 = Split<'Hi! How are you?', ''>; //  ['H', 'i', '!', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', '?']
type SplitRes5 = Split<'', ''>; //  []
type SplitRes6 = Split<'The sine in cosine', 'in'>; //  ['The s', 'e ', ' cos', 'e']
type SplitRes7 = Split<'Never say never, forever and ever.', 'ver'>; //  ['Ne', ' say ne', ', fore', ' and e', '.']
type SplitRes8 = Split<'', 'z'>; //  ['']
type SplitRes9 = Split<''>; //  ['']
type SplitRes10 = Split<string, 'whatever'>; //  string[]
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Split.ts" data-language="typescript"></div>
