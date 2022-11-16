|  标题   | 标签  |
|  ----  | ----  |
| levenshteinDistance([编辑距离](https://baike.baidu.com/item/%E7%BC%96%E8%BE%91%E8%B7%9D%E7%A6%BB/8010193?fromtitle=Levenshtein%20Distance&fromid=792226&fr=aladdin)) | string,algorithm(字符串，算法) |

使用 [Levenshtein距离算法](https://en.wikipedia.org/wiki/Levenshtein_distance)计算两个字符串之间的差异。

* 如果两个字符串中的任何一个的长度为零，则返回另一个字符串的长度。
* 使用 for 循环遍历目标字符串的字母，使用嵌套的 for 循环遍历源字符串的字母。
* 计算分别替换目标和源中 i - 1 和 j - 1 对应的字母的成本（如果相同则为 0，否则为 1）。
* 使用 Math.min() 填充 2D 数组中的每个元素，上面的单元格的最小值增加 1，左侧的单元格增加 1，或者左上角的单元格增加先前计算的成本。
* 返回生成的数组的最后一行的最后一个元素。

```js
const levenshteinDistance = (s,t) => {
    if(!s.length){
        return t.length;
    }
    if(!t.length){
        return s.length;
    }
    const arr = [];
    for(let i = 0;i <= t.length;i++){
        arr[i] = [i];
        for(let j = 1;j <= s.length;j++){
            arr[i][j] = i === 0 ? j : Math.min(arr[i - 1][j] + 1,arr[i][j - 1] + 1,arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1));
        }
    }
    return arr[t.length][s.length];
}
```

> 调用方式:

```js
levenshteinDistance('duck', 'dark'); // 2
```

> 应用场景

