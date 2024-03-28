| 标题                     | 标签         |
| ------------------------ | ------------ |
| renameBranch(分支重命名) | branch(分支) |

重命名本地分支。

- 使用 `git branch -m <old-name> <new-name>` 将 `<old-name>` 重命名为 `<new-name>`。

> 代码如下:

```shell
# 语法
# git branch -m <old-name> <new-name>
```

> 使用示例:

```shell
git checkout master
git branch -m branch-1 branch-2
# 将branch-1分支更名为branch-2
```
