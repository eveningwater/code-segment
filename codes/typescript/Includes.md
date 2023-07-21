| 标题                             | 标签                                    |
| -------------------------------- | --------------------------------------- |
| Includes(判断数组中是否存在元素) | array,extends,readonly(数组,继承，只读) |

判断数组中是否存在元素。

- 类型 T 继承任意数组。
- 从类型 T 中读取值并写成一个对象，对象的属性名就是数组的每一项值，而属性值就是 true，然后根据 U 属性读取对象值。
- 判断从对象中读取出来的值是否等于 true，是就返回 true，否则返回 false。

> 代码如下:

```ts
type Includes<T extends readonly any[], U> = {
  [R in T[number]]: true;
}[U] extends true
  ? true
  : false;
```

> 使用方式:

```ts
type isPillarMen1 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>; // `false`
type isPillarMen2 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>; // `true`
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Includes.ts" data-language="typescript"></div>
