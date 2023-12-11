| 标题                | 标签                     |
| ------------------- | ------------------------ |
| ValidDate(可用日期) | extends,infer(继承,推断) |

可用日期。

- 构建一个数值类型，代码如下所示:

```ts
type Num = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
```

- 构建一个月份字符串类型，每一个月份都排列出来，代码如下所示:

```ts
type MM = `0${Num}` | `1${0 | 1 | 2}`;
```

- 构建一个所有日期类型，2 月份比较特殊有 29 和 30，除了 02,04,06,09,11 月份之外的其它月份有 31 天，其余都是含有 30 天,相当于罗列出所有符合条件的日期数值字符串。代码如下所示:

```ts
type AllDate =
  | `${MM}${`${0}${Num}` | `${1}${0 | Num}` | `2${0 | Exclude<Num, 9>}`}`
  | `${Exclude<MM, '02'>}${29 | 30}`
  | `${Exclude<MM, '02' | '04' | '06' | '09' | '11'>}${31}`;
```

- 检查日期参数是否是所有罗列出来的日期，如果是返回 true，否则返回 false。

> 代码如下:

```ts
type ValidDate<T extends string> = T extends AllDate ? true : false;
```

> 使用方式:

```ts
type ValidDateRes1 = ValidDate<'0102'>; //  true
type ValidDateRes2 = ValidDate<'0131'>; //  true
type ValidDateRes3 = ValidDate<'1231'>; //  true
type ValidDateRes4 = ValidDate<'0229'>; //  false
type ValidDateRes5 = ValidDate<'0100'>; //  false
type ValidDateRes6 = ValidDate<'0132'>; //  false
type ValidDateRes7 = ValidDate<'1301'>; //  false
type ValidDateRes8 = ValidDate<'0123'>; //  true
type ValidDateRes9 = ValidDate<'01234'>; // false
type ValidDateRes10 = ValidDate<''>; // false
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/ValidDate.ts" data-language="typescript"></div>
