| 标题                                       | 标签                            |
| ------------------------------------------ | ------------------------------- |
| setDefaultPushBranch(设置默认推送分支名称) | branch,configuration(分支,配置) |

默认推送时使用当前分支的名称作为远程分支的名称。

- 使用 `git config push.default current` 将远程分支的名称设置为默认的当前本地分支之一。
- 你可以使用 `--global` 标志全局配置此选项。

> 代码如下:

```shell
# 语法
git config [--global] push.default current
```

> 使用示例:

```shell
git config --global push.default current

git checkout -b my-branch
git push -u
# 推送到origin/my-branch分支
```
