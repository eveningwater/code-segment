| 标题           | 标签                         |
| -------------- | ---------------------------- |
| stashing(存储) | repository,stash(仓库，存储) |

Git 的存储功能允许你临时保存本地更改并切换到另一个分支或提交。当你想要在不提交当前更改的情况下处理不同的任务时，它非常有用。让我们探讨一下如何有效地使用 Git 存储。

## 存储更改

为了存储更改，你可以使用 `git stash push` 命令。此命令将工作目录和索引的当前状态保存到新的存储中。你可以选择提供存储消息，并使用 `-u` 选项包含未跟踪的文件。

> 代码如下:

```shell
# 语法: git stash push [-u] [<message>]
```

> 使用示例:

```shell
git stash push
# 创建一个新的存储

git stash push -u
# 创建一个新的存储，包括未跟踪的文件

git stash push "fix: bug"
# 创建一个带有消息“fix: bug”的新存储
```

> 注意: 使用 `git stash` 时可以省略 Push 子命令。此外，你可能已经看到 `git stash save` 在旧版本的 Git 中使用。该命令现已弃用，取而代之的是 `git stash push`。

## 列出存储

存储作为堆栈被存储，最新的存储位于顶部。你可以使用 `git stash list` 命令查看所有存储的列表。此命令显示存储引用、创建存储的分支或提交以及与存储关联的消息。

> 代码如下:

```shell
# 语法: git stash list
```

> 使用示例:

```shell
git stash list

# stash@{0}: WIP on branch-1: ee52eaa Fix network bug
# stash@{1}: WIP on master: 2b1e8a3 Add new feature
```

## 观察存储的改变

要查看存储中存储的更改，可以使用 `git stash show` 命令。此命令显示存储相对于父提交引入的更改。你可以提供存储参考以查看特定存储，或忽略它以查看最新存储。

> 代码如下:

```shell
# 语法: git stash show [<stash>]
```

> 使用示例:

```shell
git stash show
# 显示最近存储的改变

git stash show stash@{1}
# 使用引用 stash@{1} 显示存储中的更改
```

## 应用存储

要应用特定的存储，你可以使用 `git stash apply` 命令。此命令将指定存储中的更改应用到工作目录。你可以提供存储参考以应用特定存储，或忽略它以应用最新存储。

> 代码如下:

```shell
# 语法: git stash apply [<stash>]
```

> 使用示例:

```shell
git stash apply
# 应用最新的存储

git stash apply stash@{1}
# 使用参考 stash@{1} 应用存储
```

同样，你可以使用 `git stash pop` 命令应用指定存储中的更改并将其从存储列表中删除。

> 代码如下:

```shell
# 语法: git stash pop [<stash>]
```

> 使用示例:

```shell
git stash pop
# 应用最新的存储并将其从存储列表中删除

git stash pop stash@{1}
# 使用引用 stash@{1} 应用存储并将其从隐藏列表中删除
```

## 删除存储

你可以使用 `git stash drop` 命令删除存储。此命令从存储列表中删除指定的存储。

> 代码如下:

```shell
# 语法: git stash drop <stash>
```

> 使用示例:

```shell
git stash drop
# 删除最近的存储

git stash drop stash@{1}
# 删除引用 stash@{1} 的存储
```

此外，你可以使用 `git stash clear` 命令删除所有存储。

> 代码如下:

```shell
# 语法: git stash clear
```

> 使用示例:

```shell
git stash clear
# 删除所有的存储
```
