| 标题                       | 标签                     |
| -------------------------- | ------------------------ |
| IsNever(是否是 never 类型) | extends,array(继承,数组) |

是否是 never 类型。

- 泛型 T 包裹成数组，如果和`[never]`等价则返回 true，否则返回 false。

> 代码如下:

```ts
type IsNever<T> = [T] extends [never] ? true : false;
```

> 使用方式:

```ts
type IsNeverA = IsNever<never>; // expected to be true
type IsNeverB = IsNever<undefined>; // expected to be false
type IsNeverC = IsNever<null>; // expected to be false
type IsNeverD = IsNever<[]>; // expected to be false
type IsNeverE = IsNever<number>; // expected to be false
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/IsNever.ts" data-language="typescript"></div>
