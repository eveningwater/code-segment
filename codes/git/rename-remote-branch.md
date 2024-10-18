| 标题                               | 标签         |
| ---------------------------------- | ------------ |
| renameRemoteBranch(远程分支重命名) | branch(分支) |

在本地和远程重命名分支。

- 使用 `git branch -m <old-name> <new-name>` 将本地 `<old-name>` 分支重命名为 `<new-name>`。
- 使用 `git push origin --delete <old-name>` 删除旧的远程分支。
- 使用 `git checkout <new-name>` 切换到重命名的分支。
- 使用 `git push origin -u <new-name>` 将 `<new-name>` 设置为重命名分支的远程分支。

> 代码如下:

```shell
# 语法
# git branch -m <old-name> <new-name>
# git push origin --delete <old-name>
# git checkout <new-name>
# git push origin -u <new-name>
```

> 使用示例:

```shell
git checkout master
git branch -m branch-1 branch-2    # 重命名本地分支`branch-1`为`branch-2`
git push origin --delete branch-1
git checkout branch-2
git push origin -u branch-2 # 重命名远程分支为`branch-2`
```
