| 标题          | 标签                      |
| ------------- | ------------------------- |
| Zip(生成元组) | extends,infer(继承，推导) |

生成元组。

- 创建一个新的数组，将生成的元素添加到新的数组中，然后比较新的数组 length 如果等于 2 个参数的数组其中一个的长度，则返回，否则递归的添加元素。

> 代码如下:

```ts
type Zip<
  T extends any[],
  U extends any[],
  R extends any[] = []
> = R['length'] extends T['length'] | U['length']
  ? R
  : Zip<T, U, [...R, [T[R['length']], U[R['length']]]]>;
```

> 使用方式:

```ts
type expZip = Zip<[1, 2], [true, false]>; // expected to be [[1, true], [2, false]]
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Zip.ts" data-language="typescript"></div>
