| 标题                                      | 标签                                 |
| ----------------------------------------- | ------------------------------------ |
| automaticPushUpstream(自动提交到远程仓库) | configuration,repository(配置，仓库) |

在推送时手动创建远程分支可能是一项繁琐的任务。幸运的是，Git 提供了一种自动化此过程的方法。可以使用 git config 在推送时启用自动远程分支创建：

> 代码如下:

```shell
git config --global --add --bool push.autoSetupRemote true
```

> 使用示例:

```shell
git config --global --add --bool push.autoSetupRemote true
git checkout -b my-branch
git push
# 自动提交到远程分支my-branch，如果分支不存在，则会自动创建
```

使用 `push.autoSetupRemote` 将自动在远程仓库上创建一个新分支（如果它不存在）,从此设置中获益最多的工作流是本地分支应与其远程对应分支具有相同名称的工作流,也可以使用 `--global` 标志在你的计算机上全局启用此设置。
