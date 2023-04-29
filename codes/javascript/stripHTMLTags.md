| 标题                                  | 标签                              |
| ------------------------------------- | --------------------------------- |
| stripHTMLTags(从字符串删除 HTML 标签) | string,regexp(字符串，正则表达式) |

从字符串中删除 HTML/XML 标签。

- 使用正则表达式从字符串中删除 HTML/XML 标记。

```js
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');
```

> 调用方式:

```js
stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
```

> 应用场景
