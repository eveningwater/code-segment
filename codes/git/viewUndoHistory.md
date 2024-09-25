| 标题                                   | 标签                           |
| -------------------------------------- | ------------------------------ |
| viewUndoHistory(查看 Git 提交历史记录) | repository,branch(存储库,分支) |

有时，`git log` 无法解决问题，尤其是对于未显示在提交历史记录中的命令。幸运的是，有一种方法可以查看你的“提交”历史记录。`git reflog` 基本上是你在运行 `git rebase` 等“可怕”命令后的安全网。它不仅允许你查看你所做的提交，还允许你查看导致你提交的每个操作。

要查看你的提交历史记录，你可以使用 `git reflog`，它会显示 git 引用日志：

> 代码如下:

```shell
# 语法: git reflog
```

> 使用示例:

```shell
git reflog
# a332055 (HEAD -> main, origin/main, origin/HEAD) HEAD@{0}: commit: feat:'非重随机数数组'示例增加了ts代码段
# 3599c72 HEAD@{1}: commit: feat:添加了新的git代码段
# ba11f95 HEAD@{2}: commit: feat:添加了新的git代码段
# 112db2f HEAD@{3}: commit: feat:html代码段修复了跳转错误
# 6670a30 HEAD@{4}: commit: feat:html代码段 添加了示例代码
# 84753e4 HEAD@{5}: commit: feat:html代码段 添加了示例代码
# 9150aa5 HEAD@{6}: commit: feat: 添加了模板
# 7ba1959 HEAD@{7}: commit: feat: 添加了新的html代码段
# 6d23858 HEAD@{8}: pull: Fast-forward
# 913cb77 HEAD@{9}: commit: feat: 添加了新的html代码段
```

找到所需的提交后，可以使用 `git reset` 返回该提交。

> 代码如下:

```shell
# 语法: git reset [options]
```

> 使用示例:

```shell
git reset --hard 913cb77 # 返回到指定哈希值的提交
```

