| 标题                            | 标签         |
| ------------------------------- | ------------ |
| interactiveRebase(交互分支变动) | branch(分支) |

执行交互式分支变动。

- 使用 `git rebase -i <commit>` 执行交互式变基。
- 您可以编辑变基文件来更改提交的顺序以及对每个提交执行的操作（选择、压缩、删除、重写等）。
- 您可以选择使用 `--autosquash` 选项来自动压缩修复提交。
- 如果您有合并冲突或停止进行更改，则可以在准备好后使用 `git rebase --continue` 继续变基，或使用 `git rebase --abort` 中止它。

> 代码如下:

```shell
# 语法
git rebase -i [--autosquash] <commit>
```

> 使用示例:

```shell
git rebase -i 3050fc0de
# 从“3050fc0de”开始执行交互式分支变动
git rebase -i --autosquash HEAD~5
# 对最近 5 次提交执行交互式分支变动，
# 自动压缩修复提交
```
