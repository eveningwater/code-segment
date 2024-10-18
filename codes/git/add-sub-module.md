| 标题                     | 标签                                |
| ------------------------ | ----------------------------------- |
| addSubModule(添加子模块) | repository,submodule(存储库,子模块) |

将新的子模块添加到存储库。

- 使用 `git submodule add <upstream-path> <local-path>` 将新子模块从远程路径添加到本地路径。

> 代码如下:

```shell
git submodule add <upstream-path> <local-path>
```

> 使用示例:

```shell
git submodule add https://github.com/eveningwater/code-segment ./code-segment
# 在终端运行命令将会在当前目录下创建一个code-segment目录，并将仓库源码复制到该目录下
```
