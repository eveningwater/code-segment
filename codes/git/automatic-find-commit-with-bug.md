| 标题                                           | 标签                      |
| ---------------------------------------------- | ------------------------- |
| automaticFindCommitWithBug(查找第一次错误提交) | commit,branch(提交，分支) |

使用二分搜索算法和给定脚本来查找历史记录中的哪个提交引入了错误。

- 使用 `git bisect start` 启动该进程。
- 使用 `git bisect good <commit>` 将 `<commit>` 标记为“good”，表明它已知没有错误。
- 使用 `git bisect bad <commit>` 将不同的 `<commit>` 标记为“bad”，表明它存在错误。
- 使用 `git bisect run <command>` 在每个后续提交上运行给定的 `<command>` 以查找哪个提交引入了错误。
- 使用 `git bisect reset` 重置到原始分支。 你可以选择指定要重置为的 `<commit>`。

> 代码如下:

```shell
git bisect start
git bisect good <commit>
git bisect bad <commit>
git bisect run <command>
git bisect reset [<commit>]
```

> 使用示例:

```shell
git bisect start
# 此处3050fc0de为commit id
git bisect good 3050fc0de
git bisect bad c191f90c7
git bisect run npm test # 为每一个提交运行 `npm test`命令
# 过一会儿，被标记为错误的commit就会打印出来
git bisect reset # 重置到原始分支
```
