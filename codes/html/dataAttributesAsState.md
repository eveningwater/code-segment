| 标题                                    | 标签                       |
| --------------------------------------- | -------------------------- |
| dataAttributesAsState(数据属性作为状态) | css,javascript(样式，脚本) |

# HTML 类的问题

通常，在用 HTML 表示 UI 状态时，我们会使用类。这通常会转化为 React 组件或 JavaScript 代码，用于检查一些条件并相应地添加或删除类。让我们看一个例子：

```html
<div id="order">
    <!-- 订单摘要内容 -->
</div>
```

```js
const orderData = {
    loading: false,
    complete: false,
    errorMessage: null
};

const order = document.querySelector('#order');

order.className = `order-summary
${orderData.completed ? 'completed' : ''}
${orderData.loading ? 'loading' : ''}
${orderData.errorMessage ? 'error' : ''}`;
```

在此示例中，我们正在为订单摘要创建一个元素。元素可以处于以下三种状态之一：加载、完成或错误。我们使用类来表示这些状态，并使用 JavaScript 根据订单状态添加或删除这些类。

从 UI 中确定订单状态也应该很简单。我们可以简单地检查元素上存在哪些类：

```js
const order = document.querySelector('#order');

const isCompleted = order.classList.contains('completed');
const isLoading = order.classList.contains('loading');
const hasError = order.classList.contains('error');
```

这感觉有点麻烦，但在 JavaScript 中使用 DOM 元素通常就是这样。让我们来看看一些可用于设置我们三个状态样式的 CSS：

```css
.order-summary.completed {
    background-color: green;
}

.order-summary.loading {
    background-color: yellow;
}

.order-summary.error {
    background-color: red;
}
```

非常简单易懂。但是，如果命运弄人，我们最终从服务器获得一些错误数据怎么办？如果订单正在加载和完成怎么办？也许它已完成但也包含错误？那么 UI 会是什么样子？CSS 将使用其级联特性来确定要应用哪些样式，这可能会让事情变得一团糟。

因此，总结一下，在使用类表示 UI 状态时，我们面临以下问题：

* 使用 JavaScript 手动将状态映射到类名。
* 检查元素上的类名是否存在以确定其状态。
* 当存在多个状态时，可能会发生样式冲突。

# 使用数据属性的更好方法

如果我告诉你有更好的方法，你会怎么想？而且这种方法一直都存在，已经很多年了。我说的是数据属性。让我们看看如何使用它们来表示订单摘要的状态：

```html
<div
    id="order"
    class="order-summary"
    data-state="completed"
    data-loading="false"
>
    <!-- Order summary content -->
</div>
```

乍一看，我们只是将状态从 JavaScript 对象移动到了 DOM。但这有很大的不同。首先，我们实际上不再需要将状态从 JavaScript 映射到 DOM。我们可以简单地在元素上设置数据属性并完成它：

```js
// 假设我们想将订单的状态更改为加载
const order = document.querySelector('#order');

order.dataset.state = 'loading';
order.dataset.loading = 'true';
```

我们还可以通过检查数据属性的值来检查订单的状态：

```js
const order = document.querySelector('#order');

const isCompleted = order.dataset.state === 'completed';
const isLoading = order.dataset.loading === 'true';
const hasError = order.dataset.error === 'true';
```

JavaScript 值很容易从 DOM 中检索，没有隐藏状态，并且很容易进行更改。但是使用 CSS 进行样式设置怎么样？好吧，我们只需要做一些小改动：

```css
.order-summary[data-state="completed"] {
    background-color: green;
}
.order-summary[data-state="loading"] {
    background-color: yellow;
}
.order-summary[data-state="error"] {
    background-color: red;
}
```

我们现在使用数据属性选择器，而不是类。这样，我们就可以根据数据属性的值来定位元素。这比使用类灵活得多，因为我们现在可以在同一个元素上拥有多个状态，而不必担心样式冲突。

但更有趣的是，我们不会遇到之前在同一个元素上拥有两个状态的问题。这是因为数据属性选择器需要完全匹配，否则它将无法工作。因此，如果我们有一个元素带有类似 `data-state="loadingcompleted"` 的内容，它将不会匹配我们的任何 CSS 选择器，也不会被设置样式。从 DOM 中也可以很容易地发现并找出问题所在。

> 使用示例

<div class="code-editor" data-url="codes/html/html/data-attributes-as-state.html" data-language="html"></div>

结果如下:

<iframe src="codes/html/html/data-attributes-as-state.html"></iframe>

# 结论

正如你所见，使用数据属性在 HTML 中表示状态比使用类更灵活、更可扩展。它迫使我们更加明确、更易于调试。我认为这是使用类的绝佳替代方案，我希望你会考虑在下一个项目中使用它。

