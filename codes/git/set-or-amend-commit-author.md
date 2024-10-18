| 标题                                         | 标签         |
| -------------------------------------------- | ------------ |
| setOrAmendCommitAuthor(设置或者修改提交作者) | commit(提交) |

每个 Git 提交都与一个作者相关联，通常在你的计算机上进行全局配置。但如果你想以其他人的身份做出承诺怎么办？如果你的 Git 配置错误或者你想对特定提交使用不同的电子邮件，你该怎么办？如果你已经提交并想要更改其作者，该怎么办？

## 创建不同作者的提交

只要你有作者的信息，你就可以创建他们的提交。使用 `git commit` 的 `--author` 选项将允许你由不同的作者创建新的提交。

> 代码如下:

```shell
# Syntax: git commit --author="<name> <email>"
```

> 使用示例:

```shell
# 对文件做出一些更改
git add .
git commit -m "Fix some bug" --author="eveningwater <eveningwater@qq.com>"
# 为eveninwater创建一个提交=
```

## 更改最后一次提交的作者

如果你想更改上次提交的作者，只需在上一个命令中添加 `--amend` 标志即可。你可以在我们的修改提交指南中了解有关更新提交的更多信息。

> 代码如下:

```shell
# Syntax: git commit --amend --author="<name> <email>"
```

> 使用示例:

```shell
# 对文件做出一些更改
git add .
git commit -m "Fix some bug" --author="eveningwater <eveningwater@qq.com>"
# 为eveninwater创建一个提交
# 编辑或者新增文件
git add .
git commit --amend --author="eveningwater <eveningwater@qq.com>"
# 最后一次提交现已更新，作者是“eveningwater”
```

## 注意事项

更改提交的作者也会更改其 SHA-1 校验。如果你已经将提交推送到远程存储库，则需要将更新的提交强制推送到远程。

此外，如果你的远程存储库配置为仅接受签名的提交，则除非你拥有原始作者的 GPG 密钥，否则你可能无法对提交进行签名。

最后，你不能使用 `--author` 将多个作者添加到提交中。如果你想这样做，可以在相关[代码片段](codes/git/githubCoAuthors.md)中找到更多信息。
