|  标题   | 标签  |
|  ----  | ----  |
| indexOfSubstrings(查找字符串中子字符串的所有索引) | string,algorithm,generator(字符串，算法，生成器) |

查找给定字符串中子字符串的所有索引。

* 使用 Array.prototype.indexOf() 在 str 中查找 searchValue。
* 如果找到该值，则使用 yield 返回索引并更新索引，即 i。
* 使用 while 循环，一旦 Array.prototype.indexOf() 返回的值为 -1，生成器就会终止。

```js
const indexOfSubstrings = function* (str,searchValue){
    let i = 0;
    while(true){
        const r = str.indexOf(searchValue,i);
        if(r === -1){
            return;
        }
        yield r;
        i = r + 1;
    }
}
```

> 调用方式:

```js
[...indexOfSubstrings('tiktok tok tok tik tok tik', 'tik')]; // [0, 15, 23]
[...indexOfSubstrings('tutut tut tut', 'tut')]; // [0, 2, 6, 10]
[...indexOfSubstrings('hello', 'hi')]; // []
```

> 应用场景

<iframe src="codes/javascript/html/indexOfSubstrings.html"></iframe>




