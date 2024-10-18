| 标题                       | 标签         |
| -------------------------- | ------------ |
| createCommit(创建一个提交) | commit(提交) |

创建包含暂存更改的新提交。

- 使用 `git commit -m <message>` 创建具有指定 `<message>` 的新提交。

> 代码如下:

```shell
# 语法
git commit -m <message>
```

> 使用示例:

```shell
# 更改一些代码文件
git add .
git commit -m "feat: 添加了xxx功能";
# 创建一个消息模板为`feat: 添加了xxx功能`的新提交
```
