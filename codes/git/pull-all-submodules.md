| 标题                                    | 标签                                |
| --------------------------------------- | ----------------------------------- |
| pullAllSubmodules(从远程拉取所有子模块) | repository,submodule(存储库,子模块) |

从各自的远程仓库拉出所有子模块。

- 使用 `git submodule update --recursive --remote` 从各自的远程提取所有子模块。

> 代码如下:

```shell
# 语法
git submodule update --recursive --remote
```

> 使用示例:

```shell
git submodule update --recursive --remote
# 将会拉取远程所有子模块
```
