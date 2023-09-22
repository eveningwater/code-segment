| 标题                            | 标签                      |
| ------------------------------- | ------------------------- |
| GreaterThan(比较两个正整数大小) | extends,infer(继承，推导) |

比较两个正整数大小。

- 创建一个类型 ArrayWithLength，用于将数值类型和填充元素的数组长度做比较，直到填充元素数组的长度等于数值时才返回填充完毕的元素数组，否则递归的添加元素，元素值可以是任意值。
- 使用 ArrayWithLength 根据两个数值创建两个填充元素的数组，然后比较两者的长度从而返回布尔值。

> 代码如下:

```ts
type ArrayWithLength<
  T extends number,
  U extends any[] = []
> = U['length'] extends T ? U : ArrayWithLength<T, [true, ...U]>;
type GreaterThan<
  T extends number,
  U extends number
> = ArrayWithLength<U> extends [...ArrayWithLength<T>, ...infer _]
  ? false
  : true;
```

> 使用方式:

```ts
type GreaterThan1 = GreaterThan<2, 1>; //should be true
type GreaterThan2 = GreaterThan<1, 1>; //should be false
type GreaterThan3 = GreaterThan<10, 100>; //should be false
type GreaterThan4 = GreaterThan<111, 11>; //should be true
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/GreaterThan.ts" data-language="typescript"></div>
