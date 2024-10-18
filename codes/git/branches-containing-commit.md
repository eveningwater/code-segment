| 标题                                         | 标签                      |
| -------------------------------------------- | ------------------------- |
| branchesContainingCommit(包含提交的所有分支) | branch,commit(分支，提交) |

提交是 Git 的构建块，用于跟踪存储库的更改。它们可用于识别存储库历史记录中的特定点，并且可以通过其提交哈希来引用。但是除了查找提交之外，如何找到包含它的所有分支呢？当你想要找出哪些分支包含特别的错误修复或功能时，此类信息非常有用。

## 包含提交的分支

像往常一样，Git 对这个问题有一个简单的解决方案。 将 `git branch` 与 `--contains` 标志一起使用将打印包含特定提交的所有分支。

> 代码如下:

```shell
# 语法
git branch --contains <commit>
```

> 使用示例:

```shell
# 提交的hash名引用
git branch --contains 3050fc0
# 将会展示对应提交的分支
```

## 不包含提交的分支

同样，你也可以使用 `--no-contains` 标志查找不包含特定提交的分支。

> 代码如下:

```shell
# 语法
 git branch --no-contains <commit>
```

> 使用示例:

```shell
# 提交的hash名引用
git branch --no-contains 3050fc0
# 将会展示不包含该提交的分支
```
