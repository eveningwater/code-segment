| 标题                       | 标签         |
| -------------------------- | ------------ |
| rebaseOntoBranch(变基分支) | branch(分支) |

将当前分支变基到另一个分支。

- 使用 `git checkout <branch>` 切换到要重新设置基准的 `<branch>`。
- 使用 `git rebase <base-branch>` 将当前分支变基到 `<base-branch>`。

> 代码如下:

```shell
# 语法
git checkout <branch>
git rebase <base-branch>
```

> 使用示例:

```shell
git checkout branch-1
git rebase master
# branch-1分支变基到master分支

git checkout branch-2
git fetch origin # 获取最新的远程分支
git rebase origin/master
# branch-1分支变基到最新的远程master分支
```
