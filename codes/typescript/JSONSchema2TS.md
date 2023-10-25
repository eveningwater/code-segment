| 标题                               | 标签                     |
| ---------------------------------- | ------------------------ |
| JSONSchema2TS(json 数据转 ts 类型) | extends,infer(继承,推断) |

json 数据转 ts 类型。

- 创建一个原始接口映射类型 P,包含字符串，数值和布尔类型。代码如下:

```ts
type P = {
  string: string;
  number: number;
  boolean: boolean;
};
```

- 创建一个 H 类型，用于处理原始类型的情况，并且提供 2 个参数，第一个参数为 json 原始数据，第二个参数为索引值，默认取原始接口映射类型 P 的 key。判断是否存在 enum 属性，存在则返回读取 enum 属性的类型，否则返回对应的原始类型。代码如下:

```ts
type H<T, K extends keyof P> = T extends { enum: unknown[] }
  ? T['enum'][number]
  : P[K];
```

- 创建一个 O 类型，用于处理对象接口的情况，首先判断参数 T 存在 properties 属性，并使用 infer 断言该属性的值应该是一个对象。接着判断存在 required 属性，并使用 infer 断言该属性的值应该是一个字符串数组，从断言的字符串数组中取出字符串属性，递归的设置属性值为必选，然后使用 Exclude 排除不在断言字符串数组中的属性，递归的设置属性值为可选，并且将两者合并起来，然后使用 Omit 类型排除掉 never 作为属性的值。如果不满足存在 required 属性，则将全部属性递归的设置为可选，如果不存在 properties 属性，则返回对象类型即`Record<string,unknown>`。代码如下:

> ps: 注意这里递归不是递归 O，而是使用 JSONSchema2TS 类型递归。

```ts
type O<T> = T extends { properties: infer Prop extends Record<string, unknown> }
  ? T extends { required: infer R extends unknown[] }
    ? Omit<
        {
          [K in R[number] & keyof Prop]: JSONSchema2TS<Prop[K]>;
        } & {
          [K in Exclude<keyof Prop, R[number]>]?: JSONSchema2TS<Prop[K]>;
        },
        never
      >
    : {
        [K in keyof Prop]?: JSONSchema2TS<Prop[K]>;
      }
  : Record<string, unknown>;
```

- 创建一个 A 类型，用于处理数组的情况，使用 infer 断言存在 items 属性，则递归,否则返回`unknown []`。代码如下:

```ts
type A<T> = T extends { items: infer I } ? JSONSchema2TS<I>[] : unknown[];
```

- 类型 JSONSchema2TS 第一个参数为 T,使用 infer 断言存在 Type 属性，并判断 Type 是基础类型 P 的属性，则当做原始类型 H 来处理，如果 Type 是一个对象，则当做对象类型来处理，否则当做数组处理，否则返回 never。

> 代码如下:

```ts
type JSONSchema2TS<T> = T extends { Type: infer Type }
  ? Type extends keyof P
    ? H<T, Type>
    : Type extends 'object'
    ? O<T>
    : A<T>
  : never;
```

> 使用方式:

```ts
// + Primitive types
type JSONSchema2TSRes1 = JSONSchema2TS<{ type: 'string' }>; // string
type JSONSchema2TSRes2 = JSONSchema2TS<{ type: 'number' }>; // number
type JSONSchema2TSRes3 = JSONSchema2TS<{ type: 'boolean' }>; // boolean
// - Primitive types
// + Enums
type JSONSchema2TSRes4 = JSONSchema2TS<{
  type: 'string';
  enum: ['a', 'b', 'c'];
}>; // 'a' | 'b' | 'c'
type JSONSchema2TSRes5 = JSONSchema2TS<{ type: 'number'; enum: [1, 2, 3] }>; // 1 | 2 | 3
// - Enums
// + Object types
type JSONSchema2TSRes6 = JSONSchema2TS<{ type: 'object' }>; // Record<string, unknown>
type JSONSchema2TSRes7 = JSONSchema2TS<{ type: 'object'; properties: {} }>; // {}
type JSONSchema2TSRes8 = JSONSchema2TS<{
  type: 'object';
  properties: { a: { type: 'string' } };
}>;
// {
//    a?: string
// }
// - Object types
// + Arrays
type JSONSchema2TSRes9 = JSONSchema2TS<{ type: 'array' }>; // unknown[]
type JSONSchema2TSRes10 = JSONSchema2TS<{
  type: 'array';
  items: {
    type: 'string';
  };
}>; // string[]
type JSONSchema2TSRes11 = JSONSchema2TS<{
  type: 'array';
  items: {
    type: 'object';
  };
}>; // Record<string, unknown>[]
// - Arrays
// + Mixed types
type JSONSchema2TSRes12 = JSONSchema2TS<{
  type: 'object';
  properties: {
    a: {
      type: 'string';
      enum: ['a', 'b', 'c'];
    };
    b: {
      type: 'number';
    };
  };
}>;
// {
//     a?: 'a' | 'b' | 'c'
//     b?: number
// }
type JSONSchema2TSRes13 = JSONSchema2TS<{
  type: 'array';
  items: {
    type: 'object';
    properties: {
      a: {
        type: 'string';
      };
    };
  };
}>;
// {
//   a?: string
// }[]
// - Mixed types
// + Required fields
type JSONSchema2TSRes14 = JSONSchema2TS<{
  type: 'object';
  properties: {
    req1: { type: 'string' };
    req2: {
      type: 'object';
      properties: {
        a: {
          type: 'number';
        };
      };
      required: ['a'];
    };
    add1: { type: 'string' };
    add2: {
      type: 'array';
      items: {
        type: 'number';
      };
    };
  };
  required: ['req1', 'req2'];
}>;
// {
//     req1: string
//     req2: { a: number }
//     add1?: string
//     add2?: number[]
// }
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/JSONSchema2TS.ts" data-language="typescript"></div>
