|  标题   | 标签  |
|  ----  | ----  |
| arrayToHTMLList(生成一个列表) | array,browser,intermediate(数组，浏览器，两者之间的) |

将给定的数组元素转换为`&lt;li&gt;`元素，并将它们附加到给定`id`的列表中。

* 使用`Array.prototype.map()`和`document.querySelector()`创建`html`标签列表。

> 代码如下:

```js
    const arrayToHTMLList = (arr,listId) => {
        let list = document.querySelector(`#${listId}`);
        let content += arr.map(item => `<li>${ item }</li>`).join('');
        list.innerHTML = content;
        return list; 
    }
```

> 调用方式:

```js
    arrayToHTMLList(['item 1', 'item 2'], 'myListID');//生成一个<ul></ul>无序列表
```

> 应用场景