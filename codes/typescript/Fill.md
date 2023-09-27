| 标题               | 标签                      |
| ------------------ | ------------------------- |
| Fill(填充数组元素) | extends,array(继承，数组) |

填充数组元素。

- 注意这里有两个额外的参数，第一个参数 S 代表开始替换的位置，第二个参数 E 代表结束替换的位置，因此需要创建一个空数组来计数，通过判断这个计数的数组长度来决定是否要替换，因此需要额外的创建一个标志变量来代表是否需要替换。
- 如果创建的数组长度等于结束替换值，则直接返回第一个需要填充的数组参数。
- 如果需要填充的数组等于使用 infer 推断的数组，并且标志变量为 false，则返回填充的使用 infer 推断的第一项，剩余项则递归，并计数一次，此时不需要传入标志变量。
- 如果标志变量为 true，则填充的是传入的第二个参数作为元素，剩余项则继续递归，同样的也需要计数，此时需要传入标志变量。

> 五个参数: 第一个参数 T 代表需要填充的数组,第二个参数 N 代表需要替换的项，第三个参数 S 代表开始替换的位置，第四个参数 E 代表结束的位置，第五个参数 C 代表计数的空数组，第六个参数 B 代表是否需要替换。

> 代码如下:

```ts
type Fill<
  T extends any[],
  N,
  S extends number = 0,
  E extends number = T['length'],
  C extends number[] = [],
  B extends boolean = C['length'] extends S ? true : false
> = C['length'] extends E
  ? T
  : T extends [infer F, ...infer R]
  ? B extends false
    ? [F, ...Fill<R, N, S, E, [...C, 0]>]
    : [N, ...Fill<R, N, S, E, [...C, 0], B>]
  : T;
```

> 使用方式:

```ts
type expFill1 = Fill<[1, 2, 3], 0>; // expected to be [0, 0, 0]
type expFill2 = Fill<[], 0>; // expected to be []
type expFill3 = Fill<[], 0, 0, 3>; // expected to be []
type expFill4 = Fill<[1, 2, 3], 0, 0, 0>; // expected to be [1,2,3]
type expFill5 = Fill<[1, 2, 3], 0, 2, 2>; // expected to be [1,2,3]
type expFill6 = Fill<[1, 2, 3], 0>; // expected to be [0,0,0]
type expFill7 = Fill<[1, 2, 3], true>; // expected to be [true,true,true]
type expFill8 = Fill<[1, 2, 3], true, 0, 1>; // expected to be [true,2,3]
type expFill9 = Fill<[1, 2, 3], true, 1, 3>; // expected to be [1,true,true]
type expFill10 = Fill<[1, 2, 3], true, 10, 0>; // expected to be [1,2,3]
type expFill11 = Fill<[1, 2, 3], true, 10, 20>; // expected to be [1,2,3]
type expFill12 = Fill<[1, 2, 3], true, 0, 10>; // expected to be [true,true,true]
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Fill.ts" data-language="typescript"></div>
