| 标题                      | 标签                  |
| ------------------------- | --------------------- |
| activityCountDown(倒计时) | date,math(日期，数学) |

倒计时。

- time 为毫秒数，除以 1000 / 60 / 60 / 24 计算剩余天数，结果需要向下取整,使用 [Math.floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)。
- time 为毫秒数，除以 1000 / 60 / 60 % 24 计算剩余小时，结果需要向下取整,使用 [Math.floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)。
- time 为毫秒数，除以 1000 / 60 % 60 计算剩余分钟，结果需要向下取整,使用 [Math.floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)。
- time 为毫秒数，除以 1000 % 60 计算剩余秒，结果需要向下取整,使用 [Math.floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)。
- 使用 Date 构造函数将开始日期构造成日期对象，结束日期同理。
- 使用 Date.getTime 方法将开始日期转换成秒，结束日期同理。
- 获取当前日期，将开始日期和结束日期与当前日期相减，得到时间差。
- 如果开始日期时间差大于等于 0，则进入开始倒计时，如果结束日期时间差大于等于，则进入结束倒计时，否则就是已结束。
- 使用一个状态控制倒计时是否需要结束，使用 setTimeout 方法每隔 1s 执行计算，如果状态为 false，则需要递归执行，否则结束定时器。
- 将 result 值赋值给传入的 dom 元素的 textContent。

> 代码如下:

```js
const activityCountDown = (startDate, endDate, dom) => {
  let timer = null,
    result = '';
  const start = new Date(startDate),
    end = new Date(endDate);
  const startSeconds = start.getTime(),
    endSeconds = end.getTime();
  const formateTime = time => [
    Math.floor(time / 1000 / 60 / 60 / 24),
    Math.floor((time / 1000 / 60 / 60) % 24),
    Math.floor((time / 1000 / 60) % 60),
    Math.floor((time / 1000) % 60)
  ];
  const fillZero = v => `0${v}`.slice(-2);
  const computedTime = () => {
    const nowSeconds = new Date().getTime();
    let status = false;
    const start_diff = startSeconds - nowSeconds,
      end_diff = endSeconds - nowSeconds;
    if (start_diff >= 0) {
      const [day, hour, minute, seconds] = formateTime(start_diff);
      result = `距离活动开始还有:${fillZero(day)}天${fillZero(
        hour
      )}小时${fillZero(minute)}分钟${fillZero(seconds)}秒`;
      status = false;
    } else if (end_diff >= 0) {
      const [day, hour, minute, seconds] = formateTime(end_diff);
      result = `距离活动结束还有:${fillZero(day)}天${fillZero(
        hour
      )}小时${fillZero(minute)}分钟${fillZero(seconds)}秒`;
      status = false;
    } else {
      result = `活动已结束`;
      status = true;
    }
    if (!status) {
      timer = setTimeout(computedTime, 1000);
      dom.textContent = result;
    } else {
      if (timer) {
        clearTimeout(timer);
      }
      dom.textContent = result;
    }
  };
  computedTime();
};
```

> 调用方式:

```js
activityCountDown(
  '2019-10-29 17:00:00',
  '2019-10-30 16:00:00',
  document.querySelector('.test-1')
); // 活动已结束
activityCountDown(
  '2023-10-29 17:00:00',
  '2023-10-30 16:00:00',
  document.querySelector('.test-2')
); // 距离活动开始还有:
activityCountDown(
  '2023-01-29 17:00:00',
  '2023-10-30 16:00:00',
  document.querySelector('.test-3')
); // 距离活动结束还有:
```

> 应用场景

activityCountDown.html 如下:

<div class="code-editor" data-url="codes/javascript/html/activityCountDown.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/activityCountDown.html"></iframe>
