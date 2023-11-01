| 标题                                                | 标签          |
| --------------------------------------------------- | ------------- |
| ExtractToObject(提取对象中存在属性的属性值作为接口) | extends(继承) |

提取对象中存在属性的属性值作为接口。

- 使用 Omit 类型剔除 T 中存在的属性 K，与`T[K]`合并。

> 代码如下:

```ts
type ExtractToObject<T, K extends keyof T> = Omit<Omit<T, K> & T[K], never>;
```

> 使用方式:

```ts
type test1 = { id: '1'; myProp: { foo: '2' } };

type testExpect1 = {
  id: '1';
  foo: '2';
};

type test2 = {
  id: '1';
  prop1: { zoo: '2' };
  prop2: { foo: '4' };
};

type testExpect2 = {
  id: '1';
  prop1: { zoo: '2' };
  foo: '4';
};

type test3 = {
  prop1: { zoo: '2'; a: 2; b: 4; c: 7 };
  prop2: { foo: '4'; v: 2; d: 4; g: 7 };
  k: 289;
};

type testExpect3 = {
  zoo: '2';
  a: 2;
  b: 4;
  c: 7;
  prop2: { foo: '4'; v: 2; d: 4; g: 7 };
  k: 289;
};

type test4 = { id: '1'; myProp: { foo: '2' } };

type testExpect4 = {
  id: '1';
  myProp: { foo: '2' };
};

type ExtractToObjectRes1 = ExtractToObject<test1, 'myProp'>; // testExpect1
type ExtractToObjectRes2 = ExtractToObject<test2, 'prop2'>; // testExpect2
type ExtractToObjectRes3 = ExtractToObject<test3, 'prop1'>; // testExpect3
// @ts-expect-error
type ExtractToObjectRes4 = ExtractToObject<test4, 'prop4'>; // testExpect4
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/ExtractToObject.ts" data-language="typescript"></div>
