| 标题                                | 标签         |
| ----------------------------------- | ------------ |
| commitDifferentDate(不同日期的提交) | commit(提交) |

有时，你可能会遇到需要创建日期与当前日期不同的提交的情况。 幸运的是，你可以使用 `GIT_AUTHOR_DATE` 和 `GIT_COMMITTER_DATE` 来处理此问题：

> 代码如下:

```shell
# 语法
GIT_AUTHOR_DATE=<date>
GIT_COMMITTER_DATE=<date>
git commit -m <commit>
```

> 使用示例:

```shell
GIT_AUTHOR_DATE='Mon May 18 19:32:10 2020 -0400'
GIT_COMMITTER_DATE='Mon May 18 19:32:10 2020 -0400'
git commit -m 'Commit from the past'
```

如上例所示，你可以将这两个值设置为你喜欢的任何日期，你的代码将在该日期提交。 请注意，上述值的格式为`'date +"%s %z"'`，也称为内部原始 git 格式，但你也可以使用其他格式，例如 RFC 2822 ('Mon, 18 May 2020 19:32:10 -0400')、ISO 8601 ('2020-05-18 19:32:10 -0400')、本地日期 ('Mon May 18 19:32:10 2020'),、简写('2020-05-18') 或相对值(5.seconds.ago, 2.years.3.months.ago, '6am yesterday')。
