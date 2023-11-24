| 标题                               | 标签          |
| ---------------------------------- | ------------- |
| DeepObjectToUniq(深度对象的唯一性) | extends(继承) |

深度对象的唯一性。

- 将对象与 unique 作为属性名，类型应该是符号，属性值为对象与对象属性取并集，如果对象属性还是对象，则递归与 unique 属性，类型符号，属性值为每一层对象组成的数组取并集。

> 代码如下:

```ts
type DeepObjectToUniq<O extends object> = {
  [k in keyof O]: O[k] extends object
    ? DeepObjectToUniq<O[k]> & { [unique: symbol]: [O, k] }
    : O[k];
} & { [unique: symbol]: O };
```

> 使用方式:

```ts
type Quz = { quz: 4 };

type Foo = { foo: 2; baz: Quz; bar: Quz };
type Bar = { foo: 2; baz: Quz; bar: Quz & { quzz?: 0 } };

type UniqQuz = DeepObjectToUniq<Quz>;
type UniqFoo = DeepObjectToUniq<Foo>;
type UniqBar = DeepObjectToUniq<Bar>;

declare let foo: Foo;
declare let uniqFoo: UniqFoo;

uniqFoo = foo;
foo = uniqFoo;

//  参见util-types/index.d.ts的实现
IsFalse<Equal<UniqQuz, Quz>>;
IsFalse<Equal<UniqFoo, Foo>>;
IsTrue<Equal<UniqFoo['foo'], Foo['foo']>>;
IsTrue<Equal<UniqFoo['bar']['quz'], Foo['bar']['quz']>>;
IsFalse<Equal<UniqQuz, UniqFoo['baz']>>;
IsFalse<Equal<UniqFoo['bar'], UniqFoo['baz']>>;
IsFalse<Equal<UniqBar['baz'], UniqFoo['baz']>>;
IsTrue<Equal<keyof UniqBar['baz'], keyof UniqFoo['baz']>>;
IsTrue<Equal<keyof Foo, keyof UniqFoo & string>>;
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/DeepObjectToUniq.ts" data-language="typescript"></div>
