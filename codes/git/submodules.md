| 标题               | 标签                               |
| ------------------ | ---------------------------------- |
| submodules(子目录) | repository,submodule(仓库，子目录) |

Git 子模块是一项强大的功能，允许你在自己的存储库中包含其他存储库。这对于包含你想要与主存储库分开的库或其他代码非常有用。

## 添加子模块

要将子模块添加到存储库，可以使用 `git submodule add <upstream-path> <local-path>`。第一个参数是你要添加为子模块的存储库的 URL，第二个参数是你希望子模块在存储库中所在的路径。

> 代码如下:

```shell
# 语法: git submodule add <upstream-path> <local-path>
```

> 使用示例:

```shell
git submodule add https://github.com/eveningwater/code-segment ./code-segment
# 从https://github.com/eveningwater/code-segment仓库地址创建一个包含code-segment子模块的目录
```

添加子模块将在存储库中创建一个新目录，其中包含子模块存储库的内容。子模块目录将包含一个指向子模块存储库的 .git 目录，允许你独立于主存储库跟踪子模块的更改。

此外，还将在存储库的根目录中创建一个 .gitmodules 文件，其中包含有关子模块的信息，例如子模块存储库的 URL 和子模块所在的路径。

## 初始化子模块

将子模块添加到存储库后，你将需要初始化并更新子模块以获取其内容。你可以通过运行 `git submodule update --init --recursive` 来完成此操作。

虽然 `--recursive` 标志并不是严格必要的，但它确保所有嵌套的子模块也被更新。如果子模块本身包含子模块，这很有用，因为它将确保所有子模块都被初始化和更新。

> 代码如下:

```shell
# 语法: git submodule update --init --recursive
```

> 使用示例:

```shell
git submodule update --init --recursive
# 克隆缺少的子模块并检查提交
```

## 更新子模块

当你克隆包含子模块的存储库时，将在特定提交时检出子模块。当你想将子模块的内容更新到最新版本时，可以使用 `git submodule update --recursive --remote`。同样，`--recursive` 标志确保子模块中的任何子模块也被更新。

> 代码如下:

```shell
# 语法: git submodule update --recursive --remote
```

> 使用示例:

```shell
git submodule update --recursive --remote
# 从各自的远程仓库拉出所有子模块
```

## 重命名子模块

幸运的是，重命名子模块就像重命名目录一样简单。使用 `git mv <old-submodule> <new-submodule>` 将重命名包含子模块的目录。这还将更新 .gitmodules 文件中子模块的路径。

> 代码如下:

```shell
# 语法: git mv <old-submodule> <new-submodule>
```

> 使用示例:

```shell
git mv code-segment code
# 重命名code-segment子模块为code
```

## 删除子模块

删除子模块稍微复杂一些。你首先必须使用 `git submodule deinit -f -- <submodule>` 取消注册子模块。然后，你需要使用 `rm -rf .git/modules/<submodule>` 删除 `.git/modules/<submodule>` 目录。最后，你可以使用 `git rm -f <submodule>` 删除子模块的工作树。

> 代码如下:

```shell
# 语法:
#  git submodule deinit -f -- <submodule>
#  rm -rf .git/modules/<submodule>
#  git rm -f <submodule>
```

> 使用示例:

```shell
git submodule deinit -f -- code-segment
rm -rf .git/modules/code-segment
git rm -f code-segment

# 删除code-segment子模块
```
