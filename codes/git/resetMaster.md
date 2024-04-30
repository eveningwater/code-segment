| 标题                    | 标签                         |
| ----------------------- | ---------------------------- |
| resetMaster(重置主分支) | repository,branch(仓库,分支) |

如果你曾经使用过 Git，你很可能遇到过本地 master 分支与远程不同步的情况。如果你对 master 分支进行了一些本地更改并希望将其重置以匹配远程分支，则可能会发生这种情况。

解决此问题的第一步是确保你拥有来自远程的最新更新。你可以使用 `git fetch origin` 来完成此操作。之后，你可以使用 `git checkout master` 切换到 master 分支，并使用 `git reset --hard origin/master` 重置它以匹配远程分支。

> 代码如下:

```shell
# 语法
#  git fetch origin
#  git checkout master
#  git reset --hard origin/master
```

> 使用示例:

```shell
git fetch origin
git checkout master
git reset --hard origin/master
# 本地“master”分支现已与远程“master”保持同步
```

> 你可以对任何分支（而不仅仅是主分支）遵循此过程。 只需将 master 替换为你要重置的分支的名称即可。
