| 标题                                 | 标签                     |
| ------------------------------------ | ------------------------ |
| IsNegativeNumber(判断数值是否是负数) | extends,infer(继承,推断) |

判断数值是否是负数。

- 新增第二个参数，值为第一个参数，判断如果第一个参数 T 是 number，则返回 never,否则判断第一个参数和第二个参数是否相等，用数组包裹是否相等，用模板字符串包裹，并使用 infer 关键字推断字符串是否由负号，有则返回 true,否则返回 false,否则返回 never。

> 代码如下:

```ts
type IsNegativeNumber<T extends number, U extends T = T> = number extends T
  ? never
  : T extends U
  ? [U] extends [T]
    ? `${T}` extends `-${infer _}`
      ? true
      : false
    : never
  : never;
```

> 使用方式:

```ts
type IsNegativeNumberRes1 = IsNegativeNumber<0>; // false
type IsNegativeNumberRes2 = IsNegativeNumber<number>; // never
type IsNegativeNumberRes3 = IsNegativeNumber<-1 | -2>; // never
type IsNegativeNumberRes4 = IsNegativeNumber<-1>; // true
type IsNegativeNumberRes5 = IsNegativeNumber<-1.9>; // true
type IsNegativeNumberRes6 = IsNegativeNumber<-100_000_000>; // true
type IsNegativeNumberRes7 = IsNegativeNumber<1>; // false
type IsNegativeNumberRes8 = IsNegativeNumber<1.9>; // false
type IsNegativeNumberRes9 = IsNegativeNumber<100_000_000>; // false
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/IsNegativeNumber.ts" data-language="typescript"></div>
