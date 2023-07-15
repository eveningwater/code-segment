| 标题                            | 标签                                   |
| ------------------------------- | -------------------------------------- |
| TupleToObject(将元组转换成对象) | property,array,object(属性,数组，对象) |

将元组转换成对象。

- 使用 PropertyKey 获取数组 T 的数组项值的只读类型。
- 读取数组 T 的类型作为属性名和属性值。

> 代码如下:

```ts
type TupleToObject<T extends Readonly PropertyKey []> = {
    [R in T[number]]: R
}
```

> 使用方式:

```ts
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type result = TupleToObject<typeof tuple>; // { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/TupleToObject.ts" data-language="typescript"></div>
