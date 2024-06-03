| 标题                                                  | 标签                         |
| ----------------------------------------------------- | ---------------------------- |
| viewCommitsInDateRange(查看特定日期范围内的 Git 提交) | repository,commit(仓库,提交) |

`git log` 命令可用于各种用途，包括根据各种条件筛选提交。最常见的用例之一是查看特定日期范围内的所有提交。当你想查看特定时间段内所做的更改，或者尝试追踪在某个时间点引入的错误时，此功能非常有用。

## 查看两个日期之间的提交

使用 `git log --since=<date-from> --until=<date-to>`，你可以查看 `<date-from>` 和 `<date-to>` 之间的所有提交。日期可以采用多种格式指定，例如 YYYY-MM-DD、MM/DD/YYYY，甚至可以使用相对术语，例如昨天、2 周前等。

> 代码如下:

```shell
# 语法:  git log [--since=<date-from>] [--until=<date-to>]
```

> 使用示例:

```shell
git log --since='May 28 2024' --until='May 29 2024'
# commit aa73321dd115bf10ce08a8ea0d1b5383b79b01d3
# Author: eveningwater <854806732@qq.com>
# Date:   Wed May 29 22:17:26 2024 +0800
#     feat: 修改了js代码段
# ...
```

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

## 查看特定日期之前的提交

类似地，如果你只想查看截至特定日期的提交，你可以使用 `git log --until=<date-to>`。

> 代码如下:

```shell
# 语法:  git log --until=<date-to>
```

> 使用示例:

```shell
git log --until='yesterday'
# commit 01adfdc2db8ce1fdcb456a6cf1ad9a0bccda8548
# Author: eveningwater <854806732@qq.com>
# Date:   Fri May 31 22:43:07 2024 +0800
#     feat: 添加了新的git代码段
# ...
```
