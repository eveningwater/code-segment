| 标题                                      | 标签                     |
| ----------------------------------------- | ------------------------ |
| manualFindCommitWithBug(手动查找错误提交) | branch,commit(分支,提交) |

使用二分搜索算法手动查找历史记录中的哪个提交引入了错误。

- 使用 `git bisect start` 启动该过程。
- 使用 `git bisect good <commit>` 将 `<commit>` 标记为“好”，表明它已知没有错误。
- 使用 `git bisect bad <commit>` 将不同的 `<commit>` 标记为“bad”，表明它存在错误。
- 使用 `git bisect (bad | good)` 将每个后续提交标记为“好”或“坏”，具体取决于它是否有错误。
- 使用 `git bisect reset` 重置到原始分支。 您可以选择指定要重置为的 `<commit>`。

> 代码如下:

```shell
# 语法
git bisect start
git bisect good <commit>
git bisect bad <commit>
git bisect (bad | good)
git bisect reset [<commit>]
```

> 使用示例:

```shell
git bisect start
git bisect good 3050fc0de
git bisect bad c191f90c7
git bisect good # 当前提交很好
git bisect bad # 当前提交是个错误
# ... 之后错误提交会被打印出来
git bisect reset # 返回原始分支
```
