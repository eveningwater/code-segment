| 标题              | 标签                     |
| ----------------- | ------------------------ |
| Combs(组合键类型) | extends,infer(继承,推断) |

组合键类型。

- 使用 infer 推断数组每一项，并将每一项和剩余项使用模板字符串组合在一起递归的联合。

> 代码如下:

```ts
type Combs<T extends string[] = ModifierKeys> = T extends [
  infer F extends string,
  ...infer R extends string[]
]
  ? `${F} ${R[number]}` | Combs<R>
  : never;
```

> 使用方式:

```ts
type ModifierKeys = ['cmd', 'ctrl', 'opt', 'fn'];
type CaseTypeOne =
  | 'cmd ctrl'
  | 'cmd opt'
  | 'cmd fn'
  | 'ctrl opt'
  | 'ctrl fn'
  | 'opt fn';

type CombsRes = Combs<ModifierKeys>; // CaseTypeOne
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Combs.ts" data-language="typescript"></div>
