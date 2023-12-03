| 标题                              | 标签          |
| --------------------------------- | ------------- |
| ClassPublicKeys(提取公共的类属性) | extends(继承) |

提取公共的类属性。

- 构建第二个参数，使用 keyof 关键字提取第一个参数的属性，同时也是默认第二个参数值，判断如果第二个参数是第一个参数类的属性，则返回该属性，否则返回 never。

> 代码如下:

```ts
type ClassPublicKeys<T, P = keyof T> = P extends keyof T ? P : never;
```

> 使用方式:

```ts
class A {
  public str: string;
  protected num: number;
  private bool: boolean;
  constructor() {
    this.str = 'naive';
    this.num = 19260917;
    this.bool = true;
  }

  getNum() {
    return Math.random();
  }
}

type ClassPublicKeysRes = ClassPublicKeys<A>; //  'str' | 'getNum'
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/ClassPublicKeys.ts" data-language="typescript"></div>
