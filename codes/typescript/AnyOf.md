| 标题              | 标签                     |
| ----------------- | ------------------------ |
| AnyOf(检查数组项) | extends,array(继承,数组) |

在类型系统中实现类似于 Python 中 any 函数。类型接收一个数组，如果数组中任一个元素为真，则返回 true，否则返回 false。如果数组为空，返回 false。

- 泛型约束 T 的类型为任意数组`any []`。
- 通过索引获取数组项，判断如果数组项等价于空数组,false,0,空字符串，以及空对象，则返回 false,否则返回 true。

> 代码如下:

```ts
type AnyOf<T extends any[]> = T[number] extends
  | false
  | 0
  | []
  | ''
  | { [key: string | number | symbol]: never }
  ? false
  : true;
```

> 使用方式:

```ts
type AnyOfSample1 = AnyOf<[1, '', false, [], {}]>; // expected to be true.
type AnyOfSample2 = AnyOf<[0, '', false, [], {}]>; // expected to be false.
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/AnyOf.ts" data-language="typescript"></div>
