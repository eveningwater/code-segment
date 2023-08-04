| 标题                 | 标签                                     |
| -------------------- | ---------------------------------------- |
| PromiseAll(期约合并) | promise,extends,readonly(期约,继承,只读) |

期约合并。

- T 继承任意数组类型，期约合并函数的参数类型应该是展开 T 所组成的只读数组。
- 返回 Promise 泛型，其中泛型应该是一个接口，属性名继承 T(K extends keyof T),值 T[K]如果继承 Promise 的值，使用 infer 推断出值并返回，否则就返回 T[K]。

> 代码如下:

```ts
declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{
  [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K];
}>;
```

> 使用方式:

```ts
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// 应推导出 `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const);
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/PromiseAll.ts" data-language="typescript"></div>
