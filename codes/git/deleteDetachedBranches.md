| 标题                                   | 标签                          |
| -------------------------------------- | ----------------------------- |
| deleteDetachedBranches(删除分离的分支) | branch,repository(分支，仓库) |

删除所有分离的分支。

- 使用 `git fetch --all --prune` 对任何分离的分支进行垃圾收集。
- 如果远程存储库设置为自动删除合并的分支，这尤其有用。

> 代码如下:

```shell
# 语法
git fetch --all --prune
```

> 使用示例:

```shell
git checkout master
git branch
# 假设存在如下三个分支
# master
# branch-1
# branch-2

# 假设 `branch-1` 被分离
git fetch --all --prune

git branch

# 剩余分支
# master
# branch-2
```
