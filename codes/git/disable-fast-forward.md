| 标题                             | 标签                                 |
| -------------------------------- | ------------------------------------ |
| disableFastForward(禁用快速合并) | configuration,repository(配置，仓库) |

禁用合并提交时的默认快进。

- 使用 `git config --add merge.ff false` 禁用所有分支的快速合并，即使这是可能的。
- 可以使用 `--global` 标志全局配置此选项。

> 代码如下:

```shell
# 语法
git config [--global] --add merge.ff false
```

> 使用示例:

```shell
git checkout master
git merge my-branch
# 即使可能也永远不会快速合并
```
