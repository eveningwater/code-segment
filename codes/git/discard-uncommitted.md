| 标题                                 | 标签         |
| ------------------------------------ | ------------ |
| discardUncommitted(放弃未提交的更改) | branch(分支) |

放弃对当前分支的所有未提交的更改。

- 使用 `git reset --hard HEAD` 重置本地目录以匹配最新提交并放弃所有未暂存的更改。

> 代码如下:

```shell
# 语法
git reset --hard HEAD
```

> 使用示例:

```shell
git reset --hard HEAD
# 放弃所有未暂存的更改,可以理解为回退
```
