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

如上例所示，你可以将这两个值设置为你喜欢的任何日期，你的代码将在该日期提交。 请注意，上述值的格式为`'date +"%s %z"'`，也称为内部原始 git 格式，但你也可以使用其他格式，例如 RFC 2822 ('Mon, 18 May 2020 19:32:10 -0400')、ISO 8601 ('2020-05-18 19:32:10 -0400')、本地日期 ('Mon May 18 19:32:10 2020'),、简写('2020-05-18') 或相对值(5.seconds.ago, 2.years.3.months.ago, '6am yesterday')。
