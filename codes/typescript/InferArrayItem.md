| 标题                                 | 标签                   |
| ------------------------------------ | ---------------------- |
| InferArrayItem(提取数组中的元素类型) | infer,array(推断,数组) |

提取数组中的元素类型。

- 使用 infer 关键字推断数组T的元素类型，如果T继承数组R类型，则返回R，否则返回T。

> 代码如下:

```ts
type InferArrayItem<T> = T extends (infer R) [] ? R : T;
```

> 使用方式:

```ts
type InferString = InferArrayItem<string []>; // string;
type InferStringOrNumber = InferArrayItem<string | number []>; // string;
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/InferArrayItem.ts" data-language="typescript"></div>
