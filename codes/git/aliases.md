| 标题          | 标签                             |
| ------------- | -------------------------------- |
| aliases(别名) | configuration,command(配置,命令) |

使用以下命令创建别名，将 `<alias>` 替换为别名名称，将 `<command>(相关命令)` 替换为要设置别名的命令：

此外，您可以使用编辑配置文件并一次添加多个别名。

> 代码如下:

```shell
git config --global alias.<alias> <command>
```

> 使用示例:

```shell
git config --global alias.cm commit -m
# 在终端运行该命令，然后使用`git commit -m "提交代码"` 提交代码的命令则可以使用`git cm "提交代码"`来代替
```

## 一些常用的有用的别名参考

```shell
[alias]
  co = checkout
  cob = checkout -b
  coo = !git fetch && git checkout
  br = branch
  brd = branch -d
  st = status
  aa = add -A .
  unstage = reset --soft HEAD^
  cm = commit -m
  amend = commit --amend -m
  fix = commit --fixup
  undo = reset HEAD~1
  rv = revert
  cp = cherry-pick
  pu = !git push origin `git branch --show-current`
  fush = push -f
  mg = merge --no-ff
  rb = rebase
  rbc = rebase --continue
  rba = rebase --abort
  rbs = rebase --skip
  rom = !git fetch && git rebase -i origin/master --autosquash
  save = stash push
  pop = stash pop
  apply = stash apply
  rl = reflog
```
