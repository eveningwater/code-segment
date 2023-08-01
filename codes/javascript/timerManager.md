| 标题                       | 标签          |
| -------------------------- | ------------- |
| TimerManager(定时器管理器) | timer(定时器) |

定时器管理器。

- 创建一个定时器管理器函数，初始化 2 个数组，分别用来存储定时器以及参数，初始化一个控制定时器运行的状态值。
- 添加一个 add 方法，参数为定时器和其它参数，分别添加到存储的定时器以及参数数组中，并立即调用执行定时器。
- 添加一个定时器执行函数，根据定时器运行状态值来分别从定时器以及参数数组中取出定时器和参数然后执行，并将状态值更改。
- 添加一个 next 方法，将定时器状态值初始化，并调用执行定时器函数。

> 代码如下:

```js
class TimerManager {
  constructor() {
    this.timerList = [];
    this.params = [];
    this.isRunTimer = false;
  }
  static makeTimerManage(element) {
    if (
      !element.makeTimerManage ||
      element.TimerManager.constructor !== TimerManager
    ) {
      element.TimerManager = new TimerManager();
    }
  }
  add(timer, args) {
    this.timerList.push(timer);
    this.params.push(args);
    this.runTimer();
  }
  runTimer() {
    if (!this.isRunTimer) {
      const timer = this.timerList.shift(),
        args = this.params.shift();
      if (timer && args) {
        this.isRunTimer = true;
        timer(...args);
      }
    }
  }
  next() {
    this.isRunTimer = false;
    this.runTimer();
  }
}
```

> 调用方式:

```js
const slideUp = () => {
  // ....
  console.log(document.querySelector('.test').TimerManager);
};
const animation = (element, ...args) => {
  TimerManager.makeTimerManage(element);
  element.TimerManager.add(slideUp, args);
};
animation(document.querySelector('.test'), '1'); // TimerManager
```

> 应用场景

timerManager.html 如下:

<div class="code-editor" data-url="codes/javascript/html/timerManager.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/timerManager.html"></iframe>
