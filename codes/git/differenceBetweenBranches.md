| 标题                        | 标签         |
| --------------------------- | ------------ |
| deleteSubmodule(删除子模块) | branch(分支) |

显示两个分支之间的差异。

- 使用 `git diff <branch>..<other-branch>` 查看 `<branch>` 和 `<other-branch>` 之间的差异。

> 代码如下:

```shell
# 语法
git diff <branch>..<other-branch>
```

> 使用示例:

```shell
git diff branch-1..branch-2
# 将会展示`branch-1`和`branch-2`之间的差异
```
