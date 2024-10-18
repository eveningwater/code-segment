| 标题                             | 标签                         |
| -------------------------------- | ---------------------------- |
| viewCommitsSummary(查看提交摘要) | repository,commit(仓库,提交) |

使用 Git 时，你可能需要做的最常见事情之一是查看提交的简短摘要。虽然 `git log` 是执行此操作的首选命令，但有时它可能有点冗长。幸运的是，它提供了大量选项来帮助你自定义其输出。

## 所有提交的简短摘要

其中之一是 `--oneline`，它实际上是 `--pretty=oneline --abbrev-commit` 的简写。它会打印所有提交的简短摘要，每个提交都打印在一行上。

> 代码如下:

```shell
# 语法:  git log --oneline
```

> 使用示例:

```shell
git log --oneline
# 7b5d1e4 feat: 修改了js代码段
# de7cd71 feat: 添加了新的git代码段
# 01adfdc feat: 添加了新的git代码段
# 3bc1515 feat: 修改了js代码段
# e303a49 feat: 添加了新的git代码段并修改了js代码段
# aa73321 feat: 修改了js代码段
# ...
```

请注意简短的 7 个字符的提交标识符。这是因为 `--abbrev-commit` 选项将提交的 `SHA-1` 校验和缩短为 7 个字符。这个较短的字符串足以唯一地标识一次提交。

## 查看自特定日期以来的提交

此外，要仅查看自特定日期以来的提交，你可以使用 `git log --since=<date-from>`。

> 代码如下:

```shell
# 语法:  git log --since=<date-from>
```

> 使用示例:

```shell
git log --since='2 weeks ago'
# commit 01adfdc2db8ce1fdcb456a6cf1ad9a0bccda8548
# Author: eveningwater <854806732@qq.com>
# Date:   Fri May 31 22:43:07 2024 +0800
#     feat: 添加了新的git代码段
# ...
```

## 未合并的提交的简短摘要

其他选项可以与 `--oneline` 结合使用，以进一步自定义输出。例如，你可以使用 `--no-merges` 从输出中排除合并提交。

> 代码如下:

```shell
# 语法:  git log --oneline --no-merges
```

> 使用示例:

```shell
git log --oneline --no-merges
# 7b5d1e4 feat: 修改了js代码段
# de7cd71 feat: 添加了新的git代码段
# 01adfdc feat: 添加了新的git代码段
# 3bc1515 feat: 修改了js代码段
# e303a49 feat: 添加了新的git代码段并修改了js代码段
# aa73321 feat: 修改了js代码段
# 4dffac7 feat: 修改了js代码段并新增了git代码段
# b7645cd feat: 添加了新的git代码段
# d14c3c4 feat: 修改了js代码段
# 22938a6 feat: 添加了新的git代码段
# ...
```
