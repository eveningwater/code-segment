| 标题                      | 标签                                 |
| ------------------------- | ------------------------------------ |
| ArrayLength(获取数组长度) | extends,array,length(继承,数组,长度) |

获取数组长度。

- 数组 T 继承任意数组，则返回数组 T 的 length 属性。

> 代码如下:

```ts
type ArrayLength<T extends any[]> = T['length'];
```

> 使用方式:

```ts
type tesla = ['tesla', 'model 3', 'model X', 'model Y'];
type spaceX = [
  'FALCON 9',
  'FALCON HEAVY',
  'DRAGON',
  'STARSHIP',
  'HUMAN SPACEFLIGHT'
];

type teslaLength = ArrayLength<tesla>; //  4
type spaceXLength = ArrayLength<spaceX>; //  5
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/ArrayLength.ts" data-language="typescript"></div>
