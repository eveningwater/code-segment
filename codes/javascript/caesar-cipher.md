| 标题                   | 标签                                            |
| ---------------------- | ----------------------------------------------- |
| caesarCipher(凯撒密码) | algorithm,string,beginner(算法，字符串，初学者) |

使用凯撒密码加密或解密给定的字符串。

- 使用模 (%) 运算符和三元运算符 (?) 计算正确的加密/解密密钥。
- 使用扩展运算符 (...) 和 Array.prototype.map() 迭代给定字符串的字母。
- 使用 String.prototype.charCodeAt() 和 String.fromCharCode() 适当地转换每个字母，忽略特殊字符、空格等。
- 使用 Array.prototype.join() 将所有字母组合成一个字符串。
- 将 true 传递给最后一个参数 decrypt，以解密加密字符串。

凯撒密码（Caesar Cipher）是一种最简单且最著名的加密算法，属于替换加密法之一。它的基本原理就是通过将每个字母替换成它在字母表中固定位置之后的某个字母（或之前的某个字母），来实现加密和解密。

### 1. **原理：**

凯撒密码的加密过程非常简单，就是通过对每个字母进行“移位”操作。具体来说，给定一个 **移位数（shift）**，每个字母在字母表中的位置都会向后（或向前）移动一定的位数。

例如，如果移位数为3，字母"A"会变成字母"D"，字母"B"变成字母"E"，以此类推。对于字母表中的最后一个字母（"Z"），移位时会重新回到字母表的开头，例如，字母"Z"会变成字母"C"（移位数为3的情况下）。

### 2. **加密：**

假设我们选择的移位数为 `3`，那么字母表的映射关系如下：

- A → D
- B → E
- C → F
- ...
- X → A
- Y → B
- Z → C

加密过程就是将原始文本中的每个字母替换成它之后第 `shift` 位的字母。

#### 例如：
- 原文：`HELLO`
- 加密移位数：3
- 加密后：`KHOOR`

在这个例子中，字母"H"移位3位变成"K"，字母"E"变成"H"，以此类推。

### 3. **解密：**

解密过程是加密过程的反向操作。为了恢复原文，我们需要将加密后的字母向前移动与加密时相同的位数（即移位数）。如果移位数为3，解密时就会将每个字母向前移动3位。

#### 例如：
- 加密后的文本：`KHOOR`
- 移位数：3
- 解密后：`HELLO`

### 4. **算法公式：**

加密时的公式为：

- **加密公式**：  
  `C = (P + shift) % 26`
  
  其中：
  - `C` 是加密后的字母（密文）
  - `P` 是原始字母的位置（明文）
  - `shift` 是移位数
  - `% 26` 表示字母表有26个字母，超出"Z"后会循环到字母"A"

解密时的公式为：

- **解密公式**：  
  `P = (C - shift + 26) % 26`

  其中：
  - `P` 是解密后的字母（明文）
  - `C` 是加密后的字母（密文）
  - `shift` 是移位数
  - `+ 26` 确保不会得到负数，因为字母表的位置是从0到25。

### 5. **凯撒密码的安全性：**

凯撒密码非常简单，但也非常容易破解。由于它只有26种不同的移位可能性（对于字母表的每个字母，移位数从1到25），因此攻击者可以通过穷举法尝试所有可能的移位数，迅速破解密文。

现代密码学中，凯撒密码已经不再被视为安全的加密方法，但它作为密码学历史中的基础算法，对后来的加密技术发展有着重要影响。

### 总结：

凯撒密码的核心就是通过字母的固定位置移位进行加密和解密。它简单易懂，但由于移位数的范围有限，所以安全性较差，在现代密码学中已被淘汰。

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

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/caesar-cipher.ts" data-language="typescript"></div>

> 调用方式:

```js
caesarCipher('Hello World!', -3); // 'Ebiil Tloia!'
caesarCipher('Ebiil Tloia!', 23, true); // 'Hello World!'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/caesar-cipher.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/caesar-cipher.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/caesar-cipher.html"></iframe>
