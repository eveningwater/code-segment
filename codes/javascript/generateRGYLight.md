| 标题                         | 标签                      |
| ---------------------------- | ------------------------- |
| generateRGYLight(生成红绿灯) | function,array(函数,数组) |

生成一个无限循环的交通信号灯，该交通信号灯每间隔 5s 显示一次红灯，5s 后显示一次黄灯,黄灯显示 3s 后显示绿灯，也是 5s。

> 进阶 1: 间隔时间也不固定，也有可能是 500ms,300ms,500ms 之类的，即数据结构也有可能是这样的:

> 进阶 2: 你知道有哪些方法可以实现吗?特别提示:setTimeout,promise,以及 async...await...均可以实现。

- 每次从数组中取出一个当前要显示的灯。
- 执行当前显示灯。
- 延迟执行时间后，又将当前显示的灯添加到数组末端，然后递归执行函数。

```js
const generateRGYLight = (lights, handler) => {
  const run = () => {
    const currentActiveLight = lights.shift();
    //执行显示当前信号灯的函数
    handler(currentActiveLight.color);
    setTimeout(() => {
      lights.push(currentActiveLight);
      run();
    }, currentActiveLight.duration);
  };
  run();
};
```

> 调用方式:

```js
const lights = [
  { color: 'red', duration: 5000 },
  { color: 'yellow', duration: 3000 },
  { color: 'green', duration: 5000 }
];
function runLight(color) {
  console.log(color);
}
generateRGYLight(lights, runLight); //log red,5s -> log yellow,3s -> green,5s -> red ...
```

> 更多思路

[更多思路见这里](https://wenku.baidu.com/view/d32d8c2a497302768e9951e79b89680202d86b50.html)。

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/generateRGYLight.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/generateRGYLight.html"></iframe>
