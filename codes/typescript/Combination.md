| 标题                      | 标签                      |
| ------------------------- | ------------------------- |
| Combination(数组所有组合) | extends,array(继承，数组) |

数组所有组合。

- 添加一个额外的参数取值数组每一项，并再添加一个参数用于与每个数组项进行比较，从而排除重复项，这个参数的起始值就等于第二个参数值。
- 判断如果第三个参数是一个字符串，则返回该字符串与递归排除该字符串组合而成的数组项，注意每一项之间需要用空白隔开，如果不满足条件则返回 never。

> 代码如下:

```ts
type Combination<
  T extends string[],
  E extends string = T[number],
  I = E
> = I extends string ? I | `${I} ${Combination<T, Exclude<E, I>>}` : never;
```

> 使用方式:

```ts
// expected to be `"foo" | "bar" | "baz" | "foo bar" | "foo bar baz" | "foo baz" | "foo baz bar" | "bar foo" | "bar foo baz" | "bar baz" | "bar baz foo" | "baz foo" | "baz foo bar" | "baz bar" | "baz bar foo"`
type Keys = Combination<['foo', 'bar', 'baz']>;
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Combination.ts" data-language="typescript"></div>
