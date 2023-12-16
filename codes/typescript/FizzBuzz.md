| 标题               | 标签                     |
| ------------------ | ------------------------ |
| FizzBuzz(三的倍数) | extends,infer(继承,推断) |

三的倍数。

- 创建一个输出 fizz 字符串的类型，如果参数由三个元素组成，并且第一个元素为空数组，则返回该字符串，否则递归，否则返回 false。代码如下所示:

```ts
type IsDivByThree<T extends unknown[]> = T extends [
  ...infer Start,
  unknown,
  unknown,
  unknown
]
  ? Start extends []
    ? 'Fizz'
    : IsDivByThree<Start>
  : false;
```

- 创建一个输出 buzz 字符串的类型，原理等同于前面的 IsDivByThree 类型，代码如下所示:

```ts
type IsDivByFive<T extends unknown[]> = T extends [
  ...infer Start,
  unknown,
  unknown,
  unknown,
  unknown,
  unknown
]
  ? Start extends []
    ? 'Buzz'
    : IsDivByFive<Start>
  : false;
```

- 新增一个数组参数，用于存储结果，当第一个数值参数等于该数组长度就返回本身，否则递归，此时的数组分成三种情况存储结果。

> 代码如下:

```ts
type FizzBuzz<
  N extends number,
  Acc extends unknown[] = []
> = N extends Acc['length']
  ? Acc
  : FizzBuzz<
      N,
      [
        ...Acc,
        `${IsDivByThree<[...Acc, '']> | IsDivByFive<[...Acc, '']> extends false
          ? [...Acc, '']['length'] extends number
            ? [...Acc, '']['length']
            : never
          : ''}${IsDivByThree<[...Acc, '']> extends string
          ? 'Fizz'
          : ''}${IsDivByFive<[...Acc, '']> extends string ? 'Buzz' : ''}`
      ]
    >;
```

> 使用方式:

```ts
type FizzBuzzRes1 = FizzBuzz<1>; // ['1']
type FizzBuzzRes2 = FizzBuzz<5>; // ['1', '2', 'Fizz', '4', 'Buzz']
type FizzBuzzRes3 = FizzBuzz<20>;
//  [
//   '1',
//   '2',
//   'Fizz',
//   '4',
//   'Buzz',
//   'Fizz',
//   '7',
//   '8',
//   'Fizz',
//   'Buzz',
//   '11',
//   'Fizz',
//   '13',
//   '14',
//   'FizzBuzz',
//   '16',
//   '17',
//   'Fizz',
//   '19',
//   'Buzz',
// ];
type FizzBuzzRes4 = FizzBuzz<100>;

// [
//   '1',
//   '2',
//   'Fizz',
//   '4',
//   'Buzz',
//   'Fizz',
//   '7',
//   '8',
//   'Fizz',
//   'Buzz',
//   '11',
//   'Fizz',
//   '13',
//   '14',
//   'FizzBuzz',
//   '16',
//   '17',
//   'Fizz',
//   '19',
//   'Buzz',
//   'Fizz',
//   '22',
//   '23',
//   'Fizz',
//   'Buzz',
//   '26',
//   'Fizz',
//   '28',
//   '29',
//   'FizzBuzz',
//   '31',
//   '32',
//   'Fizz',
//   '34',
//   'Buzz',
//   'Fizz',
//   '37',
//   '38',
//   'Fizz',
//   'Buzz',
//   '41',
//   'Fizz',
//   '43',
//   '44',
//   'FizzBuzz',
//   '46',
//   '47',
//   'Fizz',
//   '49',
//   'Buzz',
//   'Fizz',
//   '52',
//   '53',
//   'Fizz',
//   'Buzz',
//   '56',
//   'Fizz',
//   '58',
//   '59',
//   'FizzBuzz',
//   '61',
//   '62',
//   'Fizz',
//   '64',
//   'Buzz',
//   'Fizz',
//   '67',
//   '68',
//   'Fizz',
//   'Buzz',
//   '71',
//   'Fizz',
//   '73',
//   '74',
//   'FizzBuzz',
//   '76',
//   '77',
//   'Fizz',
//   '79',
//   'Buzz',
//   'Fizz',
//   '82',
//   '83',
//   'Fizz',
//   'Buzz',
//   '86',
//   'Fizz',
//   '88',
//   '89',
//   'FizzBuzz',
//   '91',
//   '92',
//   'Fizz',
//   '94',
//   'Buzz',
//   'Fizz',
//   '97',
//   '98',
//   'Fizz',
//   'Buzz',
// ]
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/FizzBuzz.ts" data-language="typescript"></div>
