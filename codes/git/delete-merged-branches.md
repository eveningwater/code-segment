| 标题                                 | 标签                          |
| ------------------------------------ | ----------------------------- |
| deleteMergedBranches(删除合并的分支) | branch,repository(分支，仓库) |

删除所有本地合并分支。

- 使用 `git branch --merged <branch>` 列出合并到 `<branch>` 的所有分支。
- 使用管道运算符 (|) 对输出进行管道传输，并使用 `grep -v "(^\*|<branch>)"` 排除当前和目标 `<branch>`。
- 使用管道运算符 (|) 通过管道传输输出，并使用 `xargs git branch -d` 删除所有找到的分支。

> 代码如下:

```shell
# 语法
git branch --merged <branch> | grep -v "(^\*|<branch>)" | xargs git branch -d
```

> 使用示例:

```shell
git checkout master
git branch
# 假设存在如下三个分支
# master
# branch-1
# branch-2

# 假设 `branch-1` 合并到了master
git branch --merged master | grep -v "(^\*|master)" | xargs git branch -d

git branch

# 剩余分支
# master
# branch-2
```
