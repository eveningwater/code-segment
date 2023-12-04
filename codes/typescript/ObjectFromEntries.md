| 标题                                        | 标签                     |
| ------------------------------------------- | ------------------------ |
| ObjectFromEntries(读取属性属性值数组转接口) | extends,infer(继承,推断) |

读取属性属性值数组转接口。

- 类型参数应该是由属性和属性值组成的一维数组，使用 in 操作符读取属性，并判断传入类型是否与属性和任意值组成的一维数组相等，是就返回属性值，否则返回 never。

> 代码如下:

```ts
type ObjectFromEntries<T extends [string, any]> = {
  [K in T[0]]: T extends [K, any] ? T[1] : never;
};
```

> 使用方式:

```ts
interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}
type ModelEntries =
  | ['name', string]
  | ['age', number]
  | ['locations', string[] | null];
type ObjectFromEntriesRes = ObjectFromEntries<ModelEntries>; // Model
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/ObjectFromEntries.ts" data-language="typescript"></div>
