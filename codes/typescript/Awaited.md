| 标题              | 标签                                      |
| ----------------- | ----------------------------------------- |
| Awaited(等待类型) | extends,infer,recursively(继承,推断,递归) |

递归的解包等待类型。

- 类型 T 是否继承 null | undefined,这是一个特殊情况，需要考虑。
- 类型 T 是否继承自包含有 then 方法的对象，then 方法的第一个参数推断是存在的，其它参数用不到，所以推断为`_`。
- 类型 F 是否含有第一个参数，如果含有则递归的返回第一个参数，否则返回 never。
- 最后返回类型 T。

> 代码如下:

```ts
type Awaited<T> = T extends null | undefined
  ? T
  : T extends object & { then(onFulfilled: infer F, ...args: infer _): any }
  ? F extends (value: infer V, ...args: infer _) => any
    ? Awaited<V>
    : never
  : T;
```

> 使用方式:

```ts
type ExampleType = Promise<string>;

type Result = Awaited<ExampleType>; // string
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Awaited.ts" data-language="typescript"></div>
