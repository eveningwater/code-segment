| 标题                                | 标签          |
| ----------------------------------- | ------------- |
| All(数组每个元素类型与给定类型比较) | extends(继承) |

数组每个元素类型与给定类型比较。

- 创建一个 IsEqual 类型，该类型接收 2 个参数，并使用函数的方式推断 2 个参数和函数的参数是否相等，相等返回 1，否则返回 2，然后比较两者是否相等，相等则返回 true，不相等返回 false。代码如下:

```ts
type IsEqual<T, U> = (<P>() => P extends T ? 1 : 2) extends <P>() => P extends U
  ? 1
  : 2
  ? true
  : false;
```

- 使用 infer 推断数组每一个元素，并递归的判断每个元素是否和给定元素相等，最终返回相应的布尔值。

> 代码如下:

```ts
type All<T, U> = T extends [infer F, ...infer R]
  ? IsEqual<F, U> extends true
    ? All<R, U>
    : false
  : true;
```

> 使用方式:

```ts
type AllRes1 = All<[1, 1, 1], 1>; //  true
type AllRes2 = All<[1, 1, 2], 1>; //  false
type AllRes3 = All<['1', '1', '1'], '1'>; //  true
type AllRes4 = All<['1', '1', '1'], 1>; //  false
type AllRes5 = All<[number, number, number], number>; // true
type AllRes6 = All<[number, number, string], number>; // false
type AllRes7 = All<[null, null, null], null>; //  true
type AllRes8 = All<[[1], [1], [1]], [1]>; //  true
type AllRes9 = All<[{}, {}, {}], {}>; //  true
type AllRes10 = All<[never], never>; //  true
type AllRes11 = All<[any], any>; //  true
type AllRes12 = All<[unknown], unknown>; //  true
type AllRes13 = All<[any], unknown>; //  false
type AllRes14 = All<[unknown], any>; //  false
type AllRes15 = All<[1, 1, 2], 1 | 2>; //  false
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/All.ts" data-language="typescript"></div>
