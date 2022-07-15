|  标题   | 标签  |
|  ----  | ----  |
| getParentsUntil(获取父元素) | browser(浏览器) |

查找元素的所有祖先，直到与指定选择器匹配的元素。

* 使用 Node.parentNode 和 while 循环向上移动元素的祖先树。
* 使用 Array.prototype.unshift() 将每个新祖先添加到数组的开头。
* 使用 Element.matches() 检查当前元素是否匹配指定的选择器。

```js
const getParentsUntil = (el,selector) => {
    const parents = [];
    let _el = el.parentNode;
    while(_el && typeof _el.matches === 'function'){
        parents.unshift(_el)
        if(_el.matches(selector)){
            return parents
        }else{
            _el = _el.parentNode;
        }
    }
    return parents;
}
```

> 调用方式:

```js
getParentsUntil(document.querySelector('#home-link'), 'header');
// [header, nav, ul, li]
```


> 应用场景

<iframe src="codes/javascript/html/getParentsUntil.html"></iframe>












