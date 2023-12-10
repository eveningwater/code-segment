| 标题             | 标签                     |
| ---------------- | ------------------------ |
| TwoSum(两数之和) | extends,infer(继承,推断) |

两数之和。

- 构建一个根据数值参数创建符合该数值长度的数组，代码如下所示:

```ts
type MakeCounter<
  T extends number,
  R extends number[] = []
> = R['length'] extends T | 999 ? R : MakeCounter<T, [...R, 1]>;
```

> 注意: 数值不应该大于 999。

- 构建一个简易版本的求和，将两个数值参数利用 MakeCounter 类型构建数组元素，然后利用展开运算符合并到一个数组中，返回长度即可得到两数之和。代码如下所示:

```ts
type SimpleAdd<T extends number, U extends number> = [
  ...MakeCounter<T>,
  ...MakeCounter<U>
][`length`];
```

- 使用 infer 关键字推断数组每一项，只要找到两项之和等于给定的第二个参数数值，则返回 true，否则递归，直到为递归完所有元素时，返回 false。

> 代码如下:

```ts
type TwoSum<T extends number[], U extends number> = T extends [
  infer F extends number,
  ...infer R extends number[]
]
  ? U extends SimpleAdd<F, R[number]>
    ? true
    : TwoSum<R, U>
  : false;
```

> 使用方式:

```ts
type TwoSumRes1 = TwoSum<[3, 3], 6>; //  true>
type TwoSumRes2 = TwoSum<[3, 2, 4], 6>; // true>
type TwoSumRes3 = TwoSum<[2, 7, 11, 15], 15>; //  false>
type TwoSumRes4 = TwoSum<[2, 7, 11, 15], 9>; //  true>
type TwoSumRes5 = TwoSum<[1, 2, 3], 0>; //  false>
type TwoSumRes6 = TwoSum<[1, 2, 3], 1>; //  false>
type TwoSumRes7 = TwoSum<[1, 2, 3], 2>; //  false>
type TwoSumRes8 = TwoSum<[1, 2, 3], 3>; //  true>
type TwoSumRes9 = TwoSum<[1, 2, 3], 4>; //  true>
type TwoSumRes10 = TwoSum<[1, 2, 3], 5>; //  true>
type TwoSumRes11 = TwoSum<[1, 2, 3], 6>; //  false>
type TwoSumRes12 = TwoSum<[3, 2, 0], 2>; //  true>
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/TwoSum.ts" data-language="typescript"></div>
