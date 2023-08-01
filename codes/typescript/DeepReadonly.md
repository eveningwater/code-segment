| 标题                       | 标签                                          |
| -------------------------- | --------------------------------------------- |
| DeepReadonly(深度只读类型) | readonly,extends,recursively(只读,继承，递归) |

深度只读类型。

- 使用 keyof 提取类型 T 的属性，如果属性继承 never，则直接返回 T。
- 让 T 的属性只读，并递归 T 属性里面的对象。

> 代码如下:

```ts
type DeepReadonly<T> = keyof T extends never
  ? T
  : {
      readonly [P in keyof T]: DeepReadonly<T[P]>;
    };
```

> 使用方式:

```ts
type DeepReadonlyX = {
  x: {
    a: 1;
    b: 'hi';
  };
  y: 'hey';
};

type DeepReadonlyExpected = {
  readonly x: {
    readonly a: 1;
    readonly b: 'hi';
  };
  readonly y: 'hey';
};

type DeepReadonlyTodo = DeepReadonly<DeepReadonlyX>; // should be same as `DeepReadonlyExpected`
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/DeepReadonly.ts" data-language="typescript"></div>
