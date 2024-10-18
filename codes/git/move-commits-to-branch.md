| 标题                                | 标签                            |
| ----------------------------------- | ------------------------------- |
| moveCommitsToBranch(移动提交到分支) | repository,branch(存储库，分支) |

将本地提交从主分支移动到新分支。

- 使用 `git branch <branch>` 在当前 master 的顶端创建一个新分支。
- 使用 `git reset HEAD~<n> --hard` 回滚 `<n>` 提交并放弃更改。
- 使用 `git checkout <branch>` 切换到新分支。
- 仅当更改仅在本地提交且未推送到远程时才有效。

> 代码如下:

```shell
# 语法
git branch <branch>
git reset HEAD~<n> --hard
git checkout <branch>
```

> 使用示例:

```shell
git checkout master
git add .
git commit -m "Fix network bug"
git branch branch-1
# `branch-1` 分支被创建包含提交信息为"Fix network bug"
git reset HEAD~1 --hard # 从`master`分支中移除提交
git checkout branch-1
```
