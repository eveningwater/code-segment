| 标题                                  | 标签                     |
| ------------------------------------- | ------------------------ |
| ParseQueryString(解析 url 参数字符串) | extends,infer(继承,推断) |

解析 url 参数字符串。

- 创建一个 SplitParams 类型，该类型传入一个字符串参数，返回将字符串依据&符号分割出来的字符串数组。使用 infer 从第一个字符开始推断，如果字符后跟&符号，并且包含剩余字符，则递归剩余字符，并把字符添加到数组中，否则返回由原始字符串组成的数组，代码如下所示:

```ts
type SplitParams<S extends string> = S extends `${infer E}&${infer R}`
  ? [E, ...SplitParams<R>]
  : [S];
```

- 实现一个 SetProperty 类型，该类型接收三个参数，第一个参数为对象类型，第二个参数为属性名，继承 PropertyKey 类型，第三个参数为属性值，默认是 true。该类型返回一个对象，属性名则是 keyof T(第一个对象参数)与第二个参数的联合类型，属性值稍微复杂一点，首先判断属性名等于第二个参数并且是第一个参数对象的属性，并且根据该属性从第一个参数对象中找到的属性值等于第三个参数，则返回该属性值。如果属性值是任意数组，并且第三个参数也在该数组中，则返回该属性值，否则返回一个数组，将第三个参数和取得的对象中的属性值合并到一起，注意属性值需要展开，因为是一个数组，否则返回不展开的数组，否则返回第三个参数，否则如果属性名属于对象的属性名，则返回对应的属性值，否则返回 never。代码如下所示:

```ts
type SetProperty<T, K extends PropertyKey, V extends any = true> = {
  [P in keyof T | K]: P extends K
    ? P extends keyof T
      ? T[P] extends V
        ? T[P]
        : T[P] extends any[]
        ? V extends T[P][number]
          ? T[P]
          : [...T[P], V]
        : [T[P], V]
      : V
    : P extends keyof T
    ? T[P]
    : never;
};
```

- 实现一个 MergeParams 类型，该类型支持传入一个字符串数组和一个对象类型，默认是空对象，主要用于将分割后的字符串数组转换成对应的对象。使用 infer 推断第一个参数数组的每一个元素，并从第一个元素开始推断，如果元素属于由`属性名=属性值`构成的字符串，则递归的合并剩余元素，第二个参数将变成 SetProperty 类型，需要注意会传入三个参数，即第二个参数，使用 infer 推断出来的属性名和属性值。如果元素只推断出一个属性名，则递归合并剩余元素同样是 SetProperty 类型，只是不传第三个参数，否则返回 never，否则返回第二个参数。代码如下所示:

```ts
type MergeParams<T extends string[], M = {}> = T extends [
  infer E,
  ...infer R extends string[]
]
  ? E extends `${infer K}=${infer V}`
    ? MergeParams<R, SetProperty<M, K, V>>
    : E extends `${infer K}`
    ? MergeParams<R, SetProperty<M, K>>
    : never
  : M;
```

- 判断字符串是否是空字符串，如果是则返回空对象，否则使用 MergeParams 类型合并使用 SplitParams 类型分割而成的字符串数组。

> 代码如下:

```ts
type ParseQueryString<S extends string> = S extends ''
  ? {}
  : MergeParams<SplitParams<S>>;
```

> 使用方式:

```ts
type ParseQueryStringRes1 = ParseQueryString<''>; //  {}
type ParseQueryStringRes2 = ParseQueryString<'k1'>; //  { k1: true }
type ParseQueryStringRes3 = ParseQueryString<'k1&k1'>; //  { k1: true }
type ParseQueryStringRes4 = ParseQueryString<'k1&k2'>; //  { k1: true; k2: true }
type ParseQueryStringRes5 = ParseQueryString<'k1=v1'>; //  { k1: 'v1' }
type ParseQueryStringRes6 = ParseQueryString<'k1=v1&k1=v2'>; //  { k1: ['v1', 'v2'] }
type ParseQueryStringRes7 = ParseQueryString<'k1=v1&k2=v2'>; //  { k1: 'v1'; k2: 'v2' }
type ParseQueryStringRes8 = ParseQueryString<'k1=v1&k2=v2&k1=v2'>; //  { k1: ['v1', 'v2']; k2: 'v2' }
type ParseQueryStringRes9 = ParseQueryString<'k1=v1&k2'>; //  { k1: 'v1'; k2: true }
type ParseQueryStringRes10 = ParseQueryString<'k1=v1&k1=v1'>; //  { k1: 'v1' }
type ParseQueryStringRes11 = ParseQueryString<'k1=v1&k1=v2&k1=v1'>; //  { k1: ['v1', 'v2'] }
type ParseQueryStringRes12 = ParseQueryString<'k1=v1&k2=v1&k1=v2&k1=v1'>; //  { k1: ['v1', 'v2']; k2: 'v1' }
type ParseQueryStringRes13 = ParseQueryString<'k1=v1&k2=v2&k1=v2&k1=v3'>; //  { k1: ['v1', 'v2', 'v3']; k2: 'v2' }
type ParseQueryStringRes14 = ParseQueryString<'k1=v1&k1'>; //  { k1: ['v1', true] }
type ParseQueryStringRes15 = ParseQueryString<'k1&k1=v1'>; //  { k1: [true, 'v1'] }
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/ParseQueryString.ts" data-language="typescript"></div>
