| 标题                                 | 标签          |
| ------------------------------------ | ------------- |
| CartesianProduct(联合类型的笛卡尔积) | extends(继承) |

联合类型的笛卡尔积。

- T 和 T 并且 U 和 U 相等，则返回两者组成的一维数组，否则返回 never。

> 代码如下:

```ts
type CartesianProduct<T, U> = T extends T
  ? U extends U
    ? [T, U]
    : never
  : never;
```

> 使用方式:

```ts
type CartesianProductRes1 = CartesianProduct<1 | 2, 'a' | 'b'>; // [2, 'a'] | [1, 'a'] | [2, 'b'] | [1, 'b']
type CartesianProductRes2 = CartesianProduct<1 | 2 | 3, 'a' | 'b' | 'c'>; // [2, 'a'] | [1, 'a'] | [3, 'a'] | [2, 'b'] | [1, 'b'] | [3, 'b'] | [2, 'c'] | [1, 'c'] | [3, 'c']
type CartesianProductRes3 = CartesianProduct<1 | 2, 'a' | never>; // [2, 'a'] | [1, 'a']
type CartesianProductRes4 = CartesianProduct<'a', Function | string>; // ['a', Function] | ['a', string]
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/CartesianProduct.ts" data-language="typescript"></div>
