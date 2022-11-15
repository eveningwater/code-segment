|  标题   | 标签  |
|  ----  | ----  |
| leftSubstrGenerator(从左边开始截取字符串生成器) | string,generator(字符串，生成器) |

生成给定字符串的所有左子字符串。

* 如果字符串为空，请使用 String.prototype.length 提前终止。
* 使用 for...in 循环和 String.prototype.slice() 从头开始产生给定字符串的每个子字符串。

```js
const leftSubstrGenerator = function*(str){
    if(typeof str !== 'string' || !string.length){
        return;
    }
    for(let i in str){
        yield str.slice(0,i + 1);
    }
}
```

> 调用方式:

```js
[...leftSubstrGenerator('hello')];
// [ 'h', 'he', 'hel', 'hell', 'hello' ]
```

> 应用场景

