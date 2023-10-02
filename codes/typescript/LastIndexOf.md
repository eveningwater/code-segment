| 标题                                      | 标签                      |
| ----------------------------------------- | ------------------------- |
| LastIndexOf(从数组末尾项开始匹配数组元素) | extends,array(继承，数组) |

从数组末尾项开始匹配数组元素。

- 这个和[IndexOf](codes/typescript/IndexOf.md)的实现思路很像，只不过是从数组末尾开始匹配元素，如果匹配到则返回剩余项组成数组的长度就是匹配到的元素的索引值。
- 同样也是使用函数的返回值配合 infer 来推断是否匹配到的，匹配不到就继续递归，全部数组元素都匹配完了还匹配不到，则返回-1。

> 代码如下:

```ts
type LastIndexOf<T extends any[], S> = T extends [...infer R, infer T]
  ? (<V>() => V extends T ? 1 : 0) extends <V>() => V extends S ? 1 : 0
    ? R['length']
    : LastIndexOf<R, S>
  : -1;
```

> 使用方式:

```ts
type ResLastIndexOf1 = LastIndexOf<[1, 2, 3, 2, 1], 2>; // 3
type ResLastIndexOf2 = LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>; // 7
type ResLastIndexOf4 = LastIndexOf<[string, 2, number, 'a', number, 1], number>; // 4
type ResLastIndexOf5 = LastIndexOf<[string, any, 1, number, 'a', any, 1], any>; // 5
type ResLastIndexOf6 = LastIndexOf<[1, 2, 3, 2, 1], 2>; // 3
type ResLastIndexOf7 = LastIndexOf<[0, 0, 0], 2>; // -1
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/LastIndexOf.ts" data-language="typescript"></div>
