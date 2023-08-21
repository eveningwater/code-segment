| 标题                         | 标签                                  |
| ---------------------------- | ------------------------------------- |
| AppendToObject(接口添加属性) | extends,interface,key(继承,接口,属性) |

接口添加属性。

- 定义属性类型，属于 T 或者 U，也就是泛型 AppendToObject 的前两个参数，第二个参数可以使用 keyof any，判断如果继承的属性在第一个参数(T)中存在,则取值 T[k],否则取值第三个参数 V。

> 代码如下:

```ts
type AppendToObject<T, U extends keyof any, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V;
};
```

> 使用方式:

```ts
type AppendToObjectTest = { id: '1' };
type AppendToObjectResult = AppendToObject<AppendToObjectTest, 'value', 4>; // expected to be { id: '1', value: 4 }
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/AppendToObject.ts" data-language="typescript"></div>
