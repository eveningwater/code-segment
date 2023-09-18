| 标题                   | 标签                                            |
| ---------------------- | ----------------------------------------------- |
| caesarCipher(凯撒密码) | algorithm,string,beginner(算法，字符串，初学者) |

使用凯撒密码加密或解密给定的字符串。

- 使用模 (%) 运算符和三元运算符 (?) 计算正确的加密/解密密钥。
- 使用扩展运算符 (...) 和 Array.prototype.map() 迭代给定字符串的字母。
- 使用 String.prototype.charCodeAt() 和 String.fromCharCode() 适当地转换每个字母，忽略特殊字符、空格等。
- 使用 Array.prototype.join() 将所有字母组合成一个字符串。
- 将 true 传递给最后一个参数 decrypt，以解密加密字符串。

> 代码如下:

```js
const caesarCipher = (str, shift, decrypt = false) => {
  const s = decrypt ? (26 - shift) % 26 : shift;
  const n = s > 0 ? s : 26 + (s % 26);
  return [...str]
    .map((l, i) => {
      const c = str.charCodeAt(i);
      if (c >= 65 && c <= 90)
        return String.fromCharCode(((c - 65 + n) % 26) + 65);
      if (c >= 97 && c <= 122)
        return String.fromCharCode(((c - 97 + n) % 26) + 97);
      return l;
    })
    .join('');
};
```

> 调用方式:

```js
caesarCipher('Hello World!', -3); // 'Ebiil Tloia!'
caesarCipher('Ebiil Tloia!', 23, true); // 'Hello World!'
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/caesarCipher.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/caesarCipher.html"></iframe>
