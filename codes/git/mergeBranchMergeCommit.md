| 标题                                   | 标签                            |
| -------------------------------------- | ------------------------------- |
| mergeBranchMergeCommit(合并分支和提交) | repository,branch(存储库，分支) |

分支是 Git 组织单独开发线的方式，允许团队并行工作多个功能。 但在某些时候，您会想要将一个分支合并到另一个分支，通常是 master 或 main。 根据团队的工作流程，合并分支可能会创建合并提交，也可能不会。

## 合并一个分支

为了合并分支，您需要首先使用 `git checkout` 切换到目标分支。 然后，您可以使用 `git merge` 将源分支合并到目标分支。

> 代码如下:

```shell
# 语法
# Syntax:
#  git checkout <target-branch>
#  git merge <source-branch>

git checkout master
git merge branch-1 # 合并`branch-1`分支到`master`分支
```

默认情况下，Git 将使用[快进合并](codes/git/fastForwardMerge.md)来合并分支。 这意味着它将通过将源分支的提交放置在目标分支的顶端来创建线性历史记录。

## 创建一个合并提交

相反，如果您想创建合并提交，则可以在合并时使用 `--no-ff` 标志。 这将在目标分支的顶端创建一个合并提交，可以选择在提交消息中引用源分支。其余过程保持不变。

```shell
# Syntax:
#  git checkout <target-branch>
#  git merge --no-ff -m <message> <source-branch>

git checkout master
git merge --no-ff -m "Merge branch-1" branch-1
# 合并`branch-1`分支到`master`分支并创建一个提交信息是"Merge branch-1"的提交
```
