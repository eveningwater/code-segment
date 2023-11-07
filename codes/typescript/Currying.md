| 标题             | 标签                     |
| ---------------- | ------------------------ |
| Currying(柯里化) | extends,infer(继承,推断) |

柯里化。

- 创建一个 Curried 类型，接收一个泛型参数 F,如果 F 是使用 infer 推断其参数和返回值组成的函数，则使用 infer 推断参数是一个参数数组，推断剩余参数个数为 0,则返回推断的返回值 R,否则递归的推断剩余参数，否则返回一个没有参数泛型返回值的函数，否则返回 never。代码如下:

```ts
type Curried<F> = F extends (...args: infer A) => infer R
  ? A extends [infer F, ...infer Other]
    ? (
        args: F
      ) => Other['length'] extends 0 ? R : Curried<(...args: Other) => R>
    : () => R
  : never;
```

- 使用 declare 定义柯里化函数的类型，参数是一个泛型，返回值则是 Curried 类型。

> 代码如下:

```ts
declare function Currying<F>(fn: F): Curried<F>;
```

> 使用方式:

```ts
const curried1 = Currying((a: string, b: number, c: boolean) => true);
const curried2 = Currying(
  (
    a: string,
    b: number,
    c: boolean,
    d: boolean,
    e: boolean,
    f: string,
    g: boolean
  ) => true
);
const curried3 = Currying(() => true);

type c1 = typeof curried1; //(a: string) => (b: number) => (c: boolean) => true
type c2 = typeof curried2; // (a: string) => (b: number) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
type c3 = typeof curried3; //  () => true
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Currying.ts" data-language="typescript"></div>
