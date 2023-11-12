| 标题                       | 标签          |
| -------------------------- | ------------- |
| OptionalKeys(可选类型属性) | extends(继承) |

可选类型属性。

- 使用 as 断言对应属性的属性值是否是`Required<T>`转换成必选接口类型中的属性值，如果是则返回 never，否则返回原属性。
- 使用 keyof 获取属性。

> 代码如下:

```ts
type OptionalKeys<T> = keyof {
  [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K];
};
```

> 使用方式:

```ts
type OptionalKeysRes1 = OptionalKeys<{ a: number; b?: string }>; // 'b'
type OptionalKeysRes2 = OptionalKeys<{ a: undefined; b?: undefined }>; // 'b'
type OptionalKeysRes3 = OptionalKeys<{
  a: undefined;
  b?: undefined;
  c?: string;
  d?: null;
}>; // 'b' | 'c' | 'd'
type OptionalKeysRes4 = OptionalKeys<{}>; // never
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/OptionalKeys.ts" data-language="typescript"></div>
