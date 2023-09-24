| 标题                | 标签                                  |
| ------------------- | ------------------------------------- |
| IsTuple(是否是元组) | extends,array,tuple(继承，数组，元组) |

是否是元组。

- 元组中的元素如果是 never 类型，则不是元组，因此需要判断元素是否是 never，即`T extends [never]`。
- 元组的长度一定是一个具体的数值而不是 number 类型，因此需要判断长度是否是 number 类型，即`number extends T['length']`。
- 元组实际上就是特殊的数组，因此需要判断是否是一个任意值数组，注意也包含只读的数组，即`T extends readonly any []`。

> 代码如下:

```ts
type isTuple<T> = T extends [never]
  ? false
  : T extends readonly any[]
  ? number extends T['length']
    ? false
    : true
  : false;
```

> 使用方式:

```ts
type case1 = IsTuple<[number]>; // true
type case2 = IsTuple<readonly [number]>; // true
type case3 = IsTuple<number[]>; // false
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/IsTuple.ts" data-language="typescript"></div>
