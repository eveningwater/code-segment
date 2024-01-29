| 标题                       | 标签                        |
| -------------------------- | --------------------------- |
| applyStash(应用特别的存储) | repository,stash(仓库,存储) |

应用特别的存储。

- 使用 `git stash apply` 应用给定的存储。

> 代码如下:

```shell
git stash apply <stash>
```

> 使用示例:

```shell
git stash apply stash@{1}
# 在终端运行该命令，将应用给定（名字叫做stash@{1}）的存储到当前分支
```
