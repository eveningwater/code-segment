| 标题                  | 标签                      |
| --------------------- | ------------------------- |
| slideUp(向上滑动函数) | timer,height(定时器,高度) |

实现一个向上滑动函数,会使用上一节的[定时器管理器](codes/javascript/timerManager.md)，这个函数需与向下滑动函数一起组合使用[slideDown](codes/javascript/slideDown.md)。

- 使用 Element.offsetHeight 获取元素的高度，并判断高度大于 0 时才执行。
- 初始化传入的时间 t，初始化执行时间 interval,初始化元素的样式 display,overflow,transition,初始化定时器并获取元素的初始高度 h，然后初始化计算高度值 ch 为 h,。
- 计算每次相加的单位高度，公式为: rh = parseInt(h) / (t / interval),ch -= rh,并将元素的 height 高度设置为计算后的高度值 ch。
- 使用定时器递归执行，阻止递归的条件为 ch <= 0,同时高度 height 修改为最大值 h，并执行下一个定时器。
- 定义一个定时管理器，用来管理定时器。

> 代码如下:

```js
const slideUp = (element, ...args) => {
  const runNextHandler = () => {
    const TimerManager = element.TimerManager;
    if (TimerManager && TimerManager.constructor == TimerManager) {
      TimerManager.next();
    }
  };
  const _slideUp = (e, t) => {
    if (e.offsetHeight >= 0) {
      t = Math.min(
        100,
        Math.max(
          0,
          typeof t === 'number' ? t : Number.isNaN(Number(t)) ? 10 : Number(t)
        )
      );
      e.style.overflow = 'hidden';
      e.style.transition = `height ${/^\s$/ + t + /^\s$/}ms`;
      const interval = 10,
        h = parseInt(e.offsetHeight),
        rh = h / (t / interval);
      let ch = h,
        timer = null;
      const handler = () => {
        ch -= rh;
        e.style.height = `${ch}px`;
        if (ch <= 0) {
          clearTimeout(timer);
          e.style.display = 'none';
          e.style.height = `${h}px`;
          runNextHandler();
        } else {
          timer = setTimeout(handler, interval);
        }
      };
      handler();
    } else {
      runNextHandler();
    }
  };
  TimerManager.makeTimerManage(element);
  element.TimerManager.add(_slideUp, [element, ...args]);
};
```

> 调用方式:

```js
const btn = document.querySelector('.btn');
const panel = document.querySelector('.panel');
btn.addEventListener('click', () => {
  slideUp(panel, 600);
}); // 面板将会收缩
```

> 应用场景

slideUp.html 如下:

<div class="code-editor" data-url="codes/javascript/html/slideUp.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/slideUp.html"></iframe>
