| 标题                                      | 标签         |
| ----------------------------------------- | ------------ |
| stageUnstageFiles(从暂存区添加或删除文件) | commit(提交) |

Git 的暂存区用于准备提交的更改。你可以从暂存区域添加或删除文件，以控制下一次提交中包含哪些更改。

## 暂存文件

添加对暂存区域的更改就像使用 `git add <pathspec>` 命令一样简单，并使用适当的文件名或 fileglob。这样，你可以添加单个文件、具有特定扩展名的文件或工作目录中的所有更改。

> 代码如下:

```shell
# Usage: git add <pathspec>
```

> 使用示例:

```shell
git add "code-segment.txt"
# 添加code-segment.txt文件到暂存区

git add src/*.json
# 添加src目录下所有json文件到暂存区

git add .
# 添加所有文件到暂存区
```

## 从暂存区删除文件

随后，您可以使用 `git Restore --staged <pathspec>` 命令从暂存区域中删除文件。此命令允许您取消暂存单个文件、具有特定扩展名的文件或暂存区域中的所有更改。

> 代码如下:

```shell
# Usage: git restore --staged <pathspec>
```

> 使用示例:

```shell
git restore --staged "code-segment.txt"
# 从暂存区移除code-segment.txt文件

git restore --staged src/*.json
# 从暂存区中移除src目录下的所有json文件

git restore --staged .
# 从暂存区中移除所有文件
```
