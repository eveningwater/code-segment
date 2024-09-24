| 标题                                     | 标签                     |
| ---------------------------------------- | ------------------------ |
| viewMergedBranches(查看合并的git分支) | repository,branch(存储库，分支) |

想要找到一种方法来列出 Git 存储库中的所有合并分支？这在各种情况下都很有用，包括清理存储库或识别准备删除的分支。

> 提示: 您可以使用单个命令轻松删除合并的分支,查看[链接的文章](codes/git/deleteMergedBranches.md)了解更多信息。

使用 `git branch -a --merged` 可以查看所有合并的本地分支的列表。此命令显示已合并到当前分支的分支，从而轻松识别不再需要的分支。使用箭头键浏览列表，然后按 `Q` 退出。

> 代码如下:

```shell
# 语法: git branch -a --merged
```

> 使用示例:

```shell
git checkout master
git branch -a --merged
# 分支名1
# 分支名2
```
