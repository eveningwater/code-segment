| 标题                                       | 标签                      |
| ------------------------------------------ | ------------------------- |
| CountElementNumberToObject(数值数组转对象) | extends,array(继承，数组) |

数值数组转对象。

- 创建一个 Flatten 类型，用于深度拍平数组，类型使用另一个参数数组用来存储拍平后的数组 S，使用 infer 推断每一个数组项，从第一个数组项 F 开始推断，如果 F 等价于`[never]`,则递归返回结果数组,如归 F 是一个任意数组，则递归并展开数组 F，否则就是递归返回数组 S,递归完成最后返回 S。代码如下:

```ts
type Flatten<T extends any[], S extends any[] = []> = T extends [
  infer F,
  ...infer R
]
  ? [F] extends [never]
    ? Flatten<R, S>
    : F extends any[]
    ? Flatten<R, [...S, ...Flatten<F>]>
    : Flatten<R, [...S, F]>
  : S;
```

- 创建一个 Count 类型，该类型接收一个数组参数 T 和一个对象参数 O，对象参数用于统计数组中每一个数字作为属性，并且属性值为该属性的出现次数，默认值是一个空对象。使用 infer 推断数组每一项，从第一项 F 开始，每一项并且应该是 string | number 类型，然后推断 F 是否是对象的属性(keyof O),如果是，则递归的统计 F 出现的次数，出现几次就往属性值数组中添加一次数值（可以是任意数值，这里就是 0），并和 O 中除 F 以外的属性去交集（即使用&），否则不需要排除 F，然后取交集，递归完成之后返回结果 O，不过需要对结果 O 再次进行转换，属性不会变，但是属性值需要取存储的数组长度。代码如下:

```ts
type Count<
  T extends any[],
  O extends Record<CountKey, any[]> = {}
> = T extends [infer F extends CountKey, ...infer R]
  ? F extends keyof O
    ? Count<R, Omit<O, F> & Record<F, [...O[F], 0]>>
    : Count<R, O & Record<F, [0]>>
  : {
      [P in keyof O]: O[P]['length'];
    };
```

- 需要注意对象属性的类型，如下:

```ts
type CountKey = string | number | symbol;
```

- CountElementNumberToObject 类型则只需要返回拍平后的 Count 即可。

> 注意: 结果不分顺序。

> 代码如下:

```ts
type CountElementNumberToObject<T extends any[]> = Count<Flatten<T>>;
```

> 使用方式:

```ts
type CountElementNumberToObjectRes1 = CountElementNumberToObject<
  [1, 2, 3, 4, 5]
>;
// {
//     1: 1
//     2: 1
//     3: 1
//     4: 1
//     5: 1
// }
type CountElementNumberToObjectRes2 = CountElementNumberToObject<
  [1, 2, 3, 4, 5, [1, 2, 3]]
>;
//   {
//     1: 2
//     2: 2
//     3: 2
//     4: 1
//     5: 1
//   }
type CountElementNumberToObjectRes3 = CountElementNumberToObject<
  [1, 2, 3, 4, 5, [1, 2, 3, [4, 4, 1, 2]]]
>;
//   {
//     1: 3
//     2: 3
//     3: 2
//     4: 3
//     5: 1
//   }
type CountElementNumberToObjectRes4 = CountElementNumberToObject<[never]>; // {}
type CountElementNumberToObjectRes5 = CountElementNumberToObject<
  ['1', '2', '0']
>;
//   {
//     0: 1
//     1: 1
//     2: 1
//   }
type CountElementNumberToObjectRes6 = CountElementNumberToObject<
  ['a', 'b', ['c', ['d']]]
>;
// {
//     'a': 1
//     'b': 1
//     'c': 1
//     'd': 1
//   }
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/CountElementNumberToObject.ts" data-language="typescript"></div>
