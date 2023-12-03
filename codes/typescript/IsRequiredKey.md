| 标题                          | 标签                     |
| ----------------------------- | ------------------------ |
| IsRequiredKey(是否是必选属性) | extends,infer(继承,推断) |

是否是必选属性。

- 使用 [Pick](codes/typescript/Pick.md) 类型根据属性提取属性值，如果与使用 Required 将提取的属性转成必选属性相同，则返回 true,否则返回 false。

> 代码如下:

```ts
type IsRequiredKey<T, U extends keyof T> = Pick<T, U> extends Required<
  Pick<T, U>
>
  ? true
  : false;
```

> 使用方式:

```ts
type IsRequiredKeyRes1 = IsRequiredKey<{ a: number; b?: string }, 'a'>; //  true
type IsRequiredKeyRes2 = IsRequiredKey<{ a: undefined; b: string }, 'a'>; //  true
type IsRequiredKeyRes3 = IsRequiredKey<{ a: number; b?: string }, 'b'>; //  false
type IsRequiredKeyRes4 = IsRequiredKey<{ a: number; b?: string }, 'b' | 'a'>; //  false
type IsRequiredKeyRes5 = IsRequiredKey<
  { a: undefined; b: undefined },
  'b' | 'a'
>; //  true
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/IsRequiredKey.ts" data-language="typescript"></div>
