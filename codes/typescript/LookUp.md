| 标题                         | 标签          |
| ---------------------------- | ------------- |
| LookUp(根据属性查找接口类型) | extends(继承) |

根据属性查找接口类型。

- T 继承{type: U },则返回 T，否则返回 never。

> 代码如下:

```ts
type LookUp<T, U> = T extends { type: U } ? T : never;
```

> 使用方式:

```ts
interface LookUpCat {
  type: 'cat';
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
}

interface LookUpDog {
  type: 'dog';
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
  color: 'brown' | 'white' | 'black';
}

type MyLookUpDog = LookUp<LookUpCat | LookUpDog, 'dog'>; // `LookUpDog`
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/LookUp.ts" data-language="typescript"></div>
