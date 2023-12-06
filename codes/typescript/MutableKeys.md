| 标题                            | 标签                     |
| ------------------------------- | ------------------------ |
| MutableKeys(提取接口非只读属性) | extends,infer(继承,推断) |

提取接口非只读属性。

- 创建一个 Equal 类型，用于比较两个值是否相等。
- 使用 keyof 操作符返回对象，使用 Pick 提取属性值，如果不是只读的属性值和只读的属性值相等则返回 never，否则返回原属性，属性值可以是任意值。

> 代码如下:

```ts
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;
type MutableKeys<T> = keyof {
  [K in keyof T as Equal<Pick<T, K>, Readonly<Pick<T, K>>> extends true
    ? never
    : K]: any;
};
```

> 使用方式:

```ts
type MutableKeysRes1 = MutableKeys<{ a: number; readonly b: string }>; // 'a'
type MutableKeysRes2 = MutableKeys<{ a: undefined; readonly b: undefined }>; // 'a'
type MutableKeysRes3 = MutableKeys<{
  a: undefined;
  readonly b?: undefined;
  c: string;
  d: null;
}>; // 'a' | 'c' | 'd'
type MutableKeysRes4 = MutableKeys<{}>; // never
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/MutableKeys.ts" data-language="typescript"></div>
