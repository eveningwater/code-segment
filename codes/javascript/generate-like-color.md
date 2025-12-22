
| 标题                              | 标签         |
| --------------------------------- | ------------ |
| generateLikeColor(生成同色系颜色) | color(颜色) |

生成多种同一色系颜色。

* 颜色只能是rgba颜色模式，如果是其它颜色，请参考相应文档转成rgba颜色，如[hex转成RGBA](https://eveningwater.github.io/code-segment/#/codes/javascript/hexToRGB)。
* 利用replace方法和正则表达式将rgba与括号去掉。
* 利用字符串的split方法将rgba颜色转成数组，每个数组项对应的是r,g,b,a。
* 利用map和Number将r,g,b,a转成数值。
* 创建一个数组存储生成颜色值，然后循环，为每一个rgb加33，将颜色值存储到数组中，并返回。
* 省略第二个参数，默认值是7,表示生成7种颜色。


```js
const generateLikeColor = (color,n = 7) => {
    let [r,g,b,a = 1] = color.replace(/rgba?|\(|\)/gi,'').split(',').map(Number);
    const res = [];
    for(let i = 0;i < n;i++){
       r += 33;
       b += 33;
       g += 33;
       res.push(`rgba(${Math.min(r,255)},${Math.min(g,255)},${Math.min(b,255)},${a})`);
    }
    return res;
}
```

<div class="code-editor" data-url="codes/javascript/ts//generate-like-color.ts" data-language="typescript"></div>

> 调用方式:

```js
generateLikeColor('rgba(0,0,255,1)');/*[
  'rgba(33,33,255,1)',
  'rgba(66,66,255,1)',
  'rgba(99,99,255,1)',
  'rgba(132,132,255,1)',
  'rgba(165,165,255,1)',
  'rgba(198,198,255,1)',
  'rgba(231,231,255,1)'
]*/
```

> 应用场景

以下是一个实战<a href="codes/javascript/html//generate-like-color.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html//generate-like-color.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/generate-like-color.html"></iframe>

