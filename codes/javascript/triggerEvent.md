| 标题                   | 标签                        |
| ---------------------- | --------------------------- |
| triggerEvent(触发事件) | browser,event(浏览器，事件) |

在给定元素上触发特定事件，可选择传递自定义数据。

- 使用 CustomEvent 构造函数根据指定的事件类型和详细信息创建事件。
- 使用 EventTarget.dispatchEvent() 在给定元素上触发新创建的事件。
- 如果不想将自定义数据传递给触发的事件，请省略第三个参数 detail。

```js
const triggerEvent = (el, eventType, detail) =>
  el.dispatchEvent(new CustomEvent(eventType, { detail }));
```

> 调用方式:

```js
triggerEvent(document.getElementById('myId'), 'click');
triggerEvent(document.getElementById('myId'), 'click', { username: 'bob' });
```

> 应用场景
