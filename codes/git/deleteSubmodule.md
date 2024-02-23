| 标题                        | 标签                               |
| --------------------------- | ---------------------------------- |
| deleteSubmodule(删除子模块) | submodule,repository(子模块，仓库) |

从存储库中删除子模块。

- 使用 `git submodule deinit -f -- <submodule>`取消注册指定的 `<submodule>`。
- 使用 `rm -rf .git/modules/<submodule>` 删除子模块的目录。
- 使用 `git rm -f <submodule>` 删除子模块的工作树。

> 代码如下:

```shell
# 语法
git submodule deinit -f -- <submodule>
rm -rf .git/modules/<submodule>
git rm -f <submodule>
```

> 使用示例:

```shell
git submodule deinit -f -- code-segment
rm -rf .git/modules/code-segment
git rm -f code-segment
# 删除叫 `code-segment` 的子模块
```
