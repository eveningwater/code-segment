|  标题   | 标签  |
|  ----  | ----  |
| createEventHub(创建事件（基于发布订阅模式）) | browser,event,advanced(浏览器，事件，高级的) |

使用 `emit`、`on` 和 `off` 方法创建一个发布/订阅（[publish–subscribe](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)）事件中心。

* 使用带有 `null` 参数的 `Object.create()` 创建一个不从 `Object.prototype` 继承属性的空对象。
* 对于 `emit`，根据 `even`t` 参数解析处理程序数组，然后通过将数据作为参数传递来使用 `Array.prototype.forEach()` 运行每个处理程序。
* 对于 `on`，如果事件尚不存在，则为该事件创建一个数组，然后使用 `Array.prototype.push()` 添加处理程序到数组。
* 对于关闭，使用 `Array.prototype.findIndex()` 在事件数组中查找处理程序的索引，并使用 `Array.prototype.splice()` 将其删除。

> 代码如下:

```js
const createEventHub = () => ({
    hub:Object.create(null),
    emit(event,data){
        (this.hub[event] || []).forEach(handler => handler(data));
    },
    off(event,handler){
        const i = (this.hub[event] || []).findIndex(h => h === handler);
        if(i > -1){
            this.hub[event].splice(i,1);
        }
        if(this.hub[event].length === 0){
            delete this.hub[event];
        }
    },
    on(event,handler){
        if(!this.hub[event]){
            this.hub[event] = [];
        }
        this.hub[event].push(handler);
    }
})
```

> 调用方式:

```js
const handler = data => console.log(data);
const hub = createEventHub();
let increment = 0;

// Subscribe: listen for different types of events
hub.on('message', handler);
hub.on('message', () => console.log('Message event fired'));
hub.on('increment', () => increment++);

// Publish: emit events to invoke all handlers subscribed to them, passing the data to them as an argument
hub.emit('message', 'hello world'); // logs 'hello world' and 'Message event fired'
hub.emit('message', { hello: 'world' }); // logs the object and 'Message event fired'
hub.emit('increment'); // `increment` variable is now 1

// Unsubscribe: stop a specific handler from listening to the 'message' event
hub.off('message', handler);
```

> 应用场景