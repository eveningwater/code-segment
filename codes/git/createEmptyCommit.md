| 标题                                | 标签         |
| ----------------------------------- | ------------ |
| createEmptyCommit(创建一个空的提交) | commit(提交) |

创建一个空提交。

- 使用 `git commit --allow-empty -m <message>` 使用提供的 `<message>` 创建一个空提交。

> 代码如下:

```shell
# 语法
git commit --allow-empty -m <message>
```

> 使用示例:

```shell
git commit --allow-empty -m "空提交"
# 创建一个消息模板为`空提交`的空提交
```
