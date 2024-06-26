| 标题                     | 标签                     |
| ------------------------ | ------------------------ |
| rewindToCommit(回退提交) | branch,commit(分支,提交) |

Git 最大的优势之一是它能够回退到特定的提交。当你犯了错误但尚未推送更改时，这尤其有用。在这种情况下，你可以简单地退回到之前的提交，修复错误并再次提交。

## 回退到提交

要回退到特定提交，你可以使用 `git reset`。此命令将取消提交和取消暂存更改，但将它们保留在工作目录中。你可以使用 `--hard` 标志来取消提交、取消暂存和删除更改。

> 代码如下:

```shell
# 语法
# Syntax: git reset [--hard] <commit>
```

> 使用示例:

```shell
git reset 3050fc1
# 回退到“3050fc1”，但保留工作目录中的更改

git reset --hard c0d30f4
# 倒回到“c0d30f4”并删除更改
```

## 回退 n 次提交

你还可以使用 `git reset` 回滚给定数量的提交。为此，你可以使用 `HEAD~<n>` 语法，其中 `<n>` 是要回退的提交数。

```shell
# Syntax: git reset [--hard] HEAD~<n>
```

> 使用示例:

```shell
git reset HEAD~5
# 回滚 5 次提交，但将更改保留在工作目录中

git reset --hard HEAD~3
# 回滚 3 次提交并删除更改
```

## 笔记

`--hard` 标志被认为是破坏性操作，这意味着使用它时应该格外小心。如果出现问题，你也许可以通过查看参考日志来恢复更改。

如果你已经将一些更改推送到远程存储库，你可能不想重写历史记录，特别是如果其他人已经拉取了你的更改。在这种情况下，你可以使用 `git revert` 撤消提交，而无需重写历史记录。
