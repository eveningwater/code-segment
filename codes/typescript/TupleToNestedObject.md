| 标题                                | 标签                                  |
| ----------------------------------- | ------------------------------------- |
| TupleToNestedObject(数组转嵌套接口) | extends, array,infer(继承, 数组,推断) |

数组转嵌套接口。

- 第一个参数 T 和第二个参数 U,使用 infer 关键字推断，如果 T 继承由第一项 F 和剩余项 R 组成的数组，则返回一个接口，属性名约定就是 F，并使用&与 string 求交集，属性值则递归的调用，注意递归的参数，第一个参数应是剩余的数组项 R，而第二个参数则继续是 U,否则返回第二个参数。

> 代码如下:

```ts
type TupleToNestedObject<T, U> = T extends [infer F, ...infer R]
  ? {
      [K in F & string]: TupleToNestedObject<R, U>;
    }
  : U;
```

> 使用方式:

```ts
type aTupleToNestedObject = TupleToNestedObject<['a'], string>; // {a: string}
type bTupleToNestedObject = TupleToNestedObject<['a', 'b'], number>; // {a: {b: number}}
type cTupleToNestedObject = TupleToNestedObject<[], boolean>; // boolean. if the tuple is empty, just return the U type
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/TupleToNestedObject.ts" data-language="typescript"></div>
