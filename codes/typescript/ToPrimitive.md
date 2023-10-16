| 标题                                | 标签                     |
| ----------------------------------- | ------------------------ |
| ToPrimitive(原始对象转换成接口类型) | extends,infer(继承,推断) |

原始对象转换成接口类型。

- 如果接口是对象，则递归的读取每一个属性，否则如果是函数，读取 valueOf 方法并使用 infer 关键字来推断函数返回值类型，否则返回参数本身。

> ps: 函数类型返回空对象。

> 代码如下:

```ts
type ToPrimitive<T> = T extends object
  ? {
      [K in keyof T]: ToPrimitive<T[K]>;
    }
  : T extends { valueOf: () => infer P }
  ? P
  : T;
```

> 使用方式:

```ts
type PersonInfo = {
  name: 'Tom';
  age: 30;
  married: false;
  addr: {
    home: '123456';
    phone: '13111111111';
  };
  hobbies: ['sing', 'dance'];
  readonlyArr: readonly ['test'];
  fn: () => any;
};

type ExpectedResult = {
  name: string;
  age: number;
  married: boolean;
  addr: {
    home: string;
    phone: string;
  };
  hobbies: [string, string];
  readonlyArr: readonly [string];
  fn: Function;
};

type ToPrimitiveRes = ToPrimitive<PersonInfo>; // ExpectedResult
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/ToPrimitive.ts" data-language="typescript"></div>
