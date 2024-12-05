| 标题                                     | 标签                                 |
| ---------------------------------------- | ------------------------------------ |
| slugify(生成适合 URL 的短横线分隔字符串) | string,intermediate(字符串,两者之间) |

将字符串转换为 URL 友好的 slug。

- 使用 preg_replace() 将无效字符替换为破折号，使用 iconv() 将文本转换为 ASCII，使用 strtolower() 和 trim() 转换为小写并删除多余的空格。

> 代码如下:

```php
function slugify($str){
    $str = preg_replace('~[^\pL\d]+~u','-',$str);
    $str = iconv('utf-8','us-ascii//TRANSLIT',$str);
    $str = preg_replace('~[^-\w]+~','',$str);
    $str = preg_replace('~-+~','-',$str);
    $str = strtolower($str);
    $str = trim($str, " \t\n\r\0\x0B-");
    if(empty($str)){
        return 'n-a';
    }
    return $str;
}
```

### `slugify`函数解析

`slugify` 是一个用于将文本转换成适合 URL 或路径的 "slug"（短横线连接的小写字母数字字符串）的函数。这个函数的目标是将一段文本（如文章标题、用户输入等）格式化为一个符合 URL 安全、易读的字符串。`slug` 这个词常用来表示 URL 中用来标识资源的部分，它通常由字母、数字和短横线组成，且没有空格和特殊符号。

### 各步骤解析：

1. **替换非字母数字字符为短横线**：
   ```php
   $text = preg_replace('~[^\pL\d]+~u', '-', $text);
   ```
   - `\pL` 匹配任何字母字符（无论大小写）。
   - `\d` 匹配数字字符。
   - 这个正则表达式匹配除了字母和数字之外的所有字符（如空格、标点符号等），并将它们替换为短横线 (`-`)。
   - `u` 修饰符表示支持 Unicode 编码。

2. **将文本转换为 ASCII 格式**：
   ```php
   $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);
   ```
   - 这里将字符串从 UTF-8 转换为 US-ASCII 编码，并尝试将不可转换的字符进行近似转译。
   - 例如，字符 `é` 将被转化为 `e`，`ç` 会转化为 `c`，等等。

3. **移除非字母、非数字和非短横线字符**：
   ```php
   $text = preg_replace('~[^-\w]+~', '', $text);
   ```
   - 这个正则表达式移除除了字母、数字和短横线之外的所有字符。
   - `\w` 匹配字母、数字和下划线，`-` 作为例外被保留下来。

4. **将多个短横线替换为一个短横线**：
   ```php
   $text = preg_replace('~-+~', '-', $text);
   ```
   - 如果在文本中有多个连续的短横线，这一行会将其合并成一个短横线。

5. **将文本转为小写**：
   ```php
   $text = strtolower($text);
   ```
   - 将整个文本转化为小写字母，以保证 slug 一致性。

6. **去除两端的空白和短横线**：
   ```php
   $text = trim($text, " \t\n\r\0\x0B-");
   ```
   - 使用 `trim` 函数去除字符串两端的空白字符（如空格、制表符、换行符等）以及短横线。

7. **处理空字符串**：
   ```php
   if (empty($text)) {
     return 'n-a';
   }
   ```
   - 如果最终处理后的文本为空，函数返回 `'n-a'`，表示 "无有效文本" 或 "无内容"。

8. **返回处理后的文本**：
   ```php
   return $text;
   ```
   - 如果文本不为空，返回格式化后的 `slug` 字符串。

### 总结

这个函数 `slugify` 主要用途是生成适合 URL 使用的短横线分隔字符串。它会：

- 删除不必要的特殊字符
- 统一转为小写字母
- 处理空格、符号等，确保结果适合用于 URL 或文件名


> 使用方式:

```php
slugify('Hello World'); // 'hello-world'
```
