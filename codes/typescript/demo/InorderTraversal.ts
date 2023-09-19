interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}
type InOrderTraversal<
    T extends TreeNode | null,
    NT extends TreeNode = NonNullable<T>
> = T extends null ? [] : [...InOrderTraversal<NT['left']>, NT['val'], ...InOrderTraversal<NT['right']>];

const tree1 = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null,
        },
        right: null,
    },
} as const

type AInOrderTraversal = InOrderTraversal<typeof tree1> // [1, 3, 2]