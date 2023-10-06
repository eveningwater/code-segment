| 标题                  | 标签                      |
| --------------------- | ------------------------- |
| NumberRange(范围数值) | extends,array(继承，数组) |

范围数值。

- 创建一个 NumberList 类型，该类型接收三个参数，第一个参数代表开始值，第二个参数代表结束值，第三个参数用于存储索引值，是一个数组。
- 如果开始值和数组长度相等，则返回结束值，否则递归的执行该类型，第二个参数应是数组长度与结束值的联合，第三个参数则从 0 开始依次存储索引值。如下所示:

```ts
type NumberList<
  S extends number,
  E extends number = S,
  C extends number[] = []
> = C['length'] extends S ? S : NumberList<S, C['length'] | E, [...C, 0]>;
```

- NumberRange 类型为`NumberRange<E>`与`NumberRange<S>`合并在一起，并使用[Exclude](codes/typescript/Exclude.md)类型消除两者之间重复值，然后再与开始值 S 联合即可。

> 代码如下:

```ts
type NumberRange<S extends number, E extends number> =
  | S
  | Exclude<NumberList<E>, NumberList<S>>;
```

> 使用方式:

```ts
// 注意结果顺序会有所不同，ts联合类型无法确保顺序
type NumberRangeRes1 = NumberRange<2, 9>; // | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type NumberRangeRes2 = NumberRange<0, 2>; // | 0 | 1 | 2
type NumberRangeRes3 = NumberRange<0, 140>;

// | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
// | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20
// | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30
// | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40
// | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50
// | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60
// | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70
// | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80
// | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90
// | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100
// | 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110
// | 111 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120
// | 121 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 | 130
// | 131 | 132 | 133 | 134 | 135 | 136 | 137 | 138 | 139 | 140;
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/NumberRange.ts" data-language="typescript"></div>
