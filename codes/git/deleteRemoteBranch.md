| 标题                               | 标签                          |
| ---------------------------------- | ----------------------------- |
| deleteRemoteBranch(删除远程的分支) | branch,repository(分支，仓库) |

删除远程分支。

- 使用 `git push -d <remote> <branch>` 删除给定 `<remote>` 上指定的远程 `<branch>`。

> 代码如下:

```shell
# 语法
git push -d <remote> <branch>
```

> 使用示例:

```shell
git checkout master
git push -d origin branch-1
# 删除远程的branch-1分支
```
