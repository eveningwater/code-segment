| 标题                 | 标签                     |
| -------------------- | ------------------------ |
| Push(数组中添加元素) | array,extends(数组,继承) |

数组中添加元素。

- 类型 T 继承未知的数组。
- 使用展开运算法展开 T,并且与 U 合并，返回这个合并后的数组。

> 代码如下:

```ts
type Push<T extends unknown[], U> = [...T, U];
```

> 使用方式:

```ts
type PushResult = Push<[1, 2], '3'>; // [1, 2, '3']
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Push.ts" data-language="typescript"></div>
