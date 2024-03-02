| 标题                                      | 标签         |
| ----------------------------------------- | ------------ |
| forceUpdateRemoteBranch(强制更新远程分支) | branch(分支) |

在本地重写历史记录后强制更新远程分支。

- 使用 `git push -f` 强制更新远程分支，使用本地分支的更改覆盖它。
- 每当本地和远程存储库出现分歧时，都需要执行此操作。

> 代码如下:

```shell
# 语法
git push -f
```

> 使用示例:

```shell
git checkout branch-1
git pull
git rebase master
# 本地“branch-1”分支已重新基于“master”，因此与远程“branch-1”分支不同

git push -f # 强制更新远程“branch-1”分支
```
