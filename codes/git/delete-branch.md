| 标题                       | 标签                          |
| -------------------------- | ----------------------------- |
| deleteBranch(删除本地分支) | branch,repository(分支，仓库) |

删除本地分支。

使用 `git branch -d <branch>` 删除指定的本地`<branch>`。

> 代码如下:

```shell
# 语法
git branch -d <branch>
```

> 使用示例:

```shell
git checkout master
git branch -d branch-1 # 删除本地叫 `branch-1` 的分支
```
