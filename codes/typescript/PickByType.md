| 标题                         | 标签                  |
| ---------------------------- | --------------------- |
| PickByType(根据类型提取接口) | extends,as(继承,断言) |

根据类型提取接口。

- 属性 K 应继承自泛型 T 也就是类型第一个参数断言成`T[K]`如果继承 U(即第二个参数)，则返回 K,否则返回 never,值仍然取`T[K]`。

> 代码如下:

```ts
type PickByType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K];
};
```

> 使用方式:

```ts
type OnlyBooleanPickByType = PickByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>; // { isReadonly: boolean; isEnable: boolean; }
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/PickByType.ts" data-language="typescript"></div>
