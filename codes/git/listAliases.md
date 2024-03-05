| 标题                  | 标签                                  |
| --------------------- | ------------------------------------- |
| lineEndings(行结束符) | repository,configuration(存储库,配置) |

打印所有 git 别名的列表。

- 使用 `git config -l` 列出配置文件中设置的所有变量。
- 使用管道运算符 (|) 通过管道传输输出，并使用 `grep` 别名仅保留别名。
- 使用管道运算符 (|) 通过管道传输输出，并使用 `sed 's/^alias\.//g'` 删除别名。 每个别名的一部分。

> 代码如下:

```shell
# 语法
git config -l | grep alias | sed 's/^alias\.//g'
```

> 使用示例:

```shell
git config -l | grep alias | sed 's/^alias\.//g'
# st=status
# co=checkout
# rb=rebase
```
