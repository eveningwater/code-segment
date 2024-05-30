| 标题                                                            | 标签                          |
| --------------------------------------------------------------- | ----------------------------- |
| viewCommitsByAuthorOrCommitter(查看特定作者或提交者的 Git 提交) | repository,commit(仓库，提交) |

查看 Git 存储库的提交历史记录时，你可能希望按作者或提交者筛选提交。通常情况下，Git 可以满足你的需求。

## 查看特定作者的提交

当你查找特定作者的提交时，可以使用 `git log --author=<author>` 来过滤提交历史记录。将 `<author>` 替换为你感兴趣的作者的姓名。

> 代码如下:

```shell
# 语法:  git log --author=<author>
```

> 使用示例:

```shell
git log --author="eveningwater"
# commit aa73321dd115bf10ce08a8ea0d1b5383b79b01d3
# Author: eveningwater <854806732@qq.com>
# Date:   Wed May 29 22:17:26 2024 +0800
#     feat: 修改了js代码段
# ...
```

## 查看特定提交者的提交

类似地，要过滤特定提交者的提交，你可以使用 `git log --committer=<committer>`，将 `<committer>` 替换为你感兴趣的提交者的名称。

> 代码如下:

```shell
# 语法:   git log --committer=<committer>
```

> 使用示例:

```shell
git log --committer="eveningwater"
# commit aa73321dd115bf10ce08a8ea0d1b5383b79b01d3
# Author: eveningwater <854806732@qq.com>
# Date:   Wed May 29 22:17:26 2024 +0800
#     feat: 修改了js代码段
# ...
```
