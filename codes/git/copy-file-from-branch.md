| 标题                               | 标签         |
| ---------------------------------- | ------------ |
| copyFileFromBranch(从分支复制文件) | branch(分支) |

将文件从另一个分支复制到当前分支。

- 使用 `git checkout <branch> <file>` 从指定的 `<branch>` 复制指定的 `<file>`。

> 代码如下:

```shell
# 语法
git checkout <branch> <file>
```

> 使用示例:

```shell
git checkout branch-2
git checkout branch-1 "eveningwater.txt"
# “branch-2”分支现在包含“branch-1”中的 eveningwater.txt 文件
```
