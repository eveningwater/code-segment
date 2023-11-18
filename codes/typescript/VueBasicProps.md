| 标题                              | 标签          |
| --------------------------------- | ------------- |
| VueBasicProps(vue 单向数据流类型) | extends(继承) |

vue 单向数据流类型。

- 实现一个推断计算属性的类型 InferComputed，该类型接收一个参数，继承任意对象，返回一个由对象实例的返回值。代码如下:

```ts
type InferComputed<T extends Record<string, any>> = {
  [K in keyof T]: ReturnType<T[K]>;
};
```

- 创建一个单向数据流构造函数类型 PropConstructor，该类型参数为任意类型 T，返回一个返回值为 T 的空函数与实例化返回值为 T 与对象联合的对象。代码如下:

```ts
type PropConstructor<T extends any> =
  | { new (...args: any[]): T & object }
  | { (): T };
```

- 创建一个单向数据流类型 PropType，该类型接收一个泛型参数 T,返回单向数据流构造函数类型与该类型数组。代码如下:

```ts
type PropType<T> = PropConstructor<T> | PropConstructor<T>[];
```

- 创建一个数据流类型 Prop,该类型接收一个泛型参数 T,返回单向数据流类型 PropType 与对象属性为 type,属性值为单向数据流类型 PropType 对象的联合。代码如下所示:

```ts
type Prop<T = any> = PropType<T> | { type?: PropType<T> };
```

- 创建一个推断单个数据流类型 InferPropType，该类型接收一个参数 P，如果该参数类型等于能够使用 infer 关键字推断出数据流类型 T，则判断如果推断出的类型 T 是否是 unknown,是则返回 any，否则返回 T，否则返回 any。代码如下:

```ts
type InferPropType<P> = P extends Prop<infer T>
  ? unknown extends T
    ? any
    : T
  : any;
```

- 创建一个推断多个数据流类型 InferProps,该类型接收一个泛型参数 T,应该是继承对象，返回属性值为推断单个数据流类型的对象。代码如下所示:

```ts
type InferProps<T extends Record<string, any>> = {
  [K in keyof T]: InferPropType<T[K]>;
};
```

- 定义 VueBasicProps 函数类型，接收 5 个泛型参数，第一个和第三个泛型参数继承任意对象，第五个泛型参数继承 InferProps 类型，函数参数为一个配置对象，配置对象类型包含 单向数据 props,数据 data,计算属性 computed 以及方法 methods,其中单向数据流类型为第五个参数，data 有个 this 参数，类型为 第五个参数，返回值为第二个参数，computed 为 this 类型与函数第三个参数的并集，其中 this 类型接收一个参数，该参数为第二个，第四个，第五个函数参数与 InferComputed 第三个参数的并集，methods 参数与 computed 的 this 类型相同，只是求并集为第四个参数。该函数的返回值为 Props 与 InferComputed 第三个参数以及第二个，第四个参数的并集。

> 代码如下:

```ts
declare function VueBasicProps<
  P extends Record<string, any>,
  D,
  C extends Record<string, any>,
  M,
  Props = InferProps<P>
>(options: {
  props: P;
  data(this: Props): D;
  computed: C & ThisType<D & M & Props & InferComputed<C>>;
  methods: M & ThisType<D & M & Props & InferComputed<C>>;
}): Props & D & InferComputed<C> & M;
```

> 使用方式:

```ts

```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/VueBasicProps.ts" data-language="typescript"></div>
