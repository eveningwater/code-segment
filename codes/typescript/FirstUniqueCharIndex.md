| 标题                                                 | 标签                         |
| ---------------------------------------------------- | ---------------------------- |
| FirstUniqueCharIndex(找到字符串中第一个不重复的字符) | extends,string(继承，字符串) |

找到字符串中第一个不重复的字符。

- 使用一个字符串数组用于存储字符串中每一个字符，并且可以通过 length 属性来取得索引值。
- 如果参数 T 为空字符串，则返回-1。
- 如果 T 为使用 infer 推断由第一个字符和剩余字符组成的模板字符串，并且第一个字符和字符串数组中的字符相同，则将第一个字符添加到数组中，原字符串数组中的字符也要保留。
- 如果剩余字符刚好和首个字符组成的模板字符串相同，则同样的递归添加第一个字符，否则返回存储的字符串数组的长度。
- 都不满足则返回 never。

> 代码如下:

```ts
type FirstUniqueCharIndex<
  T extends string,
  U extends string[] = []
> = T extends ''
  ? -1
  : T extends `${infer F}${infer R}`
  ? F extends U[number]
    ? FirstUniqueCharIndex<R, [...U, F]>
    : R extends `${string}${F}${string}`
    ? FirstUniqueCharIndex<R, [...U, F]>
    : U['length']
  : never;
```

> 使用方式:

```ts
type FirstUniqueCharIndexRes1 = FirstUniqueCharIndex<'leetcode'>; // 0
type FirstUniqueCharIndexRes2 = FirstUniqueCharIndex<'loveleetcode'>; // 2
type FirstUniqueCharIndexRes3 = FirstUniqueCharIndex<'aabb'>; // -1
type FirstUniqueCharIndexRes4 = FirstUniqueCharIndex<''>; // -1
type FirstUniqueCharIndexRes5 = FirstUniqueCharIndex<'aaa'>; // -1
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/FirstUniqueCharIndex.ts" data-language="typescript"></div>
