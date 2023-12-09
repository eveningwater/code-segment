| 标题                             | 标签                     |
| -------------------------------- | ------------------------ |
| ObjectKeyPaths(对象属性生成路径) | extends,infer(继承,推断) |

对象属性生成路径。

- 创建一个 GenNode 类型，接受 2 个参数，第一个参数为字符串或者数值，代表属性，第二个参数是一个布尔值，代表是否是根属性,如果是跟属性，则返回根属性，否则返回点与根属性的拼接，如果属性是 number 类型，则返回中括号包裹的属性，否则返回 never。代码如下所示:

```ts
type GenNode<
  K extends string | number,
  IsRoot extends boolean
> = IsRoot extends true
  ? `${K}`
  : `.${K}` | (K extends number ? `[${K}]` | `.[${K}]` : never);
```

- 该类型接收 3 个参数，第一个参数是一个对象类型，第二个参数是一个布尔值，代表是否是根属性，默认值是 true，第三个参数为第一个参数对象的属性，判断第三个参数如果是字符串或者数值类型，则将第三个参数与第二个参数传给 GenNode 类型，如果对象还嵌套着对象，也就是属性值是对象，则继续调用 GenNode,并递归，此时就要传第二个参数为 false，因为此时不是根属性，否则返回 never，最后将两者取交集，即联合类型。

> 代码如下:

```ts
type ObjectKeyPaths<
  T extends object,
  IsRoot extends boolean = true,
  K extends keyof T = keyof T
> = K extends string | number
  ?
      | GenNode<K, IsRoot>
      | (T[K] extends object
          ? `${GenNode<K, IsRoot>}${ObjectKeyPaths<T[K], false>}`
          : never)
  : never;
```

> 使用方式:

```ts
export type ExpectExtends<VALUE, EXPECTED> = EXPECTED extends VALUE
  ? true
  : false;
export type IsTrue<T extends true> = T;
export type IsFalse<T extends false> = T;

export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? true
  : false;

export type Expect<T extends true> = T;
const ref = {
  count: 1,
  person: {
    name: 'cattchen',
    age: 22,
    books: ['book1', 'book2'],
    pets: [
      {
        type: 'cat'
      }
    ]
  }
};
type cases = [
  Expect<Equal<ObjectKeyPaths<{ name: string; age: number }>, 'name' | 'age'>>,
  Expect<
    Equal<
      ObjectKeyPaths<{
        refCount: number;
        person: { name: string; age: number };
      }>,
      'refCount' | 'person' | 'person.name' | 'person.age'
    >
  >,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, 'count'>>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, 'person'>>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, 'person.name'>>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, 'person.age'>>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, 'person.books'>>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, 'person.pets'>>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, 'person.books.0'>>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, 'person.books.1'>>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, 'person.books[0]'>>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, 'person.books.[0]'>>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, 'person.pets.0.type'>>,
  Expect<Equal<ExpectExtends<ObjectKeyPaths<typeof ref>, 'notExist'>, false>>,
  Expect<
    Equal<ExpectExtends<ObjectKeyPaths<typeof ref>, 'person.notExist'>, false>
  >,
  Expect<
    Equal<ExpectExtends<ObjectKeyPaths<typeof ref>, 'person.name.'>, false>
  >,
  Expect<
    Equal<ExpectExtends<ObjectKeyPaths<typeof ref>, '.person.name'>, false>
  >,
  Expect<
    Equal<
      ExpectExtends<ObjectKeyPaths<typeof ref>, 'person.pets.[0]type'>,
      false
    >
  >
]; // all is true
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/ObjectKeyPaths.ts" data-language="typescript"></div>
