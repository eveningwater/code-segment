| 标题                        | 标签                                    |
| --------------------------- | --------------------------------------- |
| cartesianProduct (笛卡尔积) | math,array,beginner(数学，数组，初学者) |

计算两个数组的笛卡尔积。

- 使用 `Array.prototype.reduce()`、`Array.prototype.map()` 和扩展运算符 (...) 从两个数组中生成所有可能的元素对。

## 特别说明

笛卡尔积（Cartesian Product） 是一种数学运算，它从两个或多个集合中生成所有可能的有序元素组合。可以将其理解为对多个集合中元素的一种"组合方式"。

在数学中，笛卡尔积的定义如下：

假设有两个集合 A 和 B，笛卡尔积 A×B 是一个包含所有可能的有序对的集合，形式为：

`A × B = { (a,b) ∣ a ∈ A 且 b ∈ B}`

即：笛卡尔积的结果是一个集合，集合中的每个元素都是 A 中一个元素和 B 中一个元素的有序组合。笛卡尔积的元素个数是 A 和 B 的元素个数的乘积。

### 举个例子：

假设我们有两个集合：

1. `( A = {1, 2} )`
2. `( B = {a, b} )`

那么它们的笛卡尔积就是：

`A × B = { (1, a), (1, b), (2, a), (2, b) }`

### 更一般的情况

笛卡尔积不仅限于两个集合，它可以扩展到多个集合。例如，假设有三个集合：

3. `( A = {1, 2} )`
4. `( B = {a, b} )`
5. `( C = {x, y} )`

那么，笛卡尔积 ( A × B × C ) 就是所有可能的三元组：

`A × B × C = { (1, a, x), (1, a, y), (1, b, x), (1, b, y), (2, a, x), (2, a, y), (2, b, x), (2, b, y) }`

> 代码如下:

```js
const cartesianProduct = (a, b) =>
  a.reduce((p, x) => [...p, ...b.map((y) => [x, y])], []);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/cartesianProduct.ts" data-language="typescript"></div>

> 调用方式:

```js
cartesianProduct(["x", "y"], [1, 2]);
// [['x', 1], ['x', 2], ['y', 1], ['y', 2]]
```

> 应用场景

以下是一个基于笛卡尔积而实现的实战<a href="codes/javascript/html/cartesianProduct.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/cartesianProduct.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/cartesianProduct.html"></iframe>
