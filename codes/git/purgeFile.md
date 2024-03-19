| 标题                | 标签                           |
| ------------------- | ------------------------------ |
| purgeFile(清除文件) | repository,remote(存储库,远程) |

从历史记录中完全清除文件。

- 使用 `git rm --cached --ignore-unmatch <path>` 删除指定 `<path>` 中的文件。
- 使用 `git filter-branch --force --index-filter <command> --prune-empty --tag-name-filter cat -- --all` 重写分支的历史记录，向其传递上一个命令。
- 您可以选择使用 `git push <remote> --force --all` 将更改强制推送到远程存储库。

> 警告: 这是一种破坏性操作，会重写整个存储库的历史记录。确保您知道自己在做什么。

> 代码如下:

```shell
# 语法
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch <path>" \
  --prune-empty --tag-name-filter cat -- --all
git push <remote> --force --all
```

> 使用示例:

```shell
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch config/apiKeys.json" \
  --prune-empty --tag-name-filter cat -- --all
# 从历史记录中清除`config/apiKeys.json`
git push origin --force --all
# 强制将改变推送到远程仓库
```
