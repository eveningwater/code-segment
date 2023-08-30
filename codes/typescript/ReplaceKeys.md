| 标题                  | 标签          |
| --------------------- | ------------- |
| ReplaceKeys(替换属性) | extends(继承) |

替换属性。

- 泛型有三个属性 U,T,Y。
- 创建一个属性 K 继承 U 的属性 keyof U,取值也做判断，如果 K 继承 T 并且 Y 的属性，则返回 Y 上的值`Y[K]`,如果 K 继承 T 但不是 Y 的属性，则返回 never,否则返回原本的值`U[K]`。

> 代码如下:

```ts
type ReplaceKeys<U, T, Y> = {
  [K in keyof U]: K extends T ? (K extends keyof Y ? Y[K] : never) : U[K];
};
```

> 使用方式:

```ts
type ReplaceKeysNodeA = {
  type: 'A';
  name: string;
  flag: number;
};

type ReplaceKeysNodeB = {
  type: 'B';
  id: number;
  flag: number;
};

type ReplaceKeysNodeC = {
  type: 'C';
  name: string;
  flag: number;
};

type Nodes = ReplaceKeysNodeA | ReplaceKeysNodeB | ReplaceKeysNodeC;

type ReplacedNodes = ReplaceKeys<
  Nodes,
  'name' | 'flag',
  { name: number; flag: string }
>; // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.

type ReplacedNotExistKeys = ReplaceKeys<Nodes, 'name', { aa: number }>; // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // would replace name to never
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/ReplaceKeys.ts" data-language="typescript"></div>
