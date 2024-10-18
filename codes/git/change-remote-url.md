| 标题                              | 标签                       |
| --------------------------------- | -------------------------- |
| changeRemoteUrl(修改远程仓库地址) | repository,url(仓库，地址) |

更改远程仓库的地址。

- 使用 `git remote set-url origin <url>` 将远程存储库的 URL 更改为 `<url>`。

> 代码如下:

```shell
# 语法
git remote set-url origin <url>
```

> 使用示例:

```shell
git remote set-url origin https://github.com/eveningwater/code-segment
# 远程仓库地址将是https://github.com/eveningwater/code-segment
```
