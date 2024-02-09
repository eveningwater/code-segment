| 标题                 | 标签                                 |
| -------------------- | ------------------------------------ |
| configUser(用户配置) | configuration,repository(配置，仓库) |

配置 git 的用户信息。

- 使用 `git config user.email <email>` 设置当前仓库的用户邮箱。
- 使用 `git config user.name <name>` 设置当前仓库的用户名。
- 可以使用 --global 标志来配置全局用户信息。

> 代码如下:

```shell
# 语法
git config [--global] user.email <email>
git config [--global] user.name <name>
```

> 使用示例:

```shell
git config user.email "854806732@qq.com"
git config user.name "eveningwater"
# 配置当前仓库用户邮箱为854806732@qq.com以及用户名为eveningwater
git config --global user.email "854806732@qq.com"
git config --global user.name "eveningwater"
# 全局配置配置用户邮箱为854806732@qq.com以及用户名为eveningwater
```
