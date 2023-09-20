| 标题                    | 标签                         |
| ----------------------- | ---------------------------- |
| Fibonacci(斐波那契序列) | math,recursively(数学，递归) |

斐波那契序列。

- 我们还是需要使用数组递归并利用其 length 属性。由斐波那契额数列的性质可知，f(n)=f(n-2)+f(n-1)，那么我们似乎可以倒推出结果。但实际上很困难，首先“-1”和“-2”就不是一个容易的操作（看了之前的题目，你应该已经知道），并且递归层级非常深。其次，我们使用数组元素数量来存储具体数值，加法通过 ... 运算符即可实现，但减法则难以实现。因而，我们使用正向推导来实现。那么就需要记录一些值，当次递归表示的数字次序，第 n-2 项，第 n-1 项，这些我们都使用数组来记录。如下所示:

```ts
type Fibonacci<
  T extends number,
  No extends 1[] = [1, 1, 1],
  N_2 extends 1[] = [1],
  N_1 extends 1[] = [1]
> = any;
```

- 斐波那契序列的第一项和第二项是固定的，需要特殊判断一下，我们从第三项开始递归，因此数字次序 No 初始值为“3”即 [1, 1, 1]，第 n-2 项 N_2 初始值为第一项的“1”即 [1]，第 n-1 项 N_1 为第二项的“1”即 [1]。什么时候跳出递归？这个很明显就是 No['length'] 和 T 相等的时候，这时需要返回 f(n-2)+f(n-1)，即 [...N_2, ...N_1]['length']。如下所示:

```ts
type Fibonacci<
  T extends number,
  No extends 1[] = [1, 1, 1],
  N_2 extends 1[] = [1],
  N_1 extends 1[] = [1]
> = T extends 1 | 2
  ? 1
  : T extends No['length']
  ? [...N_2, ...N_1]['length']
  : any;
```

- 最后再看递归的部分，从数学层面看，每次递归其实是向右移动了一位。这样的话就很好说了，我们只要看看参数如何变化就行了。T 不变；No 进行“+1”操作用来记录次序；第 n-2 项变成了 n-1 项，所以 N_2 就变成了 N_1；而第 n-1 项要变为第 n 项，而 f(n)=f(n-2)+f(n-1)，那么 N_1 变为 [...N_2, ...N_1]。

> 代码如下:

```ts
type Fibonacci<
  T extends number,
  No extends 1[] = [1, 1, 1],
  N_2 extends 1[] = [1],
  N_1 extends 1[] = [1]
> = T extends 1 | 2
  ? 1
  : T extends No['length']
  ? [...N_2, ...N_1]['length']
  : Fibonacci<T, [...No, 1], N_1, [...N_2, ...N_1]>;
```

> 使用方式:

```ts
type FibonacciResult1 = Fibonacci<3>; // 2
type FibonacciResult2 = Fibonacci<8>; // 21
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Fibonacci.ts" data-language="typescript"></div>
