| 标题                            | 标签          |
| ------------------------------- | ------------- |
| IsOdd(判断给定正整数是否是奇数) | extends(继承) |

判断给定正整数是否是奇数。

- 奇数存在个位数一定是 1,3,5,7,9 这几个数，因此可以构造成模板字符串来判断。

> 代码如下:

```ts
type IsOdd<T extends number> = `${T}` extends `${number | ''}${
  | 1
  | 3
  | 5
  | 7
  | 9}`
  ? true
  : false;
```

> 使用方式:

```ts
type IsOddRes1 = IsOdd<2023>; // true>
type IsOddRes2 = IsOdd<1453>; // true>
type IsOddRes3 = IsOdd<1926>; // false>
type IsOddRes4 = IsOdd<number>; // false>
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/IsOdd.ts" data-language="typescript"></div>
