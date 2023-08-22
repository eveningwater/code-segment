| 标题                  | 标签            |
| --------------------- | --------------- |
| createStore(会话存储) | browser(浏览器) |

会话存储。

- isLocal 参数决定是用永久存储还是会话存储。
- 对每一个方法进行包装。

```js
const createStore = (isLocal = false) => {
  const store = window[isLocal ? 'localStorage' : 'sessionStorage'];
  return {
    set(key, data) {
      return store.setItem(key, data);
    },
    get(key) {
      return store.getItem(key);
    },
    del(key) {
      return store.removeItem(key);
    },
    clear() {
      return store.clear();
    }
  };
};
```

> 调用方式:

```js
const { set, get, del, clear } = createStore();
set('name', 'eveningwater'); // 存储
get('name'); //获取
del('name'); //删除
clear(); // 清空
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/createStore.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/createStore.html"></iframe>
