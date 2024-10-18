| 标题                                 | 标签                         |
| ------------------------------------ | ---------------------------- |
| sortBranchesByDate(通过日期排序分支) | branch,repository(分支,仓库) |

你是否曾经想查看按日期排序的所有本地 Git 分支的列表？有一种非常简单的方法可以做到这一点，即使用 `git branch` 命令和 `--sort` 选项。

为了按日期对分支进行排序，你通常需要使用 committerdate 字段，它表示分支上提交的日期。为了按降序对分支进行排序（最近的在前），你可以在字段名称前使用 - 符号。

将它们放在一起，使用 `git branch --sort=-committerdate` 将显示按上次提交日期排序的所有本地分支的列表。你可以使用箭头键浏览列表，然后按 `Q` 退出。

> 代码如下:

```shell
# Syntax: git branch --sort=-committerdate
```

> 使用示例:

```shell
git branch --sort=-committerdate
# master
# branch-1
# branch-2
```

相反，如果你想按升序对分支进行排序（最旧的在前），则可以删除 - 符号，然后使用 `git branch --sort=committerdate`。

> 代码如下:

```shell
# Syntax: git branch --sort=committerdate
```

> 使用示例:

```shell
git branch --sort=committerdate
# branch-2
# branch-1
# master
```

> 笔记: 根据你的环境和团队，你可能希望使用 authordate 而不是 committerdate。这些字段通常具有相同的值，但在某些情况下它们可能会有所不同，例如当提交被精心挑选或重新设定时。authordate 字段表示原始提交的日期，而 committerdate 字段表示当前分支中提交的日期。
