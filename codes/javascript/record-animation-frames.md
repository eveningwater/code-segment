| 标题 | 标签                            |
| ---- | ------------------------------- |
| ()   | browser,recursion(浏览器，递归) |

在每个动画帧上调用提供的回调。

- 使用递归。
- 如果 running 为真，则继续调用 Window.requestAnimationFrame() 以调用提供的回调。
- 返回具有两种方法的对象 start 和 stop 以允许手动控制记录。
- 省略第二个参数 autoStart，以在调用函数时隐式调用 start。

```js
const recordAnimationFrames = (callback, autoStart = true) => {
  let running = false,
    raf;
  const stop = () => {
    if (!running) return;
    running = false;
    cancelAnimationFrame(raf);
  };
  const start = () => {
    if (running) return;
    running = true;
    run();
  };
  const run = () => {
    raf = requestAnimationFrame(() => {
      callback();
      if (running) run();
    });
  };
  if (autoStart) start();
  return { start, stop };
};
```

<div class="code-editor" data-url="codes/javascript/ts/record-animation-frames.ts" data-language="typescript"></div>


> 调用方式:

```js
const cb = () => console.log('Animation frame fired');
const recorder = recordAnimationFrames(cb);
// logs 'Animation frame fired' on each animation frame
recorder.stop(); // stops logging
recorder.start(); // starts again
const recorder2 = recordAnimationFrames(cb, false);
// `start` needs to be explicitly called to begin recording frames
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/record-animation-frames.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/record-animation-frames.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/record-animation-frames.html"></iframe>