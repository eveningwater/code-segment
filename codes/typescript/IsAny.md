| 标题                | 标签               |
| ------------------- | ------------------ |
| IsAny(解析打印格式) | extends(继承,推断) |

解析打印格式。

- 将 1 和类型 T 联合，如果和 0 相等，则返回 true，否则返回 false。

> 代码如下:

```ts
type IsAny<T> = 0 extends 1 & T ? true : false;
```

> 使用方式:

```ts
let anyVar;

type IsAnyRes1 = IsAny<string>; // false
type IsAnyRes2 = IsAny<any>; // true
type IsAnyRes3 = IsAny<never>; // false
type IsAnyRes4 = IsAny<typeof anyVar>; // true
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/IsAny.ts" data-language="typescript"></div>
