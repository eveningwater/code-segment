| 标题                                            | 标签                     |
| ----------------------------------------------- | ------------------------ |
| OptionalUndefined(含有未定义的属性变成可选属性) | extends,infer(继承,推断) |

含有未定义的属性变成可选属性。

- 创建一个 Merge 类型，用于将合并后的两个接口转换成一个接口，代码如下所示:

```ts
type Merge<T> = {
  [K in keyof T]: T[K];
};
```

- 构建第三个参数,如果是第一个参数 T 的属性，并且等于 undefined，则返回该属性，否则返回 never。将该属性以及其属性值转成可选，并使用 Exclude 类型将参数 T 中含有该属性的排除掉，两者取并集，然后在使用 Merge 类型转换。

> 代码如下:

```ts
type OptionalUndefined<
  T,
  Props extends keyof T = keyof T,
  OptionsProps extends keyof T = Props extends keyof T
    ? undefined extends T[Props]
      ? Props
      : never
    : never
> = Merge<
  {
    [K in OptionsProps]?: T[K];
  } & {
    [K in Exclude<keyof T, OptionsProps>]: T[K];
  }
>;
```

> 使用方式:

```ts
type OptionalUndefinedRes1 = OptionalUndefined<
  { value: string | undefined },
  'value'
>; //  { value?: string | undefined }
type OptionalUndefinedRes2 = OptionalUndefined<
  { value: string; desc: string },
  'value'
>; //  { value: string; desc: string }
type OptionalUndefinedRes3 = OptionalUndefined<
  { value: string | undefined; desc: string },
  'value'
>; //  { value?: string | undefined; desc: string }
type OptionalUndefinedRes4 = OptionalUndefined<
  { value: string | undefined; desc: string | undefined },
  'value'
>; //  { value?: string | undefined; desc: string | undefined }
type OptionalUndefinedRes5 = OptionalUndefined<
  { value: string | undefined; desc: string },
  'value' | 'desc'
>; //  { value?: string | undefined; desc: string }
type OptionalUndefinedRes6 = OptionalUndefined<{
  value: string | undefined;
  desc: string | undefined;
}>; //  { value?: string | undefined; desc?: string | undefined }
type OptionalUndefinedRes7 = OptionalUndefined<{ value?: string }, 'value'>; //  { value?: string }
type OptionalUndefinedRes8 = OptionalUndefined<{ value?: string }>; //  { value?: string | undefined }
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/OptionalUndefined.ts" data-language="typescript"></div>
