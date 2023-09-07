| 标题                          | 标签          |
| ----------------------------- | ------------- |
| PartialByKeys(匹配字符串结束) | extends(继承) |

匹配字符串结束。

- 创建一个 IntersectionToObj 类型用于将联合接口类型转换成接口,该类型就是重新读取接口 T 的属性，并重新赋属性值。（如: {a: number} & {b: string} -> {a: number, b: string}）。
- 将接口 T 的所有类型变成可选，与使用 Exclude 排除掉属于 U 的属性组合成的接口进行联合，最后使用 IntersectionToObj 将联合类型转成接口。

> 代码如下:

```ts
type IntersectionToObj<T> = {
  [K in keyof T]: T[K];
};
type PartialByKeys<T, U> = IntersectionToObj<
  {
    [P in keyof T]?: T[P];
  } & { [K in Exclude<keyof T, U>]: T[K] }
>;
```

> 使用方式:

```ts
interface PartialByKeysUser {
  name: string;
  age: number;
  address: string;
}

type PartialByKeysUserPartialName = PartialByKeys<PartialByKeysUser, 'name'>; // { name?:string; age:number; address:string }
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/PartialByKeys.ts" data-language="typescript"></div>
