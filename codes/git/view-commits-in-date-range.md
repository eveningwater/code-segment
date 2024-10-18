| 标题                                                  | 标签                           |
| ----------------------------------------------------- | ------------------------------ |
| viewCommitsInDateRange(查看特定日期范围内的 Git 提交) | commit,repository(提交,存储库) |

git log 命令可用于各种用途，包括根据各种标准筛选提交。最常见的用例之一是查看特定日期范围内的所有提交。当你想查看特定时间段内所做的更改，或者尝试追踪在某个时间点引入的错误时，此功能非常有用。

# 查看两个日期之间的提交

使用 `git log --since=<date-from> --until=<date-to>`，你可以查看 `<date-from>` 和 `<date-to>` 之间的所有提交。日期可以采用多种格式指定，例如 `YYYY-MM-DD、MM/DD/YYYY，`甚至可以使用相对术语，例如yesterday, 2 weeks ago等。

> 代码如下:

```shell
# 语法:  git log [--since=<date-from>] [--until=<date-to>]
```

> 使用示例:

```shell
git log --since='jan 1 2024' --until='jan 4 2024' 
# commit dc4157f82e27e2cae87ad63b442f201e2c456891
# Author: eveningwater <854806732@qq.com>
# Date:   Wed Jan 3 19:59:00 2024 +0800

#     feat: 修改了js代码段

# commit 2aaedb6636ba324f5494abe086e112044a4beb31
# Author: eveningwater <854806732@qq.com>
# Date:   Tue Jan 2 19:19:12 2024 +0800
```

# 查看自特定日期以来的提交

此外，要仅查看自特定日期以来的提交，你可以使用 `git log --since=<date-from>`。

> 代码如下:

```shell
# 语法：git log --since=<date-from>
```

> 使用示例:
> 
```shell
git log --since='2 weeks ago'
# commit ba11f955b545ad6b2563b5e2994d499c7265679a (HEAD -> main, origin/main, origin/HEAD)
# Author: eveningwater <854806732@qq.com>
# Date:   Tue Sep 24 02:39:38 2024 +0000

#     feat:添加了新的git代码段

# commit 112db2ffa28c3585711d05d2edbaeec049eab880
# Author: eveningwater <854806732@qq.com>
# Date:   Mon Sep 23 07:22:33 2024 +0000
```

# 查看特定日期之前的提交

同样，如果你只想查看特定日期之前的提交，则可以使用 `git log --until=<date-to>`。

> 代码如下:

```shell
# 语法：git log --until=<date-to>
```

> 使用示例:

```shell
git log --until='yesterday'
# commit 9150aa56a11960d38de620fbb0f6e42ce085b505
# Author: eveningwater <854806732@qq.com>
# Date:   Mon Sep 23 03:11:07 2024 +0000

#     feat: 添加了模板

# commit 7ba1959eb1293e6577be44e52d5171d062393982
# Author: eveningwater <854806732@qq.com>
# Date:   Mon Sep 23 03:09:05 2024 +0000
```


