| 标题                                | 标签         |
| ----------------------------------- | ------------ |
| createFixupCommit(创建一个修复提交) | commit(提交) |

创建一个修复提交，可以在下一个变基中自动压缩。

- 使用 `git commit --fixup <commit>` 为指定的 `<commit>` 创建修复提交。
- 运行 `git rebase --autosquash` 后，修复提交将自动压缩到它们引用的提交中。

> 代码如下:

```shell
# 语法
git commit --fixup <commit>
```

> 使用示例:

```shell
git add .
git commit --fixup 3050fc0de
# 创建一个修复提交
git rebase HEAD~5 --autosquash
# 现在修复提交已经被自动压缩
```
