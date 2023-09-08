| 标题                                 | 标签                   |
| ------------------------------------ | ---------------------- |
| RequiredByKeys(根据属性让接口不可选) | extends,key(继承,属性) |

根据属性让接口不可选。

- 类型接收 2 个参数，其中第二个参数 U 需要是第一个参数 T 的属性，即 keyof T，定义一个属性 K 属于 T 的属性并断言如果继承 U，则返回 never,否则返回属性 K,属性值为`T[K]`。
- 定义一个属性 K 属于 T 的属性并断言如果继承 U，则返回 K,否则返回属性 never,属性值为`T[K]`,并使用`-?`操作符移除可选属性。
- 将以上两个类型联合起来，并使用 infer 断言一个类型 I，又重新定义一下接口属性，属性取值 K，并继承于断言的类型 I,属性值则变成了`I[K]`（这一步的目的是将联合类型转换成接口）。

> 代码如下:

```ts
type RequiredByKeys<T, U extends keyof T> = {
  [K in keyof T as K extends U ? never : K]: T[K];
} & {
  [K in keyof T as K extends U ? K : never]-?: T[K];
} extends infer I
  ? {
      [K in keyof I]: I[K];
    }
  : never;
```

> 使用方式:

```ts
interface RequiredByKeysUser {
  name?: string;
  age?: number;
  address?: string;
}

type UserRequiredName = RequiredByKeys<RequiredByKeysUser, 'name'>; // { name: string; age?: number; address?: string }
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/RequiredByKeys.ts" data-language="typescript"></div>
