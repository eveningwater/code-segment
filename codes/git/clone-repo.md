| 标题                | 标签                          |
| ------------------- | ----------------------------- |
| cloneRepo(复制仓库) | repository,remote(仓库，远程) |

复制现有存储库，创建其本地副本。

- 使用 `git clone <url>` 将现有存储库从 `<url>` 复制到本地目录。 该目录的名称将基于复制存储库的名称。
- 或者，使用 `git clone <url> [<directory>]` 将存储库复制到指定的本地 `<directory>` 中。

> 代码如下:

```shell
# 语法
git clone <url> [<directory>]
```

> 使用示例:

```shell
git clone https://github.com/eveningwater/code-segment
# 将会复制仓库代码到当前目录
git clone https://github.com/eveningwater/code-segment my-project
# 复制仓库代码到当前的my-project目录，如果目录不存在，则会创建该目录
```
