| 标题                                  | 标签             |
| ------------------------------------- | ---------------- |
| viewCommitGraph(查看提交的可视化图表) | repository(仓库) |

如果你更喜欢视觉化，则可以使用单个 Git 命令查看存储库中所有提交和分支的图表。

运行 `git log --pretty=oneline --graph --decorate --all` 会打印整个存储库历史记录的可视化图表。此命令显示存储库中所有提交和分支的可视化表示。然后，你可以使用箭头键导航，或按 `Q` 退出。

> 代码如下:

```shell
# 语法:  git log --pretty=oneline --graph --decorate --all
```

> 使用示例:

```shell
git log --pretty=oneline --graph --decorate --all
# b7645cd09321e7954af06d9ead02e2f5abb45c67 (HEAD -> main, origin/main, origin/HEAD) feat: 添加了新的git代码段
# d14c3c4732791b6acef65b391a1a483492f5ffec feat: 修改了js代码段
```
