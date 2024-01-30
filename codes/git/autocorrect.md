| 标题                               | 标签                |
| ---------------------------------- | ------------------- |
| autocorrect(自动更正 git 错误命令) | configuration(配置) |

配置 git 自动更正输入错误的命令。

使用 `git config --global help.autocorrect 1` 启用 git 的自动更正。

> 代码如下:

```shell
git config --global help.autocorrect 1
```

> 使用示例:

```shell
# 在终端运行如下命令
git config --global help.autocorrect 1
# 在终端输入以下错误命令
git sttaus
# git会自动更正命令为`git status`
```
