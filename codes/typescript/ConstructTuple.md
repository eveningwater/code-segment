| 标题                     | 标签                      |
| ------------------------ | ------------------------- |
| ConstructTuple(构造元组) | extends,array(继承，数组) |

构造元组。

- 如果不考虑 ts 递归的限制，则可以直接使用如下代码。

```ts
type ConstructTuple<
  T extends number,
  U extends unknown[] = []
> = U['length'] extends T ? U : ConstructTuple<T, [...U, unknown]>;
```

- 但是由于 ts 的递归限制为 1000，也就是说如果递归次数达到了 1000 次，就会出错。因此需要想办法降低递归次数。我们可以知道 9999 = 9 \* 100 + 99 \* 10 + 9 \* 10 + 9。因此我们可以这样做，每次取数字的第一位，返回该长度的 unknown 组成的数组，比如 23 第一次就返回`[unknown,unknown]`，递归到第二个数字的时候，恰好就是上一次数组的长度 \* 10,构建一个映射类型 N，N 接受一个参数数组 T，T 为 unknown 组成的数组，然后映射属性从 0 ~ 9 开始，每次构建 10 个 T，即:

```ts
[...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T];
```

- 然后递归到第二个数字的时候就相当于是在这个数组后面加 3 个 unknown,如下所示:

```ts
[...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown, unknown, unknown],
```

- 这样第一次 返回的 T 是 [unknown, unknown],第二次解构后，就会得到 20 个，再加上 3 个本次的，length 就达到了，递归的次数也大大的缩减了。构建的映射类型如下所示:

```ts
type N<T extends unknown[]> = {
  '0': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T];
  '1': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown];
  '2': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown
  ];
  '3': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown
  ];
  '4': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown,
    unknown
  ];
  '5': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown
  ];
  '6': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown
  ];
  '7': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown
  ];
  '8': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown
  ];
  '9': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown
  ];
};
```

- 每个数字后面对应就会有几个 unknown，相当于是作为个位数补充在后面，而前面就是存储的 10 \* \n 长度，数组项为 unknown 的数组。
- 因此构建一个模板字符串 O，值为第一个参数 L，然后使用 infer 依次推断第一位数字 F 和剩余数字 R，递归存储的 unknown 数组则变成了从映射类型中取，即`N<C>[keyof N & F]`,其中`keyof N & F`代表取数字，因为 keyof N 是字符串的数值。

> 代码如下:

```ts
type ConstructTuple<
  L extends number,
  O extends string = `${L}`,
  C extends unknown[] = []
> = O extends `${infer F}${infer R}`
  ? ConstructTuple<L, R, N<C>[keyof N & F]>
  : C;
```

> 使用方式:

```ts
type ConstructTupleRes1 = ConstructTuple<0>; // []
type ConstructTupleRes2 = ConstructTuple<2>; // [unknown, unknown]
type ConstructTupleRes3 = ConstructTuple<999>['length']; // 999
type ConstructTupleRes4 = ConstructTuple<1000>['length']; // 1000
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/ConstructTuple.ts" data-language="typescript"></div>
