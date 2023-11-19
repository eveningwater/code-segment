| 标题                | 标签          |
| ------------------- | ------------- |
| Get(获取接口属性值) | extends(继承) |

获取接口属性值。

- 如果 第二个参数 K 属于第一个参数接口对象 T 的属性，则直接返回对应属性值，如果 K 属于使用 infer 推断每一个由点构成的模板字符串，并且首个推断字符属于对象的属性，则递归的读取属性，否则返回 never

> 代码如下:

```ts
type Get<T, K> = K extends keyof T
  ? T[K]
  : K extends `${infer F}.${infer R}`
  ? F extends keyof T
    ? Get<T[F], R>
    : never
  : never;
```

> 使用方式:

```ts
type Data = {
  foo: {
    bar: {
      value: 'foobar';
      count: 6;
    };
    included: true;
  };
  'foo.baz': false;
  hello: 'world';
};

type GetRes1 = Get<Data, 'hello'>; //  'world'
type GetRes2 = Get<Data, 'foo.bar.count'>; //  6
type GetRes3 = Get<Data, 'foo.bar'>; //  { value: 'foobar'; count: 6 }
type GetRes4 = Get<Data, 'foo.baz'>; //  false
type GetRes5 = Get<Data, 'no.existed'>; //  never
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Get.ts" data-language="typescript"></div>
