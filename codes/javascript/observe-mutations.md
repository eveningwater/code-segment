|  标题   | 标签  |
|  ----  | ----  |
| observeMutations(突变侦听器) | () |

创建一个新的 MutationObserver 并为指定元素上的每个 mutation 运行提供的回调。

* 使用 [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) 观察给定元素的变化。
* 使用 Array.prototype.forEach() 为观察到的每个mutation运行回调。
* 省略第三个参数选项，以使用默认[选项](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver#MutationObserverInit)（全部为true）。

```js
const observeMutations = (element,callback,options) => {
    const observer = new MutationObserver(mutations => mutations.forEach(m => callback(m)));
    observer.observe(element, Object.assign(
      {
        childList: true,
        attributes: true,
        attributeOldValue: true,
        characterData: true,
        characterDataOldValue: true,
        subtree: true,
      },
      options
    ));
    return observer;
}
```

<div class="code-editor" data-url="codes/javascript/ts/observe-mutations.ts" data-language="typescript"></div>

> 调用方式:

```js
const obs = observeMutations(document, console.log);
// Logs all mutations that happen on the page
obs.disconnect();
// Disconnects the observer and stops logging mutations on the page
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/observe-mutations.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/observe-mutations.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/observe-mutations.html"></iframe>