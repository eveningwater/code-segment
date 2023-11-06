| 标题                 | 标签                     |
| -------------------- | ------------------------ |
| eVue(简单版本的 vue) | extends,infer(继承,推断) |

简单版本的 vue。

- 创建一个 GetComputed 类型，该类型接收一个参数 TComputed,定义好属性以及使用函数和 infer 推断计算属性的返回值。代码如下:

```ts
type GetComputed<TComputed> = {
  [K in keyof TComputed]: TComputed[K] extends () => infer R ? R : never;
};
```

- 创建一个属性类型 Options,该类型接收 3 个泛型参数，分别代表数据，计算属性以及方法的类型。data 返回一个函数，计算属性计算属性类型与 data 的联合类型，方法类型返回方法类型和数据类型，计算属性类型以及方法类型的联合类型。代码如下:

```ts
type Options<TData, TComputed, TMethods> = {
  data: (this: void) => TData;
  computed: TComputed & ThisType<TData>;
  methods: TMethods & ThisType<TData & GetComputed<TComputed> & TMethods>;
};
```

- 定义 vue 函数的类型，返回一个 unknown，接受 3 个泛型参数类型。

> 代码如下:

```ts
declare function SimpleVue<TData, TComputed, TMethods>(
  options: Options<TData, TComputed, TMethods>
): TData & TComputed & TMethods;
```

> 使用方式:

```ts
SimpleVue({
  data() {
    // @ts-expect-error
    this.firstName;
    // @ts-expect-error
    this.getRandom();
    // @ts-expect-error
    this.data();

    return {
      firstName: 'Type',
      lastName: 'Challenges',
      amount: 10
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  },
  methods: {
    getRandom() {
      return Math.random();
    },
    hi() {
      alert(this.amount);
      alert(this.fullName.toLowerCase());
      alert(this.getRandom());
    },
    test() {
      const fullName = this.fullName;
      const cases: [typeof fullName, string] = [] as any;
    }
  }
});
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/SimpleVue.ts" data-language="typescript"></div>
