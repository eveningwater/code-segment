| 标题                                   | 标签                     |
| -------------------------------------- | ------------------------ |
| RemoveIndexSignature(移除接口索引属性) | extends,infer(继承,推断) |

移除接口索引属性。

- 泛型 K 继承 T 的属性，断言成推断 R 组成的模板字符串属性，如果推断成功，则返回推断的 R 属性，否则返回 never 属性，值为`T[K]`。

> 代码如下:

```ts
type RemoveIndexSignature<T> = {
    [K extends keyof T as K extends `${infer R}` ? R : never]: T[K]
}
```

> 使用方式:

```ts
type RemoveIndexSignatureFoo = {
  [key: string]: any;
  foo(): void;
};

type RemoveIndexSignatureA = RemoveIndexSignature<RemoveIndexSignatureFoo>; // expected { foo(): void }
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/RemoveIndexSignature.ts" data-language="typescript"></div>
