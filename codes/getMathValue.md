|  标题   | 标签  |
|  ----  | ----  |
| getMathValue(求传入函数的所有参数的和，最大值，最小值与平均值) | param,function,max,min,average,sum(参数，函数，最大值，最小值，平均数，求和) |

求传入函数的所有参数的和，最大值，最小值与平均值。

* 使用`isNaN`方法来判断参数是否为数值

> 代码如下:

```js
    const getMathValue = (...args) => {
        args = args.reduce((res, item) => {
          const n = Number(item);
          if(typeof item === 'number' && !isNaN(n))res.push(n);
          return res;
        },[]);
        // 创建一个对象返回结果
        var result = {
            sum: 0,
            max: 0,
            min: 0,
            average: 0
          },
          len = args.length;
        // 暂定第一个参数就是最大值与最小值
        result['max'] = args[0];
        result['min'] = args[0];
        for (let i = 0; i < len; i++) {
          // 求和
          result['sum'] += args[i];
          // 最大值
          if (args[i] > result['max']) result['max'] = args[i];
          // 最小值
          if (args[i] < result['min']) result['min'] = args[i];
        }
        // 平均数
        result['average'] = result['sum'] / len;
        return result
  };
```

> 调用方式:

```js
    getMathValue(1,2,3,null);//{ sum:6,max:3,min:1,average:2}
```

> 应用场景