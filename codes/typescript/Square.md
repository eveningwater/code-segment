| 标题                 | 标签                     |
| -------------------- | ------------------------ |
| Square(求数值的平方) | extends,infer(继承,推断) |

求数值的平方。

- 创建一个 MakeCounter 类型，用于统计数字出现的次数,此时统计最大值为 999,使用一个数组来统计，数组项为任意数值，满足符合第一个参数 N，则返回数组长度，否则递归添加数值。代码如下:

```ts
type MakeCounter<
  T extends number,
  R extends number[] = []
> = R['length'] extends T | 999 ? R : MakeCounter<T, [...R, 1]>;
```

- 创建一个 FlatCounter 类型，用于拍平数组计数，计算数值的平方会产生多维数组统计数字，因此需要该类型，该类型接收 2 个参数，第一个参数是需要拍平的数组，第二个数组则是结果数组，是一个一维数组。使用 infer 推断二维数组的每一项，并递归的展开每一项添加到结果数组中去。代码如下:

```ts
type FlatCounter<T extends any[][], C extends any[] = []> = T extends [
  infer F extends any[],
  ...infer R extends any[][]
]
  ? FlatCounter<R, [...C, ...F]>
  : C;
```

- 创建一个 SimpleMultiply 类型，该类型接收 3 个参数，前面 2 个参数相当于计算 2 个数值 N 的乘积，第三个参数是一个二维数组，存储计算结果。如果前面 2 个参数 T|U 等于 100，则直接返回 10000,否则判断第三个参数 C 的长度等于第二个参数，则返回拍平后的数组长度，否则递归的构造计数器统计 T 的个数。代码如下:

```ts
type SimpleMultiply<
  T extends number,
  U extends number,
  C extends any[][] = []
> = T | U extends 100
  ? 10000
  : C['length'] extends U
  ? FlatCounter<C>['length']
  : SimpleMultiply<T, U, [...C, MakeCounter<T>]>;
```

- 创建一个 Square 类型，使用 infer 推断如果数值 T 存在负数符号，则使用 SimpleMultiply 类型计算使用 infer 推断后的值，否则就是计算该值本身。

> 代码如下:

```ts
type Square<T extends number> = `${T}` extends `-${infer N extends number}`
  ? SimpleMultiply<N, N>
  : SimpleMultiply<T, T>;
```

> ps:以上的实现仅支持 100 以内的求平方,如果想要实现超大数求平方，就需要构造一个乘法器，参考示例源码。

> 使用方式:

```ts
type SquareRes1 = Square<0>; // 0
type SquareRes2 = Square<1>; // 1
type SquareRes3 = Square<3>; // 9
type SquareRes4 = Square<20>; // 400
type SquareRes5 = Square<100>; // 10000
type SquareRes6 = Square<-2>; // 4
type SquareRes7 = Square<-5>; // 25
type SquareRes8 = Square<-31>; // 961
type SquareRes9 = Square<-50>; // 2500
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Square.ts" data-language="typescript"></div>
