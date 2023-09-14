| 标题              | 标签                                  |
| ----------------- | ------------------------------------- |
| Reverse(数组反转) | extends, array,infer(继承, 数组,推断) |

数组反转。

- 第一个参数 T 继承任意数组,使用 infer 推断数组每一项，从一项开始反转，后续项则递归的反转。

> 代码如下:

```ts
type Reverse<T extends any[]> = T extends [infer F, ...infer R]
  ? [...Reverse<R>, F]
  : T;
```

> 使用方式:

```ts
type aReverse = Reverse<['a', 'b']>; // ['b', 'a']
type bReverse = Reverse<['a', 'b', 'c']>; // ['c', 'b', 'a']
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Reverse.ts" data-language="typescript"></div>
