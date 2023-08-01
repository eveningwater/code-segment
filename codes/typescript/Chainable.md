| 标题                    | 标签                                                   |
| ----------------------- | ------------------------------------------------------ |
| Chainable(可串联构造器) | chain,union,extends，recursively(链式,联合,继承，递归) |

可串联构造器。

- 使用{}赋予 T 默认值。
- 构造器返回两个方法 get 和 option,get 函数很简单直接返回 T 即可，而 option 支持传入两个参数。
- option 的第一个参数是一个字符串类型，因此需要使用 K extends string,value 是一个任意类型，可以用泛型 V 表示，如果 K 在 T 中存在 K extends keyof T，并且 V 也在 T 中存在 V extends T[K],则返回 never,否则返回 K。
- 递归的使用 Record 类型返回 K 和 V，但是由于 key 会存在相同的情况，因此需要使用 Omit 先去除 T 中存在的相同 key (`Omit<T,K>`)，然后再使用 & 将两个类型合并。

> 代码如下:

```ts
type Chainable<T = {}> = {
  option: <K extends string, V>(
    key: K extends keyof T ? (V extends T[K] ? never : K) : K,
    value: V
  ) => Chainable<Omit<T, K> & Record<K, V>>;
  get: () => T;
};
// type Chainable<T = {}> = {
//   option: <K extends string, V>(
//     key: K extends keyof T ? (V extends T[K] ? never : K) : K,
//     value: V
//   ) => Chainable<{ [P in K]: V } & Omit<T, K>>;
//   get: () => T;
// };
```

> 使用方式:

```ts
declare const config: Chainable;

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get();

// 期望 result 的类型是：
interface Result {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Chainable.ts" data-language="typescript"></div>
