| 标题                      | 标签             |
| ------------------------- | ---------------- |
| findLostFiles(丢失的提交) | repository(仓库) |

打印丢失文件和提交的列表。

- 使用 `git fsck --lost-found` 打印所有丢失对象的列表。
- 所有适当的文件将被提取到 .git/lost-found 目录中。

> 代码如下:

```shell
# 语法
git fsck --lost-found
```

> 使用示例:

```shell
git fsck --lost-found
# 丢失的提交 f406b60b1b15976cefa665e6cd2b7fc889eff729
```
