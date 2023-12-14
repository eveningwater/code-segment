| 标题                                         | 标签                     |
| -------------------------------------------- | ------------------------ |
| CapitalizeNestObjectKeys(接口属性首字母大写) | extends,infer(继承,推断) |

接口属性首字母大写。

- 判断如果类型参数 T 是数组，则直接递归到接口中，如果是对象，则对属性使用 Capitalize 进行转换，并递归属性值，否则返回原始 T。

> 代码如下:

```ts
type CapitalizeNestObjectKeys<T> = T extends readonly any[]
  ? {
      [K in keyof T]: CapitalizeNestObjectKeys<T[K]>;
    }
  : T extends Record<keyof T, any>
  ? {
      [K in keyof T as Capitalize<K & string>]: CapitalizeNestObjectKeys<T[K]>;
    }
  : T;
```

> 使用方式:

```ts
type foo = {
  foo: string;
  bars: [{ foo: string }];
};

type Foo = {
  Foo: string;
  Bars: [
    {
      Foo: string;
    }
  ];
};

type CapitalizeNestObjectKeysRes = CapitalizeNestObjectKeys<foo>; // Foo
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/CapitalizeNestObjectKeys.ts" data-language="typescript"></div>
