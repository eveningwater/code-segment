| 标题                        | 标签                     |
| --------------------------- | ------------------------ |
| SnakeCase(下划线字符串转换) | extends,infer(继承,推断) |

下划线字符串转换。

- 使用 infer 关键字推断字符串参数 T 的每一个字符，如果字符(使用 Uppercase 类型转成大写字母比较)等于大写字符，则转成下划线，并递归剩余字符，否则就不转，但也需要递归剩余字符，否则返回空字符串。

> 代码如下:

```ts
type SnakeCase<T extends string> = T extends `${infer F}${infer R}`
  ? Uppercase<F> extends F
    ? `_${Lowercase<F>}${SnakeCase<R>}`
    : `${F}${SnakeCase<R>}`
  : '';
```

> 使用方式:

```ts
type SnakeCaseRes1 = SnakeCase<'hello'>; // 'hello'
type SnakeCaseRes2 = SnakeCase<'userName'>; // 'user_name'
type SnakeCaseRes3 = SnakeCase<'getElementById'>; // 'get_element_by_id'
type SnakeCaseRes4 = SnakeCase<'getElementById' | 'getElementByClassNames'>; // 'get_element_by_id' | 'get_element_by_class_names'
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/SnakeCase.ts" data-language="typescript"></div>
