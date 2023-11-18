type InferComputed<T extends Record<string, any>> = {
    [K in keyof T]: ReturnType<T[K]>;
};

type Prop<T = any> = PropType<T> | { type?: PropType<T> };
type PropType<T> = PropConstructor<T> | PropConstructor<T>[];

type PropConstructor<T extends any> =
    | { new(...args: any[]): T & object }
    | { (): T };

type InferPropType<P> = P extends Prop<infer T>
    ? unknown extends T
    ? any
    : T
    : any;

type InferProps<T extends Record<string, any>> = {
    [K in keyof T]: InferPropType<T[K]>;
};
declare function VueBasicProps<
    P extends Record<string, any>,
    D,
    C extends Record<string, any>,
    M,
    Props = InferProps<P>
>(options: {
    props: P;
    data(this: Props): D;
    computed: C & ThisType<D & M & Props & InferComputed<C>>;
    methods: M & ThisType<D & M & Props & InferComputed<C>>;
}): Props & D & InferComputed<C> & M;

class ClassA { }
export type Debug<T> = { [K in keyof T]: T[K] }
VueBasicProps({
    props: {
        propA: {},
        propB: { type: String },
        propC: { type: Boolean },
        propD: { type: ClassA },
        propE: { type: [String, Number] },
        propF: RegExp,
    },
    data(this) {
        type PropsType = Debug<typeof this>
        type PropsTypeRes1 = PropsType['propA'] // any
        type PropsTypeRes2 = PropsType['propB'] //  string
        type PropsTypeRes3 = PropsType['propC'] //  boolean
        type PropsTypeRes4 = PropsType['propD'] //  ClassA
        type PropsTypeRes5 = PropsType['propE'] //  string | number
        type PropsTypeRes6 = PropsType['propF'] //  RegExp

        // @ts-expect-error
        this.firstName
        // @ts-expect-error
        this.getRandom()
        // @ts-expect-error
        this.data()

        return {
            firstName: 'Type',
            lastName: 'Challenges',
            amount: 10,
        }
    },
    computed: {
        fullName() {
            return `${this.firstName} ${this.lastName}`
        },
    },
    methods: {
        getRandom() {
            return Math.random()
        },
        hi() {
            alert(this.fullName.toLowerCase())
            alert(this.getRandom())
        },
        test() {
            const fullName = this.fullName
            const propE = this.propE
            type PropFullName = typeof fullName //  string
            type PropE = typeof propE //  string | number
        },
    },
})