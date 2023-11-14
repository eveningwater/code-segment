| 标题                                | 标签                     |
| ----------------------------------- | ------------------------ |
| CamelCase(下划线字符串转成驼峰写法) | extends,infer(继承,推断) |

下划线字符串转成驼峰写法。

- 创建一个类型用于判断是否是间隔字符，只需要将其转换成大写和小写是否相等即可，代码如下所示:

```ts
type IsGap<T extends string> = Uppercase<T> extends Lowercase<T> ? true : false;
```

> Uppercase 和 Lowercase 为 ts 内置类型。

- 如果整体字符串和转换成小写后一样，则继续判断，否则递归的转换成小写。代码如下所示:

```ts
type CamelCase<S extends string> = S extends Lowercase<S>
  ? any
  : CamelCase<Lowercase<S>>;
```

- 如果字符串与开始字符加下划线加中间字符加右边字符组成的模板字符串，则继续判断，否则返回原字符串。代码如下所示:

```ts
type CamelCase<S extends string> = S extends Lowercase<S>
  ? S extends `${infer L}_${infer M}${infer R}`
    ? any
    : S
  : CamelCase<Lowercase<S>>;
```

- 如果中间字符是下划线，则返回以开始字符加下划线加下划线与剩余字符递归组成的模板字符串，否则返回另一个模板字符串。代码如下所示:

```ts
type CamelCase<S extends string> = S extends Lowercase<S>
  ? S extends `${infer L}_${infer M}${infer R}`
    ? M extends '_'
      ? `${L}_${CamelCase<`_${R}`>}`
      : any
    : S
  : CamelCase<Lowercase<S>>;
```

- 该模板字符串由开始字符，中间字符则需要判断是否是间隔字符，如果是间隔字符，则返回下划线和该字符组成的模板字符串，否则返回大写的中间字符,与递归剩余字符组成的模板字符串。

> 代码如下:

```ts
type CamelCase<S extends string> = S extends Lowercase<S>
  ? S extends `${infer L}_${infer M}${infer R}`
    ? M extends '_'
      ? `${L}_${CamelCase<`_${R}`>}`
      : `${L}${IsGap<M> extends true ? `_${M}` : Uppercase<M>}${CamelCase<R>}`
    : S
  : CamelCase<Lowercase<S>>;
```

> 使用方式:

```ts
type CamelCaseRes1 = CamelCase<'foobar'>; //  'foobar'
type CamelCaseRes2 = CamelCase<'FOOBAR'>; //  'foobar'
type CamelCaseRes3 = CamelCase<'foo_bar'>; //  'fooBar'
type CamelCaseRes4 = CamelCase<'foo__bar'>; //  'foo_Bar'
type CamelCaseRes5 = CamelCase<'foo_$bar'>; //  'foo_$bar'
type CamelCaseRes6 = CamelCase<'foo_bar_'>; //  'fooBar_'
type CamelCaseRes7 = CamelCase<'foo_bar__'>; //  'fooBar__'
type CamelCaseRes8 = CamelCase<'foo_bar_$'>; //  'fooBar_$'
type CamelCaseRes9 = CamelCase<'foo_bar_hello_world'>; //  'fooBarHelloWorld'
type CamelCaseRes10 = CamelCase<'HELLO_WORLD_WITH_TYPES'>; //  'helloWorldWithTypes'
type CamelCaseRes11 = CamelCase<'-'>; //  '-'
type CamelCaseRes12 = CamelCase<''>; //  ''
type CamelCaseRes13 = CamelCase<'😎'>; //  '😎'
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/CamelCase.ts" data-language="typescript"></div>
