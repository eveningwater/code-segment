| 标题                            | 标签                      |
| ------------------------------- | ------------------------- |
| AllCombinations(字符串所有组合) | extends,infer(继承，推导) |

字符串所有组合。

- 创建一个类型 StringToUnion 将字符串组合成联合类型，使用 infer 关键字推断传入的字符串参数，然后使用 | 分隔，并递归的分隔。如下所示:

```ts
type StringToUnion<T extends string> = T extends `${infer A}${infer R}`
  ? A | StringToUnion<R>
  : never;
```

- 使用 in 操作符读取每一个联合类型的字符，然后组合成一个对象，并使用对应的属性读取这个对象，属性值将使用每一个字符与剩余排除字符来组合成。

> 代码如下:

```ts
type AllCombinations<T extends string, U extends string = StringToUnion<T>> = [
  U
] extends [never]
  ? ''
  : '' | { [K in U]: `${K}${AllCombinations<never, Exclude<U, K>>}` }[U];
```

> 使用方式:

```ts
type AllCombinations_ABC = AllCombinations<'ABC'>;
// should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/AllCombinations.ts" data-language="typescript"></div>
