| 标题                              | 标签                                  |
| --------------------------------- | ------------------------------------- |
| BEM(块元素格式化上下文字符串生成) | array,object,string(数组,对象,字符串) |

块元素格式化上下文字符串生成。

- 创建一个类型，用于判断是否是 never 类型，该类型实现可参考[IsNever](codes/typescript/IsNever.md)。
- 创建一个类型用于判断是否是联合类型，是则返回空字符串，否则返回原始类型参数。
- 构建一个模板字符串，通过读取数组和对象的方式来组合成这个模板字符串。

> 代码如下:

```ts
type IsNever<T> = [T] extends [never] ? true : false;
type IsUnion<U> = IsNever<U> extends true ? '' : U;
type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${IsUnion<`__${E[number]}`>}${IsUnion<`--${M[number]}`>}`;
```

> 使用方式:

```ts
type bem1 = BEM<'btn', ['price'], []>; // 'btn__price'
type bem2 = BEM<'btn', ['price'], ['warning', 'success']>; // 'btn__price--warning' | 'btn__price--success'
type bem3 = BEM<'btn', [], ['small', 'medium', 'large']>; // 'btn--small' | 'btn--medium' | 'btn--large'
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/BEM.ts" data-language="typescript"></div>
