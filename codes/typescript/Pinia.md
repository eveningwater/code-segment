| 标题                    | 标签                     |
| ----------------------- | ------------------------ |
| Pinia(Vue 状态管理工具) | extends,infer(继承,推断) |

Vue 状态管理工具。

- 创建一个任意对象类型，代码如下:

```ts
type AnyObject = Record<string, unknown>;
```

- 创建一个任意函数类型，代码如下:

```ts
type AnyFunction = (...args: any[]) => any;
```

- 创建一个基础 Getters 类型和一个基础 Actions 类型，代码如下所示:

```ts
type BaseGetters = Record<string, AnyFunction>;
type BaseActions = Record<string, AnyFunction>;
```

- 创建一个 ComputeGetters 类型，接收一个泛型参数，继承基础 Getters 类型,返回一个接口，属性只读，属性值判断如果是函数，则返回函数的返回值类型，否则返回 never。代码如下所示:

```ts
type ComputedGetters<G extends BaseGetters> = {
  readonly [K in keyof G]: G[K] extends AnyFunction ? ReturnType<G[K]> : never;
};
```

- 创建一个 StoreOptions 类型，该类型将定义四个属性 id,state,getters,actions,id 类型就是 string，state 返回一个函数，getters 返回 Getters 与 this 的并集，action 返回 Actions 类型与 this 的并集，代码如下所示:

```ts
interface StoreOptions<
  State extends AnyObject,
  Getters extends BaseGetters,
  Actions extends BaseActions
> {
  id: string;
  state: () => State;
  getters: Getters & ThisType<ComputedGetters<Getters> & Readonly<State>>;
  actions: Actions & ThisType<Actions & State & ComputedGetters<Getters>>;
}
```

- 创建一个 Store 类型，接搜三个参数，返回值即三个参数的并集，注意 getters 类型 ComputedGetters 类型包裹一下，并定义 init 与 reset 函数的类型。代码如下所示:

```ts
type Store<
  State extends AnyObject,
  Getters extends BaseGetters,
  Actions extends BaseActions
> = {
  init(): void;
  reset(): true;
} & Actions &
  State &
  ComputedGetters<Getters>;
```

- 定义 defineStore 函数，接收三个泛型参数，分别为 state,getters 和 actions 类型，函数参数值刚好是 StoreOptions 包裹这三个泛型参数，返回 Store 包裹这三个泛型参数。

> 代码如下:

```ts
declare function defineStore<
  State extends AnyObject,
  Getters extends BaseGetters,
  Actions extends BaseActions
>(store: StoreOptions<State, Getters, Actions>): Store<State, Getters, Actions>;
```

> 使用方式:

```ts
const store = defineStore({
  id: '',
  state: () => ({
    num: 0,
    str: ''
  }),
  getters: {
    stringifiedNum() {
      this.num += 1;
      return this.num.toString() as string;
    },
    parsedNum() {
      return parseInt(this.stringifiedNum);
    }
  },
  actions: {
    init() {
      this.reset();
      this.increment();
    },
    increment(step = 1) {
      this.num += step;
    },
    reset() {
      this.num = 0;
      this.parsedNum = 0;

      return true;
    },
    setNum(value: number) {
      this.num = value;
    }
  }
});

// @ts-expect-error
store.nopeStateProp;
// @ts-expect-error
store.nopeGetter;

// @ts-expect-error
store.stringifiedNum();
store.init();

// @ts-expect-error
store.init(0);
store.increment();
store.increment(2);

// @ts-expect-error
store.setNum();

// @ts-expect-error
store.setNum('3');
store.setNum(3);
const r = store.reset();

type defineStoreRes1 = typeof store.num; // number
type defineStoreRes2 = typeof store.str; // string
type defineStoreRes3 = typeof store.stringifiedNum; // string
type defineStoreRes4 = typeof store.parsedNum; // number
type defineStoreRes5 = typeof r; // true
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Pinia.ts" data-language="typescript"></div>
