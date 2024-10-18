| 标题                  | 标签               |
| --------------------- | ------------------ |
| pickCommits(挑选提交) | repository(存储库) |

应用由一项或多项提交引入的更改。

- 使用 `git cherry-pick <commit>` 从单个提交中选择更改。
- 使用 `git cherry-pick <commit-1> <commit-2>...` 从所有以空格分隔的提交中选择更改。
- 使用 `git cherry-pick <first-commit>..<last-commit>` 从一系列提交中选择更改。

> 代码如下:

```shell
# 语法
git cherry-pick (<commit>... | <first-commit>..<last-commit>)
```

> 使用示例:

```shell
git cherry-pick 3050fc0de
# 挑选id为3050fc0de的提交
```
