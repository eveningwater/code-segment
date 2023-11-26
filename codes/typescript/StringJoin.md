| 标题                     | 标签                     |
| ------------------------ | ------------------------ |
| StringJoin(字符串连接符) | extends,infer(继承,推断) |

字符串连接符。

- 创建一个只读元组类型，代码如下:

```ts
type Tuple = readonly string[];
```

- 创建一个读取元组剩余项的类型，使用 infer 推断第一项和剩余项，返回剩余项，代码如下所示:

```ts
type Tail<T extends Tuple> = T extends readonly [infer _, ...infer R] ? R : [];
```

- 实现一个 Join 转换类型，该类型接收 2 个参数，第一个参数为只读元组，第二个参数为分隔符，继承 string 类型，如果给定只读元组长度为 0，则返回空字符串，使用 infer 关键字推断如果只有一项，则返回第一项，否则返回第一项加上分隔符加上递归剩余元组项组成的字符串。代码如下所示:

```ts
type Join<T extends Tuple, Separator extends string> = T extends readonly []
  ? ''
  : T extends readonly [infer F]
  ? F
  : `${T[0]}${Separator}${Join<Tail<T>, Separator>}`;
```

- 实现一个函数，函数接收一个泛型类型参数，代表分隔符，返回一个函数，函数也是接收一个泛型参数，默认继承只读元组类型，返回 Join 类型，参数为两个泛型参数。

> 代码如下:

```ts
declare function join<D extends string>(
  delimiter: D
): <P extends Tuple>(...args: P) => Join<P, D>;
```

> 使用方式:

```ts
// Edge cases
const noCharsOutput = join('-')();
const oneCharOutput = join('-')('a');
const noDelimiterOutput = join('')('a', 'b', 'c');

// Regular cases
const hyphenOutput = join('-')('a', 'b', 'c');
const hashOutput = join('#')('a', 'b', 'c');
const twoCharOutput = join('-')('a', 'b');
const longOutput = join('-')('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h');

type joinRes1 = typeof noCharsOutput; //  ''
type joinRes2 = typeof oneCharOutput; //  'a'
type joinRes3 = typeof noDelimiterOutput; //  'abc'
type joinRes4 = typeof twoCharOutput; //  'a-b'
type joinRes5 = typeof hyphenOutput; //  'a-b-c'
type joinRes6 = typeof hashOutput; //  'a#b#c'
type joinRes7 = typeof longOutput; //  'a-b-c-d-e-f-g-h'
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/StringJoin.ts" data-language="typescript"></div>
