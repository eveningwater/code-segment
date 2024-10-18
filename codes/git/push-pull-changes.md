| 标题                    | 标签                           |
| ----------------------- | ------------------------------ |
| pushPullChanges(推与拉) | repository,branch(存储库,分支) |

使用 Git 的主要好处之一是能够与其他人在同一项目上进行协作。 这是通过设置所有协作者都可以访问的远程存储库来完成的。但是，为了进行协作，你必须将本地存储库与远程存储库同步。 这就是推和拉操作的用武之地。

## 将更改推送到远程仓库

为了将更改推送到远程存储库，你首先必须设置远程跟踪分支。 这通常是通过使用 `git branch` 和 `-u` 标志来完成的。然后，你可以使用 `git push` 将本地分支的最新更改推送到远程。

> 代码如下:

```shell
# 语法
#  git branch -u <remote>/<branch>
#  git push
```

> 使用示例:

```shell
git branch -u origin/branch-1
git push
# 远程“branch-1”分支现已与本地分支保持同步
```

或者，你可以将 `--set-upstream` 标志与 `git push` 一起使用来设置远程跟踪分支并一次性推送最新更改。仅当远程分支尚不存在时，这才有可能。

> 代码如下:

```shell
# 语法
# git push --set-upstream <remote> <branch>
```

> 使用示例:

```shell
git push --set-upstream origin branch-1
# 远程“branch-1”分支现已与本地分支保持同步
```

## 从远程仓库中拉取更改

与将更改推送到远程存储库类似，你必须先设置远程跟踪分支，然后才能从中提取更改。幸运的是，只要没有与远程分支同名的本地分支，`git checkout` 就足够聪明，可以为你执行此操作。然后，你可以使用 `git pull` 从远程获取并应用最新更改。

> 代码如下:

```shell
# 语法
#  git checkout <branch>
#  git pull
```

> 使用示例:

```shell
git checkout branch-1
git pull
# 本地“branch-1”分支现已与远程分支“branch-1”保持同步
```

如果你有一个与远程分支同名的本地分支并且不想覆盖它，事情会稍微复杂一些。你必须使用带有 `-b` 标志的 `git checkout` 来指定本地分支的名称，并使用 `--track` 标志来指定远程分支的名称。然后，你可以像往常一样使用 `git pull`。

> 代码如下:

```shell
# 语法
#  git checkout -b <local-branch> --track <remote>/<branch>
#  git pull
```

> 使用示例:

```shell
git checkout -b branch-one --track origin/branch-1
git pull
# 本地“branch-one”分支现已与远程分支“branch-1”保持同步
```
