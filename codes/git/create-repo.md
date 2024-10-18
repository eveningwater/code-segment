| 标题                       | 标签             |
| -------------------------- | ---------------- |
| createRepo(创建一个存储库) | repository(仓库) |

初始化一个新的 git 存储库，设置 git 所需的所有配置文件。

- 使用 `git init` 在当前目录中初始化一个空存储库。
- 或者，使用 `git init [<directory>]` 初始化指定 `<directory>` 中的存储库。

> 在现有存储库中运行 git init 是安全的。
> 你只需为每个存储库运行 git init 一次。

> 代码如下:

```shell
# 语法
git init [<directory>]
```

> 使用示例:

```shell
cd ~/my_project
git init # 初始化一个仓库在~/my_project
cd ~
git init my_project # 初始化一个仓库在~/my_project
```
