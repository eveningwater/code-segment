| 标题                                       | 标签                         |
| ------------------------------------------ | ---------------------------- |
| viewChangesSummary(查看更改的提交信息摘要) | branch,repository(分支,仓库) |

你是否曾经想在不查看整个提交历史记录的情况下查看 Git 存储库中两次提交之间的更改？更改摘要可以帮助你快速了解两次提交之间的差异。那么如何做到这一点呢？

使用 `git shortlog <commit>..<other-commit>`，你可以查看两次给定提交之间的更改摘要。请注意，两次提交不必是连续的，你可以使用任何有效的提交引用，例如提交哈希、分支名称或标签。这允许你比较存储库历史记录中的任意两点。

与往常一样，你可以使用箭头键浏览摘要，然后按 Q 退出。

## 查看远程地址

你可以使用 `git config --get remote.origin.url` 显示远程存储库的 URL。origin 是远程存储库的默认名称，但你可以将其替换为远程存储库的名称。

> 代码如下:

```shell
# 语法:  git shortlog <commit>..<other-commit>
```

> 使用示例:

```shell
git shortlog 3050f2..HEAD
# commit id与HEAD之间的摘要
git shortlog v1.0..v2.0
git shortlog master..feature-branch
```
