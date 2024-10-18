| 标题                          | 标签         |
| ----------------------------- | ------------ |
| viewStatus(查看当前 Git 状态) | branch(分支) |

Git 提供了一个命令来查看工作树的当前状态。`git status` 命令会显示哪些文件已暂存、未暂存和未跟踪，以及当前所在的分支。

如果你想要更简洁的输出，可以使用 `-sb` 标志来查看状态的简短形式。当你想快速检查工作树的状态而不需要其他详细信息时，这很有用。

> 代码如下:

```shell
# 语法: git status [-sb]
```

> 使用示例:

```shell
git status
# On branch main
# Your branch is up to date with 'origin/main'.

# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git restore <file>..." to discard changes in working directory)
#         modified:   README.md

# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#         codes/git/viewStatus.md

# no changes added to commit (use "git add" and/or "git commit -a")
git status -sb
# ## main...origin/main
#  M README.md
# ?? codes/git/viewStatus.md
```
