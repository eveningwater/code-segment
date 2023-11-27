| 标题                   | 标签                     |
| ---------------------- | ------------------------ |
| DeepPick(深度挑选属性) | extends,infer(继承,推断) |

深度挑选属性。

- 创建一个 TypeGet 类型，接收 2 个参数，第一个参数为被挑选源对象，第二个参数为属性字符串，首先判断第二个参数是否是点组成的模板字符串，是，则推断点两边字符，并依次递归，否则直接判断是否是第一个参数的属性。代码如下所示:

```ts
type TypeGet<T, P> = P extends `${infer A}.${infer B}`
  ? A extends keyof T
    ? { [K in A]: TypeGet<T[A], B> }
    : never
  : P extends keyof T
  ? { [K in P]: T[K] }
  : never;
```

- 创建一个并集转交集的类型，参考[UnionToIntersection 的实现](codes/typescript/UnionToIntersection.md)。

* 将以上两个类型合并，即可得到 DeepPick 的实现。

> 代码如下:

```ts
type DeepPick<T, P extends string> = UnionToIntersection<TypeGet<T, P>>;
```

> 使用方式:

```ts
type Obj = {
  a: number;
  b: string;
  c: boolean;
  obj: {
    d: number;
    e: string;
    f: boolean;
    obj2: {
      g: number;
      h: string;
      i: boolean;
    };
  };
  obj3: {
    j: number;
    k: string;
    l: boolean;
  };
};

type DeepPickRes1 = DeepPick<Obj, ''>; //  unknown
type DeepPickRes2 = DeepPick<Obj, 'a'>; //  { a: number }
type DeepPickRes3 = DeepPick<Obj, 'a' | ''>; //  { a: number } & unknown
type DeepPickRes4 = DeepPick<Obj, 'a' | 'obj.e'>; //  { a: number } & { obj: { e: string } }
type DeepPickRes5 = DeepPick<Obj, 'a' | 'obj.e' | 'obj.obj2.i'>; //  { a: number } & { obj: { e: string } } & { obj: { obj2: { i: boolean } } }
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/DeepPick.ts" data-language="typescript"></div>
