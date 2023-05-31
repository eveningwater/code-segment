| 标题                             | 标签                      |
| -------------------------------- | ------------------------- |
| toRomanNumeral(数字转成罗马数字) | string,math(字符串，数学) |

将整数转换为其罗马数字表示形式。 接受 1 到 3999（包括两者）之间的值。

- 创建一个包含（罗马值，整数）形式的 2 值数组的查找表。
- 使用 Array.prototype.reduce() 遍历查找中的值并重复将 num 除以该值。
- 使用 String.prototype.repeat() 将罗马数字表示添加到累加器。

```js
const toRomanNumeral = num => {
  const lookup = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  return lookup.reduce((acc, [k, v]) => {
    acc += k.repeat(Math.floor(num / v));
    num = num % v;
    return acc;
  }, '');
};
```

> 调用方式:

```js
toRomanNumeral(3); // 'III'
toRomanNumeral(11); // 'XI'
toRomanNumeral(1998); // 'MCMXCVIII'
```

> 应用场景
