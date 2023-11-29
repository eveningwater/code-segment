| 标题                     | 标签                     |
| ------------------------ | ------------------------ |
| Camelize(对象属性名转换) | extends,infer(继承,推断) |

对象属性名转换。

- 创建一个基础类型，代码如下:

```ts
type BaseTypes = number | boolean | symbol | bigint | Function;
```

- 实现一个 SnakeToCamel 类型，用于将下划线字符串转换成驼峰式字符串。该类型接收 2 个参数，第一个参数为要转换的字符串，第二个参数是一个布尔值，用于确定是否将字符串转换成驼峰式。使用 infer 推断字符串是否由下划线构成，然后根据第二个参数确定是否转成大写，第一个字符是不需要转换的，因此默认值就是 false，后面就是需要转换成大写，因此需要传入 true 的参数。代码如下所示:

```ts
type SnakeToCamel<
  S extends string,
  B extends boolean = false
> = S extends `${infer F}_${infer R}`
  ? `${B extends true ? Capitalize<F> : F}${SnakeToCamel<R, true>}`
  : B extends true
  ? Capitalize<S>
  : S;
```

- 实现 Camelize 类型，分别定义四种转换，然后根据传入的类型判断是进行哪种转换，分别由四种转换，如果是字符串，则直接将字符串参数和字符串类型取并集当做参数传入给 SnakeToCamel 类型，如果是基础类型，则直接返回本身，如果是数组，则需要使用 infer 推断每一个数组项，然后对每一个数组项执行转换，否则就返回空数组，默认就是对对象的属性进行转换，同时也要递归的执行转换，因为对象有可能是嵌套对象。最后根据传入的类型读取对应转换的属性值即可得到最终结果。

> 代码如下:

```ts
type Camelize<T> = {
  default: {
    [K in keyof T as Camelize<K>]: Camelize<T[K]>;
  };
  array: T extends [infer F, ...infer R] ? [Camelize<F>, ...Camelize<R>] : [];
  string: SnakeToCamel<T & string>;
  baseType: T;
}[T extends any[]
  ? 'array'
  : T extends BaseTypes
  ? 'baseType'
  : T extends string
  ? 'string'
  : /** default */
    'default'];
```

> 使用方式:

```ts
type CamelizeRes = Camelize<{
  some_prop: string;
  prop: { another_prop: string };
  array: [
    { snake_case: string },
    { another_element: { yet_another_prop: string } },
    { yet_another_element: string }
  ];
}>;
// {
//   someProp: string
//   prop: { anotherProp: string }
//   array: [
//     { snakeCase: string },
//     { anotherElement: { yetAnotherProp: string } },
//     { yetAnotherElement: string },
//   ]
// }
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Camelize.ts" data-language="typescript"></div>
