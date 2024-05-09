| 标题                     | 标签         |
| ------------------------ | ------------ |
| switchToBranch(切换分支) | branch(分支) |

Git 分支用于开发功能、修复错误和尝试新想法。你可以使用 `git checkout` 命令轻松地在分支之间切换。

> 提示: 你可以在有关[分支创建](<(codes/git/createBranch.md)>)的文章中了解有关使用 `git checkout` 创建新分支的所有信息。

## 切换到现有分支

为了切换到现有分支，你可以使用 `git checkout <branch>`。如果你使用的是较新版本的 Git，还可以使用 `git switch <branch>`。

> 代码如下:

```shell
# 语法: git checkout <branch>
# 或者: git switch <branch>
```

> 使用示例:

```shell
git checkout branch-1
# 切换到叫做 `branch-1`的现有分支

git switch branch-1
# 切换到叫做 `branch-1`的现有分支
```

## 切换到上一个分支

随后，你可以使用 `git checkout -` 或 `git switch -` 切换回上一个分支。这里， `-` 是前一个分支的简写。

> 代码如下:

```shell
# 语法: git checkout -
# 或者: git switch -
```

> 使用示例:

```shell
git checkout branch-1
git checkout master
git checkout -
# 切换回 `branch-1`分支

git switch branch-1
git switch master
git switch -
# 切换回 `branch-1`分支
```
