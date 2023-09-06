| 标题                     | 标签          |
| ------------------------ | ------------- |
| EndsWith(匹配字符串结束) | extends(继承) |

匹配字符串结束。

- 泛型参数 T 和泛型参数 U 都应是字符串类型，只要 U 前面拼接一个字符串，如果满足 T 继承这个拼接的字符串，就代表 U 能匹配 T，因此返回 true，否则返回 false。

> 代码如下:

```ts
type EndsWith<T extends string, U extends string> = T extends `${string}${U}`
  ? true
  : false;
```

> 使用方式:

```ts
type EndsWithA = EndsWith<'abc', 'bc'>; // expected to be true
type EndsWithB = EndsWith<'abc', 'abc'>; // expected to be true
type EndsWithC = EndsWith<'abc', 'd'>; // expected to be false
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/EndsWith.ts" data-language="typescript"></div>
