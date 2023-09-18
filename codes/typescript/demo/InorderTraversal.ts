interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}
type InorderTraversal<
    T extends TreeNode | null,
    NT extends TreeNode = NonNullable<T>
> = T extends null ? [] : [...InorderTraversal<NT['left']>, NT['val'], ...InorderTraversal<NT['right']>];

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

type AInorderTraversal = InorderTraversal<typeof tree1> // [1, 3, 2]