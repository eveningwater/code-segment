| 标题                              | 标签         |
| --------------------------------- | ------------ |
| currentBranchName(查看当前分支名) | branch(分支) |

打印当前分支名称。

- 使用 `git rev-parse --abbrev-ref HEAD` 打印当前分支的名称。

> 代码如下:

```shell
# 语法
git rev-parse --abbrev-ref HEAD
```

> 使用示例:

```shell
git checkout branch-1
git rev-parse --abbrev-ref HEAD # 打印 `branch-1`
```
