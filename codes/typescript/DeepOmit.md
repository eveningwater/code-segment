| 标题                       | 标签          |
| -------------------------- | ------------- |
| DeepOmit(深度去除对象属性) | extends(继承) |

深度去除对象属性。

- 定义 K 为对象的属性，然后将 K 断言成如果 K 是给定属性，则返回 never，否则返回 K。
- 属性值基于属性 K 判断，如果 K 是给定属性，则返回 never，如果给定属性 P 属于点构成的模板字符串，则依次读取点构成的属性，递归。
- 否则返回原本属性值。

> 代码如下:

```ts
type DeepOmit<T, P> = {
  [K in keyof T as K extends P ? never : K]: K extends P
    ? never
    : P extends `${infer F}.${infer R}`
    ? K extends F
      ? DeepOmit<T[K], R>
      : T[K]
    : T[K];
};
```

> 使用方式:

```ts
type TestObj = {
  person: {
    name: string;
    age: {
      value: number;
    };
  };
};

type DeepOmitRes1 = DeepOmit<TestObj, 'person'>; // {}
type DeepOmitRes2 = DeepOmit<TestObj, 'person.name'>; // { person: { age: { value: number } } }
type DeepOmitRes3 = DeepOmit<TestObj, 'name'>; // TestObj
type DeepOmitRes4 = DeepOmit<TestObj, 'person.age.value'>; // { person: { name: string; age: {} } }
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/DeepOmit.ts" data-language="typescript"></div>
