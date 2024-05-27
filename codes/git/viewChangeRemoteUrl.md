| 标题                                    | 标签             |
| --------------------------------------- | ---------------- |
| viewChangeRemoteUrl(查看更改的远程地址) | repository(仓库) |

Git 存储库的远程 URL 是远程服务器（例如 GitHub、GitLab 或 Bitbucket）上存储库的 URL。此 URL 用于将更改推送到远程存储库或从远程存储库拉取更改。查看和更改远程 URL 对于与他人协作和管理存储库至关重要。

## 查看远程地址

你可以使用 `git config --get remote.origin.url` 显示远程存储库的 URL。origin 是远程存储库的默认名称，但你可以将其替换为远程存储库的名称。

> 代码如下:

```shell
# 语法: git config --get remote.origin.url
```

> 使用示例:

```shell
git config --get remote.origin.url
# https://github.com/eveningwater/code-segment
```

## 更改远程地址

类似地，你可以使用 `git remote set-url origin <url>` 将远程存储库的 URL 更改为 `<url>`。同样，如果 origin 与你的远程存储库的名称不同，请将其替换为远程存储库的名称。

> 代码如下:

```shell
# 语法: git remote set-url origin <url>
```

> 使用示例:

```shell
git remote set-url origin https://github.com/eveningwater/code-segment
# 远程地址现在就是https://github.com/eveningwater/code-segment
```
