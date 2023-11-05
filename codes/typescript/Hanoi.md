| 标题                                                                                                               | 标签          |
| ------------------------------------------------------------------------------------------------------------------ | ------------- |
| Hanoi([河内塔](https://baike.baidu.com/item/%E6%B2%B3%E5%86%85%E5%A1%94%E9%97%AE%E9%A2%98/16983476?fr=ge_ala)问题) | extends(继承) |

[河内塔](https://en.wikipedia.org/wiki/Tower_of_Hanoi)问题。

- 创建一个 Helper 类型，该类型接收 5 个参数，第一个参数 N 代表给定的移动次数，第二个参数 C 是一个数值数组，用来统计实际移动次数是否等于给定的移动次数，第三个参数 From 代表第一个杆子 A,第四个参数 To 代表第二个杆子 B,第五个参数 Intermediate 代表第三个杆子 C。如果实际移动次数即数组长度等于给定移动次数 N，则返回空数组，否则返回展开递归从 A 移动到 C 再到 B，移动 A 到 B 以及展开递归从 C 移动到 B 再移动到 C。代码如下:

```ts
type Helper<
  N extends number,
  C extends number[],
  From extends unknown,
  To extends unknown,
  Intermediate extends unknown
> = C['length'] extends N
  ? []
  : [
      ...Helper<N, [...C, 1], From, Intermediate, To>,
      [From, to],
      ...Helper<N, [...C, 1], Intermediate, To, From>
    ];
```

- 给定 3 个杆子，以及初始空数组，调用 Helper 类型。

> 代码如下:

```ts
type Hanoi<N extends number, From = 'A', To = 'B', Intermediate = 'C'> = Helper<
  N,
  [],
  From,
  To,
  Intermediate
>;
```

> 使用方式:

```ts
type HanoiRes1 = Hanoi<0>; // []
type HanoiRes2 = Hanoi<1>; // [['A', 'B']]
type HanoiRes3 = Hanoi<2>; // [['A', 'C'], ['A', 'B'], ['C', 'B']]
type HanoiRes4 = Hanoi<3>; // [['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B']]
type HanoiRes5 = Hanoi<5>; // [['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B'], ['A', 'C'], ['B', 'C'], ['B', 'A'], ['C', 'A'], ['B', 'C'], ['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B'], ['C', 'A'], ['B', 'C'], ['B', 'A'], ['C', 'A'], ['C', 'B'], ['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B']]
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Hanoi.ts" data-language="typescript"></div>
