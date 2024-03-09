| 标题                                      | 标签                                               |
| ----------------------------------------- | -------------------------------------------------- |
| githubCoAuthors(如何添加多个作者到提交中) | github,programming，webdev(存储库，应用，前端开发) |

您可以通过在提交消息中添加一个或多个共同作者预告片来将多个作者添加到 git 提交中。

> 代码如下:

```shell
# 语法
$ git commit -m "Refactor usability tests.
>
>
Co-authored-by: name <name@example.com>
Co-authored-by: another-name <another-name@example.com>"
```

## 注意

- 要正确地将提交归因于共同作者，您必须使用与其 GitHub 帐户关联的电子邮件。
- 如果某人的电子邮件是私人的，您可以使用他们的 GitHub 提供的无回复电子邮件。
- 在任何共同创作的预告片之前留下一个或最好两个空行。
