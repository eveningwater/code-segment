| 标题                                              | 标签              |
| ------------------------------------------------- | ----------------- |
| updateCommitMessageOrContents(更新提交信息或内容) | commit(分支,提交) |

你是否曾经想更改上次提交的消息或内容？ 也许你忘记添加文件，或者你在提交消息中拼错了某些内容。无论出于何种原因，Git 都为你提供了 `git commit` 命令的 `--amend` 选项。

## 更改最后一次提交的消息

如果你只想更改最后一次提交的消息，可以使用 `--amend` 并简单地添加 `-m` 选项，后跟新消息。这会将最后一次提交的消息替换为新的消息。

> 代码如下:

```shell
# 语法: git commit --amend -m <message>
```

> 使用示例:

```shell
git add .
git commit -m "Fix bug"
# 创建提交: Fix bug

git commit --amend -m "Fix the bug"
# 上一次提交信息现在已经是 "Fix the bug"
# 这同样会更改它的SHA-1校验
```

## 更改最后一次提交的内容

如果要更改上次提交的内容，可以在暂存要添加到上次提交的更改后使用 `--amend`。这会将任何分阶段更改添加到最后一次提交，而不更改其消息。

如果你想保留相同的提交消息并只添加暂存的更改，可以使用 `--no-edit` 来阻止 Git 打开默认编辑器来更改提交消息。

> 代码如下:

```shell
# 语法: git commit --amend --no-edit
```

> 使用示例:

```shell
git add .
git commit -m "Fix bug"
# 创建提交: Fix bug

# Edit or add files
git add .
git commit --amend --no-edit
# 上一次提交包含了被编辑和被添加的文件
# 这同样会更改它的SHA-1校验
```
