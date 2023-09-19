| 标题                             | 标签                          |
| -------------------------------- | ----------------------------- |
| InOrderTraversal(二叉树中序遍历) | object,recursively(对象,递归) |

二叉树中序遍历。

- 创建一个类型 TreeNode，代表二叉树节点的类型，接连类型包含 val,left,right 三个属性。
- 定义第二个参数代表一个非空（该类型实现可参考[NonNullable](codes/typescript/NonNullable.md)）的节点类型。
- 递归的展开 left 节点，节点值，和右边节点 right。

> 代码如下:

```ts
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
type InOrderTraversal<
  T extends TreeNode | null,
  NT extends TreeNode = NonNullable<T>
> = T extends null
  ? []
  : [
      ...InOrderTraversal<NT['left']>,
      NT['val'],
      ...InOrderTraversal<NT['right']>
    ];
```

> 使用方式:

```ts
type AInOrderTraversal = InOrderTraversal<typeof tree1>; // [1, 3, 2]
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/InOrderTraversal.ts" data-language="typescript"></div>
