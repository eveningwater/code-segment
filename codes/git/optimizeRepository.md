| 标题                           | 标签               |
| ------------------------------ | ------------------ |
| optimizeRepository(优化存储库) | repository(存储库) |

优化本地存储库。

- 使用 `git gc --prune=now --aggressive` 来垃圾收集松散对象。

> 代码如下:

```shell
# 语法
git gc --prune=now --aggressive
```

> 使用示例:

```shell
git gc --prune=now --aggressive
# 优化本地存储库
```
