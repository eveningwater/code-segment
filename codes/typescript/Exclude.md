|  标题   | 标签  |
|  ----  | ----  |
| Exclude(排除类型) | exclude,extends(排除,继承) |

从类型T中排除类型U。

* 使用extends关键字判断类型T是否继承类型U，是则返回never,否则返回T。

> 代码如下:

```ts
type Exclude<T,U> = T extends U ? never: T; 
```

> 使用方式:

```ts
type A = string | boolean | number;
type B = string;
type C = Exclude<A,B>; // boolean | number;

type D = string | number;
type E = Exclude<D,number>; // string

type F = Exclude<D,string | number>; // never
```

> 应用场景

详情查看[demo](./demo/Exclude.ts)。