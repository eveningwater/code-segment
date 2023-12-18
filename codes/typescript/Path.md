| 标题             | 标签                     |
| ---------------- | ------------------------ |
| Path(统计字符数) | extends,infer(继承,推断) |

统计字符数。

- 使用 keyof 获取对象属性，首先判断参数是否是一个接口对象，即 `Record<PropertyKey,unknown>`,然后构造成新的接口，属性值将变成一个属性数组，如果接口对象有嵌套，则递归。

> 代码如下:

```ts
type Path<T> = T extends Record<PropertyKey, unknown>
  ? {
      [P in keyof T]: [P, ...Path<T[P]>] | [P];
    }[keyof T]
  : never;
```

> 使用方式:

```ts
declare const example: {
  foo: {
    bar: {
      a: string;
    };
    baz: {
      b: number;
      c: number;
    };
  };
};
type PathRes1 = Path<(typeof example)['foo']['bar']>; // ['a']
type PathRes2 = Path<(typeof example)['foo']['baz']>; // ['b'] | ['c']
type PathRes3 = Path<(typeof example)['foo']>; // ['bar'] | ['baz'] | ['bar', 'a'] | ['baz', 'b'] | ['baz', 'c']
type PathRes4 = Path<(typeof example)['foo']['bar']>; // ['a']
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Path.ts" data-language="typescript"></div>
