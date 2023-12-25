| 标题                | 标签                     |
| ------------------- | ------------------------ |
| Slice(数组元素截取) | extends,infer(继承,推断) |

数组元素截取。

- 创建一个 ToPositive 类型，该类型接收 2 个参数，第一个参数是一个数值，第二个参数是一个未知类型的数组，将第一个参数构造成字符串，并推断是否是负数，如果是负数则使用第二个参数进行截取，开始索引为 0，结束索引为推断的具体数值，并返回截取后的长度，否则返回原始参数。代码如下所示:

```ts
type ToPositive<
  N extends number,
  Arr extends unknown[]
> = `${N}` extends `-${infer P extends number}` ? Slice<Arr, P>['length'] : N;
```

- 创建一个 InitialN 类型，该类型接收三个参数，第一个参数为截取数组本身，第二个参数为截取长度值，第三个参数则为截取后的结果数组，如果截取后的数组长度是第二个参数或者截取数组的长度，则返回，否则递归的依据结果数组的长度构造索引值从截取数组中取出元素并添加到结果数组中。代码如下所示:

```ts
type InitialN<
  Arr extends unknown[],
  N extends number,
  _Acc extends unknown[] = []
> = _Acc['length'] extends N | Arr['length']
  ? _Acc
  : InitialN<Arr, N, [..._Acc, Arr[_Acc['length']]]>;
```

- 实现 Slice 类型需要有三个参数，第一个参数为截取数组本身，第二个参数为截取开始索引值，默认是 0，第三个参数为截取结束索引值，默认值是截取数组长度。使用 ToPositive 将结束索引值转成正整数，在使用 InitialN 根据结束索引值截取数组，当截取到的数组等于使用 InitialN 根据开始索引值截取后的开始数组与剩余数组元素组合而成的数组，则返回剩余数组，否则返回空数组。

> 代码如下:

```ts
type Slice<
  Arr extends unknown[],
  Start extends number = 0,
  End extends number = Arr['length']
> = InitialN<Arr, ToPositive<End, Arr>> extends [
  ...InitialN<Arr, ToPositive<Start, Arr>>,
  ...infer R
]
  ? R
  : [];
```

> 使用方式:

```ts
type Arr = [1, 2, 3, 4, 5];
// basic
type SliceRes1 = Slice<Arr, 0, 1>; // [1]
type SliceRes2 = Slice<Arr, 0, 0>; // []
type SliceRes3 = Slice<Arr, 2, 4>; // [3, 4]

// optional args
type SliceRes4 = Slice<[]>; // []
type SliceRes5 = Slice<Arr>; // Arr
type SliceRes6 = Slice<Arr, 0>; // Arr
type SliceRes7 = Slice<Arr, 2>; // [3, 4, 5]

// negative index
type SliceRes8 = Slice<Arr, 0, -1>; //  [1, 2, 3, 4]
type SliceRes9 = Slice<Arr, -3, -1>; //  [3, 4]

// invalid
type SliceRes10 = Slice<Arr, 10>; //  []
type SliceRes11 = Slice<Arr, 1, 0>; //  []
type SliceRes12 = Slice<Arr, 10, 20>; //  []
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Slice.ts" data-language="typescript"></div>
