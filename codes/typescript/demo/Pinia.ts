type AnyObject = Record<string, unknown>;
type AnyFunction = (...args: any[]) => any;
type BaseGetters = Record<string, AnyFunction>;
type BaseActions = Record<string, AnyFunction>;

type ComputedGetters<G extends BaseGetters> = {
    readonly [K in keyof G]: G[K] extends AnyFunction ? ReturnType<G[K]> : never;
};

interface StoreOptions<State extends AnyObject, Getters extends BaseGetters, Actions extends BaseActions> {
    id: string;
    state: () => State,
    getters: Getters & ThisType<ComputedGetters<Getters> & Readonly<State>>,
    actions: Actions & ThisType<Actions & State & ComputedGetters<Getters>>
}

type Store<
    State extends AnyObject,
    Getters extends BaseGetters,
    Actions extends BaseActions
> = {
    init(): void;
    reset(): true;
} & Actions & State & ComputedGetters<Getters>;

declare function defineStore<
    State extends AnyObject,
    Getters extends BaseGetters,
    Actions extends BaseActions
>(store: StoreOptions<State, Getters, Actions>): Store<State, Getters, Actions>;

const store = defineStore({
    id: '',
    state: () => ({
        num: 0,
        str: '',
    }),
    getters: {
        stringifiedNum() {
            this.num += 1;
            return this.num.toString() as string;
        },
        parsedNum() {
            return parseInt(this.stringifiedNum)
        },
    },
    actions: {
        init() {
            this.reset()
            this.increment()
        },
        increment(step = 1) {
            this.num += step
        },
        reset() {
            this.num = 0
            this.parsedNum = 0

            return true
        },
        setNum(value: number) {
            this.num = value
        },
    },
})

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
