| 标题                         | 标签                                |
| ---------------------------- | ----------------------------------- |
| commitTemplate(设置提交模板) | configuration,repository(配置,仓库) |

为当前存储库设置提交信息模板。

使用 `git config commit.template <file>` 将 `<file>` 指定为当前存储库的提交信息模板。

> 代码如下:

```shell
# 语法
git config commit.template <file>
```

> 使用示例:

```shell
git config commit.template "commit-template"
# 设置commit-template文件作为提交信息的模板
```

