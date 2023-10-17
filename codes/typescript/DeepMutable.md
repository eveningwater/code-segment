| 标题                              | 标签                                          |
| --------------------------------- | --------------------------------------------- |
| DeepMutable(对象类型深度去除只读) | readonly,extends,recursively(只读,继承，递归) |

对象类型深度去除只读。

- 使用 keyof 提取类型 T 的属性，如果属性继承 never，则直接返回 T。
- 使用-操作符来让 T 的属性非只读，并递归 T 属性里面的对象。

> 代码如下:

```ts
type DeepMutable<T> = keyof T extends never
  ? T
  : {
      -readonly [P in keyof T]: DeepMutable<T[P]>;
    };
```

> 使用方式:

```ts
interface Test1 {
  readonly title: string;
  readonly description: string;
  readonly completed: boolean;
  readonly meta: {
    readonly author: string;
  };
}
type Test2 = {
  readonly a: () => 1;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: 's';
        };
        readonly k: 'hello';
      };
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey'];
        }
      ];
    };
  };
};
interface DeepMutableTest1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type DeepMutableTest2 = {
  a: () => 1;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: 's';
        };
        k: 'hello';
      };
      l: [
        'hi',
        {
          m: ['hey'];
        }
      ];
    };
  };
};

type DeepMutableRes1 = DeepMutable<Test1>; // DeepMutableTest1
type DeepMutableRes2 = DeepMutable<Test2>; // DeepMutableTest2
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/DeepMutable.ts" data-language="typescript"></div>
