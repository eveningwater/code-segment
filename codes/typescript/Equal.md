| 标题                         | 标签          |
| ---------------------------- | ------------- |
| Equal(判断 2 个类型是否相等) | extends(继承) |

判断 2 个类型是否相等。

- 将两个比较泛型类型参数构造成函数的返回值，如果函数参数类型匹配，则返回 1 否则返回 2，然后比较 2 个返回值是否相等，即可确定 2 个类型是否相同。

> 代码如下:

```ts
type Equal<T, U> = (<X>() => X extends T ? 1 : 2) extends <X>() => X extends U
  ? 1
  : 2
  ? true
  : false;
```

> 使用方式:

```ts
type EqualRes1 = Equal<any, any>; // true
type EqualRes2 = Equal<any, never>; // false
type EqualRes3 = Equal<string, never>; // false
type EqualRes4 = Equal<number, never>; // false
type EqualRes5 = Equal<number, string>; // false
type EqualRes6 = Equal<number, 1>; // false
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Equal.ts" data-language="typescript"></div>
