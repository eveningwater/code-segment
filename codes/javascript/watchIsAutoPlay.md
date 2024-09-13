| 标题                     | 标签           |
| ------------------------ | -------------- |
| watchIsAutoPlay(监听音频是否可以自动播放) | audio,play(音频,自动播放) |

监听音频是否可以自动播放。

- 方法1: 首先将元素设置为静音，然后使用Promise.resolve包裹并调用play方法，执行成功则返回true，否则返回false。
- 方法2: 获取音频的src路径，利用Audio构造函数创建一个audio实例，并设置autoplay,muted等属性，调用play方法，如果成功则返回true，否则返回false，整体需要用一个promise包裹住。
- 方法2兜底逻辑: 如果没有src值，则直接返回false。

方法1:

```js
const watchIsAutoPlay = (el) => {
    el.muted = true;
    return Promise.resolve(el.play()).then(() => true).catch(() => false);
}
```

方法2:

```js
const watchIsAutoPlay = (el) => {
    const src = el.getAttribute('src');
    if (!src) {
        return Promise.resolve(false);
    }
    return new Promise((resolve) => {
        const a = new Audio();
        a.autoplay = true;
        a.muted = true;
        a.addEventListener('play', () => resolve(true))
        a.src = src;
        resolve(false);
    });
}
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/watchIsAutoPlay.ts" data-language="typescript"></div>

> 调用方式:

```js
const audio = document.getElementById('audio');

window.onload = async () => {
    // true / false
    console.log(await watchIsAutoPlay(audio))
};
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/watchIsAutoPlay.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/watchIsAutoPlay.html"></iframe>
