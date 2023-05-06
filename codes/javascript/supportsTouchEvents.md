| 标题                                      | 标签            |
| ----------------------------------------- | --------------- |
| supportsTouchEvents(判断是否支持触摸事件) | browser(浏览器) |

检查是否支持触摸事件。

- 检查窗口中是否存在“ontouchstart”。

```js
const supportsTouchEvents = () => window && 'ontouchstart' in window;
```

> 调用方式:

```js
supportsTouchEvents(); // true
```

> 应用场景
