| 标题                    | 标签                           |
| ----------------------- | ------------------------------ |
| deleteStash(删除暂存区) | stash,repository(暂存区，仓库) |

删除特定的存储。

- 使用 `git stash drop <stash>` 删除给定的 `<stash>`。

> 代码如下:

```shell
# 语法
git stash drop <stash>
```

> 使用示例:

```shell
git stash drop stash@{1}
# 删除`stash@{1}`
```
