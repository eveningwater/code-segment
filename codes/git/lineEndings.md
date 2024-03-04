| 标题                  | 标签                                  |
| --------------------- | ------------------------------------- |
| lineEndings(行结束符) | repository,configuration(存储库,配置) |

配置存储库的行结束符。

- 使用 `git config core.eol [lf | crlf]` 配置行结尾。
- lf 是 UNIX 行结尾 (\n)，而 crlf 是 DOS 行结尾 (\r\n)。

> 代码如下:

```shell
# 语法
git config core.eol [lf | crlf]
```

> 使用示例:

```shell
git config core.eol lf
# 配置为使用 UNIX 行结尾
```
