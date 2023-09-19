| 标题           | 标签                                |
| -------------- | ----------------------------------- |
| Flip(反转对象) | object,key,value(对象,属性，属性值) |

反转对象。

- 由于对象属性类型只能是 string | number | boolean,因此我们可以使用 Record 限定一下参数 T 的属性值类型为这三个值。
- 使用 in 操作符以及 keyof 操作符读取在 T 中的属性 K，并将属性断言成属性值（注意这里需要改造成模板字符串），然后属性值就取属性名 K 即可。

> 代码如下:

```ts
type Flip<T extends Record<string, string | number | boolean>> = {
  [K in keyof T as `${T[K]}`]: K;
};
```

> 使用方式:

```ts
type Flip1 = Flip<{ a: 'x'; b: 'y'; c: 'z' }>; // {x: 'a', y: 'b', z: 'c'}
type Flip2 = Flip<{ a: 1; b: 2; c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
type Flip3 = Flip<{ a: false; b: true }>; // {false: 'a', true: 'b'}
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Flip.ts" data-language="typescript"></div>
