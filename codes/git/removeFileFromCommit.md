| 标题                                   | 标签         |
| -------------------------------------- | ------------ |
| removeFileFromCommit(从提交中删除文件) | commit(提交) |

从上次提交中删除文件而不更改其消息。

- 使用 `git rm --cached <file>` 从索引中删除指定的 `<file>`。
- 使用 `git commit --amend` 更新上次提交的内容，而不更改其消息。

> 代码如下:

```shell
# 语法
git rm --cached <file>
git commit --amend
```

> 使用示例:

```shell
git rm --cached "code-segment.txt"
git commit --amend
# 从上次提交中删除"code-segment.txt"
```
