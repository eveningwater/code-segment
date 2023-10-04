| 标题               | 标签                    |
| ------------------ | ----------------------- |
| MapTypes(类型映射) | extends,map(继承，映射) |

类型映射。

- 定义一个规则类型 MapRule，接受 2 个参数，第一个参数不限，第二个参数可以设定一个默认值 any，然后返回含 mapFrom 和 mapTo 属性的类型，如下所示:

```ts
type MapRule<T, U = any> = {
  mapFrom: T;
  mapTo: U;
};
```

- 原接口类型映射属性是不会变的，主要变动的是属性值，属性值如果和定义的规则 mapFrom 对应上，并且第二个参数也要和 mapFrom 一一对应，则返回第二个参数对应的属性值 mapTo 所赋予的类型，否则返回 never,两者都不是则返回原接口属性值。

> 代码如下:

```ts
type MapRule<T, U = any> = {
  mapFrom: T;
  mapTo: U;
};
type MapTypes<T, U extends MapRule<any>> = {
  [K in keyof T]: T[K] extends U['mapFrom']
    ? U extends MapRule<any>
      ? U['mapTo']
      : never
    : T[K];
};
```

> 使用方式:

```ts
type MapTypesRes1 = MapTypes<
  { stringToArray: string },
  { mapFrom: string; mapTo: [] }
>; // { stringToArray: [] }
type MapTypesRes2 = MapTypes<
  { stringToNumber: string },
  { mapFrom: string; mapTo: number }
>; // { stringToNumber: number }
type MapTypesRes3 = MapTypes<
  { stringToNumber: string; skipParsingMe: boolean },
  { mapFrom: string; mapTo: number }
>; // { stringToNumber: number; skipParsingMe: boolean }
type MapTypesRes4 = MapTypes<
  { date: string },
  { mapFrom: string; mapTo: Date } | { mapFrom: string; mapTo: null }
>; // { date: null | Date }
type MapTypesRes5 = MapTypes<
  { date: string },
  { mapFrom: string; mapTo: Date | null }
>; // { date: null | Date }
type MapTypesRes6 = MapTypes<
  { fields: Record<string, boolean> },
  { mapFrom: Record<string, boolean>; mapTo: string[] }
>; // { fields: string[] }
type MapTypesRes7 = MapTypes<
  { name: string },
  { mapFrom: boolean; mapTo: never }
>; // { name: string }
type MapTypesRes8 = MapTypes<
  { name: string; date: Date },
  { mapFrom: string; mapTo: boolean } | { mapFrom: Date; mapTo: string }
>; // { name: boolean; date: string }
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/MapTypes.ts" data-language="typescript"></div>
