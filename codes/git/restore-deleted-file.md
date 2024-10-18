| 标题                                 | 标签         |
| ------------------------------------ | ------------ |
| restoreDeletedFile(恢复被删除的文件) | branch(分支) |

恢复在特定提交中删除的文件。

- 使用 `git checkout <commit>^ -- <file>` 恢复指定`<commit>`中删除的指定`<file>`。

> 代码如下:

```shell
# 语法
# git checkout <commit>^ -- <file>
```

> 使用示例:

```shell
# "xxx.txt"在这个提交中`3052fc0`被删除
git checkout 3052fc0^ -- "xxx.txt"
# 恢复 xxx.txt 文件
```
