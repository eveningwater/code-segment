| 标题                                        | 标签                               |
| ------------------------------------------- | ---------------------------------- |
| changeRemoteUrl(克隆缺少的子模块并检查提交) | repository,submodule(仓库，子模块) |

克隆缺少的子模块并检查提交。

- 使用 `git submodule update --init --recursive` 克隆丢失的子模块并检查提交。

> 代码如下:

```shell
# 语法
git submodule update --init --recursive
```

> 使用示例:

```shell
git submodule update --init --recursive
# 将会复制丢失的子模块，并检查提交
```
