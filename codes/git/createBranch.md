| 标题                   | 标签                     |
| ---------------------- | ------------------------ |
| createBranch(创建分支) | branch,remote(分支,远程) |

创建并切换到新分支，可以选择设置远程跟踪分支。

- 使用 `git checkout -b <branch>` 创建具有指定名称的新分支并切换到该分支。
- 你可以选择添加 `-t <remote>/<branch>` 来为新创建的分支设置远程跟踪分支。

> 提示: 你也可以分别使用 `git branch <branch> [-t <remote>/<branch>]` 和 `git checkout <branch>`。

> 代码如下:

```shell
# 语法
git checkout -b <branch> [-t <remote>/<branch>]
```

> 使用示例:

```shell
git checkout -b branch-1
# 创建一个branch-1的本地分支，不需要跟踪远程分支
git checkout -b branch-2 -t origin/branch-2
# 本地分支branch-2和远程跟踪分支branch-2同名
```
