| 标题                                | 标签                     |
| ----------------------------------- | ------------------------ |
| FindAll(查找所有符合条件的数组元素) | extends,infer(继承,推断) |

查找所有符合条件的数组元素，返回满足条件索引值数组。

- 创建一个 NormalFindAll 类型，创建第三个参数是一个任意数组 P，主要用于统计索引值位置，填充数字 0 并根据长度来确定索引值，创建第四个参数 R 是一个 number 类型的数组，存储最终的索引值结果。
- 首先使用 infer 推断第一个字符串参数 T,如果满足非空字符串，则判断第一个字符串是否和第二个字符串组成的模板字符串相同，如果符合条件，则往 P 中添加统计数字，并为 R 中添加索引值存储结果，此时是符合条件的，因此递归的数组 R 值应该是展开 R 和数组 P 的长度组合而成的数组，也就是说此时已经统计好了索引值，然后递归。
- 如果第二个参数不满足条件，则直接递归,注意此时 P 还是要继续添加数字的，相当于统计每个字符所在的索引值。
- 都不满足，则直接返回 R。

代码如下:

```ts
type NormalFindAll<
  T extends string,
  U extends string,
  P extends number[] = [],
  R extends number[] = []
> = T extends `${string}${infer L}`
  ? T extends `${U}${string}`
    ? NormalFindAll<L, U, [...P, 0], [...R, P['length']]>
    : NormalFindAll<L, U, [...P, 0], R>
  : R;
```

- 判断第一个参数 T 是否是空字符串，如果是则返回空数组，否则再判断第二个参数是否也为空字符串，如果为空则同样返回空数组，否则返回 NormalFindAll 类型结果。

> 代码如下:

```ts
type FindAll<T extends string, U extends string> = T extends ''
  ? []
  : U extends ''
  ? []
  : NormalFindAll<T, U>;
```

> 使用方式:

```ts
type FindAllRes1 = FindAll<'Collection of TypeScript type challenges', 'Type'>; //  [14]
type FindAllRes2 = FindAll<'Collection of TypeScript type challenges', 'pe'>; //  [16, 27]
type FindAllRes3 = FindAll<'Collection of TypeScript type challenges', ''>; //  []
type FindAllRes4 = FindAll<'', 'Type'>; //  []
type FindAllRes5 = FindAll<'', ''>; //  []
type FindAllRes6 = FindAll<'AAAA', 'A'>; //  [0, 1, 2, 3]
type FindAllRes7 = FindAll<'AAAA', 'AA'>; //  [0, 1, 2]
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/FindAll.ts" data-language="typescript"></div>
