| 标题                          | 标签                      |
| ----------------------------- | ------------------------- |
| ObjectEntries(对象键值对数组) | object, array(对象, 数组) |

对象键值对数组。

- 接口可能会包含可选属性，因此需要添加`-?`排除掉可选属性 K，同样的接口属性值`T[K]`也有可能是 undefined 的情况，因此也需要排除，排除的方式就是使用 [Exclude](codes/typescript/Exclude.md) 类型来排除掉，具体就是将属性值包装成数组，看是否继承`[undefined]`，如果是继承，则说明属性值本身就是 undefined，因此直接返回，否则就使用`Exclude<T[K],undefined>`来排除。
- 将数组 A 转成联合类型的方式就是`A['number']`,而对象 O 则是`O[keyof O]`,此时我们可以先将接口修改成属性名不变，属性值是一个由属性和属性值组成的数组，然后再使用对象转换成联合类型的方式进行转换即可。

> 代码如下:

```ts
type ObjectEntries<T> = {
  [K in keyof T]-?: [
    K,
    [T[K]] extends [undefined] ? T[K] : Exclude<T[K], undefined>
  ];
}[keyof T];
```

> 使用方式:

```ts
interface ObjectEntriesModel {
  name: string;
  age: number;
  locations: string[] | null;
}
type modelEntries = ObjectEntries<ObjectEntriesModel>; // ['name', string] | ['age', number] | ['locations', string[] | null];
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/ObjectEntries.ts" data-language="typescript"></div>
